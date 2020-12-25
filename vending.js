var change = 0;
var moneyInserted = 0;
var totalPaid = 0;
var msg = " ";

var cokeCount = 10;
var pepsiCount = 10;
var seven_upCount = 10;
var fantaCount = 10;

var messageElement = document.getElementById("message");
var sodas = [ "Coke", "7-Up", "Fanta","Pepsi"];

const cokePrice = 18;
const pepsiPrice = 17.50;
const fantaPrice = 17.50;
const seven_upPrice =16.50;

const currency_fives = 5;
const currency_twoes = 2;
const currency_ones= 1;
const currency_fiftys = 0.50;

function getTotal(){

    var currency_five = Number(document.getElementById("five").value);
    var currency_two = Number(document.getElementById("two").value);
    var currency_one = Number(document.getElementById("one").value);
    var currency_fifty = Number(document.getElementById("fifty").value);

    if(currency_five > 0){
        currency_five = currency_five * currency_fives;
    }
    if (currency_two > 0){
        currency_two = currency_two * currency_twoes;
    }
    if (currency_one > 0){
        currency_one = currency_one * currency_ones;
    }
    if (currency_fifty > 0){
        currency_fifty = currency_fifty * currency_fiftys;
    }

    totalPaid = currency_five + currency_two + currency_one + currency_fifty;

    return totalPaid.toFixed(2);
}

function tally(){
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally(){
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm(){
    document.getElementById("five").value = 0;
    document.getElementById("two").value = 0;
    document.getElementById("one").value = 0;
    document.getElementById("fifty").value = 0;
}

function cancel(){
    getTotal();

    if(totalPaid > 0){
        msg="Transaction cancelled. $" + totalPaid.toFixed(2) + " has been returned";

        clearForm();
        clearTally();
        alert("Transaction Refreshed!")

        messageElement.innerHTML=msg;

    } else if (totalPaid == 0){
        msg="Please insert money then select a soda";

        messageElement.innerHTML=msg;
    }
    
}

function calculateChange(){
    var tempChange = 0;
    
   if (getTotal() != 0 && selectedSoda == "Coke"){
        return (tempChange= (getTotal() - cokePrice.toFixed(2)));

    }
    if (getTotal() != 0 && selectedSoda == "7-Up"){
        return (tempChange= (getTotal() - seven_upPrice.toFixed(2)));

    }

    if (getTotal() != 0 && selectedSoda == "Pepsi"){
        return (tempChange= (getTotal() - pepsiPrice.toFixed(2)));

    }
    if (getTotal() != 0 && selectedSoda == "Fanta"){
        return (tempChange= (getTotal() - fantaPrice.toFixed(2)));

}

    return tempChange.toFixed(2);

}

function dispenseSoda(soda){
    messageElement.innerHTML="";
    var change=0;
    selectedSoda =sodas[soda];

    change = calculateChange();
    
    if(change < 0){
        msg = "Insufficient Funds, Please try again R"
         + totalPaid.toFixed(2) +
         "has been returned to the coin dispenser";

         totalPaid = 0;
         change = 0;
         clearTally();
         clearForm();

         messageElement.innerHTML=msg;
        
    }else if (change > 0 && (cokeCount != 0 && fantaCount !=0 && pepsiCount !=0 && seven_upCount != 0)){
            msg = selectedSoda + " has been dispensed. R" + change + 
            " has been returned to the coin dispenser";

        messageElement.innerHTML=msg;
        alert("Dispensing...");

         totalPaid = 0;
         change = 0;
         clearTally();
         clearForm();
         calculateQuantity(selectedSoda);

    } else {
        msg = "Oops!" + selectedSoda + " is out of stock! R"
         + totalPaid.toFixed(2) +
         " has been returned to the coin dispenser";

    
         totalPaid = 0;
         change = 0;
         clearTally();
         clearForm();
        
        
        messageElement.innerHTML=msg;
        
        calculateQuantity(selectedSoda);
        
        

        }
       
        alert("Lets make sure...");
        
        
       }
    
function calculateQuantity(selectedSoda){
   
        
    switch (selectedSoda){
        case "Coke":
            cokeCount--;
            document.getElementById("cokeQuantity").innerHTML = cokeCount;
            break;

        case "7-Up":
            seven_upCount--;
            document.getElementById("7upQuantity").innerHTML = seven_upCount;
            break;
            
    
        case "Fanta":
            fantaCount--;
            document.getElementById("fantaQuantity").innerHTML = fantaCount;
            break;

        case "Pepsi":
            pepsiCount--;
            document.getElementById("pepsiQuantity").innerHTML = pepsiCount;
            break; }
    
}

function refresh(){

    alert("Thank you, refreshing data!");
    messageElement.innerHTML = "Insert funds then select a soda";
    dispenseSoda(soda);
    
}

