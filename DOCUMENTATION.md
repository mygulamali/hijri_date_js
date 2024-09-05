<a name="HijriDate"></a>

## HijriDate
Class representing a Hijri date.

**Kind**: global class  

* [HijriDate](#HijriDate)
    * [new HijriDate(year, month, day)](#new_HijriDate_new)
    * _instance_
        * [.getFullYear](#HijriDate+getFullYear) ⇒ <code>int</code>
        * [.getMonth](#HijriDate+getMonth) ⇒ <code>int</code>
        * [.getDate](#HijriDate+getDate) ⇒ <code>int</code>
        * [.dayOfYear()](#HijriDate+dayOfYear) ⇒ <code>int</code>
        * [.toAJD()](#HijriDate+toAJD) ⇒ <code>float</code>
        * [.toGregorian()](#HijriDate+toGregorian) ⇒ <code>Date</code>
    * _static_
        * [.getMonthName(month)](#HijriDate.getMonthName) ⇒ <code>string</code>
        * [.getShortMonthName(month)](#HijriDate.getShortMonthName) ⇒ <code>string</code>
        * [.isJulian(date)](#HijriDate.isJulian) ⇒ <code>boolean</code>
        * [.gregorianToAJD(date)](#HijriDate.gregorianToAJD) ⇒ <code>float</code>
        * [.ajdToGregorian(ajd)](#HijriDate.ajdToGregorian) ⇒ <code>Date</code>
        * [.isKabisa(year)](#HijriDate.isKabisa) ⇒ <code>boolean</code>
        * [.daysInMonth(year, month)](#HijriDate.daysInMonth) ⇒ <code>int</code>
        * [.fromAJD(ajd)](#HijriDate.fromAJD) ⇒ [<code>HijriDate</code>](#HijriDate)
        * [.fromGregorian(date)](#HijriDate.fromGregorian) ⇒ [<code>HijriDate</code>](#HijriDate)

<a name="new_HijriDate_new"></a>

### new HijriDate(year, month, day)
Create a HijriDate object for a specific Hijri date.


| Param | Type | Description |
| --- | --- | --- |
| year | <code>int</code> | A Hijri year |
| month | <code>int</code> | A Hijri month (zero indexed ie. Moharram = 0). |
| day | <code>int</code> | A Hijri day of the month |

<a name="HijriDate+getFullYear"></a>

### hijriDate.getFullYear ⇒ <code>int</code>
Get the Hijri year.

**Kind**: instance property of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>int</code> - The Hijri year.  
<a name="HijriDate+getMonth"></a>

### hijriDate.getMonth ⇒ <code>int</code>
Get the Hijri month.

**Kind**: instance property of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>int</code> - The Hijri month (zero indexed ie. Moharram = 0).  
<a name="HijriDate+getDate"></a>

### hijriDate.getDate ⇒ <code>int</code>
Get the Hijri day.

**Kind**: instance property of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>int</code> - The Hijri day of the month.  
<a name="HijriDate+dayOfYear"></a>

### hijriDate.dayOfYear() ⇒ <code>int</code>
Get the day of the year corresponding to this HijriDate object.

**Kind**: instance method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>int</code> - The day of the year.  
<a name="HijriDate+toAJD"></a>

### hijriDate.toAJD() ⇒ <code>float</code>
Get the Astronomical Julian Date associated with this HijriDate object.

**Kind**: instance method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>float</code> - The Astronomical Julian Date.  
<a name="HijriDate+toGregorian"></a>

### hijriDate.toGregorian() ⇒ <code>Date</code>
Get the Gregorian date corresponding to this HijriDate object.

**Kind**: instance method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>Date</code> - The Gregorian date.  
<a name="HijriDate.getMonthName"></a>

### HijriDate.getMonthName(month) ⇒ <code>string</code>
Get the name of the specified Hijri month.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>string</code> - The name of the Hijri month in UK English.  

| Param | Type | Description |
| --- | --- | --- |
| month | <code>int</code> | A Hijri month (zero indexed ie. Moharram = 0). |

<a name="HijriDate.getShortMonthName"></a>

### HijriDate.getShortMonthName(month) ⇒ <code>string</code>
Get the short name of the specified Hijri month.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>string</code> - The short name of the Hijri month in UK English.  

| Param | Type | Description |
| --- | --- | --- |
| month | <code>int</code> | A Hijri month (zero indexed ie. Moharram = 0). |

<a name="HijriDate.isJulian"></a>

### HijriDate.isJulian(date) ⇒ <code>boolean</code>
Determine if the specified Gregorian date is a Julian date.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>boolean</code> - The date is a Julian date.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A Gregorian date object. |

<a name="HijriDate.gregorianToAJD"></a>

### HijriDate.gregorianToAJD(date) ⇒ <code>float</code>
Get the Astronomical Julian Date of the specified Gregorian date.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>float</code> - The Astronomical Julian Date.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A Gregorian date object. |

<a name="HijriDate.ajdToGregorian"></a>

### HijriDate.ajdToGregorian(ajd) ⇒ <code>Date</code>
Get the Gregorian date for the specified Astronomical Julian Date.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>Date</code> - The Gregorian date.  

| Param | Type | Description |
| --- | --- | --- |
| ajd | <code>float</code> | An Astronomical Julian Date. |

<a name="HijriDate.isKabisa"></a>

### HijriDate.isKabisa(year) ⇒ <code>boolean</code>
Determine if the specified Hijri year is a Kabisa year.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>boolean</code> - The year is a Kabisa year.  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>int</code> | A Hijri year. |

<a name="HijriDate.daysInMonth"></a>

### HijriDate.daysInMonth(year, month) ⇒ <code>int</code>
Get the number of days in the specified Hijri year and month.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: <code>int</code> - The number of days in the year and month.  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>int</code> | A Hijri year. |
| month | <code>int</code> | A Hijri month (zero indexed ie. Moharram = 0). |

<a name="HijriDate.fromAJD"></a>

### HijriDate.fromAJD(ajd) ⇒ [<code>HijriDate</code>](#HijriDate)
Get a Hijri date associated with the specified Astronomical Julian Date.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: [<code>HijriDate</code>](#HijriDate) - The Hijri date.  

| Param | Type | Description |
| --- | --- | --- |
| ajd | <code>float</code> | An Astronomical Julian Date. |

<a name="HijriDate.fromGregorian"></a>

### HijriDate.fromGregorian(date) ⇒ [<code>HijriDate</code>](#HijriDate)
Get the Hijri date corresponding to the specified Gregorian date.

**Kind**: static method of [<code>HijriDate</code>](#HijriDate)  
**Returns**: [<code>HijriDate</code>](#HijriDate) - The Hijri date.  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | A Gregorian date. |

