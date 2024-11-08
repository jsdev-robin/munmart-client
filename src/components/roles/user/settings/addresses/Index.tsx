"use client";

import React, { useState } from "react";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import AddressForm from "./AddressForm";
import { Pen, Trash } from "lucide-react";

const AddressesSettings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const isAddress = true;
  return (
    <>
      <div className="space-y-4">
        <Heading variant="h4" className="mb-0 font-normal font-lora">
          Your delivery addresses
        </Heading>
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-foreground rounded-full hover:shadow-4"
          onClick={() => setOpen(true)}
        >
          Add a new address
        </Button>
        {isAddress ? (
          <div className="space-y-2">
            <span className="bg-blue-700 px-2.5 py-1.5 text-white rounded-full text-sm">
              Default
            </span>
            <address className="text-muted-foreground">
              <span className="name">Md Robin</span>
              <br />
              <span className="first-line">
                Kewarjani(Between Noya-Kandi and Betila)
              </span>
              <br />
              <span className="city">MANIKGANJ SADAR</span> -{" "}
              <span className="zip">1800</span>
              <br />
              <span className="country-name">Bangladesh</span>
            </address>
            <div className="flex items-center gap-4">
              <Button size="sm" variant="secondary" className="rounded-full">
                <Pen /> Edit
              </Button>
              <Button size="sm" variant="destructive" className="rounded-full">
                <Trash /> Remove
              </Button>
            </div>
          </div>
        ) : (
          <Text variant="lead" className="font-normal">
            You don&apos;t currently have any delivery addresses.
          </Text>
        )}
      </div>
      {open && <AddressForm setOpen={setOpen} />}
    </>
  );
};

export default AddressesSettings;
