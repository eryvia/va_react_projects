import { banksInfo } from "../inforoot/banks"

/*
function CalculateAll( bankName: string, bankInterestRate: number , mainInput: number) {

  let interest = mainInput * bankInterestRate
  let lw = Math.round(interest * 0.15);

}

bankInfo.forEach()

*/


export default function CalculateInput(mainInput: number)  {
  const bankInfoFull = banksInfo.map((bank) => {
    const interest = Math.round(bank.interestRate * mainInput)
    const tax = Math.round(interest * 0.15)
    //console.log(bank.name, interest, tax)
    return {bankid: bank.id,name: bank.name, interest, tax}

  })
  return bankInfoFull
}