import { Content, Faq, TableOfContent } from "./_components";

const WhatsappDocumentation = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <TableOfContent />
      <div className="flex flex-col">
        <Content />
      </div>
    </div>
  );
};

export default WhatsappDocumentation;
