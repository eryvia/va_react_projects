import { banksInfo } from '../inforoot/banks.tsx' 

type BankId = typeof banksInfo[number]['id'];

interface outputState {
    bankid: BankId
    bankname: string
    interest: number
    tax: number 
    activebank: BankId | null
    state?: () => void
}

export const OutputState = ({bankname, interest, tax, activebank, bankid}: outputState) =>  {

    const redem: boolean = bankid === activebank;
    console.log({redem, bankid, activebank})

    return ( 
        <div className={redem ? "blueOutput" : "shadeOutput"}>
            <p>bankname: {bankname}</p>
            <p>interest: {interest}</p>
            <p>tax: {tax}</p>
        </div>
        
    )

    console.log(bankname)
}