type WhatsappLayoutProps = {
  children: React.ReactNode;
};

const WhatsappLayout = ({ children }: WhatsappLayoutProps) => {
  return <div className="theme-whatsapp">{children}</div>;
};

export default WhatsappLayout;
