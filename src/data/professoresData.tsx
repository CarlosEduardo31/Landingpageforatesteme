import { Lock, GraduationCap, Sparkles } from 'lucide-react';

export const professoresWhyNotBehindData = {
  oQueEnsinaram: [
    'Formação focada em pedagogia tradicional',
    'Pouco ou nenhum conteúdo sobre tecnologia',
    'Expectativa de "aprender sozinha"',
    'Medo de parecer incompetente ao pedir ajuda'
  ],
  oQueAprender: [
    'Competências digitais do básico ao avançado',
    'No seu ritmo, sem pressão ou julgamento',
    'Com validação pedagógica da BNCC',
    'Certificado que valoriza seu currículo'
  ]
};

export const professoresDiagnosisData = [
  { icon: <Lock className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-professores-warm)' }} />, title: '100% Privado', desc: 'Ninguém vê seu resultado além de você' },
  { icon: <GraduationCap className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-professores-warm)' }} />, title: 'Sem Pré-requisitos', desc: 'Funciona para qualquer nível inicial' },
  { icon: <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-professores-warm)' }} />, title: 'Rápido e Simples', desc: '15 minutos no seu celular' }
];

export const professoresStepsData = [
  { number: '1', title: 'Faça o Diagnóstico', desc: 'Responda perguntas simples sobre como você usa tecnologia no dia a dia' },
  { number: '2', title: 'Receba Sua Trilha', desc: 'Conteúdo personalizado baseado no seu nível atual' },
  { number: '3', title: 'Aprenda no Seu Ritmo', desc: 'Sem pressão, sem prazo. Você decide quando avançar' },
  { number: '4', title: 'Use em Sala', desc: 'Aplique o que aprendeu com seus alunos usando nossos planos de aula prontos' },
  { number: '5', title: 'Receba o Certificado', desc: 'Certificação nacional válida para progressão e currículo' }
];

export const professoresTestimonialsData = [
  {
    name: 'Ana Silva',
    role: 'Professora de Português',
    city: 'EMEF José de Alencar - SP',
    text: 'Descobri que tinha muito mais capacidade do que imaginava. O certificado me ajudou a ganhar mais confiança.'
  },
  {
    name: 'Maria Costa',
    role: 'Professora de Matemática',
    city: 'EMEF Santos Dumont - RJ',
    text: 'Finalmente consegui usar recursos digitais nas minhas aulas. Meus alunos amaram!'
  },
  {
    name: 'Joana Santos',
    role: 'Professora de História',
    city: 'EMEF Machado de Assis - MG',
    text: 'O melhor foi poder aprender no meu tempo, sem pressão. Recomendo para todas as colegas.'
  }
];
