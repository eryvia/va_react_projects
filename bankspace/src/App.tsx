import './App.css'
import { useState } from 'react';
import BankButton from './comps/bankButtons/bankBox';
import MainInput from './comps/mainInput';

type bankSpaces = {
  id: string
  name: string
  interestRate: number
}

const banksInfo: bankSpaces[] = [
    {
      id: 'moneta',
      name: 'Moneta Money Bank',
      interestRate: 0.05, // 5% p.a.
    },
    {
      id: 'cs',
      name: 'Česká spořitelna',
      interestRate: 0.035, // 3.5% p.a.
    },
    {
      id: 'kb',
      name: 'Komerční banka',
      interestRate: 0.03, // 3% p.a.
    },
    {
      id: 'airbank',
      name: 'Air Bank',
      interestRate: 0.045, // 4.5% p.a.
    }
  ];

function App() {
  const [mainInput, setMainInput ] = useState<number>(0)
  const [bank, setBank] = useState<string[]>([])

  console.log(mainInput)

  return (
    <>
      <div>
        <MainInput onChange={setMainInput}/>
         <div className="containerBankbuttons">
          {banksInfo.map(() => (
            <BankButton/>
          ))}
         </div>
        


      </div>
      
    </>
  )
}

export default App
