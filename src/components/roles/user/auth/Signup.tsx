import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { FacebookIcon, GithubIcon, GoogleIcon } from "@/assets/icon/Index";
import { cn } from "@/lib/utils";

const Signup = () => {
  return (
    <section>
      <div className="container">
        <div className="py-8">
          <Card className="max-w-xl mx-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl">Sign up</CardTitle>
              <Link
                href="/signin"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "rounded-full h-8 border-foreground border-2"
                )}
              >
                Sign in
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                    type="text"
                    id="fname"
                    name="fname"
                    className="text-base placeholder:text-base md:h-12"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                    type="text"
                    id="lname"
                    name="lname"
                    className="text-base placeholder:text-base md:h-12"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="text-base placeholder:text-base md:h-12"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    className="text-base placeholder:text-base md:h-12"
                  />
                </div>
                <p>
                  By clicking Sign in, Continue with Google, Facebook, or
                  Github, you agree to Munmart&apos;s{" "}
                  <Link
                    href="/legal/terms-of-use"
                    className="text-blue-500 font-medium underline"
                  >
                    Terms of Use
                  </Link>{" "}
                  and
                  <Link
                    href="/legal/privacy"
                    className="text-blue-500 font-medium underline"
                  >
                    {" "}
                    Privacy Policy.
                  </Link>
                </p>
                <Button
                  type="submit"
                  className="w-full bg-foreground rounded-full hover:bg-bg-foreground hover:shadow-2 md:h-12"
                  size="lg"
                >
                  Sign in
                </Button>
                <div className="flex items-center justify-between gap-1.5">
                  <span className="w-full h-px bg-muted block" />
                  <span>OR</span>
                  <span className="w-full h-px bg-muted block" />
                </div>
                <div className="space-y-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-full border-2 border-foreground hover:shadow-2 md:h-12"
                    size="lg"
                  >
                    <GoogleIcon className="mr-2" />
                    Sign in with Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-full border-2 border-foreground hover:shadow-2 md:h-12"
                    size="lg"
                  >
                    <FacebookIcon className="mr-2" />
                    Sign in with Facebook
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-full border-2 border-foreground hover:shadow-2 md:h-12"
                    size="lg"
                  >
                    <GithubIcon className="mr-2" />
                    Sign in with Github
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="block text-left text-[13px]">
                Munmart may send you communications; you may change your
                preferences in your account settings. We&apos;ll never post
                without your permission.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Signup;
