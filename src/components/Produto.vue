<template>
  <div class="container pagina_produto is-fullhd">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Smartphones</a></li>
        <li><a href="#">Apple</a></li>
        <li class="is-active"><a href="#" aria-current="page">iPhone X</a></li>
      </ul>
    </nav>
    <div class="produto columns">
      <div class="column is-6 produto_imagem">
        <div class="columns">
          <div class="column is-3 produto_imagem_miniaturas">
            <img class="imagem miniatura active" src="/static/images/produto01.jpg">
            <img class="imagem miniatura" src="/static/images/produto02.jpg">
            <img class="imagem miniatura" src="/static/images/produto03.png">
          </div>
          <div class="column produto_imagem_principal has-text-centered">
            <img class="imagem principal" id="zoom_image" src="/static/images/produto01.jpg" data-zoom-image="/static/images/produto01.jpg">
            <div class="produto_imagem_principal_dots">
              <i class="fas fa-circle active"></i>
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle"></i>
            </div>
            <button class="button"><i class="fas fa-heart"></i>Adicionar aos favoritos</button>
            <button class="button"><i class="fas fa-bell"></i> Alerta de preço</button>
            <button class="button"><i class="fas fa-exchange-alt"></i>Comparar</button>
          </div>
        </div>
      </div>
      <div class="column is-6 produto_desc">
        <div class="produto_desc_titulo is-flex">
          <h1>iPhone X 256gb Silver</h1>
          <div class="produto_desc_titulo_avaliacao">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>
        <hr>
        <div class="produto_desc_preco">
          <div class="linha_um is-flex is-space-between">
            <div class="produto_desc_preco_antigo">
              <strike>R$ 5999,00</strike>
            </div>
            <div class="produto_desc_preco_porcentagem">
              <span>-17%</span>
            </div>
          </div>
          <div class="linha_dois">
            <div class="produto_desc_preco_atual_boleto">
              <i class="fas fa-barcode"></i>
              <span>R$ 4999,00</span> á vista no boleto
            </div>
          </div>
          <div class="linha_tres">
            <div class="produto_desc_preco_atual_cartao_prazo">
              <i class="fas fa-credit-card"></i>
              <span>R$ 5290,00</span> em até 5x de <b>R$ 1058,00</b> sem juros
            </div>
            ou
            <div class="produto_desc_preco_atual_cartao_prazo_uma is-flex is-space-between">
              <div>
                <i class="fas fa-credit-card"></i>
                <span>R$ 5050,00</span> em <b>1x</b> no cartão
              </div>
              <a>Ver parcelas</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="produto_desc_acoes is-flex is-space-between">
          <div class="is-flex">
            <div class="produto_desc_acoes_cor">
            Cor
            <div></div>
          </div>
            <div class="produto_desc_acoes_qtd">
            Quantidade
            <div class="seletor_quantidade">
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <div class="produto_desc_acoes_comprar">
              <button class="button" onclick="toggleModal()">
                <i class="fas fa-shopping-cart"></i>
                Comprar
              </button>
          </div>
            <div class="produto_desc_acoes_comprar_clique">
              <button class="button">Compre com 1 clique!</button>
            </div>
          </div>
          <div class="produto_desc_acoes_frete">
              <span>Calcular frete</span>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="email" placeholder="CEP">
                <span class="icon is-left">
                  <i class="fas fa-truck"></i>
                </span>
                <span class="icon is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="compre_junto">
      <h1><b>Aproveite e leve junto!</b></h1>
      <div class="columns kit">
        <div class="column kit_produto is-2-desktop has-text-centered">
          <div class="kit_produto_image">
            <img class="image" src="/static/images/produto03.png">
          </div>
          <div class="kit_produto_desc">
            <div class="nome is-flex is-vertical-center"><b>iPhone X</b></div>
          </div>
        </div>
        <div class="kit_operador is-flex is-vertical-center"><i class="fas fa-plus"></i></div>
        <div class="column kit_produto is-3-desktop has-text-centered">
          <div class="kit_produto_image">
            <img class="image" src="/static/images/acessorio01.jpg">
          </div>
          <div class="kit_produto_desc">
            <div class="nome is-flex is-vertical-center"><b>Película Protetora iPhone X</b></div>
            <p class="preco-antigo">de <strike>R$ 109,00</strike> por</p>
            <p class="preco-real">R$ 39,00</p>
          </div>
        </div>
        <div class="kit_operador is-flex is-vertical-center"><i class="fas fa-plus"></i></div>
        <div class="column kit_produto is-3-desktop has-text-centered">
        <div class="kit_produto_image">
          <img class="image" src="/static/images/acessorio02.jpg">
        </div>
        <div class="kit_produto_desc">
          <div class="nome is-flex is-vertical-center"><b>Capa Silicone iPhone X</b></div>
          <p class="preco-antigo">de <strike>R$ 165,00</strike> por</p>
          <p class="preco-real">R$ 75,00</p>
        </div>
      </div>
        <div class="kit_operador is-flex is-vertical-center"><i class="fas fa-equals"></i></div>
        <div class="column kit_produto is-3-desktop is-flex is-vertical-center has-text-centered">
          <div class="kit_produto_acoes">
            <p>Leve os 3 produtos por:</p>
            <p>de <strike>R$ 5273,00</strike></p>
            <p>R$ 5113,00</p>
            <p>Economize <b>R$ 160,00</b></p>
            <button class="button">Comprar os 3 produtos</button>
          </div>
        </div>
      </div>
    </div>
    <div class="detalhes">
      <section class="accordions">
        <article class="accordion descricao">
          <div class="accordion-header toggle">
            <div class="is-flex">
              <i class="fas fa-file-alt"></i>
              <p>Descrição</p>
            </div>
            <button class="toggle" aria-label="toggle"></button>
          </div>
          <div class="accordion-body">
            <div class="accordion-content">
              <h1>Apple iPhone X</h1>
              <p class="has-text-centered">Conheça o futuro em um novo smartphone: Visual surpreendente, tela sem bordas e performance impecável!</p>
              <img class="is-image" src="/static/images/desc01.jpg">
              <h1>Tela Super retina</h1>
              <p>A tela do novo smartphone Apple iPhone X 256GB está em sua melhor versão: menos corpo e mais tela. Um novo padrão estilizado para transformar o smartphone na própria tela, oferecendo um visual de encher os olhos e um design ideal para as mãos.</p>
              <p>O novo display 5.8” Super Retina reproduz e interage com você de uma forma totalmente nova, projetando imagens em alto alcance dinâmico (HDR) e proporção de contraste 1.000.000:1. O painel OLED segues os melhores padrões de visualização oferecendo aos novos consumidor do Apple iPhone X o melhor conceito de cores, brilhos e nitidez de um smartphone.</p>
              <p>Toque e rastreamento facial também foram reestruturados, tudo para que você tenha respostas táteis mais sensíveis e padrões de reconhecimento otimizados (como nenhum outro celular foi capaz de oferecer até hoje). Com o novo iPhone X você literalmente faz parte das funções de tela, mergulhando em conteúdos imersivos e cores super fiéis aos conteúdos.</p>
              <img class="is-image" src="/static/images/desc02.jpg">
              <h1>Cor e precisão em um novo padrão OLED</h1>
              <p>O novo padrão de painel OLED do Apple iPhone X 256GB cobre desde o centro até as extremidades de tela do aparelho. Este novo método de construção ajusta cada pixel individualmente garantindo que toda imagem, letra ou número seja fielmente reproduzida na tela do seu smartphone. Distorções, falhas ou ondulações nas laterais do display são totalmente corrigidas para que você tenha a sensação visual da mais pura reprodução em alta definição.</p>
              <p>Cores e brilho também ganham ajustes, incluindo um controle maior de cenas e uma desenvoltura excepcional para usos noturnos ou ambientes com pouca luz.</p>
              <p>O novo smartphone Apple iPhone X trata com preocupação suas maiores necessidades e projeta cada recurso se colocando no lugar do usuário, tudo para garantir o melhor desempenho, muito além do convencional.</p>
              <img class="is-image" src="/static/images/desc03.jpg">
              <h1>Câmera TrueDepth</h1>
              <p>Uma estrutura quase sem bordas, puramente tela, incluindo apenas o que é realmente necessário: o sistema de câmeras TrueDepth. Esta tecnologia tem, entre outras funções comuns de uma câmera frontal, a responsabilidade de ativar o Face ID: tecnologia de captura facial desenvolvida para ativar os recursos do celular através da captação dos pontos do seu rosto.</p>
              <p>Nesse módulo super discreto e pequeno você conta com uma das tecnologias mais poderosas do smartphone, integrando sensores super avançados e lentes de câmera de alta fidelidade. </p>
              <img class="is-image" src="/static/images/desc04.jpg">
              <h1>Novo design: vidro + aço inoxidável</h1>
              <p>Preocupado com a segurança do seu smartphone? E se você pudesse investir em algo realmente confiável com um retorno de uso incrível e uma durabilidade de smartphone incomparável? Com o novo Apple iPhone X 256GB isso é totalmente possível. Sua nova estrutura inclui o vidro mais resistente já produzido em um smartphone e permite que toda a elegância de suas curvas estejam protegidas contra riscos, batidas aparentes ou danos severos provocados por quedas.</p>
              <p>A camada reforçada de vidro é 50% mais espessa que os modelos anteriores, proporcionando proteção aliada a tons vivos e brilhantes, além é claro, de diminuir consideravelmente as manchas ou marcas produzidas pelas digitais.</p>
              <p>As laterais e os demais pontos do smartphone (que não recebem a camada de vidro) são revestida com aço inoxidável feito em uma liga reforçada especialmente desenvolvida pela Apple para proporcionar maior durabilidade e um brilho intenso em todos os lados que se olhe. Vidro, aço e tela: um desenvolvimento visual PERFEITO! Uma combinação extrema de cores e brilhos que fará você desejar nunca ter conhecido outro smartphone.</p>
              <img class="is-image" src="/static/images/desc05.jpg">
              <h1>Processos gestuais mais intuitivos</h1>
              <p>Gestos antes simplificados e rotineiros se transformam totalmente no smartphone Apple iPhone X. Agora você conta com uma navegação extremamente rápida, feita para garantir naturalidade e fluidez total no uso. Esqueça os botões físicos ou os toques múltiplos, não será necessário apertar mais nada, basta deslizar o dedo e acessar uma nova tela de início cheia de recursos e novidades.</p>
              <img class="is-image" src="/static/images/desc06.jpg">
              <h1>Tecnologia True Tone</h1>
              <p>A tecnologia True Tone é um recurso já desenvolvido para modelos anteriores Apple e adaptado também para o novo iPhone X 256GB. Sua base tecnológica utiliza um sensor de luz ambiente avançado de seis canais para ajustar os tons brancos em tela conforme a temperatura de cor exata do ambiente. Isto significa que cada momento ou lugar de uso terá um desempenho diferente de tela, ajustando-se conforme a necessidade do conteúdos e também às suas condições visuais.</p>
              <p>Reduzir o cansaço visual e manter a imagem exata conforme a sua necessidade é um padrão simples e automático para o novo Apple iPhone X. Suas habilidades de tela garantem a união exata entre cores e contrastes, garantindo reproduções em alta definição ao mesmo tempo em que protege os seus olhos de qualquer dano por excesso ou falta de iluminação adequada.</p>
              <img class="is-image" src="/static/images/desc07.jpg">
              <h1>Resistente à água e poeira</h1>
              <p>Proteção, visual, construção e design, tudo preparado e projetado para garantir o smartphone mais incrível de todos os tempos nas suas mãos. O novo Apple iPhone X 256GB possui além de todos os recursos já mencionados um índice de classificação para proteção contra água e poeira. Possui o padrão IP67, resistente à imersão total em água (por 1 metro em até 30 minutos) e proteção contra poeira, sujeira ou intempéries do meio que possam danificar de alguma forma os componentes internos do smartphone.</p>
              <p>Agora você é livre para ir ainda mais além tendo um smartphone completo, seguro e com proteção que vai desde os detalhes estruturais, até os possíveis acidentes que possam ocorre durante a utilização.</p>
              <img class="is-image" src="/static/images/desc08.png">
              <h1>Face ID: reconhecimento e autenticação</h1>
              <p>Faça do seu rosto a chave mais segura para acessar suas informações. Não há segurança maior com uma facilidade tão grande quanto esta, e sabe por quê? Porque o seu rosto é único, assim como as digitais ele possui curvas que são apenas suas, por mais semelhante que outra pessoa possa parecer nunca será 100% igual. E o Apple iPhone X 256GB sabe disso e garante um reconhecimento facial perfeito com uma autenticação fácil e segura.</p>
              <p>Cada ponto possui uma função específica na TrueDepth e todas elas juntas garantem um mapeamento completo do rosto, tornando seu padrão de acesso mais intuitivo, rápido e seguro para todas as informações.</p>
              <img class="is-image" src="/static/images/desc09.png">
              <h1>Mapeamento facial completo</h1>
              <p>O FaceID é tão inovador que projeta um uso autônomo e extremamente inteligente de suas funções. Depois de captar e reconhecer uma única vez o seu rosto ele o fará sempre, acompanhando qualquer mudança na sua aparência sem perder as linhas originais da sua personalidade. Não importa se você estiver de chapéu, de óculo, com ou sem barba, mudar a cor dos cabelos ou com maquiagem, a detecção do FaceID é realmente precisa e garante reconhecimento do seu rosto mesmo que ninguém mais o faça.</p>
              <p>E para garantir um uso realmente seguro o FaceID possui uma projeção ainda mais inteligente, ativando as funções do celular apenas se você olhar diretamente para ele, com os olhos abertos e focado para o desbloqueio. Se você precisar apenas olhar as notificações, não tem problema, faça sem se preocupar com desbloqueios indevidos do aparelho.</p>
              <p>As informações do FaceID são criptografadas e asseguradas pelo Secure Enclave, isto significa que nenhum dos seus dados de acesso saem do aparelho e também não sofrem backup ou armazenamentos no iCloud ou em qualquer outro lugar. Basta “cadastrar o seu rosto”, olhar na medida certa e acessar um mundo de funcionalidades disponíveis no novo Apple iPhone X.</p>
              <img class="is-image" src="/static/images/desc10.png">
              <h1>Selfies: 7MP + modo retrato</h1>
              <p>Qual o nível de qualidade de uma selfie que você considera ideal para um smartphone? Que tal a qualidade profissional? Seria suficiente? Com a nova câmera de selfies TrueDepth do Apple iPhone X 256GB todas as suas necessidades são atendidas, desdes as já citadas funções do faceID, até a melhor captação para câmeras frontais de smartphones. Unida as funções do Chip A11 Bionic esta câmera frontal é capaz de captar os mínimos detalhes do seu rosto e de todo o ambiente a volta, basta mirar e registrar uma imagem perfeita, com padrões semelhantes aos oferecidos em câmeras profissionais ou semi profissionais.</p>
              <p>Com o Modo Retrato você pode tirar selfies em todos os momentos do dia, prontas para postar. Ela deixa o seu rosto no foco ideal, com nitidez exata para os detalhes de cena, iluminação do ambiente, cores de pele, olhos, boca e uma série de outros fatores que influenciam em um bom resultado de captura.</p>
              <img class="is-image" src="/static/images/desc11.jpg">
              <h1>Iluminação profissional para o Modo Retrato</h1>
              <p>A iluminação para o modo retrato conta com 5 efeitos diferentes, um para cada tipo de ambiente ou preferência sua. Exatamente como a câmera TrueDepth, o modo retrato analisa o seu rosto para captar seus melhores traços e utilizar em uma selfie perfeita, sem qualquer defeito ou falha de mapeamento facial.</p>
              <img class="is-image" src="/static/images/desc12.jpg">
              <h1>Recurso Animoji</h1>
              <p>Os recursos da câmera TrueDepth + o chip A11 Bionic do iPhone X 256GB foram realmente além. Suas capacidades garantem a otimização da captura de um maneira realmente impressionante, analisando mais de 50 movimentos musculares para o reconhecimento de cada traço.</p>
              <p>Além do faceID e do modo retrato, esta captura de face possibilita a criação dos Animojis. São 12 personagens diferentes preparados para reproduzir os seus gestos e expressões faciais de forma perfeita e divertida, respondendo exatamente a cada mudança ou movimento facial que você faça. Basta escolher o personagem que mais se adequa à sua personalidade e enviar para qualquer usuários, com uma reprodução perfeita e um áudio claro e cristalino, 100% fiel a sua voz.</p>
              <img class="is-image" src="/static/images/desc13.jpg">
              <h1>Câmeras traseiras aprimoradas</h1>
              <p>Câmera é para quem realmente entende. E os smartphones Apple são líderes de mercado quando o assunto é boas versões de câmaras para celular, seja em versão frontal de selfies ou para a traseira e principal.
                Depois da já mencionada TrueDepth câmera frontal, com suas centenas de recursos, chegou a vez da versão traseira, a câmera de lentes grande-angular e teleobjetiva de 12MP cada. Isso mesmo: 12MP cada em um projeto dual-cam feito especialmente para você, apaixonado por fotos.</p>
              <p>As versões traseiras de câmera do smartphone Apple iPhone X 256GB são simplesmente as melhores. Além das lentes grande-angular e teleobjetiva ele oferece abertura F/2.4 para uma das opções e F/1.8 para a outra, mantendo ambas com estabilização óptica de imagem de primeira linha.</p>
              <p>Este recursos unidos garantem que cada imagem ou vídeo captado pela câmera corresponda com uma qualidade superior ao que os seus olhos podem ver, oferecendo o verdadeiro resultado de imagem e vídeo que você teria em alguns modelos de câmeras semi-profissionais ou até mesmo profissionais.</p>
              <img class="is-image" src="/static/images/desc14.jpg">
              <h1>Sensor de profundidade para modo retrato</h1>
              <p>Se o Modo Retrato para a função de selfie já é boa, imagina o que ele poderá fazer integrado à câmera principal do smartphone. O Apple iPhone X 256GB possui este recurso como uma de suas melhores tecnologias, seja para auto-retratos ou para captar fotos de outros elementos ou pessoas através das câmeras traseiras.</p>
              <img class="is-image" src="/static/images/desc15.jpg">
              <h1>Estabilização óptica nas duas câmeras traseiras</h1>
              <p>Encontrar uma boa câmera, compacta, prática e com funções específicas exige um trabalho árduo, cansativo e muitas vezes caro, bem caro! Com o novo Apple iPhone X você tem praticamente todas as ferramentas que uma boa câmera oferece, mas mantendo a facilidade de um equipamento compacto somado a todas as vantagens de um celular.</p>
              <p>A dupla estabilização óptica é um destes recursos que só o iPhone X 256GB pode oferecer. Suas fotos brilham e oferecem nitidez mesmo durante a noite ou em cenários com pouca luz. Junto ao processador inteligente de imagem o seu novo smartphone será capaz de capturar todos os elementos da cena, desde pessoas e pequenos objetos, até movimentos e iluminação, tudo para garantir o melhor registro sob quaisquer condições do dia ou da noite.</p>
              <p>Você nunca viu e não verá tão cedo uma proposta tão tecnológica quanto o que as câmeras traseiras do Apple iPhone X tem a oferecer. São dezenas de possibilidades, incluindo vídeos, fotos, animações e tudo mais que você pode imaginar. E o melhor! uma ampla capacidade desenvolvida em um pequeno modelo de smartphone que cabe nas suas mãos!</p>
              <img class="is-image" src="/static/images/desc16.jpg">
              <h1>Zoom óptico de até 10x</h1>
              <p>Pensou que tinha acabo? Ainda não! As câmeras traseiras do smartphone Apple iPhone X 256GB são realmente fantásticas. Não há como negar qualquer uma de suas especificações. Além dos recursos já mencionados estas câmeras de alta tecnologia possuem capacidade de zoom óptico de até 10x para as fotos e até 6x para vídeos. Com ela você grava em 4K (60qps) mantendo a qualidade do vídeo perfeita, sem borrões ou efeitos tremidos (graças ao estabilizador óptico).</p>
              <p>Você também pode gravar em câmera lenta (1080p até 240qps) ou no modo Time-Lapse. Cada recurso reconhece os objetos rapidamente, mantendo o efeito perfeito para cada ocasião pretendida. O zoom óptico de 10x (fotos) e 6x (vídeos) irá garantir uma reprodução estável e sem efeitos pixelados mesmo quando você estiver longe do "objetos" de captura, o que significa que não há momento ruim, ambiente ou iluminação que possa impedir um bom retrato registrado pelo novo Apple iPhone X. O desenvolvimento mais incrível de todos os tempo está aqui e disponível para você em um design simplesmente compacto e espetacular.</p>
              <img class="is-image" src="/static/images/desc17.jpg">
              <h1>Chip A11 Bionic</h1>
              <p>Poucos smartphones possuem um desempenho tão arrasador quanto os novos modelos da Apple. O iPhone X em especial traz um novo sistema de hardware, incluindo velocidade e inteligência acima da média para um smartphone tão compacto. O A11 Bionic está ainda mais veloz e mais poderoso, pronto para entregar a você a melhor experiência de uso possível, desde as funções de câmera e reconhecimento facial, até os melhores games e aplicativos já desenvolvidos.</p>
              <p>A construção dessa nova CPU possui 4,3 bilhões de transistores e seis núcleos de processamento: 4 de eficiência (70% mais velozes que o modelo anterior) e 2 de desempenho (25% mais performance que o anterior). E se você necessitar de um desempenho ainda maior o iPhone X 256GB possui um uso inteligente de suas funções, sendo capaz de usar os 6 núcleos de uma só vez para garantir a estabilidade máxima em qualquer conteúdos reproduzido.</p>
              <p>Basta você escolher o que irá fazer no seu novo smartphone e deixar todos os grandes desafios por conta do seu processador top de linha, desenvolvido sob os mais intensos processos de construção com a confiabilidade que você procura.</p>
              <img class="is-image" src="/static/images/desc18.jpg">
              <h1>Processador neural</h1>
              <p>Você já ouviu falar em inteligência artificial? Acreditamos que sim e por este motivo gostaríamos de mostrar a você o novo processador neural do smartphone Apple iPhone X. Esta tecnologia baseia-se em uma peça de hardware projetada dentro do smartphone que tem por objetivo analisar os seus padrões de uso do smartphone e efetivar respostas muito mais rápidas e eficientes em pouquíssimo segundos.</p>
              <p>A principal integração do processador neural do iPhone X está nas capacidades de reconhecimento facial, incluindo um estrutura de dois núcleos capaz de analisar pessoas, lugares e objetos em velocidade e precisão inimagináveis.</p>
              <p>São até 600 bilhões de operações por segundo, otimizando cada mínimo detalhe das tecnologias de câmera, do FaceID e também do recurso Animoji.</p>
              <img class="is-image" src="/static/images/desc19.jpg">
              <h1>Consumo energético inteligente</h1>
              <p>Economia energética é outro ponto estudado e replanejado do iPhone X em comparação aos modelos anteriores Apple. Visto a enorme necessidade de uma bateria mais potente os engenheiros da Apple otimizaram não só a quantidade de mAh, como também o gasto que cada função do smartphones costumava ter.</p>
              <p>Seus núcleos de desempenho agora gerenciam os gastos de cada mAh de bateria, otimizando segundo a segundo de uso para que todas as suas atividades (envio de mensagens, navegação na internet...) consumam muito menos energia do smartphone. São até duas horas a mais de durabilidade da bateria se comparado ao Apple iPhone 7.</p>
              <img class="is-image" src="/static/images/desc20.jpg">
              <h1>GPU A10 Fusion</h1>
              <p>A nova GPU, também otimizada para usos com o novo iPhone X, transmite um desempenho fora do comum para reprodução de conteúdos de alta definição para o smartphone. Não há como projetar uma tela com tantas respostas e visuais mantendo um processador gráfico abaixo das suas capacidades, por este motivo, o novo Apple iPhone X conta com o novo A10 Fusion, processador gráfico com três núcleos de desempenho e 30% mais rápido, tudo para garantir que cada imagem e conteúdo apresentado mostre o verdadeiro potencial que tem a oferecer.</p>
              <p>Games e reproduções em realidade aumentada terão outro resultado quando o assunto é desempenho gráfico. Agora você mergulha em uma profundidade enorme de opções e aplicativos sem precisar optar por qual irá ou não irá rodar no seu smartphone. Tudo é possível, todas as opções são suportadas e você interage com o seu novo smartphone como jamais poderia em outros modelos ou plataformas.</p>
              <img class="is-image" src="/static/images/desc21.jpg">
              <h1>Recarga sem fios</h1>
              <p>O novo design do smartphone Apple iPhone X não serve somente para a beleza. Suas característica garantem otimizações tanto no usos dos recursos internos, quanto em um carregamento rápido e intuitivo. Graças a parte traseira do celular, desenvolvida em vidro especial, você pode recarregá-lo rapido e facilmente em novos sistemas sem fios. Basta colocar o aparelho sobre a base de recarga sem fios e em alguns poucos minutos você terá horas do melhor uso junto ao seu novo smartphone top de linha Apple iPhone X.</p>
              <p>Você pode até mesmo recarregá-lo “por ai” em qualquer carregador sem fio que tenha o padrão Qi, normalmente encontrado em hotéis, aeroportos, cafeterias e diversos outros ambientes com a tecnologia. Mas se preferir você pode adquirir (separadamente) uma das duas opções de carregadores sem fio deisponíveis para o iPhone X e levá-lo com você por onde for, preocupando-se apenas em ter uma base para o celular, sem fios, sem incomodação e sem qualquer dificuldade para recarregar.</p>
              <img class="is-image" src="/static/images/desc22.jpg">
              <h1>Sistema operacional iOS 11</h1>
              <p>Um sistema operacional feito à altura deste novo e incrível smartphone. O iOS 11 possui novos e atuais recursos projetados especialmente para o iPhone X. Sua usabilidade está mais fluida e os recursos muito mais intuitivos. Agora, nenhuma função fica para trás, tudo pode ser analisado com calma de forma organizada e com as melhores respostas que esta nova versão de sistema operacional tem a oferecer.</p>
              <p>Não importa se a sua necessidade é de apenas um aplicativo por vez ou de usos simultâneos e multi tarefas. Não importa se você utilizar as funções da câmera para responder rapidamente alguém nas sua rede social, enquanto deixa um de seus game aberto em outra tela aguardando o “play”. Não importa o quanto você exigir deste novo smartphone, sua união perfeita entre hardware e sistema operacional é capaz de garantir o melhor uso, com a fluidez comparável ao de um computador ou plataformas de game. Tudo é agilizado e todos os aplicativos são disponibilizado em milhares de opções de acesso fácil e rápido, tudo para que você se surpeenda com a Apple Store e com as mais incríveis funções do smartphone Apple iPhone X. </p>
              <img class="is-image" src="/static/images/desc23.jpg">
            </div>
          </div>
        </article>
        <article class="accordion specs">
          <div class="accordion-header">
            <div class="is-flex">
              <i class="fas fa-pencil-ruler"></i>
              <p>Especificações</p>
            </div>
            <button class="toggle" aria-label="toggle"></button>
          </div>
          <div class="accordion-body">
            <div class="accordion-content">
              <div class="spec_item">
                <p><b>Sistema Operacional</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Plataforma</span>
                  <span class="spec_segunda">iOS</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Versão</span>
                  <span class="spec_segunda">iOS 11</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Video</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Resolução</span>
                  <span class="spec_segunda">4K</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">FPS da Gravação</span>
                  <span class="spec_segunda">60 fps</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Tela</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Tamanho da tela</span>
                  <span class="spec_segunda">5.8"</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Resolução</span>
                  <span class="spec_segunda">2436 x 1125</span>
                </p>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Tipo</span>
                  <span class="spec_segunda">OLED - Super Retina - HDR</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Número de cores</span>
                  <span class="spec_segunda">16 milhoes de cores</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Memória</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Memória interna</span>
                  <span class="spec_segunda">256GB</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Câmera Traseira</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Câmera</span>
                  <span class="spec_segunda">12 MP</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Recursos</span>
                  <span class="spec_segunda">Autofocus - Detecção Facial - Detecção de Sorriso - Estabilização de Imagem - Flash - DR - Zoom Óptico - Temporizador - Abertura F/1.8 - Abertura F/2.4 - Lente de Seis Elementos - Redução de Ruído - Modo Retrato - Iluminação do Retrato - Zoom Digital até 10x - Flash True Tone - Sensor de retroiluminação - Filtro IV híbrido</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Câmera Frontal</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Câmera Frontal</span>
                  <span class="spec_segunda">7 MP</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Recursos</span>
                  <span class="spec_segunda">Flash Retina - Temporizador - Controle de Exposição - Modo Retrato - Iluminação de Retrato - Animoji</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Conectividade</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Rede</span>
                  <span class="spec_segunda">4G - 3G - 2G</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Conectividade</span>
                  <span class="spec_segunda">Bluetooth 5.0 - Wi-Fi 802.11 a/b/g/n/ac - NFC - Conexão Lightning - GPS - A-GPS - GLONASS - Galileo - QZSS</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Resistência</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Tipo</span>
                  <span class="spec_segunda">Resistente à Água e Poeira (IP67)</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Sensores</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Sensores</span>
                  <span class="spec_segunda">Acelerômetro - Barômetro - Luz Ambiente - Proximidade - Face ID - Giroscópio de três eixos</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Bateria</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Removível</span>
                  <span class="spec_segunda">Não</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Tipo</span>
                  <span class="spec_segunda">Íons de Lítio (Li-Ion)</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Processador</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Modelo</span>
                  <span class="spec_segunda">Chip A11 Bionic 64 Bits com Coprocessador M11</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Chips</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Chips</span>
                  <span class="spec_segunda">1 Chip</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Tipo do chip</span>
                  <span class="spec_segunda">Nano SIM Card</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Dimensões</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Altura (cm)</span>
                  <span class="spec_segunda">14.30</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Espessura (cm)</span>
                  <span class="spec_segunda">	0.70</span>
                </p>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Largura (cm)</span>
                  <span class="spec_segunda">7.00</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Peso (g)</span>
                  <span class="spec_segunda">	174.00</span>
                </p>
              </div>
              <div class="spec_item">
                <p><b>Fabricante</b></p>
                <hr>
                <p class="spec_linha zebrado">
                  <span class="spec_primeira">Marca</span>
                  <span class="spec_segunda">Apple</span>
                </p>
                <p class="spec_linha">
                  <span class="spec_primeira">Modelo</span>
                  <span class="spec_segunda">	iPhone X</span>
                </p>
              </div>
            </div>
          </div>
        </article>
        <article class="accordion compra_tambem">
          <div class="accordion-header">
            <div class="is-flex">
              <i class="fas fa-cart-plus"></i>
              <p>Quem comprou, compra também</p>
            </div>
            <button class="toggle" aria-label="toggle"></button>
          </div>
          <div class="accordion-body">
            <div class="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </div>
        </article>
        <article class="accordion caixa">
          <div class="accordion-header">
            <div class="is-flex">
              <i class="fas fa-box-open"></i>
              <p>O que vem na caixa?</p>
            </div>
            <button class="toggle" aria-label="toggle"></button>
          </div>
          <div class="accordion-body">
            <div class="accordion-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </div>
        </article>
        <article class="accordion avaliacoes">
          <div class="accordion-header">
            <div class="is-flex">
              <i class="fas fa-comment"></i>
              <p>Comentários e avaliações</p>
            </div>
            <button class="toggle" aria-label="toggle"></button>
          </div>
          <div class="accordion-body">
            <div class="accordion-content">
              <div class="avaliacoes columns">
                <div class="avaliacoes_estrelas is-6 column">
                  <div class="avaliacoes_estrelas_excelente">
                    <span class="estrela">
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                    </span>
                    <span class="desc"><b>Excelente</b></span>
                    <div class="barra">
                      <span class="barra_progresso"></span>
                    </div>
                    <span class="numero">236</span>
                  </div>
                  <div class="avaliacoes_estrelas_otimo">
                    <span class="estrela">
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="desc"><b>Ótimo</b></span>
                    <div class="barra">
                      <span class="barra_progresso"></span>
                    </div>
                    <span class="numero">198</span>
                  </div>
                  <div class="avaliacoes_estrelas_bom">
                    <span class="estrela">
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="desc"><b>Bom</b></span>
                    <div class="barra">
                      <span class="barra_progresso"></span>
                    </div>
                    <span class="numero">100</span>
                  </div>
                  <div class="avaliacoes_estrelas_regular">
                    <span class="estrela">
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="desc"><b>Regular</b></span>
                    <div class="barra">
                      <span class="barra_progresso"></span>
                    </div>
                    <span class="numero">23</span>
                  </div>
                  <div class="avaliacoes_estrelas_ruim">
                     <span class="estrela">
                      <i class="fa fa-star amarela"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="desc"><b>Ruim</b></span>
                    <div class="barra">
                      <span class="barra_progresso"></span>
                    </div>
                    <span class="numero">3</span>
                  </div>
                </div>
                <div class="avaliacoes_nota is-2 column">
                  <p class="primeiro">Nota <b>9.3</b> de <b> 10</b></p>
                  <p class="segundo">com base em <b>560</b> avaliações</p>
                  <button class="button">Avaliar</button>
                </div>
              </div>
              <hr>
              <div class="comentarios columns">
                <div class="comentarios_nome column is-2">
                  <p class="nome">Wesley Bonfim Sartori</p>
                  <p class="data">29/09/2018</p>
                  <p class="cidade">São Carlos - SC</p>
                </div>
                <div class="comentarios_comentario column is-10">
                  <div class="comentario_produto">
                    <p class="avaliacao_produto">Avaliação do produto</p>
                    <b>Melhor celular</b>
                    <p class="estrelas_produto">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                    <p>Não preciso de um telefone mais potente, não jogo nada e uso apenas para coisas simples, e nisso ele não poderia ser mais perfeito. Além de ser o mais lindo em seu design.</p>
                  </div>
                  <div class="comentario_loja">
                    <p class="avaliacao_loja">Avaliação da loja</p>
                    <b>Melhor comunicação com o cliente que já vi.</b>
                    <p class="estrelas_loja">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                    <p>Respostas rápidas com um dos melhores atendimentos ao cliente que já tive a felicidade de experimentar. Tudo chegou certinho (como sempre).</p>
                  </div>
                  <div class="comentario_proecontra columns">
                    <div class="pro column is-2">
                      <b>Pró</b>
                      <p>Desempenho</p>
                      <p>Câmera</p>
                      <p>Autonomia da Bateria
                      <p>Facilidade de Uso
                      <p>Tela</p>
                      <p>Hardware</p>
                      <p>Design</p>
                    </div>
                    <div class="contra column is-2">
                      <b>Contra</b>
                      <p>Custo x Benefício</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr>
              <div class="comentarios columns">
                <div class="comentarios_nome column is-2">
                  <p class="nome">Elisa Maschio</p>
                  <p class="data">19/09/2018</p>
                  <p class="cidade">Quilombo - SC</p>
                </div>
                <div class="comentarios_comentario column is-10">
                  <div class="comentario_produto">
                    <p class="avaliacao_produto">Avaliação do produto</p>
                    <b>Muito bom</b>
                    <p class="estrelas_produto">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                    <p>Além das expectativas, iPhone não tem erro. Recomendo</p>
                  </div>
                  <div class="comentario_loja">
                    <p class="avaliacao_loja">Avaliação da loja</p>
                    <b>Ótima compra.</b>
                    <p class="estrelas_loja">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </p>
                    <p>Recebi meu produto conforme anunciado e entrega até um dia antes do previsto. Parabéns, com certeza irei fazer novas compras no futuro. Obrigado</p>
                  </div>
                  <div class="comentario_proecontra columns">
                    <div class="pro column is-2">
                      <b>Pró</b>
                      <p>Desempenho</p>
                      <p>Câmera</p>
                      <p>Autonomia da Bateria
                      <p>Facilidade de Uso
                      <p>Tela</p>
                      <p>Hardware</p>
                      <p>Design</p>
                    </div>
                    <div class="contra column is-2">
                      <b>Contra</b>
                      <p>(Nenhum ponto negativo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>

    <div class="modal" id="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Deseja continuar comprando?</p>
            <button class="delete" onclick="toggleModal()" aria-label="close"></button>
          </header>
          <section class="modal-card-body columns">
            <div class="column foto is-3">
              <b>Imagem</b>
              <hr>
              <img class="is-image" src="/static/images/produto01.jpg">
            </div>
            <div class="column desc is-6">
              <b>Descrição</b>
              <hr>
              <p>iPhone X 256gb Silver</p>
            </div>
            <div class="column qtd is-1">
              <b>Qtd.</b>
              <hr>
              <p>1</p>
            </div>
            <div class="column valor is-2 ">
              <b>Valor</b>
              <hr>
              <p>R$ 5999,00</p>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button continuar" onclick="toggleModal()">Continuar comprando</button>
            <button class="button is-success">Ir para carrinho</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Produto"
  }
</script>

<style scoped>

</style>