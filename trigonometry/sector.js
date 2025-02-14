import validator from "@mitchell-collins/validator";
import { checkRadianDegressOption } from "../utils.js";

const sector = {

    length: function (radius, theta, options) {
        validator.checkUndefinedArray([radius, theta], ["radius", "theta"]);
        validator.checkDataTypeArray([radius, theta], ["radius", "theta"], "number");
        
        if (checkRadianDegressOption(options || {}))
            return radius * theta;

        return theta / 360 * 2 * Math.PI * radius;
    },

    radius: function (length, theta, options) {
        validator.checkUndefinedArray([length, theta], ["length", "theta"]);
        validator.checkDataTypeArray([length, theta], ["length", "theta"], "number");

        if (checkRadianDegressOption(options || {}))
            return length / theta;

        return length * 360 / (theta * 2 * Math.PI);
    },

    area: function (radius, theta, options) {
        validator.checkUndefinedArray([radius, theta], ["radius", "theta"]);
        validator.checkDataTypeArray([radius, theta], ["radius", "theta"], "number");

        if (checkRadianDegressOption(options || {}))
            return 0.5 * (radius * radius) * theta;

        return theta / 360 * (radius * radius) * Math.PI;
    },

    theta: function (length, radius, options) {
        validator.checkUndefinedArray([length, radius], ["length", "radius"]);
        validator.checkDataTypeArray([length, radius], ["length", "radius"], "number");

        if (checkRadianDegressOption(options || {}))
            return length / radius;

        return length * 360 / (2 * Math.PI * radius);
    }
}

export default sector;