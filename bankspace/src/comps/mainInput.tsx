

interface mainInputProbs {
    className?: string 
    onChange: (number: number) => void;
}


export default function MainInput({ className, onChange }: mainInputProbs) {

    return (
        <input 
            type="number" 
            className={className} 
            onChange={(e) => onChange(Number(e.target.value))}
        />
    )


}

