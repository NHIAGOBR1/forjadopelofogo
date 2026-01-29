import React from 'react';
import { Section } from './ui/Section';
import { X, Check } from 'lucide-react';

export const FilterSection: React.FC = () => {
  return (
    <div className="bg-zinc-950 border-y border-white/5">
      <Section className="space-y-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-widest mb-4">
            Esse E-book <span className="text-fireRed underline decoration-fireRed/50 underline-offset-8">Não</span> É Pra Você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Negative Filter */}
          <div className="space-y-6">
            <h3 className="text-red-500 font-bold tracking-wider text-sm uppercase mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              Feche essa página agora se:
            </h3>
            <ul className="space-y-4">
              {[
                "Você procura motivação vazia",
                "Você quer frases bonitas pra postar no Instagram",
                "Você acredita em atalhos e fórmulas mágicas",
                "Você foge da dor, da responsabilidade e da disciplina"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-400 group">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-red-900/50 group-hover:bg-red-500 transition-colors"></span>
                  <span className="group-hover:text-gray-200 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Positive Filter */}
          <div className="space-y-6 md:border-l border-white/10 md:pl-12">
            <h3 className="text-metallicGold font-bold tracking-wider text-sm uppercase mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Continue apenas se você:
            </h3>
            <ul className="space-y-4">
              {[
                "Aguenta pressão em silêncio",
                "Está cansado de perder pra própria mente",
                "Quer controle emocional, foco e disciplina real",
                "Entende que força se constrói, não se deseja"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 group">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-metallicGold/20 group-hover:bg-metallicGold transition-colors"></span>
                  <span className="font-medium group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">Se você ficou...</p>
          <p className="text-lg text-white mt-2 font-serif">Isso foi feito para você.</p>
        </div>
      </Section>
    </div>
  );
};