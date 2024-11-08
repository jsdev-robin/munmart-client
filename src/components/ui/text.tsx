import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      body: "mun-body",
      span: "mun-span",
      lead: "mun-lead",
      small: "mun-small",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  variant,
  children,
  className,
  ...rest
}) => {
  return (
    <p className={cn(textVariants({ variant }), className)} {...rest}>
      {children}
    </p>
  );
};

export default Text;
