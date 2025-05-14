import React from 'react';
import { CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Dê mais força, brilho e saúde para seus fios com <span className="text-purple-600">Revita Hair</span>
            </h1>
            
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Suplemento capilar em cápsulas</p>
              </div>
              <div className="flex items-start mb-3">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Estimula o crescimento saudável</p>
              </div>
              <div className="flex items-start mb-3">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Fortalece os fios e reduz a quebra</p>
              </div>
              <div className="flex items-start mb-3">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">Cabelos com mais brilho e volume</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/556198035499" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 duration-200"
            >
              FALE CONOSCO NO WHATSAPP
            </a>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-green-200 rounded-full opacity-50"></div>
              <img 
                src="https://i.ibb.co/6RBTmCDq/cabelo-cacheado-com-luzes-wb1.jpg" 
                alt="Mulher com cabelos longos e saudáveis" 
                className="rounded-lg shadow-xl relative z-10 w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6 transform -translate-y-16 ml-8 relative z-20 max-w-xs">
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3227799/pexels-photo-3227799.jpeg" 
                  alt="Frasco de Revita Hair" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Revita Hair</h3>
                  <p className="text-green-600 text-sm">Nutrição capilar completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;