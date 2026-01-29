import React from 'react';
import { Section } from './ui/Section';
import { Flame, Target, Shield, Anchor } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <div className="bg-[#080808] border-t border-white/5">
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-widest">
            O que acontece quando a mente é <span className="text-fireRed">forjada no fogo</span>?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { text: "Você age mesmo sem motivação", icon: Target },
            { text: "Você controla reações em vez de explodir", icon: Shield },
            { text: "Você usa a dor como combustível", icon: Flame },
            { text: "Você para de negociar com a fraqueza", icon: Anchor },
            { text: "Você cria disciplina que não depende de emoção", icon: Target },
            { text: "Você se torna imparável", icon: Flame }
          ].map((item, i) => (
            <div key={i} className="relative group p-8 bg-zinc-900/40 border border-white/5 hover:border-burntOrange/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-gray-700 group-hover:text-burntOrange transition-colors duration-500">
                <item.icon className="w-8 h-8" strokeWidth={1} />
              </div>
              <h3 className="text-gray-200 font-serif text-lg md:text-xl relative z-10 leading-relaxed group-hover:text-white">
                {item.text}
              </h3>
              <div className="absolute bottom-0 left-0 h-[2px] bg-fireRed w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-metallicGold tracking-widest text-sm uppercase font-bold">Isso não é teoria. Isso é treinamento mental aplicado.</p>
        </div>
      </Section>
    </div>
  );
};