import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  type = "text",
  className,
}) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="capitalize">
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(className)}
      />
      {touched && error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
