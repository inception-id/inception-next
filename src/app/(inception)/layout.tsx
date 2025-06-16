import { Navbar } from "./components";

type TInceptionBaseLayout = {
  children: React.ReactNode;
};

const InceptionBaseLayout = ({ children }: TInceptionBaseLayout) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default InceptionBaseLayout;
