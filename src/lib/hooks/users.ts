import { queryOptions } from "@tanstack/react-query";
import { verifyUserEmail } from "../api/users";
import { toast } from "sonner";

export const useVerifyUserEmailOption = (token?: string) => {
  return queryOptions({
    enabled: !!token,
    queryKey: ["verifyUserEmail"],
    queryFn: async () => {
      try {
        const verifyEmail = await verifyUserEmail(token);
        if (verifyEmail.status === 200) {
          toast.success("Email verified successfully", {
            description: "You can now login to your account",
          });
        } else if (verifyEmail.status === 400) {
          toast.warning("Email verification expired, please re-login");
        } else {
          toast.error("An error occurred while verifying your email");
        }
        return verifyEmail;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
  });
};
