/*
 * bart's colour class for javascript
 * version 1.5.1
 * JS port of Colour.php
 * parallel with Colour.php version 2.2.19
 * bart@tremby.net
 */
(function() {
var Colour = function() {
	//default values
	this.colour = [0, 0, 0];

	//CSS3 colours (from http://www.w3.org/TR/css3-color/#svg-color)
	this.CSS3 = {
		"aliceblue"				:	"f0f8ff",
		"antiquewhite"			:	"faebd7",
		"aqua"					:	"00ffff",
		"aquamarine"			:	"7fffd4",
		"azure"					:	"f0ffff",
		"beige"					:	"f5f5dc",
		"bisque"				:	"ffe4c4",
		"black"					:	"000000",
		"blanchedalmond"		:	"ffebcd",
		"blue"					:	"0000ff",
		"blueviolet"			:	"8a2be2",
		"brown"					:	"a52a2a",
		"burlywood"				:	"deb887",
		"cadetblue"				:	"5f9ea0",
		"chartreuse"			:	"7fff00",
		"chocolate"				:	"d2691e",
		"coral"					:	"ff7f50",
		"cornflowerblue"		:	"6495ed",
		"cornsilk"				:	"fff8dc",
		"crimson"				:	"dc143c",
		"cyan"					:	"00ffff",
		"darkblue"				:	"00008b",
		"darkcyan"				:	"008b8b",
		"darkgoldenrod"			:	"b8860b",
		"darkgray"				:	"a9a9a9",
		"darkgreen"				:	"006400",
		"darkgrey"				:	"a9a9a9",
		"darkkhaki"				:	"bdb76b",
		"darkmagenta"			:	"8b008b",
		"darkolivegreen"		:	"556b2f",
		"darkorange"			:	"ff8c00",
		"darkorchid"			:	"9932cc",
		"darkred"				:	"8b0000",
		"darksalmon"			:	"e9967a",
		"darkseagreen"			:	"8fbc8f",
		"darkslateblue"			:	"483d8b",
		"darkslategray"			:	"2f4f4f",
		"darkslategrey"			:	"2f4f4f",
		"darkturquoise"			:	"00ced1",
		"darkviolet"			:	"9400d3",
		"deeppink"				:	"ff1493",
		"deepskyblue"			:	"00bfff",
		"dimgray"				:	"696969",
		"dimgrey"				:	"696969",
		"dodgerblue"			:	"1e90ff",
		"firebrick"				:	"b22222",
		"floralwhite"			:	"fffaf0",
		"forestgreen"			:	"228b22",
		"fuchsia"				:	"ff00ff",
		"gainsboro"				:	"dcdcdc",
		"ghostwhite"			:	"f8f8ff",
		"gold"					:	"ffd700",
		"goldenrod"				:	"daa520",
		"gray"					:	"808080",
		"green"					:	"008000",
		"greenyellow"			:	"adff2f",
		"grey"					:	"808080",
		"honeydew"				:	"f0fff0",
		"hotpink"				:	"ff69b4",
		"indianred"				:	"cd5c5c",
		"indigo"				:	"4b0082",
		"ivory"					:	"fffff0",
		"khaki"					:	"f0e68c",
		"lavender"				:	"e6e6fa",
		"lavenderblush"			:	"fff0f5",
		"lawngreen"				:	"7cfc00",
		"lemonchiffon"			:	"fffacd",
		"lightblue"				:	"add8e6",
		"lightcoral"			:	"f08080",
		"lightcyan"				:	"e0ffff",
		"lightgoldenrodyellow"	:	"fafad2",
		"lightgray"				:	"d3d3d3",
		"lightgreen"			:	"90ee90",
		"lightgrey"				:	"d3d3d3",
		"lightpink"				:	"ffb6c1",
		"lightsalmon"			:	"ffa07a",
		"lightseagreen"			:	"20b2aa",
		"lightskyblue"			:	"87cefa",
		"lightslategray"		:	"778899",
		"lightslategrey"		:	"778899",
		"lightsteelblue"		:	"b0c4de",
		"lightyellow"			:	"ffffe0",
		"lime"					:	"00ff00",
		"limegreen"				:	"32cd32",
		"linen"					:	"faf0e6",
		"magenta"				:	"ff00ff",
		"maroon"				:	"800000",
		"mediumaquamarine"		:	"66cdaa",
		"mediumblue"			:	"0000cd",
		"mediumorchid"			:	"ba55d3",
		"mediumpurple"			:	"9370db",
		"mediumseagreen"		:	"3cb371",
		"mediumslateblue"		:	"7b68ee",
		"mediumspringgreen"		:	"00fa9a",
		"mediumturquoise"		:	"48d1cc",
		"mediumvioletred"		:	"c71585",
		"midnightblue"			:	"191970",
		"mintcream"				:	"f5fffa",
		"mistyrose"				:	"ffe4e1",
		"moccasin"				:	"ffe4b5",
		"navajowhite"			:	"ffdead",
		"navy"					:	"000080",
		"oldlace"				:	"fdf5e6",
		"olive"					:	"808000",
		"olivedrab"				:	"6b8e23",
		"orange"				:	"ffa500",
		"orangered"				:	"ff4500",
		"orchid"				:	"da70d6",
		"palegoldenrod"			:	"eee8aa",
		"palegreen"				:	"98fb98",
		"paleturquoise"			:	"afeeee",
		"palevioletred"			:	"db7093",
		"papayawhip"			:	"ffefd5",
		"peachpuff"				:	"ffdab9",
		"peru"					:	"cd853f",
		"pink"					:	"ffc0cb",
		"plum"					:	"dda0dd",
		"powderblue"			:	"b0e0e6",
		"purple"				:	"800080",
		"red"					:	"ff0000",
		"rosybrown"				:	"bc8f8f",
		"royalblue"				:	"4169e1",
		"saddlebrown"			:	"8b4513",
		"salmon"				:	"fa8072",
		"sandybrown"			:	"f4a460",
		"seagreen"				:	"2e8b57",
		"seashell"				:	"fff5ee",
		"sienna"				:	"a0522d",
		"silver"				:	"c0c0c0",
		"skyblue"				:	"87ceeb",
		"slateblue"				:	"6a5acd",
		"slategray"				:	"708090",
		"slategrey"				:	"708090",
		"snow"					:	"fffafa",
		"springgreen"			:	"00ff7f",
		"steelblue"				:	"4682b4",
		"tan"					:	"d2b48c",
		"teal"					:	"008080",
		"thistle"				:	"d8bfd8",
		"tomato"				:	"ff6347",
		"turquoise"				:	"40e0d0",
		"violet"				:	"ee82ee",
		"wheat"					:	"f5deb3",
		"white"					:	"ffffff",
		"whitesmoke"			:	"f5f5f5",
		"yellow"				:	"ffff00",
		"yellowgreen"			:	"9acd32"
	};

	//get/set hybrids to either get variables or entirely replace the colour---

	/**	rgb
	*	takes r, g, b (each intensity float 0~1) or an array of the same values, 
	*	and sets this colour to it
	*	given no arguments, returns [r, g, b] of intensity float 0~1 of this 
	*	colour
	*/
	this.rgb = function() {
		switch (arguments.length) {
			case 0:
				return this.colour;
			case 1:
				var rgb = arguments[0];
				break;
			case 3:
				var rgb = arguments;
				break;
			default:
				console.error("expected zero, one (array) or three arguments");
		}
		this.colour = this.normalizergb(rgb);
		return this;
	};

	/**	rgb255
	*	takes r, g, b (each intensity int 0~255) or an array of the same values, 
	*	and sets this colour to it
	*	given no arguments, returns [r, g, b] of intensity int 0~255 of this 
	*	colour
	*/
	this.rgb255 = function() {
		switch (arguments.length) {
			case 0:
				return [this.to255(this.colour[0]), this.to255(this.colour[1]), this.to255(this.colour[2])];
			case 1:
				var rgb = arguments[0];
				break;
			case 3:
				var rgb = arguments;
				break;
			default:
				console.error("expected zero, one (array) or three arguments");
		}
		if (rgb.length != 3)
			console.error("expected three numbers");
		for (i in rgb)
			if (rgb[i] < 0 || rgb[i] > 255)
				console.error("expected numbers in the range 0~255");
		return this.rgb(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
	};

	/**	rgb100
	*	takes r, g, b (each intensity int 0~100) or an array of the same values, 
	*	and sets this colour to it
	*	given no arguments, returns [r, g, b] of intensity int 0~100 of this 
	*	colour
	*/
	this.rgb100 = function() {
		switch (arguments.length) {
			case 0:
				return [this.to100(this.colour[0]), this.to100(this.colour[1]), this.to100(this.colour[2])];
			case 1:
				var rgb = arguments[0];
				break;
			case 3:
				var rgb = arguments;
				break;
			default:
				console.error("expected zero, one (array) or three arguments");
		}
		if (rgb.length != 3)
			console.error("expected three numbers");
		for (i in rgb)
			if (rgb[i] < 0 || rgb[i] > 100)
				console.error("expected numbers in the range 0~100");
		return this.rgb(rgb[0] / 100, rgb[1] / 100, rgb[2] / 100);
	};

	/**	r, g, b (also red, green, blue)
	*	takes r, g, b (respectively) intensity float 0~1 and sets this colour's 
	*	value to it
	*	given no arguments, returns intensity float 0~1 of this colour component
	*/
	this.r = this.red = function(arg) {
		return this.r_g_b(0, arg);
	};
	this.g = this.green = function(arg) {
		return this.r_g_b(1, arg);
	};
	this.b = this.blue = function(arg) {
		return this.r_g_b(2, arg);
	};
	this.r_g_b = function(index, arg) {
		if (typeof arg == "undefined")
			return this.colour[index];
		this.colour[index] = this.normalize01(arg);
		return this;
	};

	/**	hsv
	*	takes hue float 0~360, saturation float 0~1, value float 0~1 or an array 
	*	of the same values, and sets this colour to it
	*	given no arguments, returns an array holding the colour's hue, 
	*	saturation and value (all floats, hue 0~360, others 0~1)
	*/
	this.hsv = function() {
		switch (arguments.length) {
			case 0:
				return this.rgbtohsv(this.colour);
			case 1:
				var hsv = arguments[0];
				break;
			case 3:
				var hsv = arguments;
				break;
			default:
				console.error("expected zero, one (array) or three arguments");
		}
		return this.rgb(this.hsvtorgb(hsv));
	};

	/**	hsv100
	*	takes hue int 0~360, saturation int 0~100, value int 0~100 or an array 
	*	of the same values, and sets this colour to it
	*	given no arguments, returns an array holding the colour's hue, 
	*	saturation and value (all ints, hue 0~360, others 0~100)
	*/
	this.hsv100 = function() {
		switch (arguments.length) {
			case 0:
				var hsv = this.hsv();
				return [Math.round(this.normalizehue(hsv[0])), this.to100(hsv[1]), this.to100(hsv[2])];
			case 1:
				var hsv = arguments[0];
				break;
			case 3:
				var hsv = arguments;
				break;
			default:
				console.error("expected zero, one (array) or three arguments");
		}
		if (rgb.length != 3)
			console.error("expected three numbers");
		for (i in rgb.slice(1))
			if (rgb[i] < 0 || rgb[i] > 100)
				console.error("expected the second and third numbers to be in the range 0~100");
		return this.hsv(hsv[0], hsv[1] / 100, hsv[2] / 100);
	};

	/**	hex
	*	takes a colour string in hex notation with or without a hash at the 
	*	start and in rgb or rrggbb format, and sets this colour to it
	*	given no arguments or one boolean, return a hex string of the colour by 
	*	default prepends a hash to the string -- pass false to switch that off
	*/
	this.hex = function() {
		switch (arguments.length) {
			case 0:
				return this.rgbtohex(this.colour);
			case 1:
				if (typeof arguments[0] == "string")
					return this.rgb(this.hextorgb(arguments[0]));
				return this.rgbtohex(this.colour, arguments[0]);
			default:
				console.error("expected zero or one argument");
		}
	};

	/**	toString
	 *	calls hex()
	 */
	this.toString = function() {
		return this.hex();
	};

	// replace the current colour-----------------------------------------------

	/**	gr, grey, gray
	*	takes intensity float 0~1 and sets this colour to a grey with that 
	*	intensity. default 0.5, so grey() gives the CSS3 colour grey
	*/
	this.gr = this.grey = this.gray = function(l) {
		if (typeof l == "undefined")
			l = 0.5;
		l = this.normalize01(l);
		return this.rgb(l, l, l);
	};

	//make variations of the current colour or change the current colour-------

	/**	h, hue
	*	return a new colour like this one but with a given hue (float 0~360)
	*	if the second argument is set to false, the current colour is altered 
	*	instead
	*	given no arguments, return the colour's hue (float 0~360)
	*/
	this.h = this.hue = function() {
		var hsv = this.hsv();
		switch (arguments.length) {
			case 0:
				return hsv[0];
			case 1:
				var h = arguments[0];
				var newobj = true;
				break;
			case 2:
				var h = arguments[0];
				var newobj = arguments[1];
				break;
			default:
				console.error("expected zero, one or two arguments");
		}

		if (h === null)
			return this.desaturate(newobj);

		h = this.normalizehue(h);

		if (h == hsv[0])
			return newobj ? new Colour(this) : this;
		var newhsv = [h, hsv[1], hsv[2]];
		return newobj ? new Colour().hsv(newhsv) : this.hsv(newhsv);
	};

	/**	s, saturation
	*	return a new colour like this one but with a given saturation 
	*	(float 0~1)
	*	if the second argument is set to false, the current colour is altered 
	*	instead
	*	Xara HSV picker: right to left on start colour's row
	*		0	desaturate completely
	*		1	full saturation
	*	given no arguments, return the colour's saturation (float 0~1)
	*/
	this.s = this.saturation = function() {
		var hsv = this.hsv();
		switch (arguments.length) {
			case 0:
				return hsv[1];
			case 1:
				var s = arguments[0];
				var newobj = true;
				break;
			case 2:
				var s = arguments[0];
				var newobj = arguments[1];
				break;
			default:
				console.error("expected zero, one or two arguments");
		}
		if (s == hsv[1])
			return newobj ? new Colour(this) : this;
		var newhsv = [hsv[0], s, hsv[2]];
		return newobj ? new Colour().hsv(newhsv) : this.hsv(newhsv);
	};

	/**	desaturate
	*	return a new colour like this one but completely desaturated
	*	if false is passed, the current colour is altered instead
	*/
	this.desaturate = function() {
		if (arguments.length > 0)
			return this.s(0, arguments[0]);
		return this.s(0);
	};

	/**	v, value
	*	return a new colour like this one but with a given value 
	*	(float 0~1)
	*	if the second argument is set to false, the current colour is 
	*	altered instead
	*	if it's not grey, it'll never reach white
	*	Xara HSV picker: bottom to top on start colour's column
	*		0	black
	*		1	bright
	*	given no arguments, return the colour's value (float 0~1)
	*/
	this.v = this.value = function() {
		var hsv = this.hsv();
		switch (arguments.length) {
			case 0:
				return hsv[2];
			case 1:
				var v = arguments[0];
				var newobj = true;
				break;
			case 2:
				var v = arguments[0];
				var newobj = arguments[1];
				break;
			default:
				console.error("expected zero, one or two arguments");
		}
		if (v == hsv[2])
			return newobj ? new Colour(this) : this;
		var newhsv = [hsv[0], hsv[1], v];
		return newobj ? new Colour().hsv(newhsv) : this.hsv(newhsv);
	};

	/**	shade, sh
	*	shiftshade but on an absolute scale. the colour's total 
	*	intensity, sum(r, g, b), decides how far up the scale we are 
	*	and then shiftshade is called with a suitable relative value.
	*	takes an intensity (float 0~1)
	*	if the second argument is set to false, the current colour is 
	*	altered instead
	*	Xara HSV picker: bottom left to start colour to top right, in two 
	*	straight lines
	*		0	black
	*		1	white
	*	given no arguments, returns the colour's intensity as a 
	*	float(0~1)
	*/
	this.shade = this.sh = function() {
		var l = arguments[0];
		var newobj = arguments.length > 1 ? arguments[1] : true;

		if (typeof l != "undefined" && (l == 0 || l == 1)) //black or white
			return newobj ? new Colour(l) : this.gr(l);

		var rgb = this.rgb();
		var i = (rgb[0] + rgb[1] + rgb[2]) / 3; //overall intensity

		if (typeof l == "undefined")
			return i;
		if (i == l) //unlikely, but hey
			return newobj ? new Colour(this) : this;

		var diff = l - i;
		if (diff > 0)
			var scale = diff / (1 - i);
		else
			var scale = diff / i;

		return this.shiftshade(scale, newobj);
	};

	/**	shiftshade, shsh
	*	return a new colour brightened or darkened by moving in a 
	*	straight line in sv space towards white or black (ie don't 
	*	first change saturation and only when the limit's reached 
	*	change value)
	*	takes a scale factor (float -1~1)
	*	if the second argument is set to false, the current colour is 
	*	altered instead of a new one being made
	*	Xara HSV picker: bottom left to start colour to top right, in 
	*	two straight lines
	*		-1	black
	*		0	leave it alone
	*		1	white
	*/
	this.shiftshade = this.shsh = function() {
		var scale = arguments[0];
		var newobj = arguments.length > 1 ? arguments[1] : true;

		if (scale == 0) //no change
			return newobj ? new Colour(this) : this;
		if (scale == 1 || arguments[0] == -1) { //black or white
			var newscale = scale / 2 + 0.5;
			return newobj ? new Colour(newscale) : this.gr(newscale);
		}
		if (scale > 0)
			return this.mix(new Colour(1), scale, newobj);
		return this.mix(new Colour(0), -scale, newobj);
	};

	/**	shifthue, shh
	*	return a new colour with the hue shifted
	*	takes an angle (float 0~360)
	*	if the second argument is set to false, the current colour is altered 
	*	instead
	*/
	this.shifthue = this.shh = function() {
		if (arguments.length > 1)
			return this.h(this.hsv()[0] + arguments[0], arguments[1]);
		return this.h(this.hsv()[0] + arguments[0]);
	};

	/**	shiftsaturation, shs
	*	return a new colour saturated or desaturated
	*	takes a scale factor (float -1~1)
	*	if the second argument is set to false, the current colour is altered 
	*	instead
	*	Xara HSV picker: right to left on start colour's row
	*		-1	desaturate completely
	*		0	leave it alone
	*		1	full saturation
	*/
	this.shiftsaturation = this.shs = function() {
		var scale = arguments[0];
		var newobj = arguments.length > 1 ? arguments[1] : true;

		if (scale == 0) //no change
			return newobj ? new Colour(this) : this;

		var hsv = this.hsv();

		if (scale > 0)
			var s = hsv[1] + (1 - hsv[1]) * scale;
		else
			var s = hsv[1] * (scale + 1);

		var newhsv = [hsv[0], s, hsv[2]];
		return newobj ? new Colour().hsv(newhsv) : this.hsv(newhsv);
	};

	/**	shiftvalue, shv
	*	return a new colour like this one but lightened or darkened
	*	takes a scale factor (float -1~1)
	*	if the second argument is set to false, the current colour is altered 
	*	instead
	*	if it's not grey, it'll never reach white
	*	Xara HSV picker: bottom to top on start colour's column
	*		-1	black
	*		0	no change
	*		1	bright
	*/
	this.shiftvalue = this.shv = function() {
		var scale = arguments[0];
		var newobj = arguments.length > 1 ? arguments[1] : true;

		if (scale == 0) //no change
			return newobj ? new Colour(this) : this;

		var hsv = this.hsv();

		if (scale > 0)
			var v = hsv[2] + (1 - hsv[2]) * scale;
		else
			var v = hsv[2] * (scale + 1);

		var newhsv = [hsv[0], hsv[1], v];
		return newobj ? new Colour().hsv(newhsv) : this.hsv(newhsv);
	};

	/**	halfsat, hs
	*	gives a washed out shade
	*	takes (h (hue float 0~360), v (value float 0~1)) and entirely 
	*	replaces the current colour
	*	or takes (v (value float 0~1), new = true) and uses the 
	*	current colour's hue, replacing the colour if the second 
	*	argument is false or returning a new one if it is true
	*/
	this.halfsat = this.hs = function() {
		if (arguments.length == 2 && typeof arguments[1] != "boolean") {
			var h = arguments[0];
			var v = arguments[1];
			var newobj = true;
		} else {
			var h = this.h();
			var v = arguments[0];
			var newobj = arguments.length == 2 ? arguments[1] : true;
		}
		var hsv = [h, 0.5 - v / 2, v];
		return newobj ? new Colour().hsv(hsv) : this.hsv(hsv);
	};

	/**	mix
	*	return a new colour which is a mixture between the current 
	*	colour and a given colour
	*	if the given colour is not a Colour object, call the constructor with 
	*	that argument
	*	second argument is the amount of the passed colour to use 
	*	(float 0~1, default 0.5)
	*	if the third argument is set to false, the current colour is altered 
	*	instead
	*/
	this.mix = function() {
		var c = arguments[0];
		if (typeof c != "object" || typeof c.CSS3 != "object")
			var c = new Colour(c);
		c = c.rgb();
		var mix = arguments.length > 1 ? this.normalize01(arguments[1]) : 0.5;
		var newobj = arguments.length > 2 ? arguments[2] : true;
		var rgb = this.rgb();
		var newrgb = [
			rgb[0] + (c[0] - rgb[0]) * mix,
			rgb[1] + (c[1] - rgb[1]) * mix,
			rgb[2] + (c[2] - rgb[2]) * mix
		];
		return newobj ? new Colour(newrgb) : this.rgb(newrgb);
	};

	/**	xarashade, xs
	*	return a new colour like this one but with both saturation and 
	*	value shifted with arguments like in Xara's colour picker -- 
	*	that is, proportional percentages to move from the colour to 
	*	full or zero saturation or value
	*	if the third argument is set to false, the current colour is 
	*	altered instead
	*		saturation shift (i guess it's this way around since left is full 
	*		saturation on the picker)
	*			-100	full saturation
	*			0		no change
	*			100		desaturate
	*		value shift
	*			-100	black
	*			0		no change
	*			100		bright
	*/
	this.xarashade = this.xs = function() {
		var xs = arguments[0];
		var xv = arguments[1];
		var newobj = arguments.length > 2 ? arguments[2] : true;
		if (typeof xs != "number" || typeof xv != "number")
			console.error("expected a numeric type");
		if (xs < -100 || xs > 100 || xv < -100 || xv > 100)
			console.error("expected numbers in the range -100~100");
		return this.shiftvalue(xv / 100, newobj).shiftsaturation(-xs / 100, false);
	};

	// miscellaneous output-----------------------------------------------------

	/**	swatch
	*	return an HTML fragment which will render a colour swatch
	*/
	this.swatch = function() {
		var showhex = arguments.length > 0 ? arguments[0] : true;
		var cssclass = arguments.length > 1 ? arguments[1] : "";
		var html = "<span class=\"swatch";
		if (cssclass != "")
			html += " " + cssclass;
		html += "\" style=\"";
		if (cssclass == "")
			html += "font-family: monospace; padding: 0.3em 0.8em; ";
		html += "background-color: " + this.hex() + "; color: " + (this.shade() > 0.5 ? "black" : "white") + "\">";
		html += showhex ? this.hex() : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		html += "</span>";
		return html;
	};

	/**	rgburl
	*	return GET vars of the red, green and blue intensities
	*	set the argument to true if the string is to be put in HTML
	*/
	this.rgburl = function() {
		var forhtml = arguments.length > 0 ? arguments[0] : false;
		var string = "r=" + this.r() + "&g=" + this.g() + "&b=" + this.b();
		if (forhtml)
			return string.replace(/&/g, "&amp;");
		return string;
	};

	// static colour conversion functions---------------------------------------

	/**	hsvtorgb
	*	takes hue float 0~360, saturation float 0~1, value float 0~1 
	*	or an array of the same values
	*	returns [r, g, b] of intensity float 0~1
	*/
	this.hsvtorgb = function() {
		switch (arguments.length) {
			case 1:
				var hsv = arguments[0];
				break;
			case 3:
				var hsv = arguments;
				break;
			default:
				console.error("expected one or three arguments");
		}
		hsv = this.normalizehsv(hsv);

		var h = hsv[0];
		var s = hsv[1];
		var v = hsv[2];

		if (h === null || s == 0) //black or grey
			return [v, v, v];

		h /= 60; //sector 0~5
		var i = Math.floor(h);
		var f = h - i; //factorial part of h (hue position in the sector)
		var p = v * (1 - s);
		var q = v * (1 - s * f);
		var t = v * (1 - s * (1 - f));

		var r, g, b;
		switch (i) {
			case 0:		r = v; g = t; b = p; break;
			case 1:		r = q; g = v; b = p; break;
			case 2:		r = p; g = v; b = t; break;
			case 3:		r = p; g = q; b = v; break;
			case 4:		r = t; g = p; b = v; break;
			default:	r = v; g = p; b = q; break;
		}
		return [r, g, b];
	};

	/**	rgbtohsv
	*	takes r, g, b (each intensity float 0~1)
	*	or an array of the same values
	*	returns [h (hue float 0~360), s (saturation float 0~1), v (value float 
	*	0~1)]
	*/
	this.rgbtohsv = function() {
		switch (arguments.length) {
			case 1:
				var rgb = arguments[0];
				break;
			case 3:
				var rgb = arguments;
				break;
			default:
				console.error("expected one or three arguments");
		}
		rgb = this.normalizergb(rgb);

		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];

		var v = r;
		if (g > v)
			v = g;
		if (b > v)
			v = b;
		var min = r;
		if (g < min) min = g;
		if (b < min) min = b;
		var delta = v - min;

		if (v == 0 || delta == 0) //black or grey
			return [null, 0, v];

		var s = delta / v;

		if (r >= g && r >= b) //between yellow and magenta
			var h = (g - b) / delta;
		else if (g >= r && g >= b) //between cyan and yellow
			var h = 2 + (b - r) / delta;
		else //between magenta and cyan
			var h = 4 + (r - g) / delta;

		h *= 60; //to degrees
		h = this.normalizehue(h);
		return [h, s, v];
	};

	/**	hextorgb
	*	takes a colour string in hex notation with or without a hash at the 
	*	start and in rgb or rrggbb format
	*	returns [r, g, b] of intensity float 0~1
	*/
	this.hextorgb = function(hex) {
		if (!this.validhex(hex)) {
			console.error("invalid hex string");
			return;
		}
		if (hex[0] == "#") //strip hash
			hex = hex.substr(1);
		if (hex.length == 3)
			hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		var r = parseInt(hex.substr(0, 2), 16);
		var g = parseInt(hex.substr(2, 2), 16);
		var b = parseInt(hex.substr(4, 2), 16);
		return [r / 255, g / 255, b / 255];
	};

	/**	rgbtohex
	*	return a hex string of given rgb colour
	*	by default a hash is prepended to the string -- pass false to switch 
	*	that off
	*	arguments are ([r, g, b], hash = true) or (r, g, b, hash = true), where 
	*	intensity values are float 0~1
	*/
	this.rgbtohex = function() {
		switch (arguments.length) {
			case 1:
			case 2:
				var rgb = arguments[0];
				var hash = arguments.length > 1 ? arguments[1] : true;
				break;
			case 3:
			case 4:
				var rgb = [arguments[0], arguments[1], arguments[2]];
				var hash = arguments.length == 4 ? arguments[3] : true;
				break;
			default:
				console.error("expected one, two, three or four arguments");
		}
		rgb = this.normalizergb(rgb);
		rgb[0] = this.to255(rgb[0]).toString(16);
		rgb[1] = this.to255(rgb[1]).toString(16);
		rgb[2] = this.to255(rgb[2]).toString(16);
		if (rgb[0].length < 2) rgb[0] = "0" + rgb[0];
		if (rgb[1].length < 2) rgb[1] = "0" + rgb[1];
		if (rgb[2].length < 2) rgb[2] = "0" + rgb[2];

		return (hash ? "#" : "") + rgb[0] + rgb[1] + rgb[2];
	};

	// input checking and normalization-----------------------------------------

	/**	validhex
	*	return true if the given string is a valid hex colour string, or false 
	*	otherwise
	*/
	this.validhex = function(string) {
		return typeof string == "string" && /^#?([0-9a-fA-F]{3}){1,2}$/.test(string);
	};

	/**	normalizergb
	*	check an r, g, b array, throw warnings if any are out of range and 
	*	return a normalized version
	*/
	this.normalizergb = function(rgb) {
		if (rgb.length != 3)
			console.error("array should have three values");
		return [this.normalize01(rgb[0]), this.normalize01(rgb[1]), this.normalize01(rgb[2]) ];
	};

	/**	normalizehsv
	*	check an h, s, v array, throw warnings if any are out of range and 
	*	return a normalized version
	*/
	this.normalizehsv = function(hsv) {
		if (hsv.length != 3)
			console.error("array should have three values");
		var ret = [this.normalizehue(hsv[0]), this.normalize01(hsv[1]), this.normalize01(hsv[2])];
		if (ret[1] == 0)
			ret[0] = null;
		return ret;
	};

	/**	normalizehue
	*	return an angle (float 0~360) equivalent to the argument
	*	null passes through untouched
	*/
	this.normalizehue = function(h) {
		if (h === null)
			return h;
		if (typeof h != "number")
			console.error("expected a numeric type or null");
		while (h < 0)
			h += 360;
		while (h >= 360)
			h -= 360;
		return h;
	};

	/**	normalize01
	*	if the float given is out of the range 0~1, trigger a warning 
	*	and return the closest float which is in range
	*/
	this.normalize01 = function(f) {
		if (typeof f != "number")
			console.error("expected a numeric type");
		if (f < 0 || f > 1)
			console.error("expected number 0~1");
		return f;
	};

	// changing scales----------------------------------------------------------

	/**	to255
	*	return an int 0~255 corresponding to the input float 0~1
	*/
	this.to255 = function(f) {
		f = this.normalize01(f);
		return Math.round(f * 255);
	};

	/**	to100
	*	return an int 0~100 corresponding to the input float 0~1
	*/
	this.to100 = function(f) {
		f = this.normalize01(f);
		return Math.round(f * 100);
	};

	/**	constructor
	*	makes a new colour object, initialized to a particular colour given 
	*	inputs, or as black given no input
	*	can take one argument of
	*		array of r, g, b intensities (float 0~1)
	*		Colour object (clone the colour it holds)
	*		lightness (float 0~1) (grey)
	*		hex colour string with or without initial hash, 3 or 6 digit
	*		CSS3 colour name
	*	if an argument is present but doesn't match the above, the colour is set 
	*	to black and a warning is triggered
	*/
	switch (arguments.length) {
		case 0:
			return this.gr(0);
		case 1:
			arg = arguments[0];

			if (arg === null)
				return this.gr(0);
			if (typeof arg == "object" && arg.length == 3) //rgb values
				return this.rgb(arg);
			if (typeof arg == "object" && typeof arg.CSS3 == "object") //Colour object (bad test but hey. this test also exists in the mix method)
				return this.rgb(arg.rgb());
			if (typeof arg == "number") //lightness
				return this.gr(arg);
			if (this.validhex(arg)) //hex value
				return this.hex(arg);
			if (typeof arg == "string" && typeof this.CSS3[arg.toLowerCase()] != "undefined" && this.validhex(this.CSS3[arg.toLowerCase()])) //named colour
				return this.hex(this.CSS3[arg.toLowerCase()]);

			//give up and use black
			console.error("unrecognized constructor option");
			return this.gr(0);
		default:
			console.error("expected zero or one argument");
			return false;
	};
};
if (typeof window !== 'undefined') {
	window.Colour = Colour;
} else if (typeof module !== 'undefined') {
	module.exports = Colour;
}
})();
