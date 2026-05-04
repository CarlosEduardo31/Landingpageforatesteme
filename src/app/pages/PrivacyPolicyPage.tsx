import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

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
              Quando você contrata os serviços da{" "}
              <strong>Plataforma ATESTEME</strong>,você nos fornece os seus
              dados pessoais para que possamos viabilizar a prestação dos nossos
              serviços e também para te entregar a melhor experiência possível.
            </P>
            <P>
              Na <strong>ATESTEME</strong>, privacidade, segurança e
              transparência são valores fundamentais e sempre adotaremos as
              melhores práticas para garantir a confidencialidade e integridade
              dos seus dados pessoais.
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

            <H2>1. APLICAÇÃO DESTA POLÍTICA</H2>
            <P>
              Disponibilizamos ao público geral nosso website com o objetivo de
              trazer informações sobre os nossos serviços e como contratá-los;
              disponibilizar conteúdos gratuitos para os usuários; divulgar
              produtos, eventos e demais materiais produzidos pela{" "}
              <strong>ATESTEME</strong> ou pelos nossos parceiros, criando um
              canal de comunicação entre nós.
            </P>
            <P>
              Esta política se aplica aos tratamentos de dados pessoais
              realizados pela <strong>plataforma ATESTEME</strong> para prestar
              seus serviços e disponibilizar nosso site.
            </P>
            <P>
              Para fins de esclarecimento, dado pessoal é qualquer informação
              que possa identificar direta ou indiretamente alguém, como, por
              exemplo, seu nome, telefone, endereço de IP e e-mail (“Dados
              Pessoais”).
            </P>
            <P>
              <strong>
                A aceitação desta Política será feita quando você acessar nosso
                site e/ou usufruir dos nossos serviços, mesmo que de forma
                gratuita. Isso indicará que você está ciente e em total acordo
                com a forma como utilizaremos as suas informações e seus dados
                pessoais.
              </strong>
            </P>

            <H2>2. DADOS PESSOAIS COLETADOS</H2>
            <P>
              A <strong>ATESTEME</strong> realizará a coleta de dados que o
              usuário do site voluntariamente fornecer, registros de acessos e
              informações geradas quando o usuário acessar a plataforma. A
              quantidade e o tipo de informações coletadas pela{" "}
              <strong>ATESTEME</strong> variam conforme o contexto, tipo de
              serviço ou conteúdo que o usuário busca.
            </P>
            <P>
              A <strong>ATESTEME</strong> poderá ter acesso a e realizar
              tratamento das seguintes informações pessoais dos TITULARES, de
              maneira isolada ou cumulativa:
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

            <H2>3. FINALIDADES DO TRATAMENTO</H2>
            <P>
              A ATESTEME poderá tratar os dados pessoais dos TITULARES para as
              seguintes finalidades:
            </P>
            <Ul>
              <Li>
                Oferta de produtos e serviços a novas instituições de ensino às
                quais o TITULAR esteja vinculado;
              </Li>
              <Li>
                Identificação pessoal, controle e autenticação de acesso dos
                TITULARES à ATESTENE, inclusive por reconhecimento facial;
                Apuração do desempenho em provas e demais atividades
                avaliativas;
              </Li>
              <Li>
                Mapeamento do cenário e modelo educacional das INSTITUIÇÕES para
                integração entre o conteúdo e a plataforma PROVA FÁCIL;
              </Li>
              <Li>
                Compartilhamento com empresas parceiras, mediante informação
                prévia ao TITULAR e mediante consentimento deste, para
                viabilizar a gestão acadêmica das INSTITUIÇÕES;
              </Li>
              <Li>
                Geração de relatórios acadêmicos e financeiros, quando
                solicitado pelas INSTITUIÇÕES;
              </Li>
              <Li>
                Geração de relatórios e de atividades avaliativas para gestão
                acadêmica pelas INSTITUIÇÕES;
              </Li>
              <Li>
                Fornecimento de indicadores com base no desempenho acadêmico dos
                TITULARES e atribuição de determinados graus de proficiência
                para classificação em níveis de aprendizagem para gestão
                acadêmica pelas INSTITUIÇÕES;
              </Li>
              <Li>
                Verificação de comportamento suspeito dos TITULARES durante a
                realização de atividades avaliativas ou exames de admissão, de
                forma automatizada pela ATESTEME ou mediante geração de
                relatório a ser avaliado pelas INSTITUIÇÕES;
              </Li>
              <Li>Realização de pesquisas de satisfação de compra;</Li>
              <Li>Aprimoramento das funcionalidades da ATESTEME;</Li>
              <Li>
                Entendimento, diagnóstico e solução de problemas no
                funcionamento da ATESTEME;
              </Li>
              <Li>
                Proteção dos créditos das INSTITUIÇÕES junto aos TITULARES;
              </Li>
              <Li>
                Tratamentos obrigatórios na forma da lei ou de regulamento, ou
                exigidos por ordem judicial, arbitral ou administrativa a que a
                ATESTEME esteja sujeita;
              </Li>
              <Li>
                Defesa dos interesses ou direitos da ATESTEME no âmbito de
                processos judiciais, arbitrais ou administrativos.
              </Li>
            </Ul>
            <P>
              A ATESTEME poderá construir de forma automatizada relatórios de
              análise do perfil acadêmico do titular baseados em seu histórico
              de aprendizado e performance em atividades acadêmicas realizadas,
              sempre mediante solicitação das instituições.
            </P>
            <P>
              As INSTITUIÇÕES que solicitarem a utilização de tal funcionalidade
              serão responsáveis por obter o consentimento informado dos
              TITULARES para fazê-lo, sempre que necessário na forma da
              legislação vigente.
            </P>
            <P>
              O TITULAR poderá solicitar a revisão de seu perfil construído de
              forma automatizada, cabendo às INSTITUIÇÕES processar tais
              requerimentos e proceder às revisões necessárias.
            </P>

            <H2>4. BASE LEGAL PARA O TRATAMENTO DE DADOS</H2>
            <P>
              A ATESTEME trata seus Dados Pessoais de acordo com as bases legais
              previstas na lei 13.709/2018, conforme a finalidade do tratamento.
              Tais bases legais incluem:
            </P>
            <Ul>
              <Li>
                Execução dos Serviços: execução dos contratos e procedimentos
                contratuais preliminares;
              </Li>
              <Li>
                Cumprimento de obrigação: legal ou regulatória pela ATESTEME;
              </Li>
              <Li>
                Exercício regular de direitos: em processo judicial,
                administrativo ou arbitral;
              </Li>
              <Li>
                Interesses legítimos: apoio e promoção de atividades da
                ATESTEME, exceto no caso de prevalecerem seus direitos e
                liberdades fundamentais;
              </Li>
              <Li>
                Consentimento: nos casos em que haja necessidade, de acordo com
                a legislação vigente.
              </Li>
            </Ul>
            <P>
              Nos casos em que seu consentimento seja a base legal para
              tratamento de seus Dados Pessoais, você terá o direito de negá-lo
              ou de solicitar sua revogação a qualquer momento por meio dos
              canais de atendimento.
            </P>
            <P>
              Ressaltamos que tais recusas podem impactar na interrupção parcial
              ou total da prestação dos Serviços da ATESTEME para você.
            </P>

            <H2>5. PARCERIAS PARA HOSPEDAGEM DAS INFORMAÇÕES</H2>
            <P>
              Os Dados Pessoais que coletamos podem ser transferidos e
              armazenados fora do Brasil, de forma legal e com a devida
              proteção. Envidamos nossos melhores esforços para manter seus
              Dados Pessoais armazenados em locais que tenham medidas adequadas
              de segurança da informação para a prevenção de acesso não
              autorizado, inclusive em países ou organismos internacionais cujo
              grau de proteção de dados seja equivalente ao previsto na LGPD.
            </P>
            <P>
              <strong>5.1</strong> A ATESTEME hospeda as informações dos
              TITULARES em servidores de terceiros ("PARCEIRO"). Nesse caso, o
              PARCEIRO realizará exclusivamente o armazenamento dos dados
              tratados por meio da ATESTEME em um servidor em nuvem. A proteção
              dos dados ali armazenados será 100% garantida pelo PARCEIRO, que
              garante à ATESTEME que não terá acesso aos dados e não irá
              compartilhá-los com terceiros. Seguem as principais informações
              sobre as empresas parceiras da ATESTEME, incluindo os meios de
              contato direto com os responsáveis pela proteção à privacidade dos
              TITULARES:
            </P>
            <div className="my-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-gray-700">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold w-1/5">
                      Parceiro
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Amazon Web Services (AWS)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Finalidade
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Armazenamento dos dados fornecidos às{" "}
                      <strong>CONTROLADORAS</strong> pelos{" "}
                      <strong>TITULARES</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      Contato
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href="https://pages.awscloud.com/compliance-contact-us.html?Languages=Portuguese"
                        className="text-blue-600 underline break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://pages.awscloud.com/compliance-contact-us.html?Languages=Portuguese
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <P>
              <strong>5.2</strong> Os dados hospedados nos provedores do
              PARCEIRO estarão sujeitos às mesmas disposições desta Política de
              Privacidade, a menos que o TITULAR expressamente consinta com
              outras condições. O acesso aos dados hospedados em tais provedores
              será exclusivo da ATESTEME, das INSTITUIÇÕES e dos TITULARES. O
              PARCEIRO não terá qualquer acesso aos dados hospedados em seu
              servidor e tampouco dispõe de meios de realizar o tratamento
              desses dados para qualquer outra finalidade que não a de
              armazenamento.
            </P>
            <P>
              <strong>5.3</strong> Nos casos em que o PARCEIRO mantiver um
              provedor fora do Brasil, os dados dos TITULARES serão objeto de
              transferência internacional, observadas as disposições desta
              Política de Privacidade. Será uma responsabilidade exclusiva do
              PARCEIRO certificar que tal transferência observará as exigências
              da lei brasileira mediante selos, certificados, códigos de
              conduta, normas corporativas globais e cláusulas-padrão
              contratuais. As INSTITUIÇÕES serão responsáveis por obter o
              consentimento específico dos TITULARES quanto à transferência
              internacional de seus dados, sempre que necessário, conforme
              exigido pelo art. 33, inciso VIII da LGPDP. Ao final do contrato
              entre a ATESTEME e o terceiro, este deverá cessar o tratamento de
              quaisquer informações e providenciar sua eliminação ou
              anonimização na forma da lei.
            </P>
            <P>
              <strong>5.4</strong> Manteremos os seus Dados Pessoais armazenados
              pelo período necessário para atender as finalidades para as quais
              eles foram coletados ou para cumprir com nossas obrigações legais
              ou regulatórias. Quando do término do tratamento de seus Dados
              Pessoais, estes serão eliminados no âmbito e nos limites técnicos
              das atividades ou anonimizados. Entretanto, a ATESTEME poderá
              manter seus Dados Pessoais, mesmo após os prazos correspondentes
              às finalidades, nas situações previstas na legislação vigente.
            </P>

            <H2>6. DADOS DE CRIANÇAS E ADOLESCENTES</H2>
            <P>
              Caso você, Usuário, seja menor de 18 anos, deverá obter o
              consentimento prévio de um de seus pais ou representantes legais
              para a realização de seu cadastro, inscrição, aquisição de
              produtos e/ou Serviços ou usar os Serviços e produtos da ATESTEME.
              Cabe ao Usuário, quando menor, e aos seus pais ou representantes
              legais o pleno conhecimento desta Política de Privacidade e dos
              Termos e Condições de Uso da ATESTEME. Nestes casos, também é
              responsabilidade dos pais ou representantes legais a fiscalização
              das atividades e conduta dos respectivos menores sob a sua tutela,
              incluindo a aprovação prévia de seu acesso aos Serviços da
              ATESTEME.
            </P>

            <H2>7. COMPARTILHANDO SUAS INFORMAÇÕES</H2>
            <P>
              Não vendemos ou ofertarmos seus Dados Pessoais a Operadores,
              terceiros ou parceiros. Também não compartilharemos suas
              informações para Operadores, terceiros ou parceiros fora da
              ATESTEME sem o seu consentimento, ou sem necessidade de
              cumprimento de obrigação regulatória, exceto conforme indicado na
              seção abaixo.
            </P>
            <P>
              <strong>7.1</strong> Podemos compartilhar suas informações com as
              instituições do grupo do qual ao qual o Usuário faça parte, com
              provedores de Serviços terceirizados pela ATESTEME, nacionais ou
              estrangeiros, e com nossos Operadores, terceiros e parceiros de
              acordo com as finalidades e bases legais descritas acima, em
              atividades tais como:
            </P>
            <Ul>
              <Li>Pagamento e Faturamento;</Li>
              <Li>Suporte ao cliente e gerenciamento de clientes;</Li>
              <Li>Serviços de e-mail;</Li>
              <Li>Hospedagem e armazenamento;</Li>
              <Li>Analytics;</Li>
              <Li>Entrega de produtos físicos;</Li>
              <Li>Tratamento por Operadores, Parceiros e terceiros.</Li>
            </Ul>
            <P>
              Esses provedores de serviços, Operadores, terceiros e parceiros só
              terão acesso às suas informações conforme for razoavelmente
              necessário para a finalidade e o propósito para o qual foram
              contratados. Nós exigiremos que estes cumpram as leis aplicáveis,
              notadamente a Lei 13.709 – Lei Geral de Proteção de Dados no
              Brasil e leis internacionais análogas à LGPD ou as leis e
              regulamentos de seus países que sejam compatíveis com as vigentes
              no Brasil, e às cláusulas contratuais de segurança e privacidade
              de Dados Pessoais firmadas entre as partes. Desta forma, se
              comprometendo a garantir o mesmo nível de proteção, privacidade e
              segurança da informação que a ATESTEME aplica em seus processos e
              a não utilização de seus Dados Pessoais para qualquer outra
              finalidade senão a que foram contratados.
            </P>
            <P>
              <strong>7.2</strong> A ATESTEME também pode compartilhar suas
              informações com Operadores, terceiros ou parceiros em determinadas
              circunstâncias, como:
            </P>
            <Ul>
              <Li>
                quando somos obrigados a fazê-lo como resultado de uma ordem
                judicial, intimação ou outra exigência legal; para o exercício
                regular de direitos em processo judicial, administrativo ou
                arbitral, esse último nos termos da Lei nº 9.307, de 23 de
                setembro de 1996 (Lei de Arbitragem);
              </Li>
              <Li>
                quando acreditamos que é necessário para proteger você ou a
                ATESTEME, por exemplo, quando consideramos que é necessário
                investigar atividades potencialmente fraudulentas ou criminosas,
                exceto no caso de prevalecerem direitos e liberdades
                fundamentais do titular que exijam a proteção dos Dados
                Pessoais;
              </Li>
              <Li>
                quando você expressamente consentiu em compartilhá-la com
                Operadores, terceiros e parceiros para uma finalidade
                específica.
              </Li>
            </Ul>

            <H2>8. DIREITOS E ESCOLHAS DO TITULAR DOS DADOS PESSOAIS</H2>
            <P>
              A ATESTEME não utiliza seus Dados Pessoais de forma excessiva,
              desnecessária e em desconformidade com a Lei 13.709 (LGPD) e
              respeita os direitos e escolhas sobre seus Dados Pessoais conforme
              previsto no artigo 18° da LGPD, descritos abaixo:
            </P>
            <P>
              Você tem o direito de ter informações de confirmação da existência
              de tratamento de seus Dados Pessoais e de acesso facilitado às
              informações de como realizamos esse tratamento, inclusive o
              eventual uso compartilhado de seus Dados Pessoais com entidades
              Públicas e Privadas.
            </P>
            <P>
              Você também tem o direito à correção de Dados Pessoais
              incompletos, inexatos ou desatualizados e deve fazê-la sempre que
              for necessário para que tenhamos as suas informações devidamente
              precisas e atualizadas.
            </P>
            <P>
              Você pode, a qualquer momento, nos solicitar a exclusão de seus
              Dados Pessoais. Entretanto, poderá ser necessário mantermos alguns
              de seus Dados Pessoais, mesmo depois de seu pedido de exclusão,
              com objetivo de atender às obrigações legais, regulatórias ou até
              mesmo contratuais e às necessidades empresariais, de acordo com
              algumas leis aplicáveis. Sempre que possível seus dados serão
              anonimizados.
            </P>
            <P>
              Você tem o direito a opor-se a nos informar sobre os Dados
              Pessoais necessários para execução de nossas atividades.
              Entretanto, isso pode afetar a capacidade de fornecimento de
              nossos Serviços.
            </P>
            <P>
              Você também tem o direito de revogar os consentimentos concedidos
              sobre a realização das atividades de tratamentos de seus Dados
              Pessoais. Entretanto, tal revogação pode impactar na não prestação
              dos Serviços pela ATESTEME.
            </P>
            <P>
              Nós da ATESTEME nos comprometemos a investigar qualquer reclamação
              sobre a forma com que conduzimos e gerenciamos os seus Dados
              Pessoais.
            </P>

            <H2>9. SEGURANÇA DE SEUS DADOS PESSOAIS</H2>
            <P>
              A ATESTEME envida seus melhores esforços para a proteção de seus
              Dados Pessoais e exige, contratualmente, de seus Operadores,
              terceiros e parceiros, que eventualmente tratem seus Dados
              Pessoais, o mesmo comprometimento devendo adotar medidas físicas,
              técnicas e administrativas e notificar quaisquer incidentes de
              segurança que possam acarretar risco ou dano relevante aos
              titulares. Apesar de todos os mecanismos de proteção implantados
              visando impedir o acesso não autorizado, não é possível garantir
              uma total segurança na transmissão de informações pela internet.
              Nesse sentido, é importante que você mantenha seus Dados Pessoais
              seguros. Você é o único responsável pela confidencialidade de sua
              senha de acesso ao website e/ou ao app da ATESTEME e por qualquer
              ação que seja realizada através de sua de sua conta. Portanto,
              ressaltamos a importância do cuidado e atenção que você deve ter
              com o meio de transmissão utilizado e com o conteúdo dos Dados
              Pessoais que compartilha conosco..
            </P>

            <H2>10. ALTERAÇÕES DA POLÍTICA</H2>
            <P>
              Podemos atualizar esta Política de Privacidade de tempos em tempos
              para refletir, por exemplo, alterações em nossas práticas de
              privacidade ou por outras razões operacionais, legais ou
              regulamentares.
            </P>
            <P>
              Recomendamos que você acesse frequentemente nossa Política de
              Privacidade no nosso website/app. Em caso de alterações
              substanciais a ATESTEME poderá, quando apropriado, informar a você
              a publicação da Política revisada quando de seu acesso no
              website/app ou através de envio de comunicação ao endereço de
              e-mail principal cadastrado, e ainda por outros meios.
            </P>

            <H2>11. PARA ENTRAR EM CONTATO CONOSCO</H2>
            <P>
              Se tiver alguma dúvida, comentário ou sugestão sobre assuntos
              relacionados a seus Dados Pessoais ou a esta Política de
              Privacidade, ou solicitação de uso de seus direitos e escolhas,
              entre em contato conosco pelo nosso e-mail contato@atesteme.com.
            </P>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
