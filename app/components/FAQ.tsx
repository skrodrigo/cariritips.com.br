import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é Cariri Tips?",
      answer: "Cariri Tips é uma plataforma que te ajuda a ser lucrativo com futebol e outros esportes! Somos especialistas em operações no Mercado Esportivo, oferecendo análises precisas e estratégias vencedoras."
    },
    {
      question: "Como posso participar do grupo no WhatsApp?",
      answer: "Você pode participar do nosso grupo no WhatsApp clicando no botão 'Grupo do WhatsApp' na página inicial."
    },
    {
      question: "O acesso ao grupo é gratuito?",
      answer: "Sim, o acesso ao nosso grupo no WhatsApp é totalmente gratuito."
    },
    {
      question: "Como posso obter mais informações?",
      answer: "Para mais informações, você pode nos contatar através do nosso site ou participar do nosso grupo no WhatsApp."
    }
  ];

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-5xl font-bold text-left mb-8 bg-gradient-to-r from-[#FFFFFF] to-[#17B121] text-transparent bg-clip-text">FAQ</h2>
        </div>
        <div className="space-y-4 w-3/4 mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
