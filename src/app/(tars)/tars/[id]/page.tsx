import TarsForm from "./_components/tars-form";
import TarsMessages from "./_components/tars-message";
import TarsProvider from "./_components/tars-provider";
import TarsHeader from "./_header/tars-header";

const DynamicTarsPage = () => {
  return (
    <TarsProvider>
      <div className="flex flex-col h-screen">
        <TarsHeader />
        <div className="flex-1 flex flex-col p-2 md:w-[50%] md:mx-auto">
          <TarsMessages />
          <TarsForm />
        </div>
      </div>
    </TarsProvider>
  );
};

export default DynamicTarsPage;
