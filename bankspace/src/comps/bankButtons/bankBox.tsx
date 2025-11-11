import * as motion from "motion/react-client"
import './bankBox.css'

interface bankButtonProps {
    bank?: string;
    className?: string, 
    onClick: (bank: "rb" | "as") => void;
}


export default function BankButton({className, onClick}: bankButtonProps) {
    return (
       
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={box}
        className={className}
        onClick={() => onClick("rb")}
        />
        
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

