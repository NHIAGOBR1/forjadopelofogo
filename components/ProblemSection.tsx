import React from 'react';
import { Section } from './ui/Section';
import { BrainCircuit, BatteryWarning, Lock, Zap } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <Section className="relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            O problema não é o mundo.<br/>
            <span className="text-fireRed">É uma mente despreparada.</span>
          </h2>
          <div className="h-1 w-20 bg-metallicGold mx-auto md:mx-0"></div>
        </header>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Ninguém te ensinou a lidar com pressão. Ninguém te ensinou a controlar emoções. 
              Ninguém te ensinou a agir mesmo com medo, dúvida ou cansaço.
            </p>
            <p className="font-serif text-xl text-white">
              O resultado? Você vive no limite:
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center opacity-40">
             <BrainCircuit className="w-40 h-40 text-gray-500" strokeWidth={0.5} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Zap, text: "Reage demais" },
            { icon: BrainCircuit, text: "Pensa demais" },
            { icon: Lock, text: "Trava demais" },
            { icon: BatteryWarning, text: "Cansa rápido" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-sm text-center hover:bg-white/10 transition-colors duration-300 group">
              <div className="mb-3 text-gray-500 group-hover:text-fireRed transition-colors flex justify-center">
                <item.icon className="w-8 h-8"/>
              </div>
              <p className="text-gray-300 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-900/10 border-l-4 border-fireRed p-6">
          <p className="text-gray-400 italic">
            Não porque você é fraco. Mas porque nunca foi <strong className="text-white not-italic">treinado mentalmente</strong> para a guerra da vida real.
          </p>
        </div>
      </div>
    </Section>
  );
};