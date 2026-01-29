import React from 'react';
import { Section } from './ui/Section';

const SENNA_IMG = "https://i.imgur.com/ZNyNN6y.jpeg";

export const AuthoritySection: React.FC = () => {
  return (
    <div className="bg-black border-y border-white/5 overflow-hidden">
      <Section className="py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                {/* OTIMIZAÇÃO: Loading lazy e dimensões explícitas */}
                <img 
                  src={SENNA_IMG} 
                  alt="Ayrton Senna"
                  loading="lazy"
                  width={600}
                  height={400} 
                  className="relative z-0 w-full rounded-sm filter grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100 object-cover" 
                />
                <p className="text-[10px] text-gray-600 mt-2 text-center uppercase tracking-widest">Exemplo de Foco Absoluto</p>
            </div>

            <div className="space-y-8 order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-wide">
                  A Mentalidade dos <br/><span className="text-fireRed">Grandes Vencedores</span>
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Você acha que lendas como <strong>Ayrton Senna</strong> venciam apenas pelo talento no volante? 
                  Não. Eles venciam porque tinham uma <strong>mente inabalável</strong>.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Senna sabia pilotar na chuva quando todos tinham medo. Ele mantinha a calma no caos. 
                  Essa é a essência do <strong className="text-white">Forjado Pelo Fogo</strong>: não importa a sua profissão, 
                  se você tiver controle emocional e disciplina, você domina o seu destino.
                </p>

                <div className="bg-white/5 p-6 border-l-2 border-metallicGold mt-6">
                    <p className="text-gray-400 italic text-sm">
                        "Na adversidade, uns desistem, enquanto outros batem recordes."
                    </p>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};