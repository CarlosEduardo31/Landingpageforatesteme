import { Search, BookOpen, GraduationCap, Gamepad2, FileText } from "lucide-react";

export const partnersData = [
  {
    name: "Garanhuns",
    src: "/parceiros/logo_garanhuns.png",
  },
  {
    name: "Cabo de Santo Agostinho",
    src: "/parceiros/logo_cabo.svg",
  },
  {
    name: "São Bento do Una",
    src: "/parceiros/logo_saobentodouna.png",
  },
  {
    name: "Toritama",
    src: "/parceiros/logo_toritama.png",
  },
  {
    name: "IPESPE EDUC",
    src: "/parceiros/IPESPE.png",
  },
  {
    name: "IBDG",
    src: "https://atesteme.com/wp-content/uploads/2026/03/images-e1773852672899.webp",
  },

];

export const differentialsData = [
  {
    icon: <Search className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Diagnóstico Tecnológico",
    description: "Avaliam-se as condições tecnológicas das escolas da rede para emitir relatório."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Atualização Curricular",
    description: "Grupo de docentes adaptam o currículo da rede à educação digital e midiática."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Formação de Professores",
    description: "Pactua-se um cronograma de formação de professores nas modalidades presencial e on-line."
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Acesso à Plataforma Digital",
    description: "Professores e alunos recebem acesso à plataforma gamificada para desenvolverem competências digitais."
  },
  {
    icon: <FileText className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Relatórios Personalizados de Progressão",
    description: "Usuários e gestores de educação acompanham os avanços conquistados em tempo real, para validação pelo MEC."
  }
];

export const stepsData = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Mapeamos as competências digitais de cada professor da rede municipal.",
  },
  {
    number: "02",
    title: "Trilha Adaptativa",
    description: "Cada professor recebe uma jornada personalizada no celular, com tutor humano.",
  },
  {
    number: "03",
    title: "Plano de Aula",
    description: "Materiais práticos que o professor leva para a sala no dia seguinte.",
  },
  {
    number: "04",
    title: "Painel + Certificação",
    description: "A prefeitura documenta o cumprimento da PNED. O professor recebe certificado nacional.",
  },
];

export const pricingFeatures = {
  essencial: [
    "Diagnóstico individual",
    "Trilhas adaptativas básicas",
    "Painel da Secretaria",
    "Certificação nacional",
    "Suporte por e-mail",
  ],
  completa: [
    "Tudo do Essencial",
    "Tutoria humana por escola",
    "Planos de aula práticos",
    "Relatórios PNED para TCM/MEC",
    "Onboarding presencial da equipe",
    "Suporte WhatsApp + e-mail",
  ],
  institucional: [
    "Tudo da Completa",
    "Customização da trilha por rede",
    "Integração com sistemas da SEDUC",
    "Gestor de conta dedicado",
    "Relatórios sob demanda",
    "SLA garantido",
  ]
};

export const faqData = [
  {
    question: "O que faz o Programa de Educação Digital Atesteme?",
    answer: "Ajuda redes públicas e particulares de ensino a implementar educação digital e midiática no currículo escolar habilitando-se a receber o Valor Aluno Ano Resultado – VAAR."
  },
  {
    question: "Como a Atesteme funciona?",
    answer: "A equipe de tecnólogos realiza um diagnóstico completo de cada unidade escolar, revelando como estão e como devem ficar para receber o Atesteme. Aceita a proposta, a equipe de consultores educacionais se reúne com os gestores para iniciar a atualização do currículo da rede com educação digital com adaptação do Plano Político Pedagógico de cada escola da rede. Organiza-se um cronograma de formação de todos os professores da rede de forma presencial e on-line para aqueles que lecionarão o novo componente curricular. Professores e alunos são embarcados na plataforma de educação digital com exames de certificação como determina a PNED e Resolução do CNE. Os consultores enviam à rede relatórios de desempenho por perfil de usuário, por escola e por regional para monitoramento de uso e de progresso. Gestores da rede escrevem o relatório de implementação da educação digital para envio e validação pelo MEC. "
  },
  {
    question: "Quem pode contratar o Programa de Educação Digital Atesteme?",
    answer: "Todas as redes pública e particular podem solicitar uma apresentação gratuita para conhecer e contratar o programa para desenvolver o Letramento Digital de seus professores e alunos. Dispomos todas as certificações e atestados exigidos para a contratação pelo setor público seja por inexigibilidade, licitação, convênio, termo de cooperação técnica entre outros."
  }
];
