const input = document.getElementById('euro');
const result = document.getElementById('result');
const choice = document.getElementById('Valutas');
const Btn = document.getElementById('convertBtn');

const baseRates = {
  EUR: { EUR: 1.00, GBP: 0.86, USD: 1.09, CHF: 1.06, SEK: 11.45 },
  GBP: { EUR: 1.16, GBP: 1.00, USD: 1.27, CHF: 1.23, SEK: 13.30 },
  USD: { EUR: 0.92, GBP: 0.79, USD: 1.00, CHF: 0.97, SEK:10.48 },
  CHF: { EUR: 0.94, GBP: 0.81, USD: 1.03, CHF: 1.00, SEK:10.80 },
  SEK: { EUR: 0.087, GBP: 0.075, USD: 0.095, CHF: 0.093, SEK: 1.00 }
};


Btn.addEventListener('click', Convert);

function Convert(){
    let res;

    if(choice.value == "USD"){
        res = input.value * baseRates['EUR'].USD;
    }if(choice.value == "GBP"){
        res = input.value * baseRates['EUR'].GBP;
    }if(choice.value == "CHF"){
        res = input.value * baseRates['EUR'].CHF;
    }

    // switch(true){
    //     case "USD":
    //         res = input.value * baseRates['EUR'].USD;
    //     case 'GBP':
    //         res = input.value * baseRates['EUR'].GBP;
    //     case 'CHF':
    //         res = input.value * baseRates['EUR'].CHF;
    //     default:
    //         result.innerText = "invalid input";
    // }
    result.innerText = input.value + " EUR = " + res.toFixed(2) + " " + choice.value;
}