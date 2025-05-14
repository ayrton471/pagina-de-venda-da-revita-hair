import React from 'react';
import { Droplets, Zap, Sprout, Sparkles } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  color: string;
}

const SolutionStep: React.FC<StepProps> = ({ icon, title, description, stepNumber, color }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-4 relative`}>
        {icon}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-500 flex items-center justify-center text-xs font-bold text-purple-500">
          {stepNumber}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  );
};

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Como o Revita Hair funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um processo completo que atua desde a raiz até as pontas dos fios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <SolutionStep 
            icon={<Droplets className="text-white" size={24} />}
            title="Nutre o couro cabeludo"
            description="Fornece vitaminas e minerais essenciais que nutrem as células do folículo capilar."
            stepNumber={1}
            color="bg-purple-500"
          />
          
          <SolutionStep 
            icon={<Zap className="text-white" size={24} />}
            title="Fortalece os fios"
            description="Atua na estrutura interna do cabelo, reduzindo a quebra e a fragilidade."
            stepNumber={2}
            color="bg-purple-400"
          />
          
          <SolutionStep 
            icon={<Sprout className="text-white" size={24} />}
            title="Estimula o crescimento"
            description="Ativa a circulação sanguínea e acelera o ciclo de crescimento dos fios."
            stepNumber={3}
            color="bg-green-500"
          />
          
          <SolutionStep 
            icon={<Sparkles className="text-white" size={24} />}
            title="Devolve o brilho e maciez"
            description="Sela as cutículas dos fios, tornando-os mais brilhantes e macios ao toque."
            stepNumber={4}
            color="bg-green-400"
          />
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://i.ibb.co/BW1s4Fn/vit-b12-1.webp" 
                alt="Ingredientes naturais" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fórmula exclusiva com ingredientes naturais</h3>
              <p className="text-gray-600 mb-6">
                Nossa fórmula combina ingredientes naturais cuidadosamente selecionados para proporcionar resultados reais:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">🟣</span>
                  <div>
                    <p className="font-semibold text-gray-800">Biotina</p>
                    <p className="text-gray-600">Essencial para o fortalecimento dos fios, ajuda a combater a queda e apoia o crescimento, promovendo cabelos mais volumosos e resistentes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">🟣</span>
                  <div>
                    <p className="font-semibold text-gray-800">Ácido Hialurônico</p>
                    <p className="text-gray-600">Este hidratante potente penetra profundamente nos fios, oferecendo hidratação de longa duração, ajudando a reduzir o frizz e aumentando a maciez.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">🟣</span>
                  <div>
                    <p className="font-semibold text-gray-800">Colágeno</p>
                    <p className="text-gray-600">Contribui para fios mais firmes e flexíveis, fortalecendo a estrutura capilar e prevenindo a quebra.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">🟣</span>
                  <div>
                    <p className="font-semibold text-gray-800">Vitamina B12</p>
                    <p className="text-gray-600">Apoia o crescimento saudável ao melhorar a circulação no couro cabeludo, estimulando o nascimento de novos fios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">🟣</span>
                  <div>
                    <p className="font-semibold text-gray-800">Resveratrol</p>
                    <p className="text-gray-600">Antioxidante natural que protege os fios contra agressões externas e sinais de envelhecimento, promovendo mais brilho e vitalidade.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-purple-100 text-purple-600 p-1 rounded-full mr-3 mt-1">🟣</span>
                  <div>
                    <p className="font-semibold text-gray-800">Silício</p>
                    <p className="text-gray-600">Mineral que atua diretamente na espessura e resistência dos fios, ajudando a deixá-los mais densos e estruturados.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;