import * as motion from "motion/react-client"
import './bankBox.css'
import { banksInfo } from '../../inforoot/banks.tsx'


type BankId = typeof banksInfo[number]['id'];;


interface bankButtonProps {
    bank: BankId;
    className?: string, 
    onClickFuncion: (bank: BankId) => void;
}


export default function BankButton({className, onClickFuncion, bank}: bankButtonProps) {
    return (
       
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
        className={className}
        onClick={() => onClickFuncion(bank)}
        >
            <h1>
                {bank}
            </h1>

        </motion.div>
        
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#A2D2FF",
    borderRadius: 5,
};

