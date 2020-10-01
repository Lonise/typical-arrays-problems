
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let min = 0;
    for (let value of array) {
        if ( min > value) min = value;
    };
    return min;

}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let max = 0;
    for (let value of array) {
        if ( max < value) max = value;
    };
    return max;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) return 0;
    let average = 0;
    array.forEach((element) => {
        average = average + element;
    });
    average = average / array.length;
    return average;
}
