import React from "react";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const signInHistory = [
  {
    date: "16 hours ago",
    browser: "Chrome 130 on Windows 10",
    ip: "103.134.59.32",
    location: "Mānikganj, C, Bangladesh (Achiever Broadband Internet)",
    status: "Sign out",
  },
  {
    date: "2 days ago",
    browser: "Chrome 130 on Windows 10",
    ip: "103.134.59.35",
    location: "Mānikganj, C, Bangladesh (Achiever Broadband Internet)",
    status: "Sign out",
  },
  {
    date: "7 days ago",
    browser: "Chrome 130 on Windows 10",
    ip: "103.134.59.36",
    location: "Manikganj, C, Bangladesh (Achiever Broadband Internet)",
    status: "Signed out",
  },
  {
    date: "6 days ago",
    browser: "Chrome 130 on Android 10",
    ip: "103.134.59.36",
    location: "Manikganj, C, Bangladesh (Achiever Broadband Internet)",
    status: "Sign out",
  },
  {
    date: "25 Oct, 2024",
    browser: "Chrome 130 on Windows 10",
    ip: "103.134.59.33",
    location: "Mānikganj, C, Bangladesh (Achiever Broadband Internet)",
    status: "Signed out",
  },
  {
    date: "04 Oct, 2024",
    browser: "Chrome 129 on Windows 10",
    ip: "103.134.59.33",
    location: "Dhaka, C, Bangladesh (Achiever Broadband Internet)",
    status: "Signed out",
  },
  {
    date: "04 Oct, 2024",
    browser: "Chrome 129 on Windows 10",
    ip: "103.134.59.33",
    location: "Dhaka, C, Bangladesh (Achiever Broadband Internet)",
    status: "Signed out",
  },
];

const SigninHistorySettings = () => {
  return (
    <div className="border rounded-md">
      <div className="bg-secondary py-2.5 px-4 border-b">
        <Heading className="mb-0" variant="h6">
          Review your sign-in history
        </Heading>
      </div>
      <div>
        <Text className="px-4 pt-4">
          Make sure you recognise all recent sign-in activity for your account.
          You can sign out anywhere you’re still signed in.
        </Text>
        <Table>
          <TableHeader className="border-t">
            <TableRow className="*:text-foreground">
              <TableHead className="w-[100px]">Time</TableHead>
              <TableHead>Browser/Device</TableHead>
              <TableHead>IP address</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {signInHistory.map((entry, index) => (
              <TableRow
                key={index}
                className="*:whitespace-nowrap *:text-xs *:font-light"
              >
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.browser}</TableCell>
                <TableCell>{entry.ip}</TableCell>
                <TableCell>{entry.location}</TableCell>
                <TableCell className="text-right">{entry.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SigninHistorySettings;
