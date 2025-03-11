const millInDay = 1000 * 60 * 60 * 24
let date = new Date

function isValidDate(date) {
    let [day, month, year] = date.split("/");
    if (!(parseInt(day)) || day.length != 2 || !(parseInt(month)) || month.length != 2 || !(parseInt(year)) || year.length != 4) {
        return false
    } else if (year > 9999 || year <= 999 || month > 12) {
        return false
    } else if (day > maxDaysInMonth(month)) {
        return false
    } else if (month == '02' && day == '29' && year % 4 != 0) {
        return false
    }
    return true
}

function maxDaysInMonth(month) {
    switch (month) {
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10':
        case '12':
            return 31;
            break;
        case '04':
        case '06':
        case '09':
        case '11':
            return 30;
            break;
        case '02':
            return 29;
            break;
    }
}


function isPalindrome(string) {
    let res = true;

    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            res = false;
        }
    }

    return res;
}

function getNextPalindromes(x) {
    while (x > 0) {
        if (isDatePalindrome(date.toLocaleDateString())) {
            console.log(date.toLocaleDateString());
            x--;
        }
        date.setTime(date.getTime() + millInDay)


    }
}

function isDatePalindrome(date) {
    if (!(isValidDate(date))) {
        return false
    } else {
        let string = date.split("/").join("");
        return (isPalindrome(string))
    }
}


console.log(isDatePalindrome("22/12/2222"))
console.log(isDatePalindrome("30/02/2003"))
console.log(isDatePalindrome("22/12/2122"))

// console.log(isPalindrome(date.toLocaleDateString()))
getNextPalindromes(10)
