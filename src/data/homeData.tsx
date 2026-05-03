import { Target, Smartphone, Award, FileText } from "lucide-react";

export const partnersData = [
  {
    name: "IPESPE EDUC",
    src: "/parceiros/IPESPE.png",
  },
  {
    name: "Prefeitura A",
    src: "https://atesteme.com/wp-content/uploads/2026/03/images-e1773852672899.webp",
  },
  {
    name: "Sebrae",
    src: "https://atesteme.com/wp-content/uploads/2023/03/sebrae.png",
  },
  {
    name: "Catalisa",
    src: "https://atesteme.com/wp-content/uploads/2023/03/Catalisa-1.png",
  },
];

export const differentialsData = [
  {
    icon: <Target className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Começa de onde você está",
    description: "Diagnóstico individual mapeia o ponto de partida. Cada um caminha do seu nível, no seu ritmo."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Funciona no celular",
    description: "Mobile-first, internet fraca, sem instalação. Funciona com a infraestrutura que a sua rede tem hoje."
  },
  {
    icon: <Award className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Certificação que vale",
    description: "Reconhecida na Lei 14.533/2023, alinhada à BNCC. Vale para progressão funcional do professor."
  },
  {
    icon: <FileText className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
    title: "Prefeitura documentada",
    description: "Painel com relatórios prontos para TCM, MEC, FNDE e o conselho municipal. Auditoria sem sobressaltos."
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
    question: "O que é a Atesteme?",
    answer: "Uma plataforma gamificada para você avaliar e desenvolver suas competências digitais."
  },
  {
    question: "Como a Atesteme funciona?",
    answer: "Quando você realiza o cadastro, recebe um teste inicial com algumas questões para que entenda como funciona o nosso sistema. Com a contratação de algum dos nossos planos, você poderá escolher seu percurso de aprendizagem por meio das 16 (dezesseis) competências disponíveis. Ao alcançar o nível desejado, você poderá realizar um Teste de Certificação, com 48 questões."
  },
  {
    question: "Qualquer pessoa pode utilizá-lo?",
    answer: "Sim. Você precisa realizar um cadastro simples para ter acesso aos conteúdos e, ao fim da sua jornada, receber um certificado."
  },
  {
    question: "Como recebo um certificado?",
    answer: "Quando alcançar o nível desejado em nosso ambiente de aprendizagem, você poderá se submeter a um Teste de Certificação, com 48 questões. Caso consiga 70% das respostas certas, você conquistará um certificado no mesmo nível que o adquirido no ambiente de aprendizagem."
  }
];
