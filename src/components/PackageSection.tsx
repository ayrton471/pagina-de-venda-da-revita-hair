import React from 'react';
import { Package, MessageCircle } from 'lucide-react';

const PackageSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Tudo que você vai receber</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais do que um simples suplemento, o Revita Hair é um sistema completo para a saúde dos seus cabelos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-purple-50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Frasco com 60 cápsulas</h3>
            <p className="text-gray-600">
              Suplemento para 30 dias de tratamento, com fórmula exclusiva de nutrientes essenciais para a saúde capilar.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-purple-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Suporte exclusivo</h3>
            <p className="text-gray-600">
              Acesso ao nosso grupo VIP de WhatsApp com nutricionistas e especialistas para esclarecer suas dúvidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;