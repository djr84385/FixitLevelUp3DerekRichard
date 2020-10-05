//A function named carLoanPayment that has 3 parameters and returns the monthly payment to the main program. 
function carLoanPayment(p, r, n) {
  r = r/100
  MCR = r/12
  return(p * (MCR*(1+MCR)**n)/(((1+MCR) ** n) -1))
  }
  
//A function named homeLoanPayment that has 3 parameters and returns the monthly payment to the main program.
function homeLoanPayment(p, r, n) {
  r = r/100
  MHR = r/12
  HN = n/12
  return(p * (MHR*(1+MHR)**n)/(((1+MHR) ** n) -1))
  }


btnCarLoan.onclick = function CarLoan(){
  let principleValue = inptPrinciple.value
  let periodValue = inptPeriod.value
  let annualInterestValue = inptAnnualInterest.value
  let monthlyCarPayment = carLoanPayment(Number(principleValue), Number(annualInterestValue), Number(periodValue))
  let monthlyCarPaymentRound = monthlyCarPayment.toFixed(2)
  lblResult.value = ("Your Monthly Car Payment will be $" + monthlyCarPaymentRound + ".")
}

btnHomeLoan.onclick = function HomeLoan(){
  let principleValue = inptPrinciple.value
  let periodValue = inptPeriod.value
  let annualInterestValue = inptAnnualInterest.value
  let monthlyHomePayment = homeLoanPayment(Number(principleValue), Number(annualInterestValue), Number(periodValue))
  let monthlyHomePaymentRound = monthlyHomePayment.toFixed(2)
  lblResult.value = ("Your Monthly House Payment will be $" + monthlyHomePaymentRound + ".")
}
  