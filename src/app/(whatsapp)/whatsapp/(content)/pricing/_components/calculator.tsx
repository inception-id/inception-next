"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { LuCalculator } from "react-icons/lu";

export const Calculator = () => {
  const [cost, setCost] = useState(1000);
  return (
    <Card className="max-w-md flex-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LuCalculator />
          Pricing Calculator
        </CardTitle>
        <CardDescription>
          Hitung biaya WhatsApp Notification Anda berdasarkan jumlah API request
          yang Anda butuhkan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          <Label className="font-semibold">API Request per Bulan</Label>
          <Input
            type="number"
            defaultValue={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="text-muted-foreground">Perkiraan biaya per Bulan</p>
        <div className="font-semibold text-2xl">Rp. {cost}</div>
        <div className="text-muted-foreground">Average Rp. 1 per Request</div>
      </CardFooter>
    </Card>
  );
};
