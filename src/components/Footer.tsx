
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-brand-blue underline">Política de Privacidade</a>
          <span className="hidden md:block">|</span>
          <a href="#" className="hover:text-brand-blue underline">Termos de Uso</a>
        </div>
        
        <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
          Após sair do Facebook, a responsabilidade não é deles e sim do nosso site.
        </p>
        
        <div className="text-center mt-8 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Income Leap. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
