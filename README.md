# Convert Zenkaku Kana characters into Hankaku Kana written in Microsoft JScript

toHankakuKana function converts a string that contains Japanese Zenkaku Kana
characters into Hankaku Kana string.

You can use this toHankakuKana function in WSH (Windows Script Host) and
QlikView module (in QlikView 12.10).

For WSH, your source code that contains Zenkaku characters must be written
in Shift_JIS encoding (more precisely, in CP932).
For QlikView module, you cannot specify its encoding, and the encoding
is always UTF-8.

## Usage
### WSH
See test-wsh.js file in the repository. It is written in CP932.

### QlikView 12.10
You can use toHankakuKana function in its load script.
(I have no idea whether the function is usable in chart expressions.)

```
load
  toHankakuKana(address),
  toHankakuKana(name)
resident
  customer_table;
```

## Bugs
* Very slow.
* Not written in VBScript.

## License
2-caluse BSD license

## Author
Ryo ONODERA <ryo@tetera.org>
