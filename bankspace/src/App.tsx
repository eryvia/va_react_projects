import './App.css'
import { useState } from 'react';
import BankButton from './comps/bankButtons/bankBox';
import MainInput from './comps/mainInput';
import { banksInfo } from './inforoot/banks.tsx' 

type BankId = typeof banksInfo[number]['id'];

function App() {
  const [mainInput, setMainInput ] = useState<number>(0)
  const [selectedBank, setSelectedBank] = useState<BankId | null>(null);

  console.log(mainInput)
  console.log(selectedBank)

  return (
    <>
      <div>
        <MainInput onChange={setMainInput}/>
         <div className="containerBankbuttons">
          {banksInfo.map((bank) => (
            <BankButton key={bank.id} bank={bank.id} onClickFuncion={setSelectedBank}/>
          ))}
         </div>
        


      </div>
      
    </>
  )
}

export default App
