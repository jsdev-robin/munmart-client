import React from "react";
import Heading from "@/components/ui/heading";
import Link from "next/link";

const CreditCardsSettings = () => {
  return (
    <div className="space-y-4">
      <Heading variant="h4" className="mb-0 font-normal">
        It&apos;s only possible to add a new credit card during checkout. Learn
        how{" "}
        <Link href="/" className="underline">
          here
        </Link>
        .
      </Heading>
    </div>
  );
};

export default CreditCardsSettings;
