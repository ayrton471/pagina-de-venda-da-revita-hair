import React from 'react';
import { Check, X } from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Para quem o Revita Hair é indicado?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra se o Revita Hair é o tratamento ideal para você
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center">
              <Check className="mr-2" size={20} />
              Revita Hair é perfeito para você se:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-gray-700">Está enfrentando queda de cabelo acima do normal</p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-gray-700">Percebe seus fios mais finos, fracos ou quebradiços</p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-gray-700">Deseja acelerar o crescimento do seu cabelo</p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-gray-700">Nota falta de brilho e vitalidade nos seus fios</p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-gray-700">Busca uma solução prática para incluir na sua rotina</p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-gray-700">Já tentou diversos produtos sem resultados satisfatórios</p>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-red-500 mb-6 flex items-center">
              <X className="mr-2" size={20} />
              Revita Hair não é para você se:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <X size={16} className="text-red-500" />
                </div>
                <p className="text-gray-700">Está grávida ou amamentando (consulte seu médico)</p>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <X size={16} className="text-red-500" />
                </div>
                <p className="text-gray-700">Possui alergia a algum dos componentes da fórmula</p>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <X size={16} className="text-red-500" />
                </div>
                <p className="text-gray-700">Espera resultados milagrosos em poucos dias</p>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <X size={16} className="text-red-500" />
                </div>
                <p className="text-gray-700">Não está disposta a seguir o tratamento corretamente</p>
              </li>
              <li className="flex items-start">
                <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                  <X size={16} className="text-red-500" />
                </div>
                <p className="text-gray-700">Tem menos de 18 anos de idade</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;