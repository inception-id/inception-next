import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    question: "Can I register a non Indonesian (+62) phone number?",
    answer: "No, it's in development currently.",
  },
  {
    question: "Can I send a message to non Indonesian (+62) phone number?",
    answer: "No, it's in development currently.",
  },
  {
    question: "Can I send another message type other than text?",
    answer: "No, it's in development currently.",
  },
  {
    question: "What's the rate limit for Inception Whatsapp API?",
    answer:
      "500x per month for DEVELOPMENT. No rate limit for PRODUCTION environment.",
  },
  {
    question: "How to pay for  PRODUCTION environment?",
    answer: `It's pay after you use. We will send the bill for the current month (${new Date().toLocaleString(undefined, { month: "long" })}) on the 1st of next month. Users who don't pay until the 5th of next month will not be able to send messages.`,
  },
];

export const Faq = () => {
  return (
    <div>
      <h2
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6"
        id="status-code"
      >
        6. FAQ
      </h2>

      <Accordion type="multiple">
        {FAQ.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
