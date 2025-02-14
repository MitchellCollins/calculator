import validator from "@mitchell-collins/validator";
import { radian } from "../utils.js";

function optionsUndefined(options) {
    return options === undefined || options === null;
}

const sohCahToa = {

    opposite: function (side, angle, options) {
        validator.checkUndefinedArray([side, angle], ["side", "angle"]);
        validator.checkDataTypeArray([side, angle], ["side", "angle"], "number");

        if (optionsUndefined(options) || !options.sin)
            return side * Math.tan(radian(angle));

        return side * Math.sin(radian(angle));
    },

    adjacent: function (side, angle, options) {
        validator.checkUndefinedArray([side, angle], ["side", "angle"]);
        validator.checkDataTypeArray([side, angle], ["side", "angle"], "number");

        if (optionsUndefined(options) || !options.cos)
            return side / Math.tan(radian(angle));

        return side * Math.cos(radian(angle));
    },

    hypotenuse: function (side, angle, options) {
        validator.checkUndefinedArray([side, angle], ["side", "angle"]);
        validator.checkDataTypeArray([side, angle], ["side", "angle"], "number");

        if (optionsUndefined(options) || !options.sin)
            return side / Math.cos(radian(angle));

        return side / Math.sin(radian(angle));
    }
}

export default sohCahToa;