import { banksInfo } from "../inforoot/banks"

interface CalculateInputProps {
  bank: typeof banksInfo[number]; 
}

export default function CalculateInput(bank: CalculateInputProps)  {
    banksInfo.forEach((bank) => bank)

    return;
}