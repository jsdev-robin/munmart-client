import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import React from "react";

interface ToggleSwitchProps {
  name?: string;
  id?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  name,
  id,
  checked,
  onChange,
  className,
}) => {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div
          className={cn(
            "group peer ring-2 ring-foreground bg-background rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-foreground peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-foreground peer-checked:after:bg-background after:outline-none after:h-7 after:w-7 after:top-0.5 after:left-0.5 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95",
            className
          )}
        >
          <Check
            width={16}
            height={16}
            className="absolute top-1 left-1 stroke-background w-6 h-6"
          />
          <X
            width={16}
            height={16}
            className="absolute top-1 left-8 stroke-foreground w-6 h-6"
          />
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
