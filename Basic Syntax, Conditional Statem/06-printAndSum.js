function printAndSum (start, end) {
    
    let sum = 0;
    let allNum = '';

    for (let currentNum = start; currentNum <= end; currentNum++) {
        sum += currentNum;
        allNum += currentNum + ' '
    }
    console.log(allNum);
    console.log(`Sum: ${sum}`);

}

printAndSum (5, 10);
printAndSum (0, 26);
printAndSum (50, 60);