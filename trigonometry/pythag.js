import validator from "@mitchell-collins/validator";

/**
 * This `pythag` is a object with multiply methods that uses the pythagorean theorem to calculate the sides of a right angle triangle.
 * 
 * Pythagorean theorem: 
 * - Formula: c² = a² + b² 
 * - C is the longest side of the triangle also known as the hypotnuse which is located opposite to the largest angle.
 * - A and B are the other sides of the triangle.
 * 
 * The methods include:
 * - calculcateHypotnuse - returns the calculated hypotnuse of a right angle triangle
 * - calculateOtherSide - returns the calculated other side of a right angle triangle
 * 
 * Examples:
 * 
 *      const a = 2;
 *      const b = 4;
 *      const c = pythag.calculateHypotnuse(a, b);
 * 
 *      const a = 2;
 *      const c = 6;
 *      const b = pythag.calculateOtherSide(a, c);
 */
const pythag = {

    /**
     * Returns the calculated `hypotnuse` of a right angle triangle.
     * @param {Number} sideA 
     * @param {Number} sideB 
     * @returns {Number}
     */
    calculateHypotnuse: function (sideA, sideB) {
        validator.checkUndefinedArray([sideA, sideB]);
        validator.checkDataTypeArray([sideA, sideB], "number");
        return Math.sqrt(sideA * sideA + sideB * sideB);
    },

    /**
     * Returns the calculated other side of a right angle triangle.
     * @param {Number} sideA 
     * @param {Number} sideC 
     * @returns {Number}
     */
    calculateOtherSide: function (sideA, sideC) {
        validator.checkUndefinedArray([sideA, sideC]);
        validator.checkDataTypeArray([sideA, sideC], "number");
        return Math.sqrt(sideC * sideC - sideA * sideA);
    }
}

export default pythag;