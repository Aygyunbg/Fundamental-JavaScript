function login (arr) {
    let username = arr[0];
    let password = username.split('').reverse().join('');

    let currentTryCount = 1

    for (let i = 1; i < arr.length; i++) {
        let passwordGuess = arr[i];

        if (passwordGuess === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (currentTryCount === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }

        currentTryCount++
    }
}

login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])
