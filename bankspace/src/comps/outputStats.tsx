interface outputState {
    bankname: string
    interest: number
    tax: number
    state?: () => void
}

export const OutputState = ({bankname, interest, tax}: outputState) =>  {


    return ( 
        <div className="outputState ? blue : shade">
            <p>{bankname}</p>
            <p>{interest}</p>
            <p>{tax}</p>
        </div>
        
    )

    console.log(bankname)
}