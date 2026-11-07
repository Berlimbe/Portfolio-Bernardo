/* =========================================================================
   PORTFÓLIO — BERNARDO  |  script.js
   -------------------------------------------------------------------------
   GUIA RÁPIDO DE MANUTENÇÃO (tudo que você precisa editar está nos blocos
   numerados abaixo; use Ctrl+F e procure pelo marcador, ex.: "[4]")

   [1] LINKS E FOTO DE PERFIL
       -> troque linkedin, github e curriculo pelos seus links reais.
       -> coloque sua foto em  assets/perfil.jpg  (ou mude o caminho em "foto").

   [2] FORMAÇÃO ACADÊMICA (timeline da página "Sobre Mim")
   [3] HARD SKILLS (tags da página "Sobre Mim")

   [4] PROJETOS DE TI            -> adicionar/editar/remover projetos
   [5] PROJETOS DE BI & DADOS    -> idem
   [6] LIDERANÇA & GESTÃO        -> idem

   [7] ESTUDOS DE CASO (página de detalhes de um projeto)
       -> ficam DENTRO do projeto, no campo  estudoDeCaso: { ... }
          (Ctrl+F por "estudoDeCaso" para achar todos).

   COMO ADICIONAR UMA FOTO A UM PROJETO (capa do card)
     1. Salve a imagem dentro da pasta assets/ (ex.: assets/projeto1.jpg).
     2. No projeto desejado, preencha:  imagem: "assets/projeto1.jpg"
     3. Deixou "" (vazio)? O card mostra automaticamente um gradiente com
        o ícone da área. Se o arquivo não for encontrado, também.
        Dica: use imagens 16:9 (ex.: 1280x720) para o melhor enquadramento.

   COMO ADICIONAR UM NOVO PROJETO
     Copie um bloco { ... }, (com a vírgula no final) dentro da lista da
     área e edite os campos:
       id         -> identificador do projeto (só letras minúsculas, números
                     e hífens). Vira o link:  #projeto/id-do-projeto
                     (opcional; se faltar, é gerado a partir do título)
       titulo     -> nome do projeto
       descricao  -> texto do card
       tags       -> lista de tecnologias/competências
       imagem     -> caminho da foto ou "" (vazio)
       destaque   -> true para ganhar o selo dourado, false para normal
       link       -> URL do projeto/repositório ou "" (vazio = sem botão)
       estudoDeCaso -> (opcional) veja abaixo

   COMO ADICIONAR FOTOS À GALERIA DE UM ESTUDO DE CASO
     1. Salve as imagens em assets/ (ex.: assets/ti-vw-1.jpg).
     2. Dentro de  estudoDeCaso.galeria  existe uma linha por imagem:
          { arquivo: "assets/ti-vw-1.jpg", legenda: "Tela de abertura de chamado" },
        Para ADICIONAR mais fotos, copie uma linha e mude arquivo/legenda.
        Para REMOVER, apague a linha. A ordem da lista é a ordem na tela.
     3. Enquanto o arquivo não existir na pasta assets/, aparece um
        placeholder elegante com a legenda (o layout não quebra) e a
        imagem só ganha zoom (lightbox) quando carregar de verdade.

   COMO CRIAR UM ESTUDO DE CASO PARA OUTRO PROJETO
     Dentro do projeto, acrescente um campo estudoDeCaso (copie o de um
     dos projetos em destaque). O botão do card muda sozinho para
     "Ver Estudo de Caso →" e a página abre em  #projeto/id-do-projeto.
     Formato de cada campo de estudoDeCaso:
       subtitulo           -> texto curto (1 linha)
       contexto            -> texto; separe parágrafos com uma linha em branco
       arquiteturaESolucao -> lista de { titulo, texto }  (vira cards)
                              ou lista de textos simples (vira tópicos)
       resultados          -> lista de textos (vira tópicos) ou um texto
       galeria             -> lista de { arquivo, legenda }

   LINK DIRETO PARA COMPARTILHAR (depois de publicar na Vercel):
       https://SEU-SITE.vercel.app/#projeto/sistema-solicitacao-analises
       https://SEU-SITE.vercel.app/#projeto/painel-tukan

   Depois de editar, é só fazer commit/push: a Vercel publica sozinha.
   ========================================================================= */


/*   [1] LINKS E FOTO DE PERFIL*/
const DADOS = {
  perfil: {
    foto: "assets/perfil.jpg",                        
    linkedin: "https://www.linkedin.com/in/bernardo-almeida-29b126213", 
    github: "https://github.com/Berlimbe",            
    curriculo: "assets/Currículo_Bernardo_2026.pdf",   
    email: "bernardoaurelioa@gmail.com",       
  },

  /*     [2] FORMAÇÃO ACADÊMICA*/
  formacao: [
    {
      titulo: "Engenharia de Software (EAD)",
      instituicao: "Universidade Positivo",
      status: "Em andamento...",
      atual: true,
      descricao:
        "Foco de interesse em Arquitetura de Software (planejamento e estruturação sistêmica), Tópicos Especiais de Sistemas (padrões lógicos e CRUD) e Data Science (Machine Learning, clusterização e árvores de decisão).",
    },
    {
      titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      instituicao: "Universidade Positivo",
      status: "Concluído",
      atual: false,
      descricao:
        "Formação superior com forte base prática em desenvolvimento de software e múltiplos projetos no GitHub.",
    },
    {
      titulo: "Técnico em Administração",
      instituicao: "SENAI",
      status: "Concluindo...",
      atual: true,
      descricao:
        "Desenvolvimento de competências em gestão empresarial, apresentação pública e ferramentas da qualidade (Diagrama de Ishikawa, metodologia DMAIC, gráficos de dispersão e análise de indicadores).",
    },
    {
      titulo: "Ensino Médio Tecnológico",
      instituicao: "SESI / Colégio da Indústria",
      status: "2021 – 2023",
      atual: false,
      descricao:
        "Base em liderança, trabalho em equipe, pesquisas sobre startups e ciências tecnológicas.",
    },
  ],

  /*      [3] HARD SKILLS (uma tag por item) */
  skills: [
    "PHP", "Laravel (Livewire/Blades)", "C#", "React", "JavaScript", "TypeScript",
    "Python", "Java", "Kotlin", "HTML/CSS", "PostgreSQL", "MySQL", "Power BI",
    "Excel Avançado (Macros)", "SharePoint",
    "Machine Learning (Google Colab)", "DMAIC", "Ishikawa", "5W2H"
  ],

  /*      [4] PROJETOS DE TI*/
  projetosTI: [
    {
      id: "sistema-solicitacao-analises",   // vira o link  #projeto/sistema-solicitacao-analises
      titulo: "Portal de Gestão de Análises Veiculares — CTV (Volkswagen)",
      descricao:
        "Plataforma web full-stack projetada e desenvolvida de forma autônoma para a Intranet da Volkswagen (Planta Curitiba). Substituiu controles manuais em planilhas e e-mails por um fluxo digital centralizado, com controle de acesso por papéis (RBAC), rastreabilidade de laudos técnicos, notificações SMTP automatizadas, geração de relatórios para impressão/PDF e dashboard gerencial de KPIs.",
      tags: [
        "PHP 8.3",
        "Laravel 11",
        "Livewire 3",
        "Tailwind CSS",
        "Alpine.js",
        "PostgreSQL",
        "MySQL"
      ],
      imagem: "assets/ti-vw-1.jpg",        // ex.: "assets/projeto-vw-analises.jpg"
      destaque: true,
      link: "",

      /*          [7] ESTUDO DE CASO — Sistema de Solicitação de Análises (VW)*/
      estudoDeCaso: {
        subtitulo:
          "Digitalização e centralização do fluxo de solicitações, laudos técnicos e indicadores da Central de Análises Veiculares (CTV) na Planta de Curitiba.",

        // Parágrafos separados por uma linha em branco
        contexto: `A Central de Análises Veiculares (CTV) da Volkswagen atua na investigação técnica de componentes e veículos durante a manufatura e no pós-venda (campo). Antes do sistema, o recebimento de demandas dependia de controles descentralizados via planilhas e trocas de e-mails, o que dificultava a priorização da fila, o rastreio de evidências históricas e a visibilidade de status para os solicitantes.

Para resolver esse gargalo, projetei e desenvolvi de forma autônoma uma aplicação web completa na Intranet corporativa. O sistema padronizou desde a entrada de dados técnicos de engenharia até o fechamento do laudo pelo analista, integrando diferentes contextos operacionais (CTV, Laboratório e Sala de Medidas) e fornecendo métricas em tempo real para a gestão.`,

        // Cada item vira um card (titulo + texto).
        arquiteturaESolucao: [
          {
            titulo: "Arquitetura Reativa (TALL Stack)",
            texto: "Desenvolvimento ponta a ponta utilizando PHP 8.3, Laravel 11, Livewire 3, Alpine.js, Tailwind CSS e componentes WireUI, entregando uma interface fluida de Single-Page Application com suporte a Dark Mode.",
          },
          {
            titulo: "Controle de Acesso por Papéis (RBAC)",
            texto: "Gerenciamento de permissões via Spatie Permission com distinção automática entre 'Solicitante', 'Analista' e 'Admin', além de seleção de contexto operacional pós-login (CTV, LAB ou SM).",
          },
          {
            titulo: "Rastreabilidade e Dados de Engenharia",
            texto: "Formulários estruturados para captura de dados críticos da indústria automotiva (VIN/Chassi, Modelo, Fornecedor, Grupo, Centro de Custo, códigos KPM/IFP, horas dedicadas e conclusão técnica).",
          },
          {
            titulo: "Ciclo de Vida, Anexos e Interações",
            texto: "Gestão completa do chamado (Aberta, Em Andamento, Concluída, Cancelada), sistema de comentários integrado, upload de evidências técnicas e fila de trabalho organizada por analista responsável.",
          },
          {
            titulo: "Motor de Notificações via SMTP",
            texto: "Disparo automatizado de e-mails na abertura da solicitação e no encerramento do laudo técnico (enviando os dados consolidados e anexos diretamente aos envolvidos).",
          },
          {
            titulo: "Dashboard Gerencial e Relatórios em PDF",
            texto: "Painel de KPIs com gráficos de volume, status, grupos e carga de trabalho da equipe, aliado a um módulo de estilização dedicada (Print CSS) para exportação de laudos técnicos em PDF.",
          },
          {
            titulo: "Evolução de Banco de Dados e Deploy Corporativo",
            texto: "Estruturação inicial em SQLite/MySQL e migração produtiva para PostgreSQL em parceria com a equipe de infraestrutura, superando restrições severas de rede, proxy e cache do ambiente industrial.",
          },
        ],

        // Lista de textos (vira tópicos).
        resultados: [
          "Eliminação de controles paralelos em planilhas e e-mails, centralizando 100% do histórico técnico e anexos das análises em uma base única.",
          "Transparência em tempo real do andamento das solicitações, reduzindo significativamente as cobranças manuais de status entre setores.",
          "Padronização da coleta de dados veiculares (VIN, KPM, IFP) e geração instantânea de laudos padronizados para impressão e arquivo em PDF.",
          "Visibilidade gerencial sobre a capacidade produtiva e distribuição de carga de trabalho entre os analistas através do Dashboard de KPIs.",
          "Adaptação bem-sucedida da arquitetura para operar sob rígidas políticas de segurança e infraestrutura de TI da fábrica.",
        ],

        // UMA LINHA POR IMAGEM. Para adicionar mais fotos, copie uma linha e edite.
        galeria: [
          { arquivo: "assets/ti-vw-1.jpg", legenda: "Home Page" },
          { arquivo: "assets/ti-vw-2.jpg", legenda: "Login Page" },
          { arquivo: "assets/ti-vw-3.jpg", legenda: "Dashboard de indicadores (KPIs)" },
          { arquivo: "assets/ti-vw-4.jpg", legenda: "Painel de Solicitações realizadas (Lista com paginação)" },
          { arquivo: "assets/ti-vw-5.jpg", legenda: "Abertura de chamado" },
        ],
      },
    },
    {
      id: "crud-catalogacao-jogos",
      titulo: "Sistema CRUD de Catalogação de Jogos",
      descricao:
        "Aplicação web completa estruturada no padrão CRUD para gerenciamento e catalogação de jogos.",
      tags: ["C# (Backend)", "React (Frontend)"],
      imagem: "assets/Game_Catalog.png",
      destaque: false,
      link: "https://github.com/nycolasroberto/FrontEnd---Csharp",
    },
    {
      id: "landing-startup-logistica-sap",
      titulo: "Landing Page — Startup de Logística com SAP e Agentes Autônomos (SENAI)",
      descricao:
        "Página web dedicada a apresentar uma proposta de startup focada na integração do sistema SAP na logística fabril utilizando agentes autônomos de pesquisa e controle de estoque.",
      tags: ["HTML", "CSS", "SAP"],
      imagem: "assets/Flukia.png",
      destaque: false,
      link: "",
    },
    {
      id: "crud-classificacao-jogos",
      titulo: "Sistema CRUD de Classificação de Jogos",
      descricao:
        "Aplicação web para organização e classificação de jogos. Necessário Cadastrar ou Logar, com todo o processo de registros ligados ao banco de dados local MySQL.",
      tags: ["PHP", "MySQL"],
      imagem: "assets/Games_PHP.png",
      destaque: false,
      link: "https://github.com/Berlimbe/Games_PHP",
    },
    {
      id: "First_Game RPG",
      titulo: "Jogo de RPG de Turnos",
      descricao:
        "Projeto full-stack focado em lógica de programação, orientação a objetos pura e desenvolvimento em Csharp e React.",
      tags: ["Csharp", "React", "SQLite"],
      imagem: "assets/First_Game.png",
      destaque: false,
      link: "https://github.com/Berlimbe/First_Game",
    },
    {
      id: "app-controle-financeiro",
      titulo: "Mini Game Python Overcooked for Human Resources",
      descricao:
        "Um jogo de ação inspirado na mecânica de Overcooked. No controle de um funcionário de Recursos Humanos, sua missão é atender às solicitações dos colaboradores dentro do tempo limite.",
      tags: ["Python", "Tkinter", "random"],
      imagem: "assets/Overcooked.png",
      destaque: false,
      link: "https://github.com/Berlimbe/Overcooked-RH",
    },
    {
      id: "laboratorio-poliglota",
      titulo: "Laboratório de Estudos (GitHub)",
      descricao:
        "Repositórios práticos de treinamento e aprimoramento contínuo de código.",
      tags: ["HTML", "C#", "React", "TypeScript", "PHP", "Python", "JavaScript"],
      imagem: "assets/Profile_git.png",
      destaque: false,
      link: "https://github.com/Berlimbe",          // ex.: "https://github.com/SEU-USUARIO"
    },
  ],

  /*      [5] PROJETOS DE BI & DADOS*/
  projetosBI: [
    {
      id: "painel-tukan",                   // vira o link  #projeto/painel-tukan
      titulo: "Painel Interativo Projeto TUKAN — Lançamento de Novo Veículo (Volkswagen)",
      descricao:
        "Dashboard desenvolvido no Power BI para controle e análise de ocorrências na avaliação de carros de teste produzidos pela Manufatura. Conta com navegação por páginas temporais e gerais, filtros dinâmicos por motorização, cabine e relevância, além de recurso de drill-through para análise detalhada de impactos, gerando uma solução intuitiva e escalável.",
      tags: ["Power BI", "Drill-through", "Filtros dinâmicos"],
      imagem: "assets/bi-tukan-1.jpg",        
      destaque: true,
      link: "",

      /* ---------------------------------------------------------------
         [7] ESTUDO DE CASO — Painel TUKAN (Power BI - Volkswagen)
         TEXTO PROVISÓRIO: revise e ajuste com os detalhes reais.
         DICA: onde fizer sentido, troque frases gerais por números
         reais (ex.: nº de ocorrências analisadas, nº de páginas do painel).
         --------------------------------------------------------------- */
      estudoDeCaso: {
        subtitulo:
          "Dashboard em Power BI para controlar e analisar as ocorrências da avaliação de carros de teste no lançamento de um novo veículo.",

        // Parágrafos separados por uma linha em branco
        contexto: `No lançamento de um novo veículo, os carros de teste produzidos pela Manufatura são avaliados e geram ocorrências que precisam ser registradas, priorizadas e analisadas. O desafio era transformar esse volume de ocorrências em informação clara para quem decide, permitindo enxergar o cenário geral e, ao mesmo tempo, investigar o detalhe de cada impacto.

O Painel TUKAN foi pensado como uma solução intuitiva e escalável: simples de navegar no dia a dia e preparada para crescer conforme novas ocorrências e novos recortes de análise fossem necessários.`,

        // Cada item vira um card (titulo + texto). Pode ser uma lista de textos simples também.
        arquiteturaESolucao: [
          {
            titulo: "Modelagem de dados",
            texto: "Estruturação dos dados de ocorrências e dos seus atributos de análise (ex.: motorização, cabine e período) em um modelo de dados no Power BI, base para filtros e cruzamentos consistentes.",
          },
          {
            titulo: "Navegação por páginas temporais e visão geral",
            texto: "Páginas temporais, que mostram a evolução das ocorrências ao longo do tempo, e páginas gerais, com a visão consolidada, permitindo alternar entre o panorama e o recorte por período.",
          },
          {
            titulo: "Filtros dinâmicos",
            texto: "Segmentação por motorização, cabine e relevância, combinável entre si, para isolar rapidamente o grupo de ocorrências de interesse.",
          },
          {
            titulo: "Drill-through para impacto e causa-raiz",
            texto: "Recurso de drill-through para sair de um indicador e abrir uma página de detalhe, apoiando a análise de impacto e a investigação de causa-raiz de cada ocorrência.",
          },
          {
            titulo: "Escalabilidade",
            texto: "Estrutura organizada para receber novos dados e novas visões sem retrabalho do painel.",
          },
        ],

        // Lista de textos (vira tópicos). Substitua por resultados reais/medidos quando tiver.
        resultados: [
          "Controle centralizado das ocorrências dos carros de teste em um único painel.",
          "Visão geral e visão temporal na mesma ferramenta, facilitando o acompanhamento da evolução.",
          "Análise por motorização, cabine e relevância em poucos cliques.",
          "Detalhamento de impacto e apoio à identificação de causa-raiz via drill-through.",
          "Solução intuitiva e escalável, pronta para evoluir junto com o projeto.",
        ],

        // UMA LINHA POR IMAGEM. Para adicionar mais fotos, copie uma linha e edite.
        // Enquanto o arquivo não existir em assets/, aparece um placeholder com a legenda.
        galeria: [
          { arquivo: "assets/bi-tukan-1.jpg", legenda: "Visão geral das ocorrências" },
          { arquivo: "assets/bi-tukan-2.jpg", legenda: "Navegação por páginas temporais" },
          { arquivo: "assets/bi-tukan-3.jpg", legenda: "Drill-through: análise de impacto e causa-raiz" },
        ],
      },
    },
    {
      id: "automacao-relatorios-planilhas",
      titulo: "Automação de Relatórios Gerenciais de Avaliações (Volkswagen)",
      descricao:
        "Reestruturação e automação completa do fluxo de reporting semanal e mensal do setor. O projeto unificou planilhas de lançamento no Excel e substituiu a montagem manual de apresentações no PowerPoint por um ecossistema automatizado no Power BI estruturado por semanas do ano (KW), pronto para exportação direta em PDF sem necessidade de manutenção.",
      tags: ["Power BI", "Excel Avançado", "Automação de Processos", "ETL / Modelagem", "Gestão de KPIs"],
      imagem: "assets/bi-ava-1.jpg",
      destaque: false,
      link: "",

      estudoDeCaso: {
        subtitulo:
          "Substituição do fluxo manual entre múltiplas planilhas de Excel e PowerPoint por um relatório gerencial autônomo em Power BI, estruturado por semanas do ano (KW) e pronto para apresentação em PDF.",

        // Parágrafos separados por uma linha em branco
        contexto: `A geração do relatório de avaliações do setor exigia um processo manual e fragmentado: os dados eram divididos entre duas tabelas distintas de lançamentos no Excel e, posteriormente, transferidos manualmente para o PowerPoint. Além disso, a lógica de construção mudava conforme o fechamento era semanal ou mensal, gerando retrabalho constante e alto tempo de preparação.

Para eliminar esse gargalo, unifiquei a entrada de dados em apenas uma tabela principal no Excel e desenvolvi um relatório completo no Power BI com design executivo renovado. Toda a inteligência de datas, tags, semanas do ano (estrutura KW) e data de criação (creation date) foi parametrizada para atualizar de forma 100% automática, permitindo gerar a apresentação semanal em PDF com apenas um clique e zero manutenção.`,

        // Cada item vira um card (titulo + texto).
        arquiteturaESolucao: [
          {
            titulo: "Unificação de Base no Excel",
            texto: "Consolidação das duas tabelas antigas de lançamento em uma única planilha estruturada no Excel, padronizando a entrada de dados para atender tanto a visão semanal quanto a mensal sem retrabalho.",
          },
          {
            titulo: "Automação Zero-Manutenção e Estrutura",
            texto: "Parametrização dinâmica baseada no calendário de semanas do ano (KW). O relatório atualiza automaticamente cabeçalhos, tags, períodos e creation date, eliminando ajustes manuais a cada virada de semana.",
          },
          {
            titulo: "Página 1 — Perspectiva Geral das Avaliações",
            texto: "Painel central com design reformulado e múltiplos filtros dinâmicos de pesquisa, permitindo auditar e controlar com precisão todas as avaliações realizadas pelo setor.",
          },
          {
            titulo: "Página 2 — Atingimento de Metas e Diário de Bordo",
            texto: "Cálculo automatizado da porcentagem de cumprimento das metas mensais, integrado a um Diário de Bordo para registrar justificativas técnicas quando a meta não é atingida ou é superada com excesso.",
          },
          {
            titulo: "Página 3 — Monitoramento de Testes de Airbag",
            texto: "Integração de uma planilha paralela (atualizada por outro responsável) ao ecossistema do Power BI, centralizando o controle dos ensaios de Airbag na mesma apresentação gerencial.",
          },
          {
            titulo: "Design Executivo Pronto para Exportação em PDF",
            texto: "Layout diagramado no formato de apresentação, substituindo a montagem manual de slides no PowerPoint pela exportação direta do Power BI para PDF toda semana.",
          },
        ],

        // Lista de textos (vira tópicos).
        resultados: [
          "Eliminação completa da etapa manual de criação de slides no PowerPoint, reduzindo o fechamento semanal à simples exportação em PDF.",
          "Unificação de duas planilhas operacionais de lançamento em uma fonte única de dados no Excel, reduzindo erros de digitação e divergências entre relatórios semanais e mensais.",
          "Automação total de metadados temporais (estrutura KW, datas, tags e creation date), garantindo zero necessidade de manutenção técnica recorrente.",
          "Maior governança sobre os indicadores mensais com o cálculo percentual automatizado e histórico qualitativo documentado no Diário de Bordo.",
          "Integração e padronização visual dos dados de controle de Airbag no mesmo pacote gerencial da equipe.",
        ],

        // UMA LINHA POR IMAGEM.
        galeria: [
          { arquivo: "assets/bi-ava-1.jpg", legenda: "Visão geral das Avaliações" },
          { arquivo: "assets/bi-ava-2.jpg", legenda: "Atendimento das Metas de Avaliações" },
          { arquivo: "assets/bi-ava-3.jpg", legenda: "Análise de Controle - Teste Airbag" },
        ],
      },
    },
    {
      id: "data-science-machine-learning",
      titulo: "Projetos Práticos de Data Science & Machine Learning",
      descricao:
        "Estudos e implementações práticas desenvolvidas no Google Colab explorando interpretação de dados do cotidiano, treinamento de modelos para tomada de decisão, algoritmos de clusterização e árvores de decisão.",
      tags: ["Google Colab", "Machine Learning", "Clusterização", "Árvores de decisão"],
      imagem: "",
      destaque: false,
      link: "",

      estudoDeCaso: {
        subtitulo:
          "Dashboard em Power BI para controlar e analisar as ocorrências da avaliação de carros de teste no lançamento de um novo veículo.",

        // Parágrafos separados por uma linha em branco
        contexto: `No lançamento de um novo veículo, os carros de teste produzidos pela Manufatura são avaliados e geram ocorrências que precisam ser registradas, priorizadas e analisadas. O desafio era transformar esse volume de ocorrências em informação clara para quem decide, permitindo enxergar o cenário geral e, ao mesmo tempo, investigar o detalhe de cada impacto.

O Painel TUKAN foi pensado como uma solução intuitiva e escalável: simples de navegar no dia a dia e preparada para crescer conforme novas ocorrências e novos recortes de análise fossem necessários.`,

        // Cada item vira um card (titulo + texto). Pode ser uma lista de textos simples também.
        arquiteturaESolucao: [
          {
            titulo: "Modelagem de dados",
            texto: "Estruturação dos dados de ocorrências e dos seus atributos de análise (ex.: motorização, cabine, relevância e período) em um modelo de dados no Power BI, base para filtros e cruzamentos consistentes.",
          },
          {
            titulo: "Navegação por páginas temporais e visão geral",
            texto: "Páginas temporais, que mostram a evolução das ocorrências ao longo do tempo, e páginas gerais, com a visão consolidada, permitindo alternar entre o panorama e o recorte por período.",
          },
          {
            titulo: "Filtros dinâmicos",
            texto: "Segmentação por motorização, cabine e relevância, combinável entre si, para isolar rapidamente o grupo de ocorrências de interesse.",
          },
          {
            titulo: "Drill-through para impacto e causa-raiz",
            texto: "Recurso de drill-through para sair de um indicador e abrir uma página de detalhe, apoiando a análise de impacto e a investigação de causa-raiz de cada ocorrência.",
          },
          {
            titulo: "Escalabilidade",
            texto: "Estrutura organizada para receber novos dados e novas visões sem retrabalho do painel.",
          },
        ],

        // Lista de textos (vira tópicos). Substitua por resultados reais/medidos quando tiver.
        resultados: [
          "Controle centralizado das ocorrências dos carros de teste em um único painel.",
          "Visão geral e visão temporal na mesma ferramenta, facilitando o acompanhamento da evolução.",
          "Análise por motorização, cabine e relevância em poucos cliques.",
          "Detalhamento de impacto e apoio à identificação de causa-raiz via drill-through.",
          "Solução intuitiva e escalável, pronta para evoluir junto com o projeto.",
        ],

        // UMA LINHA POR IMAGEM. Para adicionar mais fotos, copie uma linha e edite.
        // Enquanto o arquivo não existir em assets/, aparece um placeholder com a legenda.
        galeria: [
          { arquivo: "assets/colab-1.jpg", legenda: "..." },
          { arquivo: "assets/colab-2.jpg", legenda: "...." },
          { arquivo: "assets/colab-3.jpg", legenda: "......." },
        ],
      },
    },
    {
      id: "indicadores-ferramentas-qualidade",
      titulo: "Gestão de Indicadores e Ferramentas da Qualidade",
      descricao:
        "Aplicação prática na rotina industrial de ferramentas analíticas para identificação de causa-raiz e melhoria contínua, incluindo Diagrama de Ishikawa, metodologia DMAIC, gráficos de dispersão e monitoramento de KPIs.",
      tags: ["Ishikawa", "DMAIC", "Dispersão", "KPIs"],
      imagem: "",
      destaque: false,
      link: "",
    },
  ],

  /* =======================================================================
     [6] LIDERANÇA & GESTÃO
     ======================================================================= */
  lideranca: [
    {
      id: "lideranca-qualidade-produto",
      titulo: "Liderança Operacional na Qualidade do Produto (Volkswagen)",
      descricao:
        "Assumi gradualmente um papel ativo na liderança operacional da equipe (composta por técnico da qualidade, estagiário e aprendiz), coordenando fluxos de trabalho para cumprimento de metas, centralizando processos no SharePoint e reformulando a estrutura de relatórios do setor, tornando-me um ponto focal de confiança.",
      tags: ["Liderança", "SharePoint", "Gestão de metas", "Relatórios"],
      imagem: "",
      destaque: true,
      link: "",
    },
    {
      id: "gestao-equipes-eventos",
      titulo: "Gestão de Equipes em Eventos e Consultoria Operacional",
      descricao:
        "Três anos de atuação no ramo de eventos de uma pizzaria, evoluindo rapidamente de garçom a pizzaiolo e líder de equipes em eventos externos. Aos 19 anos, já gerenciava toda a logística, execução do serviço e atendimento ao cliente no local, liderando profissionais mais velhos e experientes, além de prestar consultoria informal para melhoria da organização interna e gestão de insumos.",
      tags: ["Gestão de equipes", "Logística", "Atendimento", "Gestão de insumos"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      id: "gestao-empresarial-rh-senai",
      titulo: "Projetos de Gestão Empresarial e RH (SENAI)",
      descricao:
        "Desenvolvimento de jogos educativos voltados para rotinas de Recursos Humanos e projetos práticos de comunicação executiva, oratória e administração industrial.",
      tags: ["Recursos Humanos", "Oratória", "Administração industrial"],
      imagem: "",
      destaque: false,
      link: "",
    },
  ],
};


/* =========================================================================
   =========  A PARTIR DAQUI É O "MOTOR" DO SITE (não precisa editar)  =====
   ========================================================================= */

(function () {
  "use strict";

  /* ---------- Utilidades ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Escapa texto antes de injetar no HTML
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Imagem vazia ou "placeholder" = usa o visual padrão
  const imagemValida = (src) => Boolean(src && src.trim() && !/placeholder/i.test(src));

  // "Título do Projeto" -> "titulo-do-projeto" (usado só quando o projeto não tem "id")
  const slug = (texto) =>
    String(texto || "")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
      .slice(0, 60) || "projeto";

  /* ---------- Ícones (SVG inline) ---------- */
  const SVG_ATTR = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const ICONES = {
    ti: `<svg ${SVG_ATTR}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>`,
    bi: `<svg ${SVG_ATTR}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`,
    lideranca: `<svg ${SVG_ATTR}><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.4.2 4 2.2 4 4.8"/></svg>`,
    estrela: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/></svg>`,
    imagem: `<svg ${SVG_ATTR}><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M21 16l-5-5-8 8"/></svg>`,
    zoom: `<svg ${SVG_ATTR} width="16" height="16"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2M11 8v6M8 11h6"/></svg>`,
  };

  /* ---------- Tema claro / escuro ---------- */
  const raiz = document.documentElement;
  const metaTema = $('meta[name="theme-color"]');

  function aplicarTema(tema, salvar) {
    raiz.setAttribute("data-theme", tema);
    if (metaTema) metaTema.setAttribute("content", tema === "dark" ? "#0A0D14" : "#F8FAFC");
    if (salvar) {
      try { localStorage.setItem("tema", tema); } catch (e) { /* ignora */ }
    }
  }

  aplicarTema(raiz.getAttribute("data-theme") === "light" ? "light" : "dark", false);

  $("#theme-toggle").addEventListener("click", () => {
    aplicarTema(raiz.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });

  /* ---------- Registro dos estudos de caso ----------
     Percorre todas as listas e guarda os projetos que têm "estudoDeCaso".
     CASOS["id-do-projeto"] = { proj, area }                                */
  const AREAS = [
    ["ti", DADOS.projetosTI],
    ["bi", DADOS.projetosBI],
    ["lideranca", DADOS.lideranca],
  ];
  const CASOS = {};

  AREAS.forEach(([area, lista]) => {
    lista.forEach((proj) => {
      if (!proj.estudoDeCaso) return;
      proj.id = proj.id && proj.id.trim() ? proj.id.trim() : slug(proj.titulo);
      if (CASOS[proj.id]) console.warn(`[portfólio] id repetido em estudoDeCaso: "${proj.id}". Use ids diferentes.`);
      CASOS[proj.id] = { proj, area };
    });
  });

  /* ---------- Perfil: foto e links ---------- */
  function iniciarPerfil() {
    // 1. Adicionamos "email" na desestruturação do objeto
    const { foto, linkedin, github, curriculo, email } = DADOS.perfil;

    const ligar = (id, url) => {
      const el = $(id);
      if (!el) return;
      if (url && url.trim()) el.setAttribute("href", url);
      else el.hidden = true;
    };

    ligar("#link-linkedin", linkedin);
    ligar("#link-github", github);
    ligar("#link-curriculo", curriculo);
    
    //func. E-mail
    const linkGmailWeb = email && email.trim() 
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${email.trim()}` 
      : "";
    ligar("#link-email", linkGmailWeb);
    const configurarCopiaEmail = (seletorBotao, seletorTexto) => {
      const btn = $(seletorBotao);
      if (!btn || !email) return;
      
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email.trim()).then(() => {
          const alvoTexto = seletorTexto ? $(seletorTexto) : btn;
          const original = alvoTexto.innerHTML;
          
          alvoTexto.innerHTML = seletorTexto 
            ? "E-mail copiado!" 
            : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copiado!`;
            
          setTimeout(() => { alvoTexto.innerHTML = original; }, 2000);
        });
      });
    };

    configurarCopiaEmail("#link-email");
    configurarCopiaEmail("#footer-email", "#footer-email-text");

    // Foto: só remove o estado "sem-foto" se a imagem realmente carregar
    const avatar = $("#avatar");
    const img = $("#avatar-img");
    if (imagemValida(foto)) {
      img.addEventListener("load", () => avatar.classList.remove("sem-foto"));
      img.addEventListener("error", () => avatar.classList.add("sem-foto"));
      img.src = foto;
    }
  }

  /* ---------- Timeline de formação ---------- */
  function renderFormacao() {
    $("#timeline").innerHTML = DADOS.formacao
      .map(
        (f) => `
        <li class="${f.atual ? "atual" : ""}">
          <article class="card">
            <div class="tl-head">
              <h3>${esc(f.titulo)}</h3>
              <span class="status">${esc(f.status)}</span>
            </div>
            <p class="tl-inst">${esc(f.instituicao)}</p>
            <p style="margin:0">${esc(f.descricao)}</p>
          </article>
        </li>`
      )
      .join("");
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    $("#skills").innerHTML = DADOS.skills.map((s) => `<li>${esc(s)}</li>`).join("");
  }

  /* ---------- Cards de projeto ---------- */
  const LIMITE_TEXTO = 190; // acima disso o texto vira "Ler mais"

  function criarCard(proj, area, indice) {
    const longo = proj.descricao.length > LIMITE_TEXTO;
    const imagem = imagemValida(proj.imagem)
      ? `<img src="${esc(proj.imagem)}" alt="Imagem do projeto: ${esc(proj.titulo)}" loading="lazy">`
      : "";
    const selo = proj.destaque
      ? `<span class="badge-destaque">${ICONES.estrela} Destaque</span>`
      : "";
    const tags = (proj.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");

    // Botão do Estudo de Caso (aparece só se o projeto tiver "estudoDeCaso")
    const botaoCaso = proj.estudoDeCaso
      ? `<a class="project-link project-link--case" href="#projeto/${encodeURIComponent(proj.id)}">Ver Estudo de Caso →</a>`
      : "";
    const linkExterno = proj.link && proj.link.trim()
      ? `<a class="project-link" href="${esc(proj.link)}" target="_blank" rel="noopener noreferrer">Ver projeto →</a>`
      : "";
    const acoes = botaoCaso || linkExterno
      ? `<div class="project-actions">${botaoCaso}${linkExterno}</div>`
      : "";

    return `
      <article class="card project ${proj.destaque ? "card--destaque" : ""}" style="--i:${indice}">
        <div class="card-media card-media--${area}">
          <div class="card-fallback">${ICONES[area]}</div>
          ${imagem}
          ${selo}
        </div>
        <div class="project-body">
          <h3>${esc(proj.titulo)}</h3>
          <p class="project-desc ${longo ? "is-clamped" : ""}">${esc(proj.descricao)}</p>
          ${longo ? '<button class="toggle-desc" type="button" aria-expanded="false">Ler mais</button>' : ""}
          ${tags ? `<ul class="tags">${tags}</ul>` : ""}
          ${acoes}
        </div>
      </article>`;
  }

  function renderGrid(idGrid, lista, area) {
    const grid = $(idGrid);

    // Se uma imagem falhar ao carregar, remove-a e o gradiente padrão aparece
    grid.addEventListener("error", (e) => {
      if (e.target && e.target.tagName === "IMG") e.target.remove();
    }, true);

    // "Ler mais / Ler menos"
    grid.addEventListener("click", (e) => {
      const btn = e.target.closest(".toggle-desc");
      if (!btn) return;
      const texto = btn.previousElementSibling;
      const aberto = texto.classList.toggle("is-clamped") === false;
      btn.setAttribute("aria-expanded", String(aberto));
      btn.textContent = aberto ? "Ler menos" : "Ler mais";
    });

    grid.innerHTML = lista.map((p, i) => criarCard(p, area, i)).join("");
  }

  /* ---------- Página de Estudo de Caso ---------- */

  // Texto (parágrafos separados por linha em branco) ou lista (tópicos / cards)
  function renderConteudo(valor) {
    if (!valor || (Array.isArray(valor) && !valor.length)) return "";

    if (Array.isArray(valor)) {
      const todosObjetos = valor.every((v) => v && typeof v === "object");
      if (todosObjetos) {
        return `<div class="arch-grid">${valor
          .map(
            (v, i) => `
          <article class="arch-item">
            <h3><span class="arch-n">${String(i + 1).padStart(2, "0")}</span>${esc(v.titulo)}</h3>
            <p>${esc(v.texto)}</p>
          </article>`
          )
          .join("")}</div>`;
      }
      return `<ul class="case-list">${valor
        .map((v) => `<li>${esc(typeof v === "string" ? v : [v.titulo, v.texto].filter(Boolean).join(": "))}</li>`)
        .join("")}</ul>`;
    }

    return `<div class="case-text">${String(valor)
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${esc(p)}</p>`)
      .join("")}</div>`;
  }

  function secaoCaso(titulo, html, comoCard) {
    if (!html) return "";
    return `
      <section class="case-section">
        <h2 class="section-title">${esc(titulo)}</h2>
        ${comoCard ? `<div class="card">${html}</div>` : html}
      </section>`;
  }

  function renderGaleria(galeria) {
    if (!Array.isArray(galeria) || !galeria.length) return "";
    const figuras = galeria
      .map((g, i) => {
        const legenda = g.legenda || "";
        const temArquivo = imagemValida(g.arquivo);
        return `
        <figure class="shot" data-i="${i}">
          <button class="shot-btn" type="button" disabled aria-label="Ampliar imagem: ${esc(legenda)}">
            <span class="shot-media">
              <span class="shot-placeholder">${ICONES.imagem}<span>Captura de tela em breve</span></span>
              ${temArquivo ? `<img src="${esc(g.arquivo)}" alt="${esc(legenda)}">` : ""}
            </span>
            <span class="shot-zoom" aria-hidden="true">${ICONES.zoom}</span>
          </button>
          <figcaption>${esc(legenda)}</figcaption>
        </figure>`;
      })
      .join("");

    return `
      <section class="case-section">
        <h2 class="section-title">Galeria</h2>
        <div class="gallery" id="galeria">${figuras}</div>
      </section>`;
  }

  // Marca cada figura como "pronta" (imagem carregou -> habilita o zoom) ou "faltando" (placeholder)
  function observarGaleria() {
    $$("#galeria .shot").forEach((fig) => {
      const img = $("img", fig);
      const btn = $(".shot-btn", fig);
      if (!img) return; // sem arquivo: fica o placeholder
      const ok = () => { fig.classList.add("is-ready"); btn.disabled = false; };
      const falha = () => { img.remove(); fig.classList.add("is-missing"); };
      if (img.complete) {
        if (img.naturalWidth > 0) ok(); else falha();
      } else {
        img.addEventListener("load", ok, { once: true });
        img.addEventListener("error", falha, { once: true });
      }
    });
  }

  function renderProjeto(id) {
    const { proj, area } = CASOS[id];
    const e = proj.estudoDeCaso;
    const tags = (proj.tags || []).map((t) => `<li>${esc(t)}</li>`).join("");

    $("#projeto-conteudo").innerHTML = `
      <div class="container case">
        <a class="btn btn-ghost back-btn" href="#${area}">← Voltar para Projetos</a>

        <header class="case-head">
          <span class="eyebrow eyebrow--gold">Estudo de Caso</span>
          <h1>${esc(proj.titulo)}</h1>
          ${e.subtitulo ? `<p class="lead">${esc(e.subtitulo)}</p>` : ""}
          ${tags ? `<ul class="tags">${tags}</ul>` : ""}
        </header>

        ${secaoCaso("Contexto e problema", renderConteudo(e.contexto), true)}
        ${secaoCaso("Arquitetura e solução", renderConteudo(e.arquiteturaESolucao), false)}
        ${secaoCaso("Resultados", renderConteudo(e.resultados), true)}
        ${renderGaleria(e.galeria)}
      </div>`;

    observarGaleria();
  }

  /* ---------- Lightbox (zoom em tela cheia) ---------- */
  const lb = {
    el: $("#lightbox"),
    img: $("#lb-img"),
    cap: $("#lb-cap"),
    count: $("#lb-count"),
    prev: $("#lb-prev"),
    next: $("#lb-next"),
    close: $("#lb-close"),
  };
  let lbItens = [];
  let lbIndice = 0;
  let lbFocoAnterior = null;
  let lbToqueX = null;

  const lbAberto = () => !lb.el.hidden;

  function lbMostrar(i) {
    lbIndice = (i + lbItens.length) % lbItens.length; // dá a volta nas pontas
    const item = lbItens[lbIndice];
    lb.img.src = item.src;
    lb.img.alt = item.legenda;
    lb.cap.textContent = item.legenda;
    lb.count.textContent = `${lbIndice + 1} / ${lbItens.length}`;
  }

  function lbAbrir(itens, indice) {
    if (!itens.length) return;
    lbItens = itens;
    lbFocoAnterior = document.activeElement;
    lb.prev.hidden = lb.next.hidden = itens.length < 2;
    lb.el.hidden = false;
    document.body.classList.add("no-scroll");
    lbMostrar(indice);
    lb.close.focus();
  }

  function lbFechar() {
    if (!lbAberto()) return;
    lb.el.hidden = true;
    lb.img.removeAttribute("src");
    document.body.classList.remove("no-scroll");
    if (lbFocoAnterior && typeof lbFocoAnterior.focus === "function") lbFocoAnterior.focus({ preventScroll: true });
    lbFocoAnterior = null;
  }

  lb.close.addEventListener("click", lbFechar);
  lb.prev.addEventListener("click", () => lbMostrar(lbIndice - 1));
  lb.next.addEventListener("click", () => lbMostrar(lbIndice + 1));

  // Clicar no fundo escuro (qualquer área fora da imagem e dos botões) fecha
  lb.el.addEventListener("click", (e) => {
    if (!e.target.closest(".lb-img, .lb-btn")) lbFechar();
  });

  // Teclado: Esc fecha, setas navegam, Tab fica preso dentro do lightbox
  document.addEventListener("keydown", (e) => {
    if (!lbAberto()) return;
    if (e.key === "Escape") { e.preventDefault(); lbFechar(); }
    else if (e.key === "ArrowLeft" && lbItens.length > 1) { e.preventDefault(); lbMostrar(lbIndice - 1); }
    else if (e.key === "ArrowRight" && lbItens.length > 1) { e.preventDefault(); lbMostrar(lbIndice + 1); }
    else if (e.key === "Tab") {
      const foco = [lb.close, lb.prev, lb.next].filter((b) => !b.hidden);
      const primeiro = foco[0];
      const ultimo = foco[foco.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
      else if (!foco.includes(document.activeElement)) { e.preventDefault(); primeiro.focus(); }
    }
  });

  // Deslizar o dedo (celular) troca de imagem
  lb.el.addEventListener("touchstart", (e) => { lbToqueX = e.changedTouches[0].clientX; }, { passive: true });
  lb.el.addEventListener("touchend", (e) => {
    if (lbToqueX === null || lbItens.length < 2) return;
    const dx = e.changedTouches[0].clientX - lbToqueX;
    lbToqueX = null;
    if (Math.abs(dx) > 50) lbMostrar(lbIndice + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // Clique numa foto da galeria: abre o lightbox só com as imagens que carregaram
  $("#projeto-conteudo").addEventListener("click", (e) => {
    const btn = e.target.closest(".shot-btn");
    if (!btn || btn.disabled) return;
    const prontas = $$("#galeria .shot.is-ready");
    const figura = btn.closest(".shot");
    const itens = prontas.map((f) => {
      const img = $("img", f);
      return { src: img.currentSrc || img.src, legenda: $("figcaption", f).textContent };
    });
    lbAbrir(itens, prontas.indexOf(figura));
  });

  /* ---------- Navegação SPA (usa o #hash da URL) ----------
       #sobre | #ti | #bi | #lideranca | #projeto/id-do-projeto          */
  const PAGINAS = {
    sobre: "Sobre Mim",
    ti: "Projetos de TI",
    bi: "Projetos de BI & Dados",
    lideranca: "Liderança & Gestão",
  };
  const principal = $("#conteudo");
  let primeiraCarga = true;

  function lerHash() {
    const h = location.hash.slice(1);
    if (h.startsWith("projeto/")) {
      let id = h.slice("projeto/".length);
      try { id = decodeURIComponent(id); } catch (err) { /* mantém o texto original */ }
      return { pagina: "projeto", id };
    }
    return { pagina: PAGINAS[h] ? h : "sobre" };
  }

  function rotear() {
    lbFechar(); // se o lightbox estiver aberto (ex.: botão Voltar do navegador), fecha

    const rota = lerHash();
    let pagina = rota.pagina;
    let abaAtiva = pagina;
    let titulo = PAGINAS[pagina];

    if (pagina === "projeto") {
      const caso = CASOS[rota.id];
      if (!caso) {                 // link com id inexistente: volta para a lista de TI
        location.replace("#ti");
        return;
      }
      renderProjeto(rota.id);
      abaAtiva = caso.area;        // mantém a aba da área destacada
      titulo = caso.proj.titulo;
    }

    $$(".page").forEach((p) => {
      const ativo = p.dataset.page === pagina;
      p.hidden = !ativo;
      p.classList.toggle("is-active", ativo);
    });

    $$(".tab").forEach((t) => {
      const ativo = t.dataset.page === abaAtiva;
      t.classList.toggle("is-active", ativo);
      if (ativo && pagina !== "projeto") t.setAttribute("aria-current", "page");
      else t.removeAttribute("aria-current");
      if (ativo) t.scrollIntoView({ inline: "center", block: "nearest" });
    });

    document.title = pagina === "sobre" ? "Bernardo | Tecnologia, Dados e Gestão" : `${titulo} | Bernardo`;

    if (!primeiraCarga) {
      try { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
      catch (err) { window.scrollTo(0, 0); }
      principal.focus({ preventScroll: true });
    }
    primeiraCarga = false;
  }

  // "Ir para o conteúdo": foca o <main> sem mexer no #hash (que controla as páginas)
  $(".skip-link").addEventListener("click", (e) => {
    e.preventDefault();
    principal.focus();
  });

  /* ---------- Inicialização ---------- */
  iniciarPerfil();
  renderFormacao();
  renderSkills();
  renderGrid("#grid-ti", DADOS.projetosTI, "ti");
  renderGrid("#grid-bi", DADOS.projetosBI, "bi");
  renderGrid("#grid-lideranca", DADOS.lideranca, "lideranca");
  $("#ano").textContent = new Date().getFullYear();

  window.addEventListener("hashchange", rotear);
  rotear();
})();