/**
 * Used to convert degress into radians.
 * @param {Number} degress the degress that will be converted into radians
 * @returns {Number} the radian of the `degress`
 */
function radian(degress) {
    return degress * Math.PI / 180;
}

/**
 * Used to convert radians to degress.
 * @param {Number} radian the radians that will be converted into degress
 * @returns {Number} th degress of the `radian`
 */
function degress(radian) {
    return radian * 180 / Math.PI;
}

/**
 * Used to check the options that specify that the given values are in radians or degress form.
 * 
 * Returns true if it is in radians form.
 * @param {object} options 
 * @returns {Boolean}
 */
function checkRadianDegressOption(options) {
    return options.degress === undefined || options.degress === null || !options.degress;
}

export {
    radian,
    degress,
    checkRadianDegressOption
}