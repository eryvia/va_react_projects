import './App.css'
import { useState } from 'react';
import BankButton from './comps/bankButtons/bankBox';
import MainInput from './comps/mainInput';
import { banksInfo } from './inforoot/banks.tsx' 
import CalculateInput  from './functions/calculateInput.tsx'
import { OutputState } from './comps/outputStats.tsx'
/*If somebody ever reads this --> this ui/ux was PURELY experimentional, i just really wanted killerqueen colorpalette involved. its really bad for a bank app, i know.*/

type BankId = typeof banksInfo[number]['id'];

function App() {
  const [mainInput, setMainInput ] = useState<number>(0)
  const [selectedBank, setSelectedBank] = useState<BankId | null>(null);

  console.log(selectedBank)

  const resultCalculatedBanks = CalculateInput(mainInput)

  console.log(resultCalculatedBanks)
/*
  useEffect(() => {
    const resultCalculatedBanks = CalculateInput(mainInput)

    return () => {
      resultCalculatedBanks
    }
  }, [mainInput])
   --> so it doesnt calculate every render TODO  */ 


  return (
    <>
      <p className='title'>BANKSPACE</p>
      <div className='mainCont'>
        <MainInput onChange={setMainInput}/>
         <div className="containerBankbuttons">
          {banksInfo.map((bank) => (
            <BankButton key={bank.id} bank={bank.id} onClickFuncion={setSelectedBank}/>
          ))}          
         </div>

         <div className="bankTable">
          {/*resultCalculatedBanks.map((bank) => ( 
            <p>{bank.name} {bank.interest} {bank.tax}</p>
          ))*/}
          {resultCalculatedBanks.map((bank) => ( 
            <OutputState bankid={bank.bankid} bankname={bank.name} interest={bank.interest} tax={bank.tax} activebank={selectedBank}/>
          ))}

         </div>
      </div>
      
      
    </>
  )
}

export default App
