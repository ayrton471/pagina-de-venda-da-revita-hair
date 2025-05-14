import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-purple-600 flex-shrink-0" size={20} />
        ) : (
          <ChevronDown className="text-purple-600 flex-shrink-0" size={20} />
        )}
      </button>
      <div className={`mt-2 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Como devo tomar o Revita Hair?",
      answer: "Recomendamos tomar 2 cápsulas por dia, preferencialmente junto com uma refeição para melhor absorção. Cada frasco contém 60 cápsulas, suficientes para 30 dias de tratamento."
    },
    {
      question: "Em quanto tempo verei resultados?",
      answer: "Os primeiros resultados começam a aparecer após 30 dias de uso contínuo, com redução na queda e aumento do brilho. Para resultados mais expressivos de crescimento e espessura, o tratamento ideal é de 3 meses, que é o tempo para um ciclo capilar completo."
    },
    {
      question: "O Revita Hair tem contraindicações?",
      answer: "O Revita Hair é seguro para a maioria das pessoas, mas não é recomendado para gestantes, lactantes e menores de 18 anos sem orientação médica. Se você tem alguma condição de saúde pré-existente ou toma medicamentos regularmente, consulte seu médico antes de iniciar o uso."
    },
    {
      question: "Posso tomar Revita Hair com outros suplementos?",
      answer: "Sim, o Revita Hair pode ser tomado junto com outros suplementos. No entanto, recomendamos consultar um profissional de saúde para evitar a sobredosagem de certos nutrientes, especialmente se você já toma multivitamínicos ou outros suplementos específicos."
    },
    {
      question: "Preciso tomar para sempre para manter os resultados?",
      answer: "Não necessariamente. Recomendamos um tratamento contínuo de pelo menos 3 meses para resultados iniciais. Após esse período, muitas pessoas optam por ciclos de manutenção (como tomar por 3 meses, fazer uma pausa de 1 mês e retomar) ou reduzir para 1 cápsula diária."
    },
    {
      question: "O Revita Hair é vegano?",
      answer: "Não, o Revita Hair contém colágeno de origem animal em sua composição. Estamos desenvolvendo uma versão vegana que será lançada em breve."
    },
    {
      question: "Como funciona a garantia de satisfação?",
      answer: "Oferecemos garantia de satisfação de 30 dias. Se você não estiver satisfeita com os resultados dentro desse período, basta entrar em contato com nosso serviço de atendimento ao cliente e solicitar o reembolso. Pedimos apenas que você devolva o produto (mesmo que parcialmente consumido) para processarmos o estorno integral do valor."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Realizamos o envio em até 24 horas após a confirmação do pagamento. O prazo de entrega varia de 3 a 7 dias úteis, dependendo da sua localização. Todas as entregas são feitas com código de rastreio para você acompanhar."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Revita Hair
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas? Fale com a gente!</p>
          <a 
            href="https://wa.me/556198035499"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;