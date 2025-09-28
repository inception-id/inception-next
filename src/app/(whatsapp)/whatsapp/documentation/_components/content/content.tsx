import { AuthenticationContent } from "./authentication";
import { MessageContent } from "./message";
import { NotificationContent } from "./notification";
import { StatusCodesContent } from "./status-codes";

export const Content = () => {
  return (
    <div className="flex flex-col">
      <AuthenticationContent />
      <NotificationContent />
      <MessageContent />
      <StatusCodesContent />
    </div>
  );
};
