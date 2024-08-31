import { CONSTANTS } from './hijri_date.constants'

export default class HijriDate {
  constructor (year, month, day) {
    this.year = year
    this.month = month
    this.day = day
  }

  get getFullYear () {
    return this.year
  }

  get getMonth () {
    return this.month
  }

  get getDate () {
    return this.day
  }

  static getMonthName (month) {
    return CONSTANTS.MONTH_NAMES.long.en[month]
  }

  static getShortMonthName (month) {
    return CONSTANTS.MONTH_NAMES.short.en[month]
  }

  // is the specified Gregorian Date object a Julian date?
  static isJulian (date) {
    if (date.getFullYear() < 1582) {
      return true
    } else if (date.getFullYear() === 1582) {
      if (date.getMonth() < 9) {
        return true
      } else if (date.getMonth() === 9) {
        if (date.getDate() < 5) {
          return true
        }
      }
    }
    return false
  }

  // return Astronomical Julian Date corresponding to the specified Gregorian Date object
  static gregorianToAJD (date) {
    let a; let b
    let year = date.getFullYear()
    let month = date.getMonth() + 1

    const day = date.getDate() +
                    date.getHours() / 24 +
                    date.getMinutes() / 1440 +
                    date.getSeconds() / 86400 +
                    date.getMilliseconds() / 86400000

    if (month < 3) {
      year--
      month += 12
    }

    if (HijriDate.isJulian(date)) {
      b = 0
    } else {
      a = Math.floor(year / 100)
      b = 2 - a + Math.floor(a / 4)
    }

    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5
  };

  // return Gregorian Date object corresponding to the specified Astronomical Julian Date
  static ajdToGregorian (ajd) {
    const z = Math.floor(ajd + 0.5)
    const f = (ajd + 0.5 - z)

    let a
    if (z < 2299161) {
      a = z
    } else {
      const alpha = Math.floor((z - 1867216.25) / 36524.25)
      a = z + 1 + alpha - Math.floor(0.25 * alpha)
    }
    const b = a + 1524
    const c = Math.floor((b - 122.1) / 365.25)
    const d = Math.floor(365.25 * c)
    const e = Math.floor((b - d) / 30.6001)
    const day = b - d - Math.floor(30.6001 * e) + f
    const hrs = (day - Math.floor(day)) * 24
    const min = (hrs - Math.floor(hrs)) * 60
    const sec = (min - Math.floor(min)) * 60
    const msc = (sec - Math.floor(sec)) * 1000
    const month = (e < 14) ? (e - 2) : (e - 14)
    const year = (month < 2) ? (c - 4715) : (c - 4716)

    return new Date(year, month, day, hrs, min, sec, msc)
  };

  // is the specified Hijri year a Kabisa year?
  static isKabisa (year) {
    for (const i in CONSTANTS.KABISA_YEAR_REMAINDERS) {
      if (year % 30 === CONSTANTS.KABISA_YEAR_REMAINDERS[i]) {
        return true
      }
    }

    return false
  };

  // return number of days in the specified Hijri year and month
  static daysInMonth (year, month) {
    return ((month === 11 && HijriDate.isKabisa(year)) || month % 2 === 0) ? 30 : 29
  };

  // return day of Hijri year corresponding to this Hijri Date object
  dayOfYear () {
    return (this.month === 0) ? this.day : (CONSTANTS.DAYS_IN_YEAR[this.month - 1] + this.day)
  };

  // return Hijri Date object corresponding to specified Astronomical Julian Date
  static fromAJD (ajd) {
    let i = 0
    let left = Math.floor(ajd - 1948083.5)

    const y30 = Math.floor(left / 10631.0)

    left -= y30 * 10631
    while (left > CONSTANTS.DAYS_IN_30_YEARS[i]) {
      i += 1
    }

    const year = Math.round(y30 * 30.0 + i)
    if (i > 0) {
      left -= CONSTANTS.DAYS_IN_30_YEARS[i - 1]
    }
    i = 0
    while (left > CONSTANTS.DAYS_IN_YEAR[i]) {
      i += 1
    }
    const month = Math.round(i)
    const date = (i > 0) ? Math.round(left - CONSTANTS.DAYS_IN_YEAR[i - 1]) : Math.round(left)

    return new HijriDate(year, month, date)
  };

  // return Astronomical Julian Date corresponding to this Hijri Date object
  toAJD () {
    const y30 = Math.floor(this.year / 30.0)

    let ajd = 1948083.5 + y30 * 10631 + this.dayOfYear()
    if (this.year % 30 !== 0) {
      ajd += CONSTANTS.DAYS_IN_30_YEARS[this.year - y30 * 30 - 1]
    }

    return ajd
  };

  // return Hijri Date object corresponding to the specified Gregorian date object
  static fromGregorian (date) {
    return HijriDate.fromAJD(HijriDate.gregorianToAJD(date))
  };

  // return Gregorian date object corresponding to this Hijri Date object
  toGregorian () {
    return HijriDate.ajdToGregorian(this.toAJD())
  };
};
