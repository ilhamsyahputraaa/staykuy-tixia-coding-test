import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputProps {
  title: string;
  value?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<InputProps> = ({
  title,
  value='1',
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-fit">
      <Label htmlFor="input">{title}</Label>
      <Input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
