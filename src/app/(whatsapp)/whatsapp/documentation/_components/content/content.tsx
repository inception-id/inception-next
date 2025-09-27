import { AuthenticationContent } from "./authentication";
import { NotificationContent } from "./notification";

export const Content = () => {
  return (
    <div className="flex flex-col">
      <AuthenticationContent />
      <NotificationContent />
    </div>
  );
};
