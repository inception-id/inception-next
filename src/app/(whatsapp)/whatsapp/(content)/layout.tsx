import { Navbar, Footer } from "./_layout";

type WhatsappContentLayoutProps = {
  children: React.ReactNode;
};

const WhatsappContentLayout = ({ children }: WhatsappContentLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WhatsappContentLayout;
