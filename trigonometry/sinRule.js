import validator from "@mitchell-collins/validator";
import { radian, degress, checkRadianDegressOption } from "../utils.js";

const sinRule = {

    calculateSide: function (angleA, sideB, angleB, options) {
        validator.checkUndefinedArray([angleA, sideB, angleB], ["angleA", "sideB", "angleB"]);
        validator.checkDataTypeArray([angleA, sideB, angleB], ["angleA", "sideB", "angleB"], "number");
        
        // checks if the numbers are in radians form
        if (checkRadianDegressOption(options || {}))
            return sideB * Math.sin(angleA) / Math.sin(angleB);
        
        return sideB * Math.sin(radian(angleA)) / Math.sin(radian(angleB));
    },

    calculateAngle: function (sideA, sideB, angleB, options) {
        validator.checkUndefinedArray([sideA, sideB, angleB], ["sideA", "sideB", "angleB"]);
        validator.checkDataTypeArray([sideA, sideB, angleB], ["sideA", "sideB", "angleB"], "number");

        // checks if the numbers are in radians form
        if (checkRadianDegressOption(options || {}))
            return Math.asin(Math.sin(angleB) * sideA / sideB);

        return degress(Math.asin(radian(Math.sin(angleB) * sideA / sideB)));
    }
}

export default sinRule;