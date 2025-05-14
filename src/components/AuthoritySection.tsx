import React from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';

const AuthoritySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Por que confiar no Revita Hair?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Resultados comprovados e reconhecimento no mercado
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg" 
                alt="Especialista em saúde capilar" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Desenvolvido por especialistas</h3>
              <p className="text-gray-600 mb-6">
                O Revita Hair foi criado por uma equipe multidisciplinar de especialistas em tricologia, 
                dermatologia e nutrição, após anos de pesquisas sobre saúde capilar e suplementação.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa fórmula exclusiva passou por testes rigorosos para garantir eficácia e segurança, 
                utilizando apenas ingredientes de alta qualidade que atuam em sinergia para promover 
                a saúde capilar de dentro para fora.
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" 
                  alt="Dra. Mariana Santos" 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Dra. Mariana Santos</h4>
                  <p className="text-gray-600 text-sm">Tricologista e Pesquisadora, PhD</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">+ 50.000 Clientes satisfeitas</h3>
              <p className="text-gray-600">
                Milhares de mulheres já transformaram seus cabelos com o Revita Hair e compartilham sua 
                satisfação com nosso produto.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">97% de taxa de eficácia</h3>
              <p className="text-gray-600">
                Em nossos estudos clínicos, 97% das participantes reportaram melhoria visível na saúde 
                dos cabelos após 90 dias de uso.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificações de qualidade</h3>
              <p className="text-gray-600">
                Produzido em laboratório certificado, seguindo rigorosos padrões de qualidade e segurança.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">O que dizem os especialistas</h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 italic mb-4">
                  "Como dermatologista, recomendo o Revita Hair para minhas pacientes que sofrem com queda capilar 
                  e enfraquecimento dos fios. A combinação de ingredientes ativos na dosagem ideal tem mostrado 
                  resultados impressionantes na prática clínica."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg" 
                    alt="Dr. Ricardo Mello" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dr. Ricardo Mello</h4>
                    <p className="text-gray-600 text-sm">Dermatologista, CRM 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 italic mb-4">
                  "A suplementação adequada é fundamental para a saúde capilar. O Revita Hair oferece um 
                  complexo nutricional completo que atua diretamente no metabolismo do folículo, promovendo 
                  um ciclo capilar mais saudável e estimulando o crescimento dos fios."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/5214991/pexels-photo-5214991.jpeg" 
                    alt="Dra. Carla Oliveira" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dra. Carla Oliveira</h4>
                    <p className="text-gray-600 text-sm">Nutricionista, CRN 98765</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;