function rounding (num, precision) {

    if (precision > 15) {
        precision = 15
    }

    let formattedNum = num.toFixed(precision);
    let trimmedNum = parseFloat(formattedNum);

    console.log(trimmedNum);

}

rounding (3.1415926535897932384626433832795,2, 2)