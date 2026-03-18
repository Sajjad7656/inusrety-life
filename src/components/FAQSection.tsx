import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does final expense insurance typically cover?",
    a: "It usually helps pay for funeral costs, burial or cremation, medical bills, and other related end-of-life expenses.",
  },
  {
    q: "Is final expense insurance the same as life insurance?",
    a: "It's a type of life insurance, but typically with smaller coverage amounts focused on covering immediate final costs.",
  },
  {
    q: "Can I choose my beneficiary?",
    a: "Yes, you can name one or more beneficiaries who will receive the policy payout.",
  },
  {
    q: "How soon does coverage begin?",
    a: "Coverage may begin immediately or after a short waiting period, depending on the policy and your health profile.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white px-8 py-6 shadow-lg">
          <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left font-display font-semibold text-navy hover:no-underline data-[state=open]:text-blue-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground font-body text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
