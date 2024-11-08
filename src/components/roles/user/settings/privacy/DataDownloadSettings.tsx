import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DataDownloadSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Download Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="lead" className="font-normal leading-7 mb-0">
          Download a ZIP file of your Munmart personal information, provided in
          both CSV and JSON file formats.
        </Text>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "rounded-full border-2 border-foreground hover:shadow-4"
          )}
          variant="outline"
        >
          Request your data for download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DataDownloadSettings;
