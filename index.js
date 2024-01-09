let billAmount;
let cashAmount;
let remainingAomunt;
output = document.querySelectorAll("table th")

function check() {

    bill = document.querySelectorAll("input")[0]
    billAmount = bill.value
    cash = document.querySelectorAll("input")[1]
    cashAmount = cash.value

    remainingAomunt = cashAmount - billAmount;
    console.log(remainingAomunt);



    let fiveHundreads = Math.floor(remainingAomunt / 500);
    remainingAomunt = remainingAomunt %= 500;
    console.log(remainingAomunt)

    let hundreads = Math.floor(remainingAomunt / 100);
    remainingAomunt = remainingAomunt %= 100;

    let fifties = Math.floor(remainingAomunt / 50);
    remainingAomunt = remainingAomunt %= 50;

    let twenties = Math.floor(remainingAomunt / 20);
    remainingAomunt = remainingAomunt %= 20;

    let tens = Math.floor(remainingAomunt / 10);
    remainingAomunt = remainingAomunt %= 10;

    let fives = Math.floor(remainingAomunt / 5);
    remainingAomunt = remainingAomunt %= 5;

    let ones = Math.floor(remainingAomunt / 1);
    remainingAomunt = remainingAomunt %= 1;

    switch (fiveHundreads) {
        case 0: break;
        default: output[1].innerHTML = fiveHundreads
    }

    switch (hundreads) {
        case 0: break;
        default: output[2].innerHTML = hundreads
    }

    switch (fifties) {
        case 0: break;
        default: output[3].innerHTML = fifties
    }

    switch (twenties) {
        case 0: break;
        default: output[4].innerHTML = twenties
    }

    switch (tens) {
        case 0: break;
        default: output[5].innerHTML = tens
    }

    switch (fives) {
        case 0: break;
        default: output[6].innerHTML = fives
    }

    switch (ones) {
        case 0: break;
        default: output[7].innerHTML = ones
    }

}


