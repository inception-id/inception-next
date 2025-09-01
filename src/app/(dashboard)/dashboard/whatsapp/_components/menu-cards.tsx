import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuKey, LuPlus } from "react-icons/lu";

export const MenuCards = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-lg font-bold">Home</h1>
        <h2 className="text-xs">What you gonna do today?</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 max-w-lg">
        <Link href="/dashboard/whatsapp/notifications">
          <Card>
            <CardHeader>
              <CardTitle>See Notifications</CardTitle>
              <CardDescription>
                Messages sent via Inception number
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">
                What&apos;s new ?
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/dashboard/whatsapp/messages">
          <Card>
            <CardHeader>
              <CardTitle>See Messages</CardTitle>
              <CardDescription>Messages sent via your number</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">
                What&apos;s in the inbox ?
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/dashboard/whatsapp/numbers">
          <Card>
            <CardHeader>
              <CardTitle>See Numbers</CardTitle>
              <CardDescription>Your registered Whatsapp Number</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Add New
                <LuPlus />
              </Button>
            </CardFooter>
          </Card>
        </Link>
        <Link href="/dashboard/keys">
          <Card>
            <CardHeader>
              <CardTitle>See API Keys</CardTitle>
              <CardDescription>Your key to everything</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Unlock <LuKey />
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};
