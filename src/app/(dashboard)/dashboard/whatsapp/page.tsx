// const C

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { LuKey, LuPlus } from "react-icons/lu";
import { AllTimeCount, MenuCards } from "./_components";

const WhatsappDashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-4 overflow-y-auto lg:flex-row container">
      <MenuCards />
      <AllTimeCount />
    </div>
  );
};

export default WhatsappDashboard;
