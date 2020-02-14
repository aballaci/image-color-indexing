let fs = require('fs');
let path = require('path');
let ct =  require('./color-theaf.js');

const STANDARD_COLORS = {
    aqua: '#0ff',
    black: '#000',
    blue: '#00f',
    fuchsia: '#f0f',
    gray: '#808080',
    green: '#008000',
    lime: '#0f0',
    maroon: '#800000',
    navy: '#000080',
    olive: '#808000',
    orange: '#ffa500',
    purple: '#800080',
    red: '#f00',
    silver: '#c0c0c0',
    teal: '#008080',
    white: '#fff',
    yellow: '#ff0'
};

var nearestColor = require('./nearest-color.js').from(STANDARD_COLORS);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// read image file
fs.readFile(`${process.cwd()}/resources/image.jpg`, async (err, data) => {

    let ret = await ct.getPalette(data, 5);
    for (var i = 0; i < ret.length; ++i) {
        const rgb = ret[i];
        const color = rgbToHex(rgb[0], rgb[1], rgb[2]);
        console.log("Color: ", color);
        console.log(nearestColor(color));
    }
    console.log(ret);

})

