import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const VerifyEmail = () => {
  return (
    <section>
      <div className="container">
        <div className="py-8">
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">
                Please check your email!
              </CardTitle>
              <CardDescription>
                We&apos;ve emailed a 6-digit confirmation code. Please enter the
                code in the box below to verify your email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="mx-auto">
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-foreground rounded-full hover:bg-bg-foreground hover:shadow-2 md:h-12"
                size="lg"
              >
                Confirm Email
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
