let billAmount;
let cashAmount;
let remainingAomunt;
output = document.querySelectorAll("table th")
showalert = document.querySelector(".alert")

function check() {

    bill = document.querySelectorAll("input")[0]
    billAmount = bill.value
    cash = document.querySelectorAll("input")[1]
    cashAmount = cash.value

    remainingAomunt = cashAmount - billAmount;

    if (remainingAomunt < 0){
        showalert.innerHTML= "Cash amount should be greater than bill amount" 
    }
    else
   {
    let fiveHundreads = Math.floor(remainingAomunt / 500);
    remainingAomunt = remainingAomunt %= 500;
    console.log(remainingAomunt)
    let twoHundreads = Math.floor(remainingAomunt / 200);
    remainingAomunt = remainingAomunt %= 200;

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
    switch (twoHundreads) {
        case 0: break;
        default: output[2].innerHTML = twoHundreads
    }

    switch (hundreads) {
        case 0: break;
        default: output[3].innerHTML = hundreads
    }

    switch (fifties) {
        case 0: break;
        default: output[4].innerHTML = fifties
    }

    switch (twenties) {
        case 0: break;
        default: output[5].innerHTML = twenties
    }

    switch (tens) {
        case 0: break;
        default: output[6].innerHTML = tens
    }

    switch (fives) {
        case 0: break;
        default: output[7].innerHTML = fives
    }

    switch (ones) {
        case 0: break;
        default: output[8].innerHTML = ones
    }
}

}

function clearField(){
    document.querySelectorAll("input")[0].value=""
    document.querySelectorAll("input")[1].value=""
    
for( let i=1 ; i<=8; i++){
    output[i].innerHTML= ""
}
showalert.innerHTML=""


}


