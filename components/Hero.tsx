import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';

const CHECKOUT_LINK = "https://pay.kiwify.com.br/MuAUjqP";
const BOOK_COVER = "https://imgur.com/xFANL7N.png";

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deepBlack pt-20 md:pt-0">
      {/* Background Ambience - Static for performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-darkRed/30 via-deepBlack to-deepBlack opacity-80"></div>
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-deepBlack to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Título sem gradiente para evitar serrilhado */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter text-white drop-shadow-2xl mb-2">
              FORJADO <br/>
              <span className="text-fireRed">PELO FOGO</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              Desenvolva uma mente estoica, blindada e preparada para vencer qualquer batalha — <span className="text-metallicGold font-semibold">principalmente as que ninguém vê.</span>
            </h2>

            <div className="bg-white/5 border-l-2 border-fireRed p-6 rounded-r-sm backdrop-blur-sm">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  O mundo não vai pegar leve com você. A pressão não vai diminuir. 
                  A única coisa que pode mudar… <strong className="text-white">é quem você se torna diante disso.</strong>
                </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.5 }}
             className="pt-4"
          >
            <Button onClick={() => window.open(CHECKOUT_LINK, '_blank')} className="shadow-lg shadow-fireRed/20">
              QUERO FORTALECER MINHA MENTE
            </Button>
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">
              Acesso Imediato • Leitura Digital
            </p>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          style={{ y: y1 }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-fireRed/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={BOOK_COVER}
            alt="Capa do Livro Forjado Pelo Fogo"
            className="relative z-10 w-full max-w-sm md:max-w-md drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-600"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-fireRed to-transparent opacity-50"></div>
      </motion.div>
    </div>
  );
};