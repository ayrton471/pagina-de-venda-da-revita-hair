import React from 'react';
import { ArrowDown } from 'lucide-react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme seus cabelos hoje mesmo!</h2>
          <p className="text-xl mb-6">
            Não espere mais para ter os cabelos dos seus sonhos. Comece agora seu tratamento com Revita Hair.
          </p>
          
          <div className="animate-bounce flex justify-center mb-8">
            <ArrowDown size={32} />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">1 Frasco</h3>
              <p className="text-gray-200 mb-2">30 dias de tratamento</p>
              <p className="text-2xl font-bold">R$ 147,00</p>
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm transform scale-110 shadow-lg">
              <div className="inline-block bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                MAIS POPULAR
              </div>
              <h3 className="font-bold text-xl mb-2">3 Frascos</h3>
              <p className="text-gray-200 mb-2">90 dias de tratamento</p>
              <p className="text-2xl font-bold">R$ 347,00</p>
              <p className="text-sm mt-1">Economize R$ 250,00</p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-2">6 Frascos</h3>
              <p className="text-gray-200 mb-2">180 dias de tratamento</p>
              <p className="text-2xl font-bold">R$ 594,00</p>
              <p className="text-sm mt-1">Economize R$ 600,00</p>
            </div>
          </div>
          
          <a 
            href="#pricing" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors transform hover:scale-105 duration-200"
          >
            ESCOLHER MEU KIT
          </a>
          
          <p className="mt-6 text-sm text-gray-200">
            Entrega rápida para todo Brasil | Garantia de 30 dias | Pagamento 100% seguro
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;