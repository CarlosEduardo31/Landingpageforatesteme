import Section, { SectionHeader } from "../../../components/ui/Section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../components/ui/accordion";
import { faqData } from "../../../../data/homeData";

export default function HomeFaqSection() {
  return (
    <Section background="white" className="py-24" id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badge="DÚVIDAS"
          title="Perguntas Frequentes"
          description="Tire suas dúvidas sobre o Ateste.me e como podemos ajudar."
        />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-xl px-6 data-[state=open]:border-[var(--color-purple-bluest)] data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-6 hover:no-underline hover:text-[var(--color-purple-bluest)] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
