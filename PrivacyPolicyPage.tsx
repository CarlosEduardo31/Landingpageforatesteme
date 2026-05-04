import Navbar from "./src/app/components/shared/Navbar";
import Footer from "./src/app/components/shared/Footer";

// Componentes auxiliares para manter a consistência de estilo
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-2xl md:text-3xl font-bold mt-10 mb-4"
    style={{ color: "var(--color-obsidian)" }}
  >
    {children}
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-relaxed text-gray-700">{children}</p>
);

const Ul = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc list-inside space-y-2 my-4 pl-4">{children}</ul>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="leading-relaxed text-gray-700">{children}</li>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysSolid />
      <main className="pt-32 pb-20 text-base md:text-lg">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ color: "var(--color-obsidian)" }}
          >
            Política de Privacidade
          </h1>

          <div className="space-y-6">
            <P>
              Como parte de nossa missão em ajudar estudantes, professores e
              profissionais a melhorarem suas competências e habilidades
              digitais, a Plataforma ATESTEME trata algumas informações e Dados
              Pessoais de seus Usuários. Esta Política de Privacidade destina-se
              a ajudá-lo a entender melhor sobre esse tratamento. De acordo com
              a lei 13.709 – Lei Geral de Proteção de Dados (LGPD) define-se
              como tratamento toda operação realizada com Dados Pessoais, como
              as que se referem a: coleta, produção, recepção, classificação,
              utilização, acesso, reprodução, transmissão, distribuição,
              processamento, arquivamento, armazenamento, eliminação, avaliação
              ou controle da informação, modificação, comunicação,
              transferência, difusão ou extração.
            </P>
            <P>
              Para fins desta Política, os termos abaixo possuem as seguintes
              definições:
            </P>
            <Ul>
              <Li>
                <strong>Usuário:</strong> toda pessoa que acessa a Plataforma
                ATESTEME
              </Li>
              <Li>
                <strong>Dados pessoais:</strong> Informação relacionada a pessoa
                física ou jurídica identificada ou identificável.
              </Li>
              <Li>
                <strong>Controlador:</strong> pessoa natural ou jurídica, de
                direito público ou privado, a quem competem as decisões
                referentes ao tratamento de Dados Pessoais.
              </Li>
              <Li>
                <strong>Serviços:</strong> Os serviços e produtos oferecidos
                pela plataforma ATESTEME sob os Termos de Uso incluem aqueles
                para ajudar o Usuário a melhorar os seus estudos.
              </Li>
            </Ul>
            <P>
              Temos o compromisso de respeitar e proteger sua privacidade e
              envidamos nossos melhores esforços (i) para que a segurança sobre
              seus Dados Pessoais esteja incorporada em toda operação, (ii) para
              o estabelecimento de relações comerciais com parceiros e terceiros
              que garantam o tratamento de seus Dados Pessoais de forma segura,
              (iii) para dar transparência sobre como será realizado o
              tratamento de seus Dados Pessoais não usando de forma diferente da
              que tenha sido informada e respeitando suas escolhas.
            </P>
            <P>
              Esta Política de Privacidade fornece uma visão sobre a forma que a
              ATESTEME trata suas informações e seus Dados Pessoais nas
              situações, a depender de sua interação conosco.
            </P>
            <P>
              De forma transparente e clara definimos abaixo os tipos de dados
              que podemos coletar e receber de você de forma direta, como
              podemos usar e compartilhar suas informações, as medidas de
              segurança que adotamos e os seus direitos com relação aos seus
              Dados Pessoais.
            </P>
            <P>
              A aceitação da nossa Política será feita quando você permitir
              através do cadastro em nosso site. Tal aceitação se dará mediante
              o momento em que você, de forma afirmativa, concordar com o uso
              dos seus dados para cada uma das finalidades por nós aqui
              descritas. Isso indicará que você está ciente e em total acordo
              com a forma como utilizaremos as suas informações e os seus dados
              pessoais. Caso não concorde com esta Política, por favor,
              informe-nos a sua discordância para que possamos melhorá-la.
            </P>

            <H2>INTRODUÇÃO</H2>
            <P>
              Quando você contrata os serviços da Plataforma ATESTEME,você nos
              fornece os seus dados pessoais para que possamos viabilizar a
              prestação dos nossos serviços e também para te entregar a melhor
              experiência possível.
            </P>
            <P>
              Na ATESTEME, privacidade, segurança e transparência são valores
              fundamentais e sempre adotaremos as melhores práticas para
              garantir a confidencialidade e integridade dos seus dados
              pessoais.
            </P>
            <P>
              Além disso, burocracia, letras miúdas e asteriscos não fazem parte
              da nossa missão. Por isso, desenvolvemos essa Política de
              Privacidade para explicar, de uma forma clara, simples e objetiva,
              as nossas práticas, como os seus dados pessoais são tratados e o
              porquê pedimos.
            </P>
            <P>
              Ao aceitar os termos dessa Política de Privacidade, você está
              ciente de que a controladora dos seus dados pessoais, ou seja, a
              empresa responsável por tomar as decisões sobre o tratamento dos
              seus dados pessoais será a SP & AS DESENVOLVIMENTO EDUCACIONAL
              LTDA, nome fantasia VERBUS EDUCACIONAL, pessoa jurídica de direito
              privado, inscrita no CNPJ sob o nº 23.019.552/0001-47, com sede
              instalada na cidade de Recife, estado de Pernambuco, CEP
              50.030-200.
            </P>
            <P>
              Após a leitura desta Política de Privacidade, se você tiver
              dúvidas, reclamações, quiser exercer seus direitos relacionados
              aos seus dados pessoais ou se comunicar conosco sobre esse
              assunto, você pode entrar em contato pelos nossos canais de
              atendimento ou contatar o nosso encarregado de dados (DPO) pelo
              e-mail contato@atesteme.com.
            </P>

            <H2>APLICAÇÃO DESTA POLÍTICA</H2>
            <P>
              Disponibilizamos ao público geral nosso website com o objetivo de
              trazer informações sobre os nossos serviços e como contratá-los;
              disponibilizar conteúdos gratuitos para os usuários; divulgar
              produtos, eventos e demais materiais produzidos pela ATESTEME ou
              pelos nossos parceiros, criando um canal de comunicação entre nós.
            </P>
            <P>
              Esta política se aplica aos tratamentos de dados pessoais
              realizados pela plataforma ATESTEME para prestar seus serviços e
              disponibilizar nosso site.
            </P>
            <P>
              Para fins de esclarecimento, dado pessoal é qualquer informação
              que possa identificar direta ou indiretamente alguém, como, por
              exemplo, seu nome, telefone, endereço de IP e e-mail (“Dados
              Pessoais”).
            </P>
            <P>
              A aceitação desta Política será feita quando você acessar nosso
              site e/ou usufruir dos nossos serviços, mesmo que de forma
              gratuita. Isso indicará que você está ciente e em total acordo com
              a forma como utilizaremos as suas informações e seus dados
              pessoais.
            </P>

            <H2>DADOS PESSOAIS COLETADOS</H2>
            <P>
              A ATESTEME realizará a coleta de dados que o usuário do site
              voluntariamente fornecer, registros de acessos e informações
              geradas quando o usuário acessar a plataforma. A quantidade e o
              tipo de informações coletadas pela ATESTEME variam conforme o
              contexto, tipo de serviço ou conteúdo que o usuário busca.
            </P>
            <P>
              A ATESTEME poderá ter acesso a e realizar tratamento das seguintes
              informações pessoais dos TITULARES, de maneira isolada ou
              cumulativa:
            </P>
            <Ul>
              <Li>Nome completo do Titular;</Li>
              <Li>
                Nome completo do Responsável (empresas ou titular menor de
                idade);
              </Li>
              <Li>Razão social;</Li>
              <Li>E-mail;</Li>
              <Li>Número de telefone (móvel);</Li>
              <Li>Número do CPF;</Li>
              <Li>Número do CNPJ;</Li>
              <Li>Quantidade de estudantes, professores ou colaboradores;</Li>
              <Li>Data de nascimento;</Li>
              <Li>Fotografia;</Li>
              <Li>
                Áudio e vídeo do ambiente em que os TITULARES se encontram para
                realizar determinada avaliação;
              </Li>
              <Li>
                Informações de frequência e assiduidade dos TITULARES no acesso
                aos conteúdos ministrados pela instituição de ensino e
                disponibilizados na ATESTEME;
              </Li>
              <Li>Endereço residencial completo;</Li>
              <Li>Endereço profissional completo;</Li>
              <Li>Instituição de ensino à qual esteja vinculado;</Li>
              <Li>
                Natureza do vínculo (aluno, empregado, prestador de serviços,
                dentre outros);
              </Li>
              <Li>Cargo ocupado na instituição de ensino;</Li>
              <Li>4 (quatro) últimos dígitos do cartão de crédito;</Li>
              <Li>Conteúdo das comunicações realizadas com a ATESTEME</Li>
            </Ul>
            <P>
              As informações serão fornecidas à ATESTEME pelas CONTROLADORAS ou
              pelos TITULARES, no âmbito da contratação, implantação e
              utilização dos nossos serviços.
            </P>
            <P>
              <strong>
                2.1 Dados pessoais do Responsável pelo estudante (quando menor
                de idade):
              </strong>{" "}
              nome completo, CPF, telefone e e-mail.
            </P>
            <P>
              <strong>
                2.2 Coletamos seus dados diretamente de você ou é possível que
                recebamos informações sobre você de terceiro, através de:
              </strong>{" "}
              Criação e/ou atualização de cadastro/perfil em uma conta da
              ATESTEME; Dados recebidos de terceiros ou por login social;
              Realização de pesquisas pela ATESTEME; Compra de Serviços da
              ATESTEME; Contato por diversos meios tais como telefone e
              mensagens enviadas por e-mail ou por aplicativo de mensagens
              instantâneas; Visitas ao nosso site/app; Navegação em sites na
              internet; Informações coletadas por cookies.
            </P>
            <P>
              <strong>2.2.1</strong> Quando você visita o website da ATESTEME
              e/ou acessa nossos Serviços, enviamos um ou mais cookies – um
              pequeno arquivo de texto contendo uma cadeia de caracteres
              alfanuméricos – ao seu computador ou smartphone, que identifica
              exclusivamente o seu navegador e permite que a ATESTEME ajude você
              a fazer login mais rapidamente e a navegar pelo website/app. Um
              cookie também pode nos transmitir informações sobre como você usa
              o Serviço (por exemplo, as páginas que você visualiza, os links em
              que você clica e outras ações executadas) e permite que a ATESTEME
              rastreie o uso do Serviço ao longo do tempo. Através deles também
              podemos coletar dados analíticos diretamente ou usar ferramentas
              de análise de terceiros para nos ajudar a avaliar tendências de
              tráfego e uso do Serviço. Essas ferramentas coletam informações
              enviadas pelo seu navegador ou dispositivo móvel que nos auxiliam
              na melhoria do Serviço
            </P>
            <P>
              <strong>2.2.2</strong> As informações do arquivo de log também são
              automaticamente informadas pelo seu navegador ou dispositivo móvel
              sempre que você acessa o website/app da ATESTEME são registradas
              pelos nossos servidores. A guarda de logs está de acordo com o que
              estabelece a Lei nº 12.965/2014, arts. 15 a 17. Você pode
              controlar ou redefinir seus cookies através do seu navegador da
              Web. No entanto, alguns recursos do Serviço podem não funcionar
              corretamente se a capacidade de aceitar cookies estiver
              desativada.
            </P>

            {/* O restante do conteúdo da política de privacidade segue a mesma estrutura */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
