import './App.css'
import { useState } from 'react';
import BankButton from './comps/bankButtons/bankBox';
import MainInput from './comps/mainInput';
import { banksInfo } from './inforoot/banks.tsx' 
import { PixelBackground } from './comps/kq.tsx'
import { Kqbg } from './comps/kqbg.tsx'

/*If somebody ever reads this --> this ui/ux was PURELY experimentional, i just really wanted killerqueen colorpalette involved. its really bad for a bank app, i know.*/

type BankId = typeof banksInfo[number]['id'];

function App() {
  const [mainInput, setMainInput ] = useState<number>(0)
  const [selectedBank, setSelectedBank] = useState<BankId | null>(null);

  console.log(mainInput)
  console.log(selectedBank)

  return (
    <>
      <Kqbg/>
      <PixelBackground/>
      <div className='mainCont'>
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
