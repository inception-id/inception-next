type TInceptionBaseLayout = {
  children: React.ReactNode;
};

const InceptionBaseLayout = ({ children }: TInceptionBaseLayout) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default InceptionBaseLayout;
