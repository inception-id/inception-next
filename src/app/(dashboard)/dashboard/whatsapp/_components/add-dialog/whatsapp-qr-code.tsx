import { useEffect, useState } from "react";
import { useAddWhatsappStore } from "../../_hooks";
import QRCode from "react-qr-code";

export const WhatsappQrCode = () => {
  const { showQr, qrCode, toggleQr } = useAddWhatsappStore();
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (showQr) {
      if (timeLeft <= 0) {
        setTimeLeft(30);
        toggleQr(false, "");
        return;
      }

      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [timeLeft, showQr]);

  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <QRCode value={qrCode} className="w-full" />
      <div>00:{timeLeft}</div>
    </div>
  );
};
