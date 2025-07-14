import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuStar } from "react-icons/lu";
export const Testimonial = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Dipercaya oleh pemimpin industri
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
            Lihat bagaimana bisnis menggunakan INCEPTION untuk meningkatkan
            keterlibatan pelanggan
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">E-commerce</Badge>
              </div>
              <CardTitle>Order Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                &quot;INCEPTION helped us reduce cart abandonment by 35% with
                timely order updates and delivery notifications. Our customers
                love the instant communication.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <LuStar
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  - Sarah Chen, TechMart
                </span>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Healthcare</Badge>
              </div>
              <CardTitle>Appointment Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                &quot;We reduced no-shows by 50% using INCEPTION for appointment
                reminders. The reliability and ease of use made it a perfect fit
                for our clinic.&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <LuStar
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  - Dr. Michael Rodriguez
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
