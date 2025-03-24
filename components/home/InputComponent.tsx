import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputProps {
  title: string;
  value: string;
  placeholder: string;
}

const InputComponent: React.FC<InputProps> = ({
  title,
  value,
  placeholder,
}) => {
  return (
    <div className="w-fit">
      <Label htmlFor="input">{title}</Label>
      <Input type="number" placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputComponent;
