import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PriceCards = () => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:min-w-[50%]">
      <Card>
        <CardHeader>
          <span className="bg-accent px-3 py-1 rounded-full font-semibold w-fit mx-auto">
            Free Tier
          </span>
          <CardTitle className="text-2xl">Rp 0</CardTitle>
          <CardDescription className="text-muted-foreground">
            Limit 100 pesan/bulan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>100 pesan/bulan</li>
            <li>Full API Access</li>
            <li>Documentation &amp; Support</li>
            <li>Tanpa biaya Setup</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link className={cn(buttonVariants(), "w-full")} href="/auth/login">
            Mulai Sekarang
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <span className="bg-accent px-3 py-1 rounded-full font-semibold w-fit mx-auto">
            Pay after you use
          </span>
          <CardTitle className="text-2xl">Rp 1</CardTitle>
          <CardDescription className="text-muted-foreground">
            Tanpa API limit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Unlimited API Request</li>
            <li>Bayar belakangan</li>
            <li>Tagihan per Bulan</li>
            <li>Priority Support</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link className={cn(buttonVariants(), "w-full")} href="/auth/login">
            Mulai Sekarang
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
