import validator from "@mitchell-collins/validator";

/**
 * This `rectangle` is a object that has multiply methods to calculate dimensions of a rectangle.
 * 
 * These methods include:
 * - `calculatePerimeter` - calculates `perimeter` using the sides
 * - `calculateArea` - calculates `area` using the sides
 * - `calculateSide` - calculates `side` either using the `area` or `perimeter` and the other `side`
 * - `calculateSides` - calculates the sides using the `area` or `perimeter`
 * 
 * The `calculateSide` and `calculateSides` methods requires a `option` argument which defines which 
 * dimension of the rectangle was provided. As it can calculate the side(s) using either 
 * `perimeter` or `area`.
 * 
 * Examples:
 * 
 *      const sideA = 2;
 *      const sideB = 4;
 *      const perimeter = rectangle.calculatePerimeter(sideA, sideB);
 *      const area = rectangle.calculateArea(sideA, sideB);
 *      
 *      
 *      const area = 2;
 *      const perimeter = 2;
 *      // second argument defines which dimension of rectangle was given
 *      const [sideA, sideB] = rectangle.calculateSides(area, { area: true });
 *      // third argument defines which dimension of rectangle was given
 *      const sideB = rectangle.calculateSide(perimeter, sideA, { perimeter: true });
 */
const rectangle = {

    /**
     * Returns the calculated `area` of a rectangle.
     * @param {Number} sideA 
     * @param {Number} sideB 
     * @returns {Number}
     */
    calculateArea: function (sideA, sideB) {
        validator.checkUndefinedArray([sideA, sideB]);
        validator.checkDataTypeArray([sideA, sideB], "number");
        return sideA * sideB;
    },

    /**
     * Returns the calculated `perimeter` of a rectangle.
     * @param {Number} sideA 
     * @param {Number} sideB 
     * @returns {Number}
     */
    calculatePerimeter: function (sideA, sideB) {
        validator.checkUndefinedArray([sideA, sideB]);
        validator.checkDataTypeArray([sideA, sideB], "number");
        return 2 * (sideA + sideB);
    },

    /**
     * Returns the calculated `side` of a rectangle.
     * 
     * The `side` can be calculated either with the `perimeter` or the `area` of the rectangle. Provide
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
     *      const sideA = 2;
     *      // third argument defines which dimension of rectangle was given
     *      const sideB = rectangle.calculateSide(area, sideA { area: true });
     *      const sideB = rectangle.calculateSide(perimeter, sideA, { perimeter: true });
     * @param {Number} dimension 
     * @param {Number} sideA 
     * @param {object} option 
     * @returns {Number}
     */
    calculateSide: function (dimension, sideA, option) {
        validator.checkUndefinedArray([dimension, option]);
        validator.checkDataTypeArray([dimension, sideA], "number");
        validator.checkDataType(option, "object");

        if (option.area) {
            return dimension / sideA;
        } else if (option.perimeter) {
            return dimension / 2 - sideA;
        }  else {
            throw new Error("Option Argummet was defined incorrectly");
        }
    },

    /**
     * Returns the calculated `sides` of a rectangle.
     * 
     * The `sides` can be calculated either with the `perimeter` or the `area` of the rectangle. Provide
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
     *      // second argument defines which dimension of rectangle was given
     *      const [sideA, sideB] = rectangle.calculateSides(area { area: true });
     *      const [sideA, sideB] = rectangle.calculateSides(perimeter, { perimeter: true });
     * @param {Number} dimension 
     * @param {object} option 
     * @returns {Array<Number>}
     */
    calculateSides: function (dimension, option) {
        validator.checkUndefinedArray([dimension, option]);
        validator.checkDataType(dimension, "number");
        validator.checkDataType(option, "object");

        if (option.area) {
            // distributes the value area into the sides
            // sides can't be equal as it is a rectangle
            const sqrtArea = Math.sqrt(dimension);
            const sideA = sqrtArea / 2;
            const sideB = sqrtArea * 2;
            return [sideA, sideB];

        } else if (option.perimeter) {
            // distributes the value perimeter into the sides
            // sides can't be equal as it is a rectangle
            const sideA = dimension / 8;
            const sideB = dimension / 4 + dimension / 8;
            return [sideA, sideB];
            
        } else {
            throw new Error("Option Argummet was defined incorrectly");
        }
    }
}

export default rectangle;