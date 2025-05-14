import React from 'react';
import { FrownIcon, Smile } from 'lucide-react';

const PainPointsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FrownIcon size={48} className="text-purple-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Seu cabelo anda fraco, sem brilho e com queda excessiva?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Você já tentou diversos produtos sem ver resultados reais? Está cansada de:
          </p>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-8">
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">•</span>
                <p className="text-gray-700">Gastar com produtos caros que não funcionam</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">•</span>
                <p className="text-gray-700">Fios quebradiços que não crescem</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">•</span>
                <p className="text-gray-700">Cabelo sem vida e sem brilho</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">•</span>
                <p className="text-gray-700">Ver fios no chão do banheiro após o banho</p>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">•</span>
                <p className="text-gray-700">Sentir vergonha do seu cabelo em público</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block relative">
            <Smile size={48} className="text-green-500 mx-auto mb-4" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-100 rounded-full animate-ping opacity-75"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Existe uma solução natural e eficaz!</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Revita Hair é um suplemento completo, criado para nutrir seu cabelo de dentro para fora,
            com ingredientes naturais que atuam na raiz do problema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;