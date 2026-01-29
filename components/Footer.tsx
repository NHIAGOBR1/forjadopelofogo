import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 md:py-20 border-t border-white/5 text-center px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <blockquote className="font-serif text-xl md:text-2xl text-gray-300 leading-relaxed">
          “O mundo não vai te dar trégua. <br/>
          Ou você se fortalece… ou ele te derruba. <br/>
          <span className="text-white font-bold">A escolha é sua.</span>”
        </blockquote>
        
        <div className="w-12 h-[1px] bg-fireRed mx-auto"></div>
        
        <div className="text-gray-600 text-sm tracking-widest uppercase">
          Autor: Thiago Costa
        </div>
        
        <p className="text-xs text-gray-800 mt-12">
          © {new Date().getFullYear()} Forjado Pelo Fogo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};