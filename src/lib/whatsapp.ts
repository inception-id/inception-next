// In Rupiah
export const countPricePerWhatsapp = (totalWhatsapp: number) => {
  if (totalWhatsapp > 10000) {
    return 10;
  }
  if (totalWhatsapp > 5000) {
    return 20;
  }
  if (totalWhatsapp > 1000) {
    return 30;
  }
  if (totalWhatsapp > 500) {
    return 40;
  }
  return 50;
};
