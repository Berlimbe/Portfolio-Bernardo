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

   COMO ADICIONAR UMA FOTO A UM PROJETO
     1. Salve a imagem dentro da pasta assets/ (ex.: assets/projeto1.jpg).
     2. No projeto desejado, preencha:  imagem: "assets/projeto1.jpg"
     3. Deixou "" (vazio)? O card mostra automaticamente um gradiente com
        o ícone da área. Se o arquivo não for encontrado, também.
        Dica: use imagens 16:9 (ex.: 1280x720) para o melhor enquadramento.

   COMO ADICIONAR UM NOVO PROJETO
     Copie um bloco { ... }, (com a vírgula no final) dentro da lista da
     área e edite os campos:
       titulo     -> nome do projeto
       descricao  -> texto do card
       tags       -> lista de tecnologias/competências
       imagem     -> caminho da foto ou "" (vazio)
       destaque   -> true para ganhar o selo dourado, false para normal
       link       -> URL do projeto/repositório ou "" (vazio = sem botão)

   Depois de editar, é só fazer commit/push: a Vercel publica sozinha.
   ========================================================================= */


/* =========================================================================
   [1] LINKS E FOTO DE PERFIL
   ========================================================================= */
const DADOS = {
  perfil: {
    foto: "assets/perfil.jpg",                          // sua foto de perfil
    linkedin: "https://www.linkedin.com/in/bernardo-almeida-29b126213/", // TROQUE pelo seu LinkedIn
    github: "https://github.com/Berlimbe",            // TROQUE pelo seu GitHub
    curriculo: "assets/Currículo-Bernardo_2026.pdf",           // coloque o PDF nesta pasta
  },

  /* =======================================================================
     [2] FORMAÇÃO ACADÊMICA
     status: texto do selo (ex.: "Em andamento", "Concluído")
     atual:  true destaca o item (ponto preenchido na timeline)
     ======================================================================= */
  formacao: [
    {
      titulo: "Engenharia de Software (EAD)",
      instituicao: "Universidade Positivo",
      status: "Em andamento",
      atual: true,
      descricao:
        "Foco de interesse em Arquitetura de Software (planejamento e estruturação sistêmica), Tópicos Especiais de Sistemas (padrões lógicos e CRUD) e Data Science (Machine Learning, clusterização e árvores de decisão).",
    },
    {
      titulo: "Técnico em Administração",
      instituicao: "SENAI",
      status: "Em andamento",
      atual: true,
      descricao:
        "Desenvolvimento de competências em gestão empresarial, apresentação pública e ferramentas da qualidade (Diagrama de Ishikawa, metodologia DMAIC, gráficos de dispersão e análise de indicadores).",
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
      titulo: "Ensino Médio Tecnológico",
      instituicao: "SESI / Colégio da Indústria",
      status: "2021 – 2023",
      atual: false,
      descricao:
        "Base em liderança, trabalho em equipe, pesquisas sobre startups e lógica de programação.",
    },
  ],
  /* =======================================================================
     [3] HARD SKILLS (uma tag por item)
     ======================================================================= */
  skills: [
    "PHP", "Laravel (Livewire/Blades)", "C#", "React", "JavaScript", "TypeScript",
    "Python", "Java", "Kotlin", "HTML/CSS", "PostgreSQL", "MySQL", "Power BI",
    "Excel Avançado (Macros)", "SharePoint",
    "Machine Learning (Google Colab)", "DMAIC", "Ishikawa",
  ],

  /* =======================================================================
     [4] PROJETOS DE TI
     ======================================================================= */
  projetosTI: [
    {
      titulo: "Sistema Web Internalizado de Solicitação de Análises (Volkswagen)",
      descricao:
        "Maior projeto individual até o momento, projetado e desenvolvido de forma autônoma para a Intranet do setor na Volkswagen. Permite abertura de chamados, comentários, anexos, notificações automáticas por e-mail, controle de acesso/autenticação diferenciado para usuários e analistas, painel de controle por responsável, acompanhamento de status e dashboard de indicadores. A base de dados evoluiu de MySQL para PostgreSQL em parceria com a infraestrutura.",
      tags: ["PHP", "Laravel", "Livewire/Blades", "MySQL", "PostgreSQL"],
      imagem: "",        // ex.: "assets/projeto-vw-analises.jpg"
      destaque: true,
      link: "",
    },
    {
      titulo: "Sistema CRUD de Catalogação de Jogos",
      descricao:
        "Aplicação web completa estruturada no padrão CRUD para gerenciamento e catalogação de jogos.",
      tags: ["C# (Backend)", "React (Frontend)"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      titulo: "Aplicação Mobile de Controle Financeiro",
      descricao:
        "Sistema estruturado no modelo CRUD voltado para o controle de fluxo financeiro pessoal em dispositivos móveis.",
      tags: ["Kotlin", "Android"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      titulo: "Sistema CRUD de Classificação de Jogos",
      descricao:
        "Aplicação web para organização e classificação de jogos.",
      tags: ["PHP"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      titulo: "Jogo de RPG para Terminal",
      descricao:
        "Projeto focado em lógica de programação e orientação a objetos pura rodando via console.",
      tags: ["Java"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      titulo: "Landing Page — Startup de Logística com SAP e Agentes Autônomos (SENAI)",
      descricao:
        "Página web dedicada a apresentar uma proposta de startup focada na integração do sistema SAP na logística fabril utilizando agentes autônomos de pesquisa e controle de estoque.",
      tags: ["HTML", "CSS", "SAP"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      titulo: "Laboratório Poliglota de Estudos (GitHub)",
      descricao:
        "Repositórios práticos de treinamento e aprimoramento contínuo de código.",
      tags: ["HTML", "C#", "React", "TypeScript", "PHP", "Python", "JavaScript"],
      imagem: "",
      destaque: false,
      link: "",          // ex.: "https://github.com/SEU-USUARIO"
    },
  ],

  /* =======================================================================
     [5] PROJETOS DE BI & DADOS
     ======================================================================= */
  projetosBI: [
    {
      titulo: "Painel Interativo Projeto TUKAN — Lançamento de Novo Veículo (Volkswagen)",
      descricao:
        "Dashboard desenvolvido no Power BI para controle e análise de ocorrências na avaliação de carros de teste produzidos pela Manufatura. Conta com navegação por páginas temporais e gerais, filtros dinâmicos por motorização, cabine e relevância, além de recurso de drill-through para análise detalhada de impactos, gerando uma solução intuitiva e escalável.",
      tags: ["Power BI", "Drill-through", "Filtros dinâmicos"],
      imagem: "",        // ex.: "assets/projeto-tukan.jpg"
      destaque: true,
      link: "",
    },
    {
      titulo: "Automação de Relatórios Gerenciais e Planilhas (Volkswagen)",
      descricao:
        "Otimização do fluxo de dados do setor por meio da criação de relatórios automatizados no Power BI e automação de planilhas de trabalho com macros e fórmulas avançadas no Excel.",
      tags: ["Power BI", "Excel Avançado", "Macros"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
      titulo: "Projetos Práticos de Data Science & Machine Learning",
      descricao:
        "Estudos e implementações práticas desenvolvidas no Google Colab explorando interpretação de dados do cotidiano, treinamento de modelos para tomada de decisão, algoritmos de clusterização e árvores de decisão.",
      tags: ["Google Colab", "Machine Learning", "Clusterização", "Árvores de decisão"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
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
      titulo: "Liderança Operacional na Qualidade do Produto (Volkswagen)",
      descricao:
        "Assumi gradualmente um papel ativo na liderança operacional da equipe (composta por técnico da qualidade, estagiário e aprendiz), coordenando fluxos de trabalho para cumprimento de metas, centralizando processos no SharePoint e reformulando a estrutura de relatórios do setor, tornando-me um ponto focal de confiança.",
      tags: ["Liderança", "SharePoint", "Gestão de metas", "Relatórios"],
      imagem: "",
      destaque: true,
      link: "",
    },
    {
      titulo: "Gestão de Equipes em Eventos e Consultoria Operacional",
      descricao:
        "Três anos de atuação no ramo de eventos de uma pizzaria, evoluindo rapidamente de garçom a pizzaiolo e líder de equipes em eventos externos. Aos 19 anos, já gerenciava toda a logística, execução do serviço e atendimento ao cliente no local, liderando profissionais mais velhos e experientes, além de prestar consultoria informal para melhoria da organização interna e gestão de insumos.",
      tags: ["Gestão de equipes", "Logística", "Atendimento", "Gestão de insumos"],
      imagem: "",
      destaque: false,
      link: "",
    },
    {
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

  /* ---------- Ícones (SVG inline) ---------- */
  const SVG_ATTR = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const ICONES = {
    ti: `<svg ${SVG_ATTR}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>`,
    bi: `<svg ${SVG_ATTR}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`,
    lideranca: `<svg ${SVG_ATTR}><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.2c2.4.2 4 2.2 4 4.8"/></svg>`,
    estrela: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17l-6.1 3.4 1.5-6.8L2.2 9l6.9-.7z"/></svg>`,
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

  /* ---------- Perfil: foto e links ---------- */
  function iniciarPerfil() {
    const { foto, linkedin, github, curriculo } = DADOS.perfil;

    const ligar = (id, url) => {
      const el = $(id);
      if (!el) return;
      if (url && url.trim()) el.setAttribute("href", url);
      else el.hidden = true;
    };
    ligar("#link-linkedin", linkedin);
    ligar("#link-github", github);
    ligar("#link-curriculo", curriculo);

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
    const link = proj.link && proj.link.trim()
      ? `<a class="project-link" href="${esc(proj.link)}" target="_blank" rel="noopener noreferrer">Ver projeto →</a>`
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
          ${link}
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

  /* ---------- Navegação SPA por abas (usa o #hash da URL) ---------- */
  const PAGINAS = {
    sobre: "Sobre Mim",
    ti: "Projetos de TI",
    bi: "Projetos de BI & Dados",
    lideranca: "Liderança & Gestão",
  };
  const principal = $("#conteudo");
  let primeiraCarga = true;

  function rotear() {
    let id = location.hash.replace("#", "");
    if (!PAGINAS[id]) id = "sobre";

    $$(".page").forEach((p) => {
      const ativo = p.dataset.page === id;
      p.hidden = !ativo;
      p.classList.toggle("is-active", ativo);
    });

    $$(".tab").forEach((t) => {
      const ativo = t.dataset.page === id;
      t.classList.toggle("is-active", ativo);
      if (ativo) {
        t.setAttribute("aria-current", "page");
        t.scrollIntoView({ inline: "center", block: "nearest" });
      } else {
        t.removeAttribute("aria-current");
      }
    });

    document.title = id === "sobre" ? "Bernardo | Tecnologia, Dados e Gestão" : `${PAGINAS[id]} | Bernardo`;

    if (!primeiraCarga) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      principal.focus({ preventScroll: true });
    }
    primeiraCarga = false;
  }

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
