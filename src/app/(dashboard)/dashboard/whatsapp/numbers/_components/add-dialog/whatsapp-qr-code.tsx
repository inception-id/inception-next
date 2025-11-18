import { useEffect, useState } from "react";
import { useAddWhatsappStore } from "../../_hooks";
import QRCode from "react-qr-code";
import { MdWhatsapp } from "react-icons/md";
import { LuEllipsisVertical } from "react-icons/lu";
import { IoIosCog } from "react-icons/io";

type WhatsappQrCodeProps = {
  closeDialog: () => void;
};

export const WhatsappQrCode = ({ closeDialog }: WhatsappQrCodeProps) => {
  const { showQr, qrCode, toggleQr } = useAddWhatsappStore();
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (showQr) {
      if (timeLeft <= 0) {
        setTimeLeft(30);
        toggleQr(false, "");
        closeDialog();
        return;
      }

      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup on unmount
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, showQr]);

  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse md:justify-between">
      <div className="w-full flex flex-col gap-2 items-center">
        <QRCode value={qrCode} />
        <div className="text-black/50">Auto close in 00:{timeLeft}</div>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-1">
          1. Open Whatsapp
          <span className="bg-[#23D566] text-white p-1 rounded flex items-center justify-center">
            <MdWhatsapp />
          </span>
          on your phone
        </div>
        <div className="flex flex-wrap gap-1">
          2. On Android tap Menu
          <span className="bg-white text-black py-1 px-0.5 rounded flex items-center justify-center border">
            <LuEllipsisVertical />
          </span>
          . On Iphone tap Settings
          <span className="bg-white text-black p-1 rounded flex items-center justify-center border">
            <IoIosCog />
          </span>
        </div>
        <div>3. Tap Linked devices, then Link device</div>
        <div>4. Scan the QR code to confirm</div>
        <div>5. Phone will show on table once connected</div>
      </div>
    </div>
  );
};
