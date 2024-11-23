import validator from "@mitchell-collins/validator";

/**
 * This `square` is a object that has multiply methods to calculate dimensions of a square.
 * 
 * These methods include:
 * - `calculatePerimeter` - calculates `perimeter` using the `side`
 * - `calculateArea` - calculates `area` using the `side`
 * - `calculateSide` - calculates `side` either using the `area` or `perimeter`
 * 
 * The `calculateSide` methods requires a `option` argument which defines which 
 * dimension of the square was provided. As it can calculate the side using either 
 * `perimeter` or `area`.
 * 
 * Examples:
 * 
 *      const side = 2;
 *      const perimeter = square.calculatePerimeter(side);
 *      const area = square.calculateArea(side);
 *      
 *      
 *      const area = 2;
 *      const perimeter = 2;
 *      // second argument defines which dimension of square was given
 *      const side = square.calculateSide(area, { area: true });
 *      const side = square.calculateSide(perimeter, { perimeter: true });
 *      
 */
const square = {
    /**
     * Returns the calculated `area` of a square.
     * @param {Number} side
     * @returns {Number}
     */
    calculateArea: function (side) {
        validator.checkUndefined(side);
        validator.checkDataType(side, "number");
        return side * side;
    },

    /**
     * Returns the calculated `perimeter` of a square.
     * @param {Number} side 
     * @returns {Number}
     */
    calculatePerimeter: function (side) {
        validator.checkUndefined(side);
        validator.checkDataType(side, "number");
        return side * 4;
    },

    /**
     * Returns the calculated `side` of a square.
     * 
     * The `side` can be calculated either with the `perimeter` or the `area` of the square. Provide
     * either the `perimeter` or `area` to the `dimension` argument and specify which one was provided
     * in the `option` argument.
     * 
     * Options:
     * - area
     * - perimeter
     * 
     * Example:
     * 
     *      const area = 2;
     *      const perimeter = 2;
     *      // second argument defines which dimension of square was given
     *      const side = square.calculateSide(area, { area: true });
     *      const side = square.calculateSide(perimeter, { perimeter: true });
     * @param {Number} dimension 
     * @param {object} option 
     * @returns {Number}
     */
    calculateSide: function (dimension, option) {
        validator.checkUndefinedArray([dimension, option]);
        validator.checkDataType(dimension, "number");
        validator.checkDataType(option, "object");

        if (option.area) {
            return Math.sqrt(dimension);
        } else if (option.perimeter) {
            return dimension / 4;
        }  else {
            throw new Error("Option Argummet was defined incorrectly");
        }
    }
}

export default square;