import React from "react";
import { useFormik } from "formik";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ProfileNameChangerFormProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ProfileNameChangerForm: React.FC<ProfileNameChangerFormProps> = ({
  isOpen = false,
  setIsOpen,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      //   setIsOpen(false);
    },
  });

  return (
    <div
      className={cn(
        "fixed h-full w-full top-0 left-0 bottom-0 right-0 bg-background/50 z-50",
        isOpen ? "animate-in fade-in-0" : "animate-out fade-out-0"
      )}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={formik.handleSubmit} className="px-2 w-full">
          <div className="bg-background rounded-md border-[16px] border-foreground/50 w-full">
            <div className="p-2 border-b">
              <Heading variant="h5" className="mb-0">
                Change or Remove Your Name
              </Heading>
              <p className="text-xs text-muted-foreground">
                These fields are for your full name.
              </p>
            </div>
            <div className="p-2 grid gap-2">
              <div className="grid gap-1.5">
                <Label className="text-xs">First Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  className="h-8 text-xs placeholder:text-xs focus-visible:ring-foreground"
                  {...formik.getFieldProps("firstName")}
                />
              </div>
              <div className="grid gap-1.5">
                <Label className="text-xs">Last Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  className="h-8 text-xs placeholder:text-xs focus-visible:ring-foreground"
                  {...formik.getFieldProps("lastName")}
                />
              </div>
              <div className="ml-auto flex gap-2">
                <Button type="submit" className="h-7 text-xs" size="sm">
                  Save Changes
                </Button>
                <Button
                  type="button"
                  className="h-7 text-xs"
                  size="sm"
                  variant="destructive"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileNameChangerForm;
