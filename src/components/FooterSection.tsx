import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, CreditCard, MessageCircle } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Revita Hair</h3>
            <p className="text-gray-300 mb-4">
              Suplemento capilar desenvolvido para fortalecer, nutrir e estimular o crescimento saudável dos seus cabelos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-purple-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-purple-400 transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Preços</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-purple-400 mr-2 mt-1" />
                <span className="text-gray-300">contato@revitahair.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-purple-400 mr-2 mt-1" />
                <span className="text-gray-300">(11) 3456-7890</span>
              </li>
              <li className="flex items-start">
                <MessageCircle size={18} className="text-purple-400 mr-2 mt-1" />
                <span className="text-gray-300">WhatsApp: (11) 98765-4321</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Formas de Pagamento</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-gray-700 p-2 rounded">
                <CreditCard size={24} className="text-gray-300" />
              </div>
              <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                <span className="text-gray-300 text-xs font-bold">BOLETO</span>
              </div>
              <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                <span className="text-gray-300 text-xs font-bold">PIX</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Até 12x no cartão de crédito ou pix e boleto
            </p>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">⚠️ DÚVIDAS SOBRE COMPRAR PELA INTERNET?</h3>
          <p className="text-gray-300 mb-4">Evite cair em golpes e comprar produtos falsificados.</p>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="https://i.ibb.co/v4HLqtr5/2431e6b6-f2b9-41c2-bf2d-ede5a4998eaa.jpg"
                alt="Aviso sobre produtos originais"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="md:w-2/3 space-y-3">
              <p className="text-gray-300 flex items-start">
                <span className="text-red-500 mr-2">🚫</span>
                Não comercializamos no Mercado Livre, OLX ou Shopee.
              </p>
              <p className="text-gray-300">
                Nossos frascos originais são vendidos apenas por representantes autorizados e em nosso site oficial.
              </p>
              <p className="text-gray-300 flex items-start">
                <span className="text-green-500 mr-2">✅</span>
                Compre com segurança e garantia de procedência.
              </p>
              <p className="text-gray-300">
                Este é o único canal 100% confiável para garantir que você está recebendo o produto original.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Revita Hair. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-500 text-xs text-center">
              CNPJ: 12.345.678/0001-90 | Razão Social: Revita Suplementos LTDA
              <br />
              Av. Paulista, 1000 - Bela Vista - São Paulo/SP - CEP: 01310-100
            </p>
            <p className="text-gray-500 text-xs text-center mt-3">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
              <br />
              Os resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;