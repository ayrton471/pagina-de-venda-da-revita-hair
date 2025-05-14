import React from 'react';
import { CheckCircle, Lock, ShieldCheck, Clock } from 'lucide-react';

const ObjectionsSection: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Uma conversa franca sobre o Revita Hair</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entendemos suas dúvidas e queremos deixar tudo muito claro para você
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">É realmente eficaz?</h3>
                  <p className="text-gray-600 text-sm">
                    Sim! O Revita Hair foi desenvolvido com base em estudos científicos sobre nutrição capilar. 
                    Nossa fórmula contém ingredientes com eficácia comprovada para saúde dos fios, em dosagens 
                    adequadas e bioativas. Os resultados são visíveis a partir de 30 dias de uso contínuo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Funciona para qualquer tipo de cabelo?</h3>
                  <p className="text-gray-600 text-sm">
                    Absolutamente! O Revita Hair atua de dentro para fora, fornecendo nutrientes essenciais 
                    que todos os tipos de cabelo necessitam. Seja seu cabelo liso, cacheado, crespo, tingido 
                    ou danificado por processos químicos, você verá resultados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Tem efeitos colaterais?</h3>
                  <p className="text-gray-600 text-sm">
                    O Revita Hair é formulado com ingredientes naturais e seguros. Não contém hormônios ou 
                    substâncias que causam dependência. Como todo suplemento, recomendamos consultar um 
                    médico antes de iniciar o uso, especialmente se você tem condições de saúde específicas 
                    ou está grávida.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-6">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Quanto tempo até ver resultados?</h3>
                  <p className="text-gray-600 text-sm">
                    Os primeiros resultados começam a aparecer após 30 dias de uso contínuo, com redução na queda 
                    e aumento do brilho. Para resultados mais expressivos de crescimento e espessura, o 
                    tratamento ideal é de 3 meses, período em que o ciclo capilar completa uma renovação.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">E se não funcionar para mim?</h3>
                  <p className="text-gray-600 text-sm">
                    Temos tanta confiança no Revita Hair que oferecemos garantia de satisfação de 30 dias. 
                    Se você não ficar satisfeita com os resultados nesse período, basta entrar em contato 
                    conosco e devolveremos 100% do seu investimento, sem perguntas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Como devo tomar?</h3>
                  <p className="text-gray-600 text-sm">
                    A recomendação é tomar 2 cápsulas por dia, preferencialmente com uma refeição. 
                    Cada frasco contém 60 cápsulas, suficientes para 30 dias de tratamento. Para resultados 
                    otimizados, recomendamos seguir as orientações do guia digital que acompanha o produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <Lock className="text-purple-600 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Compra 100% segura</h3>
                  <p className="text-gray-600 text-sm">Ambiente seguro com criptografia SSL</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6 md:mb-0">
                <ShieldCheck className="text-purple-600 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Satisfação garantida</h3>
                  <p className="text-gray-600 text-sm">30 dias de garantia</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="text-purple-600 mr-3" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800">Entrega expressa</h3>
                  <p className="text-gray-600 text-sm">Receba em até 7 dias úteis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;