import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CHECKOUT_LINK = "https://pay.kiwify.com.br/MuAUjqP";
const BOOK_COVER = "https://imgur.com/xFANL7N.png";

export const OfferSection: React.FC = () => {
  return (
    <div id="offer" className="relative bg-[#050505] overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-darkRed via-fireRed to-metallicGold"></div>
       
       <Section>
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            {/* Image Side */}
            <div className="order-2 md:order-1 flex justify-center relative">
                 <div className="relative z-10">
                     {/* OTIMIZAÇÃO: Removida animação contínua (bouncing) para poupar CPU e evitar repaints */}
                     <img 
                        src={BOOK_COVER}
                        alt="Ebook Forjado Pelo Fogo" 
                        loading="lazy"
                        width={400}
                        height={600}
                        className="w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-2 transition-transform duration-500"
                     />
                 </div>
            </div>

            {/* Offer Content */}
            <div className="order-1 md:order-2 space-y-8 text-center md:text-left">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif text-white uppercase mb-2">Um Guia. <br/>Uma Decisão.</h2>
                <h3 className="text-xl md:text-2xl text-metallicGold font-serif">Uma mudança de postura.</h3>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  Você não está comprando apenas um e-book.
                  Você está assumindo um <strong className="text-white">compromisso</strong> com quem você vai se tornar.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm uppercase tracking-widest text-gray-500 py-4">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-fireRed"/> Leitura Rápida</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-fireRed"/> Aplicação Diária</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-fireRed"/> Efeito Permanente</span>
                </div>
              </div>

              <div className="py-8 bg-zinc-900/30 rounded-lg border border-white/5 inline-block w-full">
                 <div className="flex items-center justify-center md:justify-start gap-4 px-6">
                    <div className="text-left">
                        <span className="text-sm text-gray-500 line-through block">De R$ 47,90</span>
                        <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                        <span className="text-2xl align-top text-gray-500 font-normal mr-1">R$</span>
                        17,90
                        </div>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10 mx-4"></div>
                    <div className="text-left text-xs text-gray-400 uppercase tracking-wider">
                        Pagamento Único<br/>
                        Acesso Vitalício
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                <Button fullWidth onClick={() => window.open(CHECKOUT_LINK, '_blank')} className="text-xl py-5">
                  QUERO FORJAR MINHA MENTE
                </Button>
                <p className="text-[10px] text-gray-600 text-center uppercase tracking-wider">
                    Compra 100% Segura via Kiwify
                </p>
              </div>
            </div>
         </div>
       </Section>
    </div>
  );
};