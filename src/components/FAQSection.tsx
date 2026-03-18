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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          You Have Questions
        </h2>
        <p className="font-display text-xl text-navy text-center mb-12">We Have Answers</p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-soft-gray rounded-lg border-none px-6">
              <AccordionTrigger className="font-display font-semibold text-navy text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
