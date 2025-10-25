import { Content, TableOfContent } from "./_components";

import { generateMetadata } from "./_lib/metadata";

export const metadata = generateMetadata();

const WhatsappDocumentation = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <TableOfContent />
      <Content />
    </div>
  );
};

export default WhatsappDocumentation;
