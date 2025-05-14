import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-sm z-50 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-purple-600">Revita Hair</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#benefits" className="text-gray-600 hover:text-purple-600 transition-colors">Benefícios</a>
          <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Depoimentos</a>
          <a href="#solution" className="text-gray-600 hover:text-purple-600 transition-colors">Como Funciona</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Preços</a>
          <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;