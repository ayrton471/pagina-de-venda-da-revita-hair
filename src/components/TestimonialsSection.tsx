import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  quote: string;
  imageSrc: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, quote, imageSrc, rating = 5 }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <img src={imageSrc} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-purple-200" />
        <div className="ml-4">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <div className="flex">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <Quote size={24} className="text-purple-200 absolute -top-2 -left-1" />
        <p className="text-gray-600 italic pl-6">{quote}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Resultados reais de pessoas reais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Veja o que nossas clientes estão dizendo sobre o Revita Hair</p>
          <img 
            src="https://i.ibb.co/6J0d1kfX/PHOTO-2025-04-08-15-51-48.jpg"
            alt="Resultados reais com Revita Hair"
            className="max-w-2xl w-full h-auto mx-auto mt-8 rounded-lg shadow-lg"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Mariana Silva" 
            quote="Meu cabelo nunca cresceu tão rápido! Comecei a usar Revita Hair há 2 meses e já notei uma diferença incrível."
            imageSrc="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
          />
          
          <TestimonialCard 
            name="Camila Santos" 
            quote="Fiquei chocada com a diferença em poucas semanas. Meu cabelo está mais forte e com muito menos queda."
            imageSrc="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg" 
          />
          
          <TestimonialCard 
            name="Juliana Costa" 
            quote="Depois de anos tentando vários produtos, finalmente encontrei algo que realmente funciona. Meus fios estão mais grossos e brilhantes!"
            imageSrc="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
          />
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex space-x-4">
                <img 
                  src="https://i.ibb.co/Y7FdqSxX/f6edb04a3637d4a1c9a5154b0638b722.jpg" 
                  alt="Antes do tratamento" 
                  className="w-1/2 rounded-lg shadow-md"
                />
                <img 
                  src="https://i.ibb.co/Y7FdqSxX/f6edb04a3637d4a1c9a5154b0638b722.jpg" 
                  alt="Depois do tratamento" 
                  className="w-1/2 rounded-lg shadow-md"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">Antes e depois de 3 meses de uso</p>
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transformação real em 90 dias</h3>
              <p className="text-gray-600 mb-4">
                "Eu tentei vários produtos para combater a queda de cabelo e estimular o crescimento, mas nada funcionava. Com Revita Hair, em apenas 3 meses, meu cabelo ficou visivelmente mais forte, denso e com um crescimento que me surpreendeu!"
              </p>
              <p className="font-semibold text-purple-600">- Patrícia Mendes, 34 anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;