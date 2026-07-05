/* ============================================================
   Eloy Angulo — portfolio behaviors
   theme · i18n (es/en) · terminal animation · reveals · marquee
   ============================================================ */

(() => {
  "use strict";

  /* ---------------- i18n dictionaries ---------------- */

  const I18N = {
    es: {
      "nav.skip": "Saltar al contenido",
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos",
      "nav.stack": "Stack",
      "nav.contact": "Contacto",

      "hero.role": "ai-engineer",
      "hero.title": "Construyo sistemas de IA que sobreviven al <em>mundo real</em>.",
      "hero.sub": "LLMs cloud y on-premise, extracción estructurada de documentos complejos, agentes y automatización de procesos — en entornos reales de negocio, no en demos.",
      "hero.status": "AI Engineer en Atrebo · abierto a proyectos freelance",
      "hero.cta1": "Ver proyectos",
      "hero.cta2": "Contactar",

      "about.title": "Perfil",
      "about.lead": "Trabajo donde la IA deja de ser una demo y empieza a ser un <em>proceso</em>: extracción de información desde documentos complejos, pipelines de procesamiento, benchmarking de modelos y agentes que automatizan trabajo real.",
      "about.p1": "Me muevo igual de cómodo afinando prompts para arañar precisión que desplegando la infraestructura donde corren los modelos: Ollama sobre multi-GPU, Docker, Caddy, Authentik. Creo en la mejora iterativa — medir, validar a mano, ajustar y volver a medir.",
      "about.p2": "Antes de la IA aplicada, desarrollo de aplicaciones en Deloitte con Angular y TypeScript. Esa base de ingeniería de software es la que hace que mis sistemas de IA se integren en aplicaciones reales, con APIs limpias y código mantenible.",

      "now.title": "ahora mismo",
      "now.i1tag": "formación",
      "now.i1": "Cursando el Máster en IA & Data Science (UNIR): machine learning, Python para data science y desarrollo de agentes cloud.",
      "now.i2tag": "infraestructura",
      "now.i2": "Profundizando en despliegue local de LLMs e infraestructura multi-GPU: qué modelo corre, dónde y a qué coste.",
      "now.i3tag": "producto",
      "now.i3": "Evolucionando mi dashboard de inspecciones de ascensores, de proyecto para un cliente a producto comercializable.",

      "exp.title": "Experiencia",
      "exp.a.date": "actualidad",
      "exp.a.b1": "Sistemas de extracción de información estructurada desde documentos técnicos con LLMs on-premise: Ollama sobre multi-GPU, con modelos como Gemma, Qwen y DeepSeek.",
      "exp.a.b2": "Benchmarking de LLMs — calidad, latencia, throughput y consumo de GPU — para decidir con datos qué modelo entra en producción.",
      "exp.a.b3": "Pipelines completos de procesamiento documental: OCR, preprocesado, chunking y postprocesado.",
      "exp.a.b4": "Diseño y optimización de prompts con testing y validación manual, mejorando precisión y consistencia de forma iterativa.",
      "exp.a.b5": "Despliegue de infraestructura interna: BookStack, Docusaurus, Docker, Caddy y Authentik.",
      "exp.f.name": "Freelance",
      "exp.f.role": "IA & Automatización",
      "exp.f.date": "actualidad",
      "exp.f.b1": "Automatizaciones con LLMs, Python y APIs: integración de IA en workflows de datos para análisis, clasificación y reporting.",
      "exp.f.b2": "Web scraping y procesamiento de datos como entrada de pipelines inteligentes.",
      "exp.f.b3": "Orquestación de procesos y dashboards automatizados de principio a fin.",
      "exp.f.b4": "Desarrollo asistido por IA como flujo de trabajo diario, con uso avanzado de Claude Code.",
      "exp.d.role": "Desarrollador",
      "exp.d.b1": "Desarrollo y mantenimiento de aplicaciones internas con Angular y TypeScript.",
      "exp.d.b2": "Resolución de incidencias y mejoras evolutivas en un entorno Scrum, con Jira y Git.",

      "proj.title": "Proyectos destacados",
      "proj.intro": "Cada proyecto, contado como lo pienso: qué problema había, qué decisión técnica tomé y en qué estado está. Sin métricas infladas.",
      "proj.label.problem": "problema",
      "proj.label.approach": "decisión",
      "proj.label.result": "resultado",
      "proj.p1.status": "en producción interna",
      "proj.p1.title": "Extracción documental con LLMs on-premise",
      "proj.p1.problem": "Documentos técnicos heterogéneos con información crítica atrapada en PDFs, imposible de explotar a escala manualmente.",
      "proj.p1.approach": "Pipeline completo on-premise por privacidad y coste: OCR y preprocesado, chunking, inferencia con Ollama en multi-GPU (Gemma, Qwen, DeepSeek) y postprocesado hacia JSON estructurado.",
      "proj.p1.result": "Sistema en uso interno, con precisión y consistencia mejoradas iterativamente mediante prompt engineering, testing y validación manual.",
      "proj.p2.status": "en uso continuo",
      "proj.p2.title": "Benchmarking de LLMs",
      "proj.p2.problem": "Elegir modelo local a ciegas: sin datos comparables de calidad ni de coste real por inferencia.",
      "proj.p2.approach": "Sistema de benchmarking que mide calidad de outputs, latencia, throughput y consumo de GPU por modelo y configuración.",
      "proj.p2.result": "Las decisiones de qué modelo corre en producción se toman con datos, no con intuición.",
      "proj.p3.status": "cliente real · en evolución",
      "proj.p3.title": "Dashboard de inspecciones de ascensores",
      "proj.p3.problem": "Un negocio real gestionando inspecciones de ascensores con procesos manuales dispersos.",
      "proj.p3.approach": "Aplicación a medida con FastAPI y SQLite, integrando la API de Anthropic para las capacidades de IA. Stack deliberadamente simple: fácil de desplegar, fácil de mantener.",
      "proj.p3.result": "En uso por el cliente, con hoja de ruta para convertirlo en producto comercializable para más empresas del sector.",
      "proj.p4.ctx": "Personal",
      "proj.p4.status": "activo",
      "proj.p4.title": "Pipeline de contenido automatizado",
      "proj.p4.problem": "¿Hasta dónde se puede automatizar la producción de contenido de principio a fin? Mi laboratorio personal para averiguarlo.",
      "proj.p4.approach": "Pipeline propio que orquesta n8n, ElevenLabs, FFmpeg y CapCut, con un bot de Telegram desarrollado a medida para notificaciones del sistema.",
      "proj.p4.result": "Dos canales de YouTube operando de forma automatizada: ConfessedStories (inglés) y TerrorSinFiltro (español).",

      "stack.title": "Stack",
      "stack.c1": "IA & AI Engineering",
      "stack.c1.t1": "Prompt engineering",
      "stack.c1.t2": "Diseño de agentes",
      "stack.c1.t3": "Procesamiento documental",
      "stack.c2": "Automatización & Data",
      "stack.c2.t1": "Web scraping",
      "stack.c3": "Backend & Integración",
      "stack.c3.t1": "Integración de servicios",
      "stack.c4": "Frontend",
      "stack.c5": "Infra & Tools",

      "edu.title": "Formación",
      "edu.e1.date": "2025 — en curso",
      "edu.e1.name": "Máster en Inteligencia Artificial y Data Science",
      "edu.e1.detail": "Análisis de datos, machine learning, Python para data science y desarrollo de agentes cloud.",
      "edu.e2.date": "2019 — en curso",
      "edu.e2.name": "Grado en Ingeniería Informática",
      "edu.e2.org": "Universidad de Sevilla",
      "edu.e3.name": "Desarrollo de Aplicaciones Multiplataforma",
      "edu.langs": "idiomas",
      "edu.lang1": "Español · nativo",
      "edu.lang2": "Inglés · C1",

      "contact.title": "Contacto",
      "contact.big": "¿Documentos caóticos, procesos manuales o una idea con IA dando vueltas? <em>Hablemos.</em>",
      "contact.sub": "Respondo rápido por email. También disponible para proyectos freelance de automatización e IA aplicada.",
      "contact.cta": "Escríbeme un email",
      "footer.note": "diseñado y construido a medida · sin plantillas",
    },

    en: {
      "nav.skip": "Skip to content",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.stack": "Stack",
      "nav.contact": "Contact",

      "hero.role": "ai-engineer",
      "hero.title": "I build AI systems that survive the <em>real world</em>.",
      "hero.sub": "Cloud and on-premise LLMs, structured extraction from complex documents, agents and process automation — in real business environments, not demos.",
      "hero.status": "AI Engineer at Atrebo · open to freelance projects",
      "hero.cta1": "View projects",
      "hero.cta2": "Get in touch",

      "about.title": "Profile",
      "about.lead": "I work where AI stops being a demo and becomes a <em>process</em>: information extraction from complex documents, processing pipelines, model benchmarking and agents that automate real work.",
      "about.p1": "I'm equally at home fine-tuning prompts to squeeze out precision as I am deploying the infrastructure the models run on: Ollama over multi-GPU, Docker, Caddy, Authentik. I believe in iterative improvement — measure, validate by hand, adjust and measure again.",
      "about.p2": "Before applied AI, I built applications at Deloitte with Angular and TypeScript. That software engineering foundation is what makes my AI systems integrate into real applications, with clean APIs and maintainable code.",

      "now.title": "right now",
      "now.i1tag": "learning",
      "now.i1": "Studying the Master's in AI & Data Science (UNIR): machine learning, Python for data science and cloud agent development.",
      "now.i2tag": "infrastructure",
      "now.i2": "Going deeper into local LLM deployment and multi-GPU infrastructure: which model runs, where, and at what cost.",
      "now.i3tag": "product",
      "now.i3": "Evolving my elevator inspection dashboard from a single-client project into a marketable product.",

      "exp.title": "Experience",
      "exp.a.date": "present",
      "exp.a.b1": "Structured information extraction systems from technical documents with on-premise LLMs: Ollama over multi-GPU, with models like Gemma, Qwen and DeepSeek.",
      "exp.a.b2": "LLM benchmarking — quality, latency, throughput and GPU usage — to decide with data which model goes to production.",
      "exp.a.b3": "End-to-end document processing pipelines: OCR, preprocessing, chunking and postprocessing.",
      "exp.a.b4": "Prompt design and optimization with testing and manual validation, iteratively improving accuracy and consistency.",
      "exp.a.b5": "Internal infrastructure deployment: BookStack, Docusaurus, Docker, Caddy and Authentik.",
      "exp.f.name": "Freelance",
      "exp.f.role": "AI & Automation",
      "exp.f.date": "present",
      "exp.f.b1": "Automations with LLMs, Python and APIs: integrating AI into data workflows for analysis, classification and reporting.",
      "exp.f.b2": "Web scraping and data processing feeding intelligent pipelines.",
      "exp.f.b3": "Process orchestration and automated dashboards, end to end.",
      "exp.f.b4": "AI-assisted development as a daily workflow, with advanced use of Claude Code.",
      "exp.d.role": "Developer",
      "exp.d.b1": "Development and maintenance of internal applications with Angular and TypeScript.",
      "exp.d.b2": "Incident resolution and iterative improvements in a Scrum environment, with Jira and Git.",

      "proj.title": "Featured projects",
      "proj.intro": "Every project, told the way I think about it: what the problem was, which technical decision I made, and where it stands. No inflated metrics.",
      "proj.label.problem": "problem",
      "proj.label.approach": "decision",
      "proj.label.result": "outcome",
      "proj.p1.status": "in internal production",
      "proj.p1.title": "Document extraction with on-premise LLMs",
      "proj.p1.problem": "Heterogeneous technical documents with critical information trapped in PDFs, impossible to exploit manually at scale.",
      "proj.p1.approach": "Fully on-premise pipeline for privacy and cost: OCR and preprocessing, chunking, inference with Ollama on multi-GPU (Gemma, Qwen, DeepSeek) and postprocessing into structured JSON.",
      "proj.p1.result": "System in internal use, with accuracy and consistency improved iteratively through prompt engineering, testing and manual validation.",
      "proj.p2.status": "in continuous use",
      "proj.p2.title": "LLM benchmarking",
      "proj.p2.problem": "Choosing a local model blindly: no comparable data on quality or the real cost per inference.",
      "proj.p2.approach": "Benchmarking system measuring output quality, latency, throughput and GPU usage per model and configuration.",
      "proj.p2.result": "Decisions about which model runs in production are made with data, not intuition.",
      "proj.p3.status": "real client · evolving",
      "proj.p3.title": "Elevator inspection dashboard",
      "proj.p3.problem": "A real business managing elevator inspections with scattered manual processes.",
      "proj.p3.approach": "Custom application with FastAPI and SQLite, integrating the Anthropic API for AI capabilities. Deliberately simple stack: easy to deploy, easy to maintain.",
      "proj.p3.result": "In use by the client, with a roadmap to turn it into a marketable product for more companies in the sector.",
      "proj.p4.ctx": "Personal",
      "proj.p4.status": "active",
      "proj.p4.title": "Automated content pipeline",
      "proj.p4.problem": "How far can content production be automated end to end? My personal lab to find out.",
      "proj.p4.approach": "Custom pipeline orchestrating n8n, ElevenLabs, FFmpeg and CapCut, with a purpose-built Telegram bot for system notifications.",
      "proj.p4.result": "Two YouTube channels running on automation: ConfessedStories (English) and TerrorSinFiltro (Spanish).",

      "stack.title": "Stack",
      "stack.c1": "AI & AI Engineering",
      "stack.c1.t1": "Prompt engineering",
      "stack.c1.t2": "Agent design",
      "stack.c1.t3": "Document processing",
      "stack.c2": "Automation & Data",
      "stack.c2.t1": "Web scraping",
      "stack.c3": "Backend & Integration",
      "stack.c3.t1": "Service integration",
      "stack.c4": "Frontend",
      "stack.c5": "Infra & Tools",

      "edu.title": "Education",
      "edu.e1.date": "2025 — ongoing",
      "edu.e1.name": "Master's in Artificial Intelligence and Data Science",
      "edu.e1.detail": "Data analysis, machine learning, Python for data science and cloud agent development.",
      "edu.e2.date": "2019 — ongoing",
      "edu.e2.name": "BSc in Computer Engineering",
      "edu.e2.org": "University of Seville",
      "edu.e3.name": "Multi-platform Application Development",
      "edu.langs": "languages",
      "edu.lang1": "Spanish · native",
      "edu.lang2": "English · C1",

      "contact.title": "Contact",
      "contact.big": "Messy documents, manual processes, or an AI idea on your mind? <em>Let's talk.</em>",
      "contact.sub": "I reply fast over email. Also available for freelance automation and applied AI projects.",
      "contact.cta": "Send me an email",
      "footer.note": "designed & built from scratch · no templates",
    },
  };

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    const toggle = document.getElementById("lang-toggle");
    toggle.textContent = lang === "es" ? "EN" : "ES";
    toggle.setAttribute(
      "aria-label",
      lang === "es" ? "Switch to English" : "Cambiar a español"
    );
    localStorage.setItem("lang", lang);
  };

  const initLang = () => {
    const stored = localStorage.getItem("lang");
    const lang = stored || (navigator.language?.startsWith("es") ? "es" : "en");
    if (lang !== "es") applyLang(lang);
    else applyLang("es");
    document.getElementById("lang-toggle").addEventListener("click", () => {
      applyLang(document.documentElement.lang === "es" ? "en" : "es");
    });
  };

  /* ---------------- theme ---------------- */

  const initTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) document.documentElement.dataset.theme = stored;
    document.getElementById("theme-toggle").addEventListener("click", () => {
      const next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  };

  /* ---------------- nav scroll state ---------------- */

  const initNav = () => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  /* ---------------- scroll reveals ---------------- */

  const initReveals = () => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  };

  /* ---------------- marquee ---------------- */

  const initMarquee = () => {
    const items = [
      "Ollama", "Gemma", "Qwen", "DeepSeek", "Claude Code", "OpenAI",
      "Python", "FastAPI", "Pandas", "scikit-learn", "n8n", "Docker",
      "Caddy", "Authentik", "Angular", "React", "TypeScript", "ETL",
    ];
    const track = document.getElementById("marquee-track");
    // duplicated so translateX(-50%) loops seamlessly
    track.innerHTML = [...items, ...items]
      .map((t) => `<span>${t}</span>`)
      .join("");
  };

  /* ---------------- hero terminal ---------------- */

  const TERMINAL_LINES = [
    { text: "$ pipeline run --input informe_tecnico.pdf", cls: "t-cmd", pause: 500 },
    { text: "✓ ocr + preprocess", cls: "t-ok", pause: 260 },
    { text: "✓ chunking · 47 segments", cls: "t-ok", pause: 260 },
    { text: "✓ llm inference · qwen @ on-prem GPU×2", cls: "t-ok", pause: 420 },
    { text: "{", cls: "t-json", pause: 120 },
    { text: '  "doc_type": "technical_report",', cls: "t-json", pause: 120 },
    { text: '  "fields_extracted": 23,', cls: "t-json", pause: 120 },
    { text: '  "confidence": 0.97,', cls: "t-json", pause: 120 },
    { text: '  "status": "validated"', cls: "t-json", pause: 120 },
    { text: "}", cls: "t-json", pause: 360 },
    { text: "$ export --format json · done ✓", cls: "t-dim", pause: 0 },
  ];

  const initTerminal = () => {
    const body = document.getElementById("terminal-body");
    if (!body) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      body.innerHTML =
        TERMINAL_LINES.map(
          (l) => `<span class="${l.cls}">${escapeHtml(l.text)}</span>`
        ).join("\n") + '\n<span class="t-cursor"></span>';
      return;
    }

    const cursor = document.createElement("span");
    cursor.className = "t-cursor";

    const typeLine = (lineIdx) => {
      if (lineIdx >= TERMINAL_LINES.length) {
        body.appendChild(document.createTextNode("\n"));
        body.appendChild(cursor);
        return;
      }
      const line = TERMINAL_LINES[lineIdx];
      const span = document.createElement("span");
      span.className = line.cls;
      if (lineIdx > 0) body.appendChild(document.createTextNode("\n"));
      body.appendChild(span);
      body.appendChild(cursor);

      let charIdx = 0;
      const speed = line.cls === "t-cmd" ? 34 : 12;
      const tick = () => {
        span.textContent = line.text.slice(0, ++charIdx);
        if (charIdx < line.text.length) {
          setTimeout(tick, speed);
        } else {
          setTimeout(() => typeLine(lineIdx + 1), line.pause);
        }
      };
      tick();
    };

    // start when the terminal scrolls into view (immediately on desktop hero)
    const io = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          obs.disconnect();
          setTimeout(() => typeLine(0), 400);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(body);
  };

  const escapeHtml = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------------- misc ---------------- */

  const initFooterYear = () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  };

  /* ---------------- boot ---------------- */

  initTheme();
  initLang();
  initNav();
  initReveals();
  initMarquee();
  initTerminal();
  initFooterYear();
})();
