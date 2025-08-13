function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    
    let price = 0;
    let totalMoney = 0;
    
    switch (dayOfTheWeek) {
        case "Friday":
            if (typeOfTheGroup === "Students") {
                price = 8.45;
            } else if (typeOfTheGroup === "Business") {
                price = 10.90;
            } else if (typeOfTheGroup === "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (typeOfTheGroup === "Students") {
                price = 9.80;
            } else if (typeOfTheGroup === "Business") {
                price = 15.60;
            } else if (typeOfTheGroup === "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (typeOfTheGroup === "Students") {
                price = 10.46;
            } else if (typeOfTheGroup === "Business") {
                price = 16;
            } else if (typeOfTheGroup === "Regular") {
                price = 22.50;
            }
            break;
    }
    
    totalMoney = price * groupOfPeople;
    
    if (typeOfTheGroup === "Students" && groupOfPeople >= 30) {
        totalMoney *= 0.85;
    } else if (typeOfTheGroup === "Business" && groupOfPeople >= 100) {
        totalMoney -= 10 * price;
    } else if (typeOfTheGroup === "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalMoney *= 0.95;
    }
    console.log(`Total price: ${totalMoney.toFixed(2)}`);
}


vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");