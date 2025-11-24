interface MainInputProps {
  className?: string;
  onChange: (value: number) => void;
}

export default function MainInput({ className, onChange }: MainInputProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const maxValue = 676767676767;

    if (raw.trim() === "") {
      onChange(0);
      return;

    }

    const num = Number(raw);

    if (isNaN(num)) {
        console.log("Not a number -> 0");   
      return;
    }

    if (num < 0) {
      console.log("Negative number -> 0");
      onChange(0);
      return;
    }

    if (num > maxValue) {
      console.log("Number too high -> max value");
      onChange(maxValue);
      return;
    }

    onChange(num);
  };

  return (
    <input
      type="number"
      className={className}
      min={0}
      max={676767676767}   //dont need to be ig now
      onChange={handleChange}
    />
  );
}
