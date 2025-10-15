export enum WhatsappPaymentStatus {
  FAIL = "FAIL",
  PAID = "PAID",
  PENDING = "PENDING",
  FREE = "FREE",
}

export type WhatsappPaymentItem = {
  label: string;
  value: number;
};

type DokuResponse = {
  response: {
    payment: {
      url: string;
    };
  };
};

export type WhatsappPayment = {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  payment_status: WhatsappPaymentStatus;
  amount: string;
  items: WhatsappPaymentItem[];
  doku_request: string | null;
  doku_response: DokuResponse | null;
  paid_at: string | null;
  year: number | null;
  month: number | null;
  doku_notif: string | null;
};
