import { Target, Users, BookOpen, Scale } from 'lucide-react';

export const guiaObjetivosData = [
  { icon: <Target className="w-6 h-6 text-[var(--color-purple-bluest)] flex-shrink-0 mt-1" />, title: 'Inclusão Digital', desc: 'Garantir acesso e uso de tecnologias digitais na educação' },
  { icon: <Users className="w-6 h-6 text-[var(--color-purple-bluest)] flex-shrink-0 mt-1" />, title: 'Competências Digitais', desc: 'Desenvolver habilidades tecnológicas em estudantes e professores' },
  { icon: <BookOpen className="w-6 h-6 text-[var(--color-purple-bluest)] flex-shrink-0 mt-1" />, title: 'Recursos Educacionais', desc: 'Promover uso de recursos digitais no processo de ensino-aprendizagem' },
  { icon: <Scale className="w-6 h-6 text-[var(--color-purple-bluest)] flex-shrink-0 mt-1" />, title: 'Equidade', desc: 'Reduzir desigualdades no acesso à educação digital' }
];

export const guiaPilaresData = [
  { number: '1', title: 'Infraestrutura', desc: 'Conectividade e equipamentos' },
  { number: '2', title: 'Competências', desc: 'Formação de estudantes e professores' },
  { number: '3', title: 'Recursos', desc: 'Conteúdos educacionais digitais' },
  { number: '4', title: 'Pesquisa', desc: 'Inovação e evidências' },
  { number: '5', title: 'Governança', desc: 'Gestão e monitoramento' }
];

export const guiaTimelineData = [
  {
    fase: 'Fase 1',
    periodo: 'Meses 1-2',
    titulo: 'Diagnóstico e Planejamento',
    itens: [
      'Avaliação da situação atual da rede',
      'Identificação de necessidades de infraestrutura',
      'Mapeamento de competências dos professores'
    ]
  },
  {
    fase: 'Fase 2',
    periodo: 'Meses 3-4',
    titulo: 'Capacitação e Estruturação',
    itens: [
      'Formação inicial dos professores',
      'Implementação de plataformas e recursos',
      'Criação de políticas internas'
    ]
  },
  {
    fase: 'Fase 3',
    periodo: 'Meses 5-6',
    titulo: 'Execução e Monitoramento',
    itens: [
      'Aplicação das competências digitais em sala',
      'Acompanhamento de indicadores',
      'Ajustes e melhorias contínuas'
    ]
  },
  {
    fase: 'Fase 4',
    periodo: 'Meses 7-12',
    titulo: 'Certificação e Consolidação',
    itens: [
      'Certificação de professores e alunos',
      'Relatórios de prestação de contas',
      'Expansão para toda a rede'
    ]
  }
];

export const guiaObrigacoesData = [
  'Garantir formação continuada em competências digitais para professores',
  'Implementar recursos educacionais digitais alinhados à BNCC',
  'Promover inclusão digital de estudantes e professores',
  'Estabelecer indicadores de monitoramento e avaliação',
  'Prestar contas dos resultados alcançados'
];
