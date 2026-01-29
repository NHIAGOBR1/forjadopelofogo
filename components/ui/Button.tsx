import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300
        bg-gradient-to-r from-darkRed to-fireRed hover:from-fireRed hover:to-burntOrange
        border border-transparent hover:border-metallicGold/50
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      
      {/* Shine effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] group-hover:animate-[shine_1s_ease-in-out]"></div>

      <span className="relative z-10 flex items-center justify-center gap-2 font-tech font-bold text-lg md:text-xl">
        {children}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};