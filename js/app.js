// alert('hi');


let loanAmount = document.querySelector('#loanAmount').value;


const amount = parseInt(loanAmount);

let interestRateStr = document.querySelector('#interestRate').value;


const interestRate = parseInt(interestRateStr);

let termStr = document.querySelector('#term').value;

const term = parseInt(termStr);

console.log(term)


function calX(){
    // We use simple interest rate formula to calculate the amount payable

    let totalInterest = (amount * term * interestRate)/   100

    let totalPayments = amount + totalInterest

    let monthlyPayments = (totalPayments / 12).toFixed(2);

    document.querySelector('#totalInterest').textContent = totalInterest

    document.querySelector('#totalPayments').textContent = totalPayments

    document.querySelector('#monthlyPayments').textContent = monthlyPayments;


}



function qualifyCheck(){
    let incomeStr = document.querySelector('#income').value;
    const income = parseInt(incomeStr)

    // alert(income);

    let totalInterest = (amount * term * interestRate)/   100

    let totalPayments = amount + totalInterest

    let monthlyPayments = (totalPayments / 12).toFixed(2);

    let result = document.querySelector('#result')

  if(income < 2 * monthlyPayments ){
    result.textContent = 'You  do not qualify'
      console.log('you  do not qualify')
  }else{
      console.log('You qualify.')
      result.textContent = 'you qualify'
  }
}