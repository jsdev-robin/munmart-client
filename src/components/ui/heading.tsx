import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("mun-heading text-black dark:text-white", {
  variants: {
    variant: {
      h1: "heading-1",
      h2: "heading-2",
      h3: "heading-3",
      h4: "heading-4",
      h5: "heading-5",
      h6: "heading-6",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

const displayVariants = cva("mun-display text-black dark:text-white", {
  variants: {
    variant: {
      h1: "display-1",
      h2: "display-2",
      h3: "display-3",
      h4: "display-4",
      h5: "display-5",
      h6: "display-6",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: "heading" | "display";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  type = "heading",
  variant = "h1",
  children,
  className,
  ...rest
}) => {
  const variantClasses =
    type === "heading"
      ? headingVariants({ variant })
      : displayVariants({ variant });
  const Tag = variant;

  return (
    <Tag className={cn(variantClasses, className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
