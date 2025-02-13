import validator from "@mitchell-collins/validator";
import { radian, degress } from "../utils.js";

const cosRule = {

    angle: function (a, b, c) {
        validator.checkUndefinedArray([a, b, c], ["a", "b", "c"]);
        validator.checkDataTypeArray([a, b, c], ["a", "b", "c"], "number");
        return degress(Math.acos((a * a + b * b - c * c) / (2 * a * b)));
    },

    side: function (a, b, C) {
        validator.checkUndefinedArray([a, b, C], ["a", "b", "C"]);
        validator.checkDataTypeArray([a, b, C], ["a", "b", "C"], "number");
        return Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(radian(C)));
    },

    otherSide: function (b, c, C) {
        validator.checkUndefinedArray([b, c, C], ["b", "c", "C"]);
        validator.checkDataTypeArray([b, c, C], ["b", "c", "C"], "number");
        return b * Math.cos(radian(C)) + Math.sqrt(c * c - b * b * Math.pow(Math.sin(radian(C)), 2));
    }
}

export default cosRule;