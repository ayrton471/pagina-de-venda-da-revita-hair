import React from 'react';
import { Truck, ShieldCheck, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">💜 Escolha seu kit Revita Hair</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aproveite frete grátis em todas as opções!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Kit 12 meses */}
            <div className="md:w-1/4 bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4">
                🟣 Compre 6, Leve +6 Grátis
              </div>
              <img 
                src="https://i.ibb.co/N2QSRG0r/12pt-rh.webp"
                alt="Kit 12 meses Revita Hair"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">12 meses de tratamento</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">💰 12x de R$ 71,70</p>
                <p className="text-gray-700">🔒 ou R$ 697,00 à vista</p>
                <p className="text-green-600">🚚 Frete Grátis</p>
              </div>
              <a 
                href="https://pay.braip.co/ref?pl=plaozn8x&ck=chejj5pv&af=afilx48j7e"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                COMPRAR AGORA
              </a>
            </div>
            
            {/* Kit 5 meses */}
            <div className="md:w-1/4 bg-white border-2 border-purple-400 rounded-xl p-6 text-center shadow-xl relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-purple-600 text-white rounded-full text-sm font-bold">
                🔥 MAIS PROCURADO
              </div>
              <div className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4 mt-4">
                🟣 Compre 3, Leve +2 Grátis
              </div>
              <img 
                src="https://i.ibb.co/rR1CVQXh/5pt-rh.webp"
                alt="Kit 5 meses Revita Hair"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">5 meses de tratamento</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">💰 12x de R$ 40,84</p>
                <p className="text-gray-700">🔒 ou R$ 397,00 à vista</p>
                <p className="text-green-600">🚚 Frete Grátis</p>
              </div>
              <a 
                href="https://pay.braip.co/ref?pl=plarnoyn&ck=chejj5pv&af=afilx48j7e"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                COMPRAR AGORA
              </a>
            </div>
            
            {/* Kit 3 meses */}
            <div className="md:w-1/4 bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4">
                🟣 Compre 2, Leve +1 Grátis
              </div>
              <img 
                src="https://i.ibb.co/WNXBBJZB/3pt-rh.webp"
                alt="Kit 3 meses Revita Hair"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">3 meses de tratamento</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">💰 12x de R$ 30,55</p>
                <p className="text-gray-700">🔒 ou R$ 297,00 à vista</p>
                <p className="text-green-600">🚚 Frete Grátis</p>
              </div>
              <a 
                href="https://pay.braip.co/ref?pl=playnedp&ck=chejj5pv&af=afilx48j7e"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                COMPRAR AGORA
              </a>
            </div>
            
            {/* Kit 1 mês */}
            <div className="md:w-1/4 bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="py-2 px-4 bg-purple-100 text-purple-700 rounded-full text-sm font-medium inline-block mb-4">
                🟣 Compre 1 Frasco
              </div>
              <img 
                src="https://i.ibb.co/RpFLb14W/Revita-Hair-1pt.webp"
                alt="Kit 1 mês Revita Hair"
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Ideal para experimentar</h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">💰 12x de R$ 20,27</p>
                <p className="text-gray-700">🔒 ou R$ 197,00 à vista</p>
                <p className="text-green-600">🚚 Frete Grátis</p>
              </div>
              <a 
                href="https://pay.braip.co/ref?pl=pla0kvjw&ck=chejj5pv&af=afilx48j7e"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Truck className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Entrega garantida</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Enviamos para todo o Brasil com código de rastreio. Receba em até 7 dias úteis.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <ShieldCheck className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Garantia de 30 dias</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Satisfação garantida ou seu dinheiro de volta, sem perguntas.
                </p>
              </div>
              
              <div className="md:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <ArrowRight className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800">Compra segura</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Pagamento processado com criptografia em ambiente seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;