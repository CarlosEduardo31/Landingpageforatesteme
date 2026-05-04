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

            <H2>3. LICENÇA DE USO</H2>
            <P>
              <strong>3.1.</strong> Estes Termos e Condições de Uso regulamentam
              a forma pela qual a VERBUS EDUCACIONAL concede ao Usuário uma
              licença de uso da Plataforma ATESTEME em caráter não exclusivo e
              intransferível, o qual deverá ser utilizado em conformidade com as
              regras presentes destes Termos e Condições de Uso.
            </P>
            <P>
              <strong>3.2.</strong> A Plataforma ATESTEME é, em hipótese alguma,
              vendida para o Usuário, e sim licenciada para o uso do Usuário, em
              conformidade com a legislação brasileira. Assim sendo, é vedada ao
              Usuário a cessão e/ou comercialização da Plataforma ATESTEME seja
              total ou parcialmente, a terceiros, sob pena de responsabilização
              por perdas e danos.
            </P>
            <P>
              <strong>3.2.1.</strong> Por adquirir apenas uma licença de uso, o
              Usuário em nenhuma hipótese, terá acesso ao código fonte dos
              softwares da Plataforma ATESTEME.
            </P>
            <P>
              <strong>3.3.</strong> O uso da Plataforma ATESTEME deverá observar
              estritamente todos os termos e disposições dos presentes Termos e
              Condições de Uso. Em caso de uso não autorizado nestes Termos e
              Condições de Uso, o Usuário estará sujeito a todas as penalidades
              previstas nestas condições gerais e na legislação brasileira,
              assim como ao pagamento de eventuais perdas e danos que a ATESTEME
              vier a sofrer.
            </P>
            <P>
              <strong>3.4.</strong> O uso da Plataforma ATESTEME está
              condicionado a uma conexão de internet ativa do Usuário, sendo que
              a ATESTEME não se responsabiliza pela prestação de serviços de
              acesso da internet, sendo de total responsabilidade do Usuário
              possuir internet com capacidade de conexão.
            </P>
            <P>
              <strong>3.4.1.</strong> A VERBUS EDUCACIONAL não se
              responsabilizará por impossibilidade de utilização da Plataforma
              ATESTEME caso de falta de conexão com a internet, seja esta falha
              momentânea ou não.
            </P>
            <H2>4. CADASTRO</H2>
            <P>
              <strong>4.1</strong> O acesso à Plataforma ATESTEME será realizado
              pelo Usuário através de uma conta, com login e senha, a qual será
              criada pelo próprio Usuário, sendo a Conta criada de uso pessoal e
              intransferível.
            </P>
            <P>
              <strong>4.1.1</strong> O Usuário deve ser maior de idade ou quando
              menor de 18 anos deverá obter o consentimento prévio de um de seus
              pais ou representantes legais para a realização de seu cadastro,
              aquisição de produtos e/ou serviços ou usar os serviços e produtos
              da ATESTEME. Cabe ao Usuário e, quando menores, aos seus pais ou
              representantes legais o pleno conhecimento destes Termos, da
              Política de Privacidade e do Termo de Adesão da ATESTEME. No caso
              dos menores de 18 anos, é responsabilidade dos pais ou
              representantes legais a fiscalização das atividades e conduta dos
              respectivos menores sob a sua tutela, incluindo neste caso a
              aprovação prévia ao acesso aos Serviços da ATESTEME.
            </P>
            <P>
              <strong>4.2.</strong> O cadastro e a utilização da Plataforma
              ATESTEME deverão ser realizados com informações válidas, completas
              e atualizadas, responsabilizando-se o Usuário, civil e
              criminalmente, pela veracidade e precisão das informações,
              isentando a VERBUS EDUCACIONAL e os eventuais parceiros desta por
              qualquer dano ou prejuízo que a falta de informações corretas
              podem causar.
            </P>
            <P>
              <strong>4.2.1</strong> A VERBUS EDUCACIONAL pode rejeitar seu
              pedido de uma Conta, ou cancelar uma Conta existente quando
              verificar informações inverídicas ou imprecisas, bastando que para
              isso seja enviado comunicado através do nosso Suporte ao Usuário.
            </P>
            <P>
              <strong>4.3.</strong> O Usuário sempre será integralmente
              responsável pela utilização de sua conta na Plataforma ATESTEME,
              devendo adotar as medidas de segurança necessárias para impedir o
              uso por terceiros não autorizados. Caso suspeitem que um terceiro
              esteja utilizando indevidamente sua conta na Plataforma ATESTEME,
              deverá efetuar a imediata troca de sua senha pessoal e comunicar
              tal fato através do Suporte ao Usuário.
            </P>
            <P>
              <strong>4.3.1</strong> O cadastro é pessoal e intransferível, não
              sendo permitido o seu uso por mais de uma pessoa, tendo em vista
              não haver conta compartilhada.
            </P>
            <P>
              <strong>4.4</strong> O cadastro é pessoal e intransferível, não
              sendo permitido o seu uso por mais de uma pessoa, tendo em vista
              não haver conta compartilhada.
            </P>
            <P>
              <strong>4.4.1</strong> Dessa forma, caso seja constatado qualquer
              compartilhamento de conta, o Usuário poderá ter seu acesso
              imediatamente bloqueado, assim como sua conta bloqueada, bastando
              que para isso seja enviado comunicado ao endereço de e-mail
              principal de contato fornecido pelo Usuário, sem necessidade de
              aviso prévio de qualquer ordem. A conexão simultânea de dois ou
              mais Usuários com o mesmo login sujeitará o infrator a ter seu
              acesso bloqueado e as medidas administrativas e judiciais
              cabíveis.
            </P>
            <P>
              <strong>4.5.</strong> O uso da Plataforma ATESTEME de forma
              indevida, irregular, ilegal ou em desacordo às condições previstas
              nestes Termos e Condições de Uso implicará a exclusão do cadastro
              e a rescisão imediata do acesso do Usuário à Plataforma ATESTEME,
              sujeito ainda às cominações legais.
            </P>
            <P>
              <strong>4.5.1</strong> O Usuário concorda em não reproduzir,
              duplicar, copiar, vender, revender ou explorar, ainda que
              parcialmente, qualquer parte do Serviço, uso do Serviço ou acesso
              ao Serviço.
            </P>
            <P>
              <strong>4.6.</strong> O Usuário deverá indenizar a ATESTEME seus
              sócios, colaboradores, empregados, clientes e/ou terceiros
              prejudicados por qualquer perda, reclamação ou demanda, bem como
              por todos e quaisquer prejuízos resultantes da utilização indevida
              da Plataforma ATESTEME em discordância com o disposto no presente
              instrumento e na legislação aplicável.
            </P>
            <P>
              <strong>4.7.</strong> A VERBUS EDUCACIONAL poderá rescindir ou
              suspender permanentemente ou temporariamente seu acesso ao Serviço
              e à Plataforma ATESTEME sem aviso prévio e responsabilidade por
              qualquer motivo, inclusive se, em única e exclusiva determinação
              da VERBUS EDUCACIONAL, o Usuário violar qualquer disposição destes
              Termos ou qualquer lei ou regulamentação aplicável. O Usuário pode
              interromper o uso e solicitar o cancelamento de sua conta e/ou de
              qualquer serviço a qualquer momento.
            </P>
            <P>
              <strong>4.8</strong> O Usuário é o único responsável por manter
              sua senha segura e a VERBUS EDUCACIONAL não será responsável por
              qualquer perda ou dano decorrente de sua falha ou de falha de
              terceiros em manter a segurança de sua conta e senha.
            </P>
            <P>
              <strong>4.9</strong> O Usuário é responsável por todas as
              atividades e conteúdo, como fotos, imagens, informações ou dados
              enviados, coletados, gerados, armazenados, exibidos, distribuídos,
              transmitidos ou relacionados a sua conta, estando os mesmos
              atrelados ao previsto na Política de Privacidade.
            </P>
            <P>
              <strong>4.9.1</strong> Dessa forma, o Usuário reconhece que a
              VERBUS EDUCACIONAL não possui qualquer ingerência ou
              responsabilidade por qualquer atividade e conteúdo do Usuário,
              sendo que qualquer violação à legislação, direito de terceiros ou
              às diretrizes da ATESTEME que chegue ao conhecimento da nossa
              equipe será imediatamente direcionada ao Usuário, com a
              possibilidade de bloqueio imediato da conta do mesmo, sem
              necessidade de aviso prévio de qualquer ordem.
            </P>
            <P>
              <strong>4.10</strong> Não é permitido que uma pessoa tenha mais de
              um cadastro ativo. Sendo identificada esta situação a VERBUS
              EDUCACIONAL poderá excluir definitivamente um dos cadastros e as
              informações do Usuário, bastando que para isso seja enviado
              comunicado ao e-mail principal de contato fornecido pelo Usuário.
            </P>
            <P>
              <strong>4.11</strong> A violação de qualquer disposição do Termo
              de Uso, do Termo de Adesão ou da Política de Privacidade conforme
              determinado a critério exclusivo da VERBUS EDUCACIONAL resultará
              no cancelamento imediato de seus serviços, sem direito a
              reembolso, bastando que para isso seja enviado comunicado ao
              endereço de e-mail principal de contato fornecido pelo usuário.
            </P>
            <P>
              <strong>4.12</strong> A pessoa que se cadastrar será a parte
              contratante (“Proprietário da conta”) para os fins de nossos
              Termos de Uso e será a única pessoa que está autorizada a usar a
              plataforma ATESTEME através deste cadastro.
            </P>
            <P>
              <strong>4.12.1</strong> Será permitido que o Usuário faça login
              por meio de redes sociais autorizadas e disponibilizadas pela
              ATESTEME, sendo a VERBUS EDUCACIONAL autorizada , caso opte pelo
              uso desta modalidade, a receber o compartilhamento de dados
              daqueles serviços com a plataforma ATESTEME.
            </P>
            <P>
              <strong>4.13</strong> Para ASSINANTES, as funcionalidades do plano
              adquirido só serão liberadas após a confirmação do pagamento.
            </P>
            <H2>5. MEIOS DE PAGAMENTO, POLÍTICA DE REEMBOLSO E RESCISÃO</H2>
            <P>
              <strong>5.1.</strong> Os meios de pagamento dos Serviços poderão
              estar disponíveis na Plataforma ATESTEME no momento da realização
              do pagamento pelo Usuário.
            </P>
            <P>
              <strong>5.2.</strong> O acesso aos Serviços estará disponível a
              partir do momento que o pagamento feito pelo Usuário for
              confirmado. No caso de não confirmação do pagamento, a VERBUS
              EDUCACIONAL poderá notificar o Usuário por e-mail ou SMS.
            </P>
            <P>
              <strong>5.3.</strong> Nenhuma despesa é reembolsável. Ao adquirir
              o acesso, o Usuário poderá usufruí-lo ao longo do período
              contratado.
            </P>
            <P>
              <strong>5.4.</strong> A ATESTEME se reserva ao direito de
              rescindir a sua conta e impedir o seu acesso a qualquer tempo,
              caso seja constatada qualquer violação às Condições de Uso e/ou
              Política de Privacidade.
            </P>
            <P>
              <strong>5.5.</strong> Caso ocorra a possibilidade acima descrita,
              nenhuma taxa ou despesa será reembolsável.
            </P>
            <P>
              <strong>5.6.</strong> Para cancelar os Serviços, o Usuário deverá
              enviar sua solicitação de cancelamento através do Suporte ao
              Usuário e aguardar o retorno da área de atendimento para finalizar
              o procedimento.
            </P>
            <P>
              <strong>5.7.</strong> Em respeito ao Código de Defesa do
              Consumidor, o Usuário poderá, no prazo de 7 (sete) dias contados
              da adesão aos Serviços, requerer mediante envio de solicitação
              através do Suporte ao Usuário o cancelamento com devolução
              integral dos valores pagos.
            </P>
            <P>
              <strong>5.7.1</strong> O cancelamento no prazo de 7 (sete) dias
              contados da adesão aos Serviços resultará na exclusão da conta e
              de todos os dados vinculados a ela, inclusive benefícios e
              certificações adquiridas.
            </P>
            <P>
              <strong>5.8.</strong> Todos os preços listados estão sujeitos à
              alteração por parte da VERBUS EDUCACIONAL a qualquer momento, sem
              que haja a necessidade de prévia notificação.
            </P>
            <P>
              <strong>5.9</strong> Efetivada a adesão aos Serviços, o valor
              constante na tabela de preços vigente será garantido por até 12
              meses.
            </P>
            <P>
              <strong>5.10</strong> Todo pagamento será realizado através da
              plataforma ATESTEME por intermédio de empresa terceirizada de
              meios de pagamento, estando o Usuário, neste caso cliente, sujeito
              aos termos de uso e Política de Privacidade desta.
            </P>
            <P>
              <strong>5.11</strong> Todo o processamento do pagamento é feito
              pelo portal de pagamentos vinculado à empresa terceirizada, seja o
              pagamento por Pix, boleto ou cartão de crédito. Inclusive para
              efeitos de restituição de valores.
            </P>
            <P>
              <strong>5.12</strong> Para reembolso no caso de pagamento por
              boleto, será necessário que o Usuário possua, ou crie, uma conta
              na plataforma da empresa terceirizada de meio de pagamento para
              realização do processo.
            </P>
            <P>
              <strong>5.13</strong> O Usuário se declara ciente de que não há
              responsabilidade da VERBUS EDUCACIONAL sobre quaisquer
              eventualidades que venham a ocorrer durante o processo de
              pagamento junto ao portal de pagamentos, assim como qualquer dano
              relacionado à transação financeira, tais como, mas não limitado ao
              compartilhamento de dados.
            </P>
            <H2>
              6. REQUISITOS MÍNIMOS PARA UTILIZAÇÃO DA PLATAFORMA ATESTEME
            </H2>
            <P>
              <strong>6.1.</strong> Para utilizar a Plataforma ATESTEME, o
              Usuário deverá atender as exigências mínimas de configuração de
              equipamento (hardware), de sistema operacional (software), devendo
              ainda possuir uma conexão ativa com a Internet.
            </P>
            <P>
              <strong>6.2.</strong> A exigência para utilização do software é o
              acesso à Plataforma ATESTEME por plataforma web ou por
              dispositivos móveis.
            </P>
            <H2>7. SUPORTE TÉCNICO</H2>
            <P>
              <strong>7.1.</strong> A VERBUS EDUCACIONAL dará suporte técnico
              relativo ao software remotamente, por telefone e pela Internet, no
              horário comercial, isto é, das 08h00min às 18h00min, em dias
              úteis, isto é, de segunda à sexta-feira, excluídos feriados.
            </P>
            <P>
              <strong>7.2.</strong> Para os fins destes Termos e Condições de
              Uso, serão considerados os dias úteis da cidade do Recife/PE.
            </P>
            <P>
              <strong>7.3.</strong> O serviço de suporte técnico consistirá em
              técnicos treinados para solucionar dúvidas e orientar o Usuário na
              operação da Plataforma ATESTEME.
            </P>
            <H2>8. PROPRIEDADE INTELECTUAL</H2>
            <P>
              <strong>8.1</strong> O Usuário não adquire, pela aquisição e
              utilização dos Serviços, qualquer direito de propriedade
              intelectual ou outros direitos exclusivos, incluindo patentes,
              desenhos, marcas, direitos autorais ou quaisquer direitos sobre
              informações confidenciais ou segredos de negócio, bem como todo o
              conteúdo disponibilizado no website, incluindo, mas não se
              limitando a textos, gráficos, imagens, logotipos, ícones,
              fotografias, conteúdo editorial e qualquer outro material
              relacionado à ATESTEME.
            </P>
            <P>
              <strong>8.2.</strong> Todo o conteúdo disponibilizado no website e
              na Plataforma ATESTEME, incluindo, mas não se limitando a, textos,
              gráficos, imagens, logos, ícones, fotografias, conteúdo editorial,
              notificações, softwares e qualquer outro material está devidamente
              licenciado pela VERBUS EDUCACIONAL, não podendo ser copiado,
              plagiado, reproduzido ou publicado em qualquer meio (físico ou
              virtual).
            </P>
            <P>
              <strong>8.3.</strong> É vedado ao Usuário modificar, copiar,
              distribuir, transmitir, exibir, realizar, reproduzir, publicar,
              disponibilizar, licenciar ou criar obras derivadas a partir das
              informações coletadas no website ou na Plataforma ATESTEME, bem
              como transferir ou utilizar para fins comerciais tais informações,
              softwares, produtos ou serviços, sob pena de violação deste
              instrumento e caracterização de infração legal.
            </P>
            <P>
              <strong>8.4.</strong> A VERBUS EDUCACIONAL reserva a si todos os
              direitos dos produtos e Serviços constantes no website, no
              aplicativo e na Plataforma ATESTEME.
            </P>
            <P>
              <strong>8.5.</strong> É expressamente proibida a utilização de
              ferramentas, scripts, softwares, robôs ou meios que contenham
              qualquer vírus, worms, malwares, trojans e/ou outros programas de
              computador que possam causar danos à ATESTEME.
            </P>
            <H2>9. ATUALIZAÇÃO</H2>
            <P>
              <strong>9.1.</strong> O website e a Plataforma ATESTEME, embora
              com garantia de bom funcionamento, estão sujeitos a constantes
              modificações, decorrentes de otimizações e aperfeiçoamentos, que
              visam facilitar e tornar mais segura e eficiente a sua operação,
              melhor aproveitamento dos recursos disponibilizados, bem como
              efetuar as alterações pertinentes por conta das modificações na
              legislação.
            </P>
            <P>
              <strong>9.2.</strong> O Usuário, enquanto durar sua licença de
              uso, terá direito de acessar as novas versões dos Serviços da
              Plataforma ATESTEME.
            </P>
            <P>
              <strong>9.3.</strong> O Usuário desde já concorda com as
              modificações, melhorias ou correções no modelo de software que
              utiliza, ficando a critério da VERBUS EDUCACIONAL o gerenciamento
              e implementação dessas atualizações.
            </P>
            <H2>10. ACESSO E RESTRIÇÕES DE FUNCIONALIDADE</H2>
            <P>
              <strong>10.1.</strong> Não é permitido acessar as áreas de
              programação do website e da Plataforma ATESTEME, seu banco de
              dados ou qualquer outro conjunto de informações que faça parte da
              programação do sistema, realizar ou permitir que se realize
              qualquer tipo de engenharia reversa, tradução, decompilação,
              cópia, modificação, reprodução, locação, sublocação,
              sublicenciamento, publicação, divulgação, transmissão, empréstimo,
              distribuição ou, de qualquer outra forma, a disposição de
              ferramentas de consulta desta plataforma e de suas funcionalidades
              para terceiros sem a prévia e expressa autorização da VERBUS
              EDUCACIONAL, ficando sujeito quem o fizer à responsabilização
              criminal e civil sob a legislação brasileira, sem prejuízo da
              obrigação de reparar os danos que causarem. Esta restrição inclui
              qualquer tentativa de incorporar quaisquer informações da
              Plataforma ATESTEME em qualquer outro diretório, produto ou
              serviço.
            </P>
            <P>
              <strong>10.2.</strong> É proibida a utilização de programas do
              tipo spider/crawler ou de mineração de dados, que tenham como
              finalidade a quebra de sistemas de segurança, senha, captcha, ou
              ainda de qualquer tipo ou espécie correlato, além de outros aqui
              não tipificados, mas que atue de modo automatizado, tanto para
              realizar operações massificadas ou para quaisquer outras
              finalidades, sob pena de aplicação da legislação correlata de
              proteção dos interesses da VERBUS EDUCACIONAL, sem prejuízo da
              obrigação de reparar quaisquer perdas e danos eventualmente
              apurados e/ou suportados pela VERBUS EDUCACIONAL e que decorrerem
              desta utilização indevida.
            </P>
            <P>
              <strong>10.3.</strong> É proibida ainda a coleta de quaisquer
              informações de identificação pessoal e cadastro de outros Usuários
              da Plataforma ATESTEME para quaisquer fins.
            </P>
            <H2>11. OBRIGAÇÕES DO USUÁRIO</H2>
            <P>
              <strong>11.1.</strong> São obrigações do Usuário, sem prejuízo das
              demais previstas nestes Termos e Condições de Uso e na legislação
              pertinente:
            </P>
            <P>
              (a) respeitar às disposições deste Termo e as leis que regem a
              utilização deste, exclusivamente empregando-os para a finalidade
              para qual foi destinado o Serviço;
            </P>
            <P>
              (b) não divulgar a terceiros seus dados de acesso, nem permitir o
              uso de tais informações por terceiros, responsabilizando-se pelas
              consequências do uso de seu cadastro, uma vez que estes são
              pessoais e intransferíveis, devendo notificar a VERBUS EDUCACIONAL
              imediatamente, através de meio seguro, a respeito de qualquer uso
              ou acesso não autorizado de sua conta por terceiros.
            </P>
            <P>
              (c) utilizar os Serviços e a Plataforma ATESTEME exclusivamente ao
              fim a que eles se destinam, abstendo-se de trafegar e armazenar
              dados e informações que importem em prejuízo a terceiros; violem a
              lei, a moral, os bons costumes; a propriedade intelectual; que
              incorporem vírus ou outros elementos físicos ou eletrônicos que
              possam danificar ou impedir o seu uso normal;
            </P>
            <P>
              (d) utilizar somente equipamentos hábeis e capazes de atender às
              exigências mínimas de configuração necessárias à utilização do
              software, bem como pelo manuseio correto do programa;
            </P>
            <P>
              (e) não acessar a Plataforma ATESTEME e os Serviços sob
              informações de outra pessoa, utilizando CPF, e-mail ou qualquer
              outro dado de outro Usuário que não seja responsável legal.
            </P>
            <P>
              (f) manter o cadastro de seu CPF, e-mail e todos os dados
              atualizados, de forma a impossibilitar o acesso de outra pessoa ao
              seu cadastro de Usuário;
            </P>
            <P>
              (g) manter seu computador ou dispositivo móvel livre de vírus ou
              similares, propiciando assim maior segurança ao tráfego e
              armazenamento dos dados/informações;
            </P>
            <P>
              (h) manter os seus dados cadastrais devidamente atualizados, sob
              pena de, em não o fazendo, considerarem-se válidos todos os avisos
              e notificações enviados para os endereços constantes do referido
              cadastro;
            </P>
            <P>
              <strong>11.2</strong> O Usuário é legalmente responsável por todas
              as atividades e interações que desempenhe dentro da plataforma
              ATESTEME, sendo expressamente proibida a veiculação de conteúdo
              que:
            </P>
            <Ol>
              <Li>
                a) Contenha ofensas à honra de pessoas físicas ou jurídicas,
                associações em sentido amplo, grupos étnicos, religiosos, de
                gênero ou de opiniões políticas ou ideológicas;
              </Li>
              <Li>b) Contenha calúnias, injúrias e difamações;</Li>
              <Li>c) Divulgação de informações particulares de terceiros;</Li>
              <Li>
                d) Divulgação de material obsceno, pornográfico, racista,
                xenófobo, preconceituoso, de intolerância religiosa, abusivo ou
                ameaçador;
              </Li>
              <Li>
                e) Infrinja quaisquer direitos de propriedade intelectual –
                direitos autorais, direitos conexos, direito sobre marcas,
                dentre outros;
              </Li>
              <Li>f) Infrinja quaisquer direitos de terceiros;</Li>
              <Li>g) Contenha violação da lei vigente;</Li>
              <Li>h) Incentive a prática de atos ilegais;</Li>
              <Li>
                i) Contenha propaganda para captação de recursos, desvio de
                clientela, concorrência desleal ou oferta de bens ou serviços;
              </Li>
              <Li>
                j) Contenha texto escrito ou visual com propaganda comercial,
                política, religiosa ou ideológica;
              </Li>
              <Li>
                k) Divulgue material com arquivos com vírus ou que possam causar
                danos;
              </Li>
              <Li>l) Promova a difusão de notícias e informações falsas.</Li>
            </Ol>
            <P>
              <strong>11.3</strong> Dessa forma, o usuário reconhece que a
              VERBUS EDUCACIONAL poderá remover todo e qualquer conteúdo que
              viole as disposições ora estabelecidas imediatamente e realizar o
              bloqueio automático da conta do usuário, bastando que para isso
              envie comunicação para o endereço de e-mail principal de contato
              do USUÁRIO.
            </P>
            <H2>12. GARANTIAS E RESPONSABILIDADES</H2>
            <P>
              <strong>12.1.</strong> A VERBUS EDUCACIONAL assegura a
              funcionalidade da Plataforma ATESTEME e dos seus Serviços, desde
              que devidamente utilizados pelo Usuário de acordo com as
              instruções da VERBUS EDUCACIONAL, pelo período que durar a licença
              de uso contratada pelo Usuário.
            </P>
            <P>
              <strong>12.2.</strong> A mencionada garantia não será aplicável
              nos casos em que qualquer não conformidade ou defeito for
              exclusivamente causado por:
            </P>
            <P>
              (a) Qualquer programa de computador associado ou complementar cujo
              uso conjunto não tenha sido expressamente autorizado pela VERBUS
              EDUCACIONAL;
            </P>
            <P>
              (b) Modificação não autorizada ou uso dos Serviços em desacordo
              com as regras e disposições destes Termos e Condições de Uso e/ou
              das instruções que sejam fornecidas pela VERBUS EDUCACIONAL;
            </P>
            <P>
              <strong>12.3.</strong> A VERBUS EDUCACIONAL não se responsabiliza
              por danos causados ao sistema por vírus de computador, falhas de
              energia elétrica, interrupções na conexão da Internet,
              atualizações ou falhas inerentes ao servidor de hospedagem
              terceirizado ou qualquer outra causa que não seja associada
              diretamente à ATESTEME.
            </P>
            <P>
              <strong>12.4.</strong> A VERBUS EDUCACIONAL não garante que o seu
              website, a Plataforma ATESTEME e os Serviços estão livres de
              erros. A VERBUS EDUCACIONAL, no entanto, envidará seus maiores
              esforços para sanar qualquer erro de programação que o website, a
              Plataforma ATESTEME e os Serviços venham a apresentar.
            </P>
            <P>
              <strong>12.5.</strong> Assume-se, para efeito destas condições
              gerais, e o Usuário expressamente concorda, a existência de um
              consenso mundial acerca de não haver programa de computador
              totalmente isento de erros ou totalmente invulnerável; à luz de
              tal consenso, na hipótese da ocorrência de qualquer defeito no
              software, a VERBUS EDUCACIONAL se reserva o direito de ser chamada
              para tentar resolvê-lo antes que lhe seja atribuída qualquer
              responsabilidade ou se lhe requeira qualquer ressarcimento ou
              indenização.
            </P>
            <P>
              <strong>12.6.</strong> Esta garantia pressupõe que a Plataforma
              ATESTEME, objeto deste contrato, seja operada em ambiente de
              software e hardware de origem idônea, em sistema de rede e
              instalações elétricas adequadas e isentas de problemas, e dentro
              da configuração mínima exigida pela VERBUS EDUCACIONAL.
              Considera-se hardware não idôneo aquele originário de fabricante
              desconhecido ou não legalmente constituído, ou montado em
              instalações clandestinas, originário de contrabando ou qualquer
              outro em que não exista garantia expressa e válida de fabricação
              de seu todo ou partes.
            </P>
            <P>
              <strong>12.7.</strong> As garantias estipuladas na presente
              cláusula não abrangem problemas, erros, danos ou prejuízos
              advindos de decisões tomadas com base em informações, quaisquer
              que sejam fornecidas pelo(s) programa(s), assim como não abrangem
              defeitos ou erros decorrentes de negligência, imprudência ou
              imperícia do Usuário na utilização da Plataforma ATESTEME, e
              também problemas provenientes de caso fortuito ou força maior.
            </P>
            <P>
              <strong>12.8.</strong> O Usuário é integralmente responsável pelas
              informações inseridas na Plataforma ATESTEME. Toda e qualquer
              informação inserida na Plataforma ATESTEME pelo Usuário não será,
              em hipótese alguma, revisada pela VERBUS EDUCACIONAL que em
              hipótese alguma, será responsável pelo conteúdo inserido pelo
              Usuário na Plataforma ATESTEME.
            </P>
            <P>
              <strong>12.9.</strong> Em nenhuma circunstância a VERBUS
              EDUCACIONAL será considerada responsável por quaisquer danos,
              diretos ou indiretos, físicos, técnicos, econômicos, ou fiscais,
              tais como, sem se resumir a, perdas e danos, lucros cessantes,
              danos emergentes, interrupção de negócios ou outros prejuízos
              decorrentes de uso ou da impossibilidade do uso da Plataforma
              ATESTEME.
            </P>
            <P>
              <strong>12.10.</strong> O Usuário deverá indenizar e isentar
              VERBUS EDUCACIONAL de quaisquer demandas, perdas,
              responsabilidades, reclamações ou despesas (incluindo honorários
              advocatícios), feitas contra ela por qualquer terceiro devido a,
              ou decorrentes de, ou em conexão com o uso do site ou qualquer um
              dos Serviços oferecidos.
            </P>
            <H2>13. LIMITAÇÃO DE RESPONSABILIDADE DA VERBUS EDUCACIONAL</H2>
            <P>
              <strong>13.1.</strong> Na máxima extensão permitida pela lei
              aplicável, em nenhuma circunstância a VERBUS EDUCACIONAL será
              responsável por quaisquer danos indiretos, punitivos, incidentais,
              especiais, consequenciais ou exemplares, incluindo, sem limitação,
              danos por lucros cessantes, boa vontade, uso de dados ou outras
              perdas intangíveis, decorrentes ou relacionadas ao uso ou
              incapacidade de usar o Serviço.
            </P>
            <P>
              <strong>13.2.</strong> Na extensão máxima permitida pela lei
              aplicável, a VERBUS EDUCACIONAL não assume nenhuma
              responsabilidade por quaisquer (i), erros ou imprecisões de
              conteúdo; (ii) ferimentos pessoais ou danos materiais, de qualquer
              natureza, resultantes do seu acesso ou uso do nosso Serviço; e
              (iii) qualquer acesso não autorizado ou uso de nossos servidores
              seguros e/ou toda e qualquer informação pessoal armazenada nele.
            </P>
            <P>
              <strong>13.3</strong> A VERBUS EDUCACIONAL não é responsável pela
              disponibilidade, qualidade e manutenção de tais serviços de
              telecomunicação e o Usuário entende que as condições do serviço de
              telecomunicações poderão afetar a experiência dos Serviços. A
              VERBUS EDUCACIONAL não será responsabilizada por qualquer problema
              relacionado ao Serviço decorrente direta ou indiretamente de
              inconsistências ou falhas nos dispositivos de telefonia móvel e/ou
              nos serviços de telecomunicação.
            </P>
            <P>
              <strong>13.4.</strong> Em função do disposto no item supra a
              VERBUS EDUCACIONAL não se responsabilizará:
            </P>
            <P>
              (a) Pela falha de operação, operação por pessoas não autorizadas
              ou qualquer outra causa em que não exista culpa da VERBUS
              EDUCACIONAL;
            </P>
            <P>(b) por ocorrências por “caso fortuito” ou “força maior”;</P>
            <P>
              (c) por problemas decorrentes de ações de terceiros que possam
              interferir na qualidade do Serviço;
            </P>
            <P>
              (d) por danos causados a terceiros em razão de serviços
              contratados e conteúdo gerado através da Plataforma ATESTEME;
            </P>
            <P>
              (e) por revisar as informações fornecidas pelos Usuários, seja no
              que tange à veracidade, exatidão ou completude dos dados,
              legalidade ou violação legal em função do fornecimento destas
              informações;
            </P>
            <P>
              (f) por danos pessoais ou qualquer prejuízo incidental, especial,
              indireto ou consequente, incluindo, sem limitação, prejuízos por
              perda de lucro, corrupção ou perda de dados, falha de transmissão
              ou recepção de dados, não continuidade do negócio ou qualquer
              outro prejuízo decorrentes ou relacionados ao seu uso ou
              inabilidade do Usuário;
            </P>
            <P>
              (g) por qualquer fraude, declaração fraudulenta ou violação do
              dever, ou violação de qualquer uma das condições destes Termos e
              Condições de Uso pelo Usuário;
            </P>
            <P>
              (h) por falhas de conexões, especialmente no que tange a
              impossibilidade de acesso à internet pelos Usuários.
            </P>
            <P>
              <strong>13.5.</strong> A VERBUS EDUCACIONAL irá se esforçar para
              manter o seu conteúdo atualizado e completo, livre de quaisquer
              defeitos ou vírus, não se responsabilizando, contudo, por esses e
              quaisquer outros possíveis problemas que não sejam causadas
              diretamente e exclusivamente pela VERBUS EDUCACIONAL. Fica desde
              já acordado que a VERBUS EDUCACIONAL poderá alterar o conteúdo a
              qualquer momento, sem prévio aviso.
            </P>
            <H2>14. POLÍTICA DE PRIVACIDADE</H2>
            <P>
              <strong>14.1.</strong> Favor consultar a Política de Privacidade
              da ATESTEME no seguinte link: https://www.atesteme.com, que
              constitui parte integrante destes Termos e Condições de Uso.
            </P>
            <H2>15. DEMAIS CONDIÇÕES</H2>
            <P>
              <strong>15.1.</strong> O Usuário concorda que a VERBUS EDUCACIONAL
              lhe envie ou simplesmente disponibilize, por qualquer meio,
              artigos, textos, notícias ou quaisquer outras formas de
              comunicação, desenvolvidas pela própria VERBUS EDUCACIONAL ou por
              parceiros desta, sempre que julgar que tais comunicações sejam de
              interesse do Usuário.
            </P>
            <P>
              <strong>15.2.</strong> O Usuário concorda em receber de tempos em
              tempos mensagens promocionais e materiais por correio, e-mail ou
              qualquer outro formulário de contato que nos seja fornecido
              (incluindo seu número de telefone para chamadas ou mensagens de
              texto). Se o Usuário não deseja receber esses materiais
              promocionais ou avisos – por favor, basta notificar a VERBUS
              EDUCACIONAL a qualquer momento.
            </P>
            <P>
              <strong>15.3.</strong> A VERBUS EDUCACIONAL se reserva o direito
              de, sem aviso prévio, alterar os Serviços, deixar de fornecer os
              Serviços ou quaisquer recursos dos Serviços oferecidos ou criar
              limites para os Serviços. A VERBUS EDUCACIONAL pode rescindir ou
              suspender, permanentemente ou temporariamente, o acesso aos
              Serviços sem aviso prévio e responsabilidade por qualquer motivo
              ou sem motivo, garantido o reembolso ao Usuário, conforme o caso.
            </P>
            <P>
              <strong>15.4.</strong> A VERBUS EDUCACIONAL poderá modificar estes
              Termos de Condições e Uso a qualquer momento, publicando a nova
              versão em seu website. Os novos Termos e Condições de Uso
              revisados entrarão em vigor imediatamente na data de sua
              publicação ou entrega ao Usuário, exceto se o Usuário
              expressamente aceitar o contrato revisado antes disso ao clicar no
              botão de aceitar. A aceitação expressa ou o uso contínuo da
              ATESTEME e dos Serviços no dia seguinte após a atualização dos
              Termos e Condições constituirá aceitação integral destes.
            </P>
            <P>
              <strong>15.5.</strong> As disposições destes Termos e Condições de
              Uso são irrevogáveis e irretratáveis e obrigam as partes e seus
              sucessores a qualquer título. As partes reconhecem, para todos os
              fins e efeitos de direito, que os presentes Termos e Condições de
              Uso constituem título executivo extrajudicial, estando sujeito à
              execução específica, nos termos do disposto no Código de Processo
              Civil.
            </P>
            <H2>16. FORO DE ELEIÇÃO</H2>
            <P>
              <strong>16.1.</strong> Fica eleito o foro da Comarca de Recife/PE,
              com renúncia de qualquer outro, por mais privilegiado que o seja,
              para resolver qualquer questão resultante dos presentes Termos e
              Condições de Uso.
            </P>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
