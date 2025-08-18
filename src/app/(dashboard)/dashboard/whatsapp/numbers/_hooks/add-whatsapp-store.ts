import { create } from "zustand";

type AddWhatsappStore = {
  qrCode: string;
  showQr: boolean;
  toggleQr: (showQr: boolean, qrCode: string) => void;
};

export const useAddWhatsappStore = create<AddWhatsappStore>((set) => ({
  qrCode: "",
  showQr: false,
  toggleQr: (showQr: boolean, qrCode: string) =>
    set(() => ({ showQr, qrCode })),
}));
