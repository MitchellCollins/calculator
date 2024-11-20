import validator from "@mitchell-collins/validator";

const pi = 3.14159;

/**
 * This `circle` is a object that has multiply methods to calculate dimensions of a circle.
 * 
 * These methods include:
 * - `calculateCircumference` - calculates `circumference` using `radius`
 * - `calculateArea` - calculates `area` using `radius`
 * - `calculateRadius` - calculates `radius` either using the `area` or `circumference`
 * 
 * The `calculateRadius` method requires a `option` argument which defines which dimension of circle was 
 * provided. As it can calculate the radius using either `circumference` or `area`.
 * 
 * Examples:
 * 
 *      const radius = 2;
 *      const circumference = circle.calculateCircumference(radius);
 *      const area = circle.calculateArea(radius);
 *      
 *      
 *      const area = 2;
 *      const circumference = 2;
 *      // second argument defines which dimension of circle was given
 *      const areaRadius = circle.calculateRadius(area, { area: true });
 *      const circumferenceRadius = circle.calculateRadius(circumference, { circumference: true });
 */
const circle = {
    /**
     * Returns the calculated `circumference` of a circle.
     * @param {Number} radius 
     * @returns {Number}
     */
    calculateCircumference: function (radius) {
        validator.checkUndefined(radius);
        validator.checkDataType(radius, "number");
        return 2 * pi * radius;
    },

    /**
     * Returns the calculated `area` of a circle.
     * @param {Number} radius 
     * @returns {Number}
     */
    calculateArea: function (radius) {
        validator.checkUndefined(radius);
        validator.checkDataType(radius, "number");
        return pi * radius * radius;
    },

    /**
     * Returns the calculated `radius` of a circle.
     * 
     * The `radius` can be calculated either with the `circumference` or the `area` of the circle. Provide
     * either the `circumference` or `area` to the `dimension` argument and specify which one was provided
     * in the `option` argument.
     * 
     * Options:
     * - area
     * - circumference
     * 
     * Example:
     * 
     *      const area = 2;
     *      const circumference = 2;
     *      // second argument defines which dimension of circle was given
     *      const areaRadius = circle.calculateRadius(area, { area: true });
     *      const circumferenceRadius = circle.calculateRadius(circumference, { circumference: true });
     * @param {Number} dimension 
     * @param {object} option 
     * @returns {Number}
     */
    calculateRadius: function (dimension, option) {
        validator.checkUndefinedArray([dimension, option]);
        validator.checkDataType(dimension, "number");
        validator.checkDataType(option, "object");

        if (option.circumference) {
            return dimension / (2 * pi);
        } else if (option.area) {
            return Math.sqrt(dimension / pi);
        } else {
            throw new Error("Option Argummet was defined incorrectly");
        }
    }
}

export default circle;