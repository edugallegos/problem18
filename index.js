
var getSum = function (lista) {
    return lista.reduce(function (previousValue, currentValue, currentIndex, array) {
        if (currentIndex == 1) {
            if (currentValue[0] > currentValue[1]) {
                return [parseInt(previousValue[0]) + parseInt(currentValue[0]), 0]

            } else {
                return [parseInt(previousValue[0]) + parseInt(currentValue[1]), 1]
            }
        } else {
            if (currentValue[previousValue[1]] > (currentValue[previousValue[1] + 1])) {
                return [parseInt(previousValue[0]) + parseInt(currentValue[previousValue[1]]), previousValue[1]];

            } else {
                return [parseInt(previousValue[0]) + parseInt(currentValue[previousValue[1] + 1]), previousValue[1] + 1];
            }
        }

    })[0]
}

module.exports = getSum;

