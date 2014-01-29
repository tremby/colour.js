colour.js
=========

Colour manipulation class

This is an old class I originally wrote for PHP years ago and then ported to 
Javascript. I have also written from scratch [a similar class in 
Python](https://github.com/tremby/py-colour), which I intend to use as a base 
and port back to Javascript as version colour.js version 2. Until then, main 
documentation is in the source code.

Node
----

Get the module with `npm`:

	npm install --save colour.js

Import it (Coffeescript syntax):

```coffee
Colour = require 'colour.js'
```

Browser
-------

You can install the script via `bower` or download it manually.

	bower install --save colour.js

Include the script on your page. In the browser it is attached to the `window` 
object.

Reference
---------

### Making new colours

-	A new colour is black by default:

	```coffee
	black = new Colour()
	```

-	Array of red, green and blue intensities (float 0~1):

	```coffee
	pink = new Colour [1, 0.7, 0.7]
	```

-	Another colour object to make a copy:

	```coffee
	black = new Colour()
	anotherBlack = new Colour black
	```

-	Greyscale lightness (float 0~1 where 0 is black, 1 is white):

	```coffee
	lightGrey = new Colour 0.8
	```

-	Hex colour string; all of the following are valid:

	```coffee
	red = new Colour '#f00'
	green = new Colour '0f0'
	blue = new Colour '0000ff'
	cyan = new Colour '#00ffff'
	```

-	CSS3 colour name (case insensitive):

	```coffee
	greenyellow = new Colour 'greenyellow'
	goldenrod = new Colour 'GOLDENrod'
	```

That's all the constructor supports but you can also make a new colour and then 
call one of the replacement routines:

```coffee
reddish = new Colour().hsv 0, 0.8, 0.5
```

### Getting and setting the current colour

There are various functions which either get or set (replace) the colour. These 
return the component, array of components or string if called with no arguments 
or replace the colour if arguments are given. In the case of those with multiple 
components for example `rgb`, the values can be given as separate arguments or 
as an array of the components. When setting a colour, the object being operated 
on is returned.

- `rgb`: get or set red, green and blue components as floats 0~1
- `rgb255`: as `rgb` but with components as ints 0~255
- `rgb100`: as `rgb` but with components as ints 0~100
- `r`, `red`, `g`, `green`, `b`, `blue`: get or set the component as a float 0~1
- `hsv`: get or set hue (float 0~360), saturation (float 0~1) and value (float 
  0~1) components
- `hsv100`: as `hsv` but with saturation and value components on an int 0~100 
  scale
- `hex`: get or set the colour's hex string. When setting can be w ith or 
  without a leading hash and can be in 3 or 6 digit form. When getting, `false` 
  can be passed to suppress the leading hash.

### Setting the current colour

These only set and don't have a version which gets.

- `gr`, `grey`, `gray`: set red, green and blue components all to the given 
  intensity (float 0~1), defaulting to 0.5

### Get components, make variations of the current colour or change the current colour

These return a new colour by default, or modify and return the current colour if 
the last argument is set to `false`. With no arguments they return a component 
or other metric.

- `h`, `hue`: get or alter the hue (float 0~360)
- `s`, `saturation`: get or alter the saturation (float 0~1)
- `v`, `value`: get or alter the value (float 0~1)
- `shade`, `sh`: get or set the shade. Shade is calculated by summing the red, 
  green and blue components and dividing by 3.

### Make variations of the current colour or change the current colour

These return a new colour by default, or modify and return the current colour if 
the last argument is set to `false`.

- `desaturate`: shortcut to `saturation` with `0` as the first argument
- `shiftshade`, `shsh`: brighten or darken the colour by moving in a straight 
  line towards black (negative values) or white (positive values), by the given 
  proportion, where `-1` will result in black, `0` will result in no change to 
  the colour, `1` will result in white
- `shifthue`, `shh`: rotate the hue by the given angle (float 0~360)
- `shiftsaturation`, `shs`: saturate or desaturate the colour by the given 
  proportion, where `-1` will completely desaturate the colour `0` will cause no 
  change and `1` will completely saturate it
- `shiftvalue`, `shv`: lighten or darken the colour by shifting its HSV value by 
  the given proportion, where `-1` will result in black, `0` will cause no 
  change and `1` will result in a bright colour
- `halfsat`, `hs`: takes either hue (float 0~360) and value (float 0~1) or just 
  value (float 0~1) (using the current colour's hue). Produces a washed out 
  shade of the given lightness.
- `mix`: mix the current colour with the given colour (Colour object or any 
  single argument the constructor can take) by the given amount (default 0.5)
- `xarashade`, `xs`: convenience method to shift saturation and value with 
  arguments which match those in the Xara colour picker's shade editor. The 
  first argument affects saturation (`-100` gives full saturation, `0` gives no 
  change, `100` desaturates) and the second affects value (`-100` gives black, 
  `0` gives no change, `100` gives a bright colour).

### Miscellaneous output

- `swatch`: return an HTML fragment depicting a colour swatch. Arguments are 
  `[bool showhex = true, [string cssclass = ""]]`.
- `rgburl`: return a query string in the form `r=0&g=0.3&b=1`, with red, green 
  and blue components as floats 0~1

### Conversion functions

- `hsvtorgb`: takes hue (float 0~360), saturation (float 0~1), value (float 0~1) 
  or an array of the save components, returns array of red, green and blue 
  components as floats 0~1
- `rgbtohsv`: takes red, green and blue components (float 0~1) or an array of 
  the same, returns array of hue (float 0~360), saturation (float 0~1) and value 
  (float 0~1)
- `hextorgb`: takes a colour string in 3 or 6 digit hex notation with or without 
  a leading hash and returns an array of red, green and blue components as 
  floats 0~1
- `rgbtohex`: takes red, green and blue components (float 0~1) or an array of 
  the same, plus optionally a boolean for whether to include a leading hash 
  (default `true`) returns the colour as a hex string
