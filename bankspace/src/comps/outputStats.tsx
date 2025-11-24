import { banksInfo } from '../inforoot/banks.tsx' 

type BankId = typeof banksInfo[number]['id'];

interface outputState {
    bankid: BankId
    bankname: string
    interest: number
    tax: number 
    activebank: BankId | null
    state?: () => void
    best?: boolean
    worst?: boolean

}

export const OutputState = ({bankname, interest, tax, activebank, bankid, best, worst}: outputState) =>  {

    const redem: boolean = bankid === activebank;

    let cssClass = redem ? "blueOutput" : "shadeOutput";
    if (interest !== 0) {
        if (best) cssClass += " good";
        if (worst) cssClass += " bad";
    }

    console.log({redem, bankid, activebank, cssClass})

    return ( 
        <div className={cssClass}>
            <p className='outputP'>{bankname}</p>
            <p className='outputP'>interest: {interest} Kc</p>
            <p className='outputP'>tax: {tax} Kc</p>
        </div>
        
    )
    console.log(bankname)
}