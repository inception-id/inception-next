"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LuCircleCheck } from "react-icons/lu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sendGAEvent } from "@next/third-parties/google";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  priceUnit: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
}

interface Pricing2Props {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

export const Pricing = ({
  heading = "Pricing",
  description = "Start with development, and choose production according to your needs,",
  plans = [
    {
      id: "pricing_development",
      name: "DEVELOPMENT",
      description: "For testing & development",
      monthlyPrice: "Rp. 0",
      priceUnit: "msg",
      features: [
        { text: "500 free messages per month" },
        { text: "Automatically applied for every user" },
      ],
      button: {
        text: "Start Development",
        url: "/auth/login",
      },
    },
    {
      id: "pricing_pay_after_use",
      name: "PRODUCTION",
      description: "Pay after use",
      monthlyPrice: "Rp. 50",
      priceUnit: "msg",
      features: [
        { text: "Unlimited messages" },
        { text: "Billed monthly" },
        { text: "Calculated per message/notification" },
      ],
      button: {
        text: "Continue with Pay after use",
        url: "/auth/login",
      },
    },
    {
      id: "pricing_subscription",
      name: "PRODUCTION",
      description: "Monthly Subscription",
      monthlyPrice: "Rp. 50.000",
      priceUnit: "month",
      features: [
        { text: "Unlimited messages" },
        { text: "Billed monthly" },
        { text: "All features in one subscription" },
      ],
      button: {
        text: "Continue with Monthly Subscription",
        url: "/auth/login",
      },
    },
  ],
}: Pricing2Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-xl">{description}</p>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="flex w-80 flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex items-end">
                    <span className="text-4xl font-semibold">
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-2xl font-semibold text-muted-foreground">
                      /{plan.priceUnit}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  {plan.id === "pro" && (
                    <p className="mb-3 font-semibold">
                      Everything in Plus, and:
                    </p>
                  )}
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <LuCircleCheck className="size-4" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Link
                    href={plan.button.url}
                    target="_blank"
                    className={cn(buttonVariants(), "w-full")}
                    onClick={() => sendGAEvent("event", plan.id)}
                  >
                    {plan.button.text}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
