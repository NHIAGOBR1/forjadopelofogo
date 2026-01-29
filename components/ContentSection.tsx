import React from 'react';
import { Section } from './ui/Section';
import { BookOpen, Shield, Zap, Target, Flag, Activity, Crown, Eye, User } from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  { icon: User, title: "O Homem Que Não Se Dobra", desc: "Como usar as leis do poder, não ofuscar o mestre e concentrar forças para vencer." },
  { icon: Shield, title: "O Homem Invencível", desc: "Controle mental como arma e como transformar a dor inevitável em força." },
  { icon: Target, title: "Dominando o Destino", desc: "Estoicismo aplicado: assumindo responsabilidade total e criando o próprio caminho." },
  { icon: Activity, title: "Serenidade no Caos", desc: "Como manter a calma absoluta e não reagir impulsivamente sob pressão." },
  { icon: Crown, title: "A Mente Blindada", desc: "Autoridade inabalável, autoconhecimento e o poder do silêncio." },
  { icon: Flag, title: "Império da Autodeterminação", desc: "Planejamento, lei do desapego e a arte da resiliência." },
  { icon: Eye, title: "O Jogo da Percepção", desc: "Como controlar como os outros te enxergam, mistério e imagem pessoal." },
  { icon: Zap, title: "A Mente Inquebrantável", desc: "Enfrentando o inimigo interno: medo, dúvida e procrastinação." },
  { icon: BookOpen, title: "A Rotina do Homem Inabalável", desc: "Construindo hábitos diários, manhã e noite, para sustentar a disciplina." },
];

export const ContentSection: React.FC = () => {
  return (
    <Section className="space-y-16">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Correção: lg:sticky aplica o efeito apenas em desktop. top-24 dá um respiro do topo. */}
        <div className="flex-1 space-y-8 lg:sticky lg:top-24 self-start">
           <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
             O QUE EXISTE DENTRO DE<br/>
             <span className="text-metallicGold">FORJADO PELO FOGO</span>
           </h2>
           <p className="text-gray-300 text-lg font-medium leading-relaxed">
             Tudo explicado de forma direta. Sem misticismo. Sem enrolação.
             <br/><br/>
             Um manual prático de 10 capítulos (e mais!) que dissecam a mentalidade de quem vence na vida real.
           </p>
           
           <div className="p-6 bg-white/5 border-l-4 border-metallicGold">
             <p className="text-gray-300 italic">
               "A mudança que você quer exige esforço. Se você aplicar o que vai aprender aqui, você será mais forte."
             </p>
           </div>
        </div>
        
        <div className="flex-1 w-full grid gap-4">
          {modules.map((mod, i) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              key={i} 
              className="flex items-start gap-4 p-5 bg-zinc-900/50 border-b border-white/5 hover:bg-zinc-800/50 transition-all rounded-sm group"
            >
              <div className="mt-1">
                <mod.icon className="w-5 h-5 text-metallicGold" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base uppercase tracking-wider mb-1 group-hover:text-fireRed transition-colors">{mod.title}</h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};