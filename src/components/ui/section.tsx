import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    padding: {
      "py-4xl": "py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20",
      "py-3xl": "py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16",
      "py-2xl": "py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-10",
      "py-xl": "py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8",
      "py-lg": "py-4 sm:py-5 md:py-6 lg:py-7",
      "py-md": "py-4 sm:py-5 md:py-6",
      "py-sm": "py-4 sm:py-5",
      "py-xs": "py-4",
      "p-none": "",
    },
  },
  defaultVariants: {
    padding: "py-2xl",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  padding,
  className,
  children,
  ...props
}) => {
  return (
    <section className={cn(sectionVariants({ padding }), className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
