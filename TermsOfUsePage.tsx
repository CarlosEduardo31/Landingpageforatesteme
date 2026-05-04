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

const Ol = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal list-inside space-y-2 my-4 pl-4">{children}</ol>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="leading-relaxed text-gray-700">{children}</li>
);

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysSolid />
      <main className="pt-32 pb-20 text-base md:text-lg">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ color: "var(--color-obsidian)" }}
          >
            Termos e Condições de Uso
          </h1>

          <div className="space-y-6">
            <P>
              O presente documento contém os Termos de Uso da Plataforma
              ATESTEME, cuja distribuição está licenciada pela SP & AS
              DESENVOLVIMENTO EDUCACIONAL LTDA, nome fantasia VERBUS
              EDUCACIONAL, pessoa jurídica de direito privado, inscrita no CNPJ
              sob o nº 23.019.552/0001-47, com sede instalada na cidade de
              Recife, estado de Pernambuco, CEP 50.030-200.
            </P>
            <P>
              Estes Termos e Condições de Uso que dispõem acerca da utilização
              da Plataforma ATESTEME devem ser lidos com atenção.
            </P>

            <H2>1. CONCORDÂNCIA COM OS TERMOS E CONDIÇÕES DE USO</H2>
            <P>
              <strong>1.1.</strong> O uso da Plataforma ATESTEME, ainda que
              parcialmente ou a título de teste, significará que o Usuário está
              plenamente ciente de todas as disposições, significando também
              plena e integral concordância com os Termos e Condições de Uso
              aqui apresentadas.
            </P>
            <P>
              <strong>1.2.</strong> Uma vez que o uso da Plataforma ATESTEME
              apenas pode ser utilizada após a leitura destes Termos e Condições
              de Uso, restando claro que sua utilização significará a
              concordância integral com os Termos e Condições de Uso
              apresentados. Caso o Usuário não concorde com qualquer uma das
              disposições nestes Termos e Condições de Uso, ele não deverá
              utilizar a Plataforma ATESTEME. Sendo assim, fica claro e evidente
              que o uso da Plataforma ATESTEME não está autorizado em caso de
              não concordância com estes Termos e Condições de Uso.
            </P>
            <P>
              <strong>1.3.</strong> Caso o Usuário venha a discordar dos Termos
              e Condições de Uso posteriormente ao início da utilização da
              Plataforma ATESTEME, o uso deste deverá ser imediatamente
              interrompido, sendo certo que estes Termos e Condições de Uso
              terão vigência durante todo o período de uso, não cabendo ao
              Usuário alegar o desconhecimento destes Termos e Condições de Uso.
            </P>
            <P>
              <strong>1.4.</strong> Estes Termos e Condições de Uso também são
              aplicáveis aos Usuários que tiverem acesso à Plataforma ATESTEME
              em qualquer modalidade de plano contratada.
            </P>
            <P>
              <strong>1.5.</strong> Adicionalmente, ressalta-se que todo e
              qualquer novo recurso ou ferramenta que sejam adicionados aos
              Serviços atuais também estarão sujeitos aos Termos de Uso, ao
              Termo de Adesão e à Política de Privacidade da ATESTEME.
            </P>
            <P>
              <strong>1.6.</strong> A ATESTEME se reserva o direito de atualizar
              e alterar todo e qualquer disposição dos termos de uso e o usuário
              será comunicado por intermédio de publicação dos termos de uso
              revisado. Nos casos de alterações substanciais nos termos de uso,
              a ATESTEME poderá informar o usuário através de publicação de
              notificação em nossos serviços ou mediante comunicação enviada ao
              endereço de e-mail de contato principal do Usuário.
            </P>

            <H2>2. DEFINIÇÕES</H2>
            <P>
              Os termos aqui relacionados, no singular ou no plural terão o
              seguinte significado:
            </P>
            <P>
              <strong>2.1 USUÁRIO:</strong> toda pessoa que acessa a plataforma
              ATESTEME, podendo ser Estudante, Professor ou Profissional,
              cadastrado através de assinatura de plano individual ou pacote
              disponibilizado por instituição contratante.
            </P>
            <P>
              <strong>2.2 CONTA:</strong> meio pelo qual o Usuário acessa a
              Plataforma ATESTEME e que foi criada através de um cadastro com
              seus dados pessoais.
            </P>
            <P>
              <strong>2.3 VERBUS EDUCACIONAL:</strong> empresa licenciada para
              administração e comercialização do website, do aplicativo e da
              Plataforma ATESTEME, possuindo a razão social SP & AS
              DESENVOLVIMENTO EDUCACIONAL LTDA, já qualificada no início desses
              Termos e Condições de Uso.
            </P>
            <P>
              <strong>2.4 ATESTEME:</strong> é o Software as a Service (SaaS)
              disponibilizado em forma de plataforma web ou de aplicativo para
              dispositivos móveis, que possibilita ao Usuário contratar os
              Serviços.
            </P>
            <P>
              <strong>2.5 SERVIÇOS:</strong> consistem na oferta, por meio da
              utilização da Plataforma ATESTEME, dos serviços de:
            </P>
            <Ol>
              <Li>
                fornecimento de acesso ao conteúdo de provas e questões; a serem
                respondidas dentro de um limite de tempo, a fim de demonstrar o
                desempenho do usuário em uma área específica;
              </Li>
              <Li>
                fornecimento de acesso às ferramentas de filtro e pesquisa,
                resolução de questões, simulados personalizados, comentários,
                cadernos de questões, relacionamento e estatísticas;
              </Li>
              <Li>
                curadoria de materiais orientadores embarcados no sistema e
                indicados para ajudar o Usuário a sanar déficits de
                aprendizagem;
              </Li>
              <Li>
                fornecimento de certificado emitido após preenchimento de
                requisitos (realizar o Teste de Certificação e obter a partir de
                70% de acertos);
              </Li>
              <Li>
                a ATESTEME pode oferecer itens opcionais à assinatura aqui
                denominados SERVIÇOS AVULSOS;
              </Li>
              <Li>
                Outros serviços que venham a ser implementados na Plataforma
                ATESTEME e por determinação interna, não sejam atribuídos aos
                planos de assinatura, comportando, por discricionariedade da
                VERBUS EDUCACIONAL, novo serviço avulso.
              </Li>
            </Ol>
            <P>
              <strong>2.5.1</strong> Algumas limitações, como comportamentos que
              comprometam a prestação do serviço aos demais usuários, como uma
              taxa excessiva de chamadas ao servidor, tentativas de brechas de
              segurança e demais ações que possam ser consideradas prejudiciais.
              Podem ser adotadas medidas para restringir ou limitar o acesso
              conforme necessário para garantir os padrões de performance e
              segurança.
            </P>
            <P>
              <strong>2.6 TERMOS E CONDIÇÕES DE USO:</strong> o presente
              documento, que regula o uso da Plataforma ATESTEME, por meio do
              qual o Usuário expressa sua concordância, bem como contém
              informações diversas.
            </P>
            <P>
              <strong>2.7 POLÍTICA DE PRIVACIDADE:</strong> documento
              disponibilizado em texto separado, porém, parte integrante destes
              Termos e Condições de Uso.
            </P>

            {/* O restante do conteúdo dos termos de uso segue a mesma estrutura */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
