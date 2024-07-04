import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <details className="p-4 border-b">
    <summary className="font-semibold flex items-center justify-between cursor-pointer list-none">
      <span>{question}</span>
      <img src="../../arrow.svg" alt="Arrow Icon" className="ml-2 w-4 h-4 transition-transform duration-300 details-open:rotate-90"/>
    </summary>
    <p className="mt-2 text-left">{answer}</p>
  </details>
);

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é Cariri Tips?",
      answer: "Cariri Tips é uma plataforma que oferece dicas e informações sobre a região do Cariri."
    },
    {
      question: "Como posso participar do grupo no Telegram?",
      answer: "Você pode participar do nosso grupo no Telegram clicando no botão 'Grupo do Telegram' na página inicial."
    },
    {
      question: "O acesso ao grupo é gratuito?",
      answer: "Sim, o acesso ao nosso grupo no Telegram é totalmente gratuito."
    },
    {
      question: "Como posso obter mais informações?",
      answer: "Para mais informações, você pode nos contatar através do nosso site ou participar do nosso grupo no Telegram."
    }
  ];

  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 flex justify-center items-center">
          <h2 className="text-5xl font-bold text-left mb-8 bg-gradient-to-r from-[#FFFFFF] to-[#17B121] text-transparent bg-clip-text">FAQ</h2>
        </div>
        <div className="space-y-4 w-3/4 mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

