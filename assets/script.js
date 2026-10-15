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
      "hero.title": "Soy <em>AI Engineer</em>. Construyo sistemas y aplicaciones con IA.",
      "hero.sub": "LLMs, RAG y extracción de documentos en cloud, on-premise y edge: despliegue, optimización de inferencia y evaluación.",
      "hero.status": "AI Engineer en Coterena · abierto a proyectos freelance",
      "term.title": "pipeline — ejemplo ilustrativo",
      "hero.cta1": "Ver proyectos",
      "hero.cta2": "Contactar",

      "about.title": "Perfil",
      "about.lead": "Desarrollo soluciones de <em>IA generativa</em>, RAG y Document Intelligence, desplegadas en cloud, on-premise y edge, y las evalúo con tests y benchmarks.",
      "about.p1": "Me muevo igual de cómodo afinando prompts y pipelines de extracción que desplegando la infraestructura donde corren los modelos: vLLM y Nemotron sobre NVIDIA Jetson AGX Thor, Ollama sobre multi-GPU, Docker. Creo en la mejora iterativa — medir, validar, ajustar y volver a medir.",
      "about.p2": "Antes de la IA aplicada, desarrollo de aplicaciones en Deloitte con Angular y TypeScript. Esa base de ingeniería de software es la que hace que mis sistemas de IA se integren en aplicaciones reales, con APIs limpias y código mantenible.",

      "now.title": "ahora mismo",
      "now.i1tag": "edge ai",
      "now.i1": "Desplegando IA generativa sobre NVIDIA Jetson AGX Thor con Nemotron, vLLM y Docker: inferencia local, cuantización y rendimiento.",
      "now.i2tag": "conocimiento",
      "now.i2": "Construyendo sistemas RAG con Qdrant y embeddings, conectando LLMs con bases de datos y APIs.",
      "now.i3tag": "producto",
      "now.i3": "Evolucionando mi dashboard de inspecciones de ascensores, de proyecto para un cliente a producto comercializable.",

      "exp.title": "Experiencia",
      "exp.c.date": "08/2026 — actualidad",
      "exp.c.b1": "Desarrollo y despliegue de soluciones de IA generativa sobre NVIDIA Jetson AGX Thor, con Nemotron, vLLM y Docker.",
      "exp.c.b2": "Diseño e implementación de sistemas RAG con Qdrant y embeddings, integrando LLMs con bases de datos y APIs.",
      "exp.c.b3": "Pipelines de Document Intelligence para extracción y procesamiento automatizado de documentos con Python y FastAPI.",
      "exp.c.b4": "Optimización y evaluación de modelos: inferencia local, cuantización, rendimiento, benchmarks y testing automatizado.",
      "exp.a.b1": "Pipelines LLM de extracción documental con Structured Outputs y validación automática, sobre LLMs on-premise: Ollama en multi-GPU con modelos como Gemma, Qwen y DeepSeek.",
      "exp.a.b2": "Benchmarking de LLMs — calidad, latencia, throughput y consumo de GPU — para decidir con datos qué modelo usar.",
      "exp.a.b3": "Procesamiento documental completo: OCR, preprocesado, chunking y postprocesado.",
      "exp.a.b4": "Diseño y optimización de prompts para mejorar precisión, consistencia y reducción de errores, con testing y validación manual.",
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
      "proj.intro": "Cada proyecto, contado como lo pienso: qué problema había, qué decisión técnica tomé y qué alcance tuvo. Sin métricas infladas.",
      "proj.label.problem": "problema",
      "proj.label.approach": "decisión",
      "proj.label.result": "resultado",
      "proj.label.challenge": "reto",
      "proj.label.scope": "alcance",
      "proj.c1.title": "IA generativa en el edge: Jetson AGX Thor",
      "proj.c1.problem": "Ejecutar IA generativa en local, sobre hardware edge, con inferencia eficiente y sin depender del cloud.",
      "proj.c1.approach": "Despliegue sobre NVIDIA Jetson AGX Thor con Nemotron y vLLM en contenedores Docker, apoyado en cuantización (NVFP4) y en benchmarks de rendimiento.",
      "proj.c1.result": "Desarrollo, despliegue, optimización y evaluación de modelos con inferencia local y testing automatizado.",
      "proj.c2.title": "RAG y Document Intelligence",
      "proj.c2.problem": "Conectar los LLMs con datos propios —bases de datos, APIs y documentos— para que respondan con información real.",
      "proj.c2.approach": "Sistemas RAG con Qdrant y embeddings, integrados con bases de datos y APIs, más pipelines de Document Intelligence con Nemotron Parse y OCR sobre Python y FastAPI.",
      "proj.c2.result": "Extracción y procesamiento automatizado de documentos de extremo a extremo.",
      "proj.p1.title": "Extracción documental con LLMs on-premise",
      "proj.p1.problem": "Documentos técnicos complejos con información clave atrapada en texto no estructurado, difícil de explotar a escala.",
      "proj.p1.approach": "Pipeline completo con LLMs on-premise: OCR y preprocesado, chunking, inferencia con Ollama en multi-GPU (Gemma, Qwen, DeepSeek), Structured Outputs con validación automática y postprocesado.",
      "proj.p1.result": "Precisión, consistencia y reducción de errores mejoradas de forma iterativa mediante prompt engineering, testing y validación manual.",
      "proj.p2.title": "Benchmarking de LLMs",
      "proj.p2.problem": "Elegir modelo local a ciegas: sin datos comparables de calidad ni de coste real por inferencia.",
      "proj.p2.approach": "Sistema de benchmarking que mide calidad de outputs, latencia, throughput y consumo de GPU por modelo y configuración.",
      "proj.p2.result": "Comparar modelos con datos de calidad, latencia, throughput y consumo de GPU, no con intuición.",
      "proj.p3.title": "Dashboard de inspecciones de ascensores",
      "proj.p3.problem": "Gestionar las inspecciones de ascensores desde un único dashboard.",
      "proj.p3.approach": "Aplicación a medida con FastAPI y SQLite, integrando la API de Anthropic para las capacidades de IA. Stack ligero, fácil de desplegar y mantener.",
      "proj.p3.result": "Aplicación funcional, con visión de convertirla en producto comercializable.",
      "proj.p4.title": "Pipeline de automatización propio",
      "proj.p4.problem": "Automatizar un proceso de principio a fin, como proyecto personal.",
      "proj.p4.approach": "Pipeline propio que orquesta n8n y FFmpeg, con un bot de Telegram a medida para las notificaciones del sistema.",
      "proj.p4.result": "Automatización de extremo a extremo, con avisos propios por Telegram.",

      "stack.title": "Stack",
      "stack.c1": "LLM & Generative AI",
      "stack.c1.t0": "Embeddings",
      "stack.c1.t1": "Prompt engineering",
      "stack.c1.t2": "Agentes IA",
      "stack.c2": "Edge AI",
      "stack.c2.t1": "Inferencia local",
      "stack.c2.t2": "Cuantización",
      "stack.c3": "Document Intelligence",
      "stack.c3.t1": "Extracción estructurada",
      "stack.c4": "Backend & Data",
      "stack.c4.t1": "APIs REST",
      "stack.c5": "Evaluación",
      "stack.c5.t1": "Benchmarks LLM",
      "stack.c6": "Infra, Frontend & Tools",

      "edu.title": "Formación",
      "edu.e1.date": "2025 — 2026",
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
      "hero.title": "I'm an <em>AI Engineer</em>. I build systems and applications with AI.",
      "hero.sub": "LLMs, RAG and document extraction across cloud, on-premise and edge: deployment, inference optimization and evaluation.",
      "hero.status": "AI Engineer at Coterena · open to freelance projects",
      "term.title": "pipeline — illustrative example",
      "hero.cta1": "View projects",
      "hero.cta2": "Get in touch",

      "about.title": "Profile",
      "about.lead": "I develop <em>generative AI</em>, RAG and Document Intelligence solutions, deployed across cloud, on-premise and edge, and evaluate them with tests and benchmarks.",
      "about.p1": "I'm equally at home tuning prompts and extraction pipelines as I am deploying the infrastructure the models run on: vLLM and Nemotron on NVIDIA Jetson AGX Thor, Ollama over multi-GPU, Docker. I believe in iterative improvement — measure, validate, adjust and measure again.",
      "about.p2": "Before applied AI, I built applications at Deloitte with Angular and TypeScript. That software engineering foundation is what makes my AI systems integrate into real applications, with clean APIs and maintainable code.",

      "now.title": "right now",
      "now.i1tag": "edge ai",
      "now.i1": "Deploying generative AI on NVIDIA Jetson AGX Thor with Nemotron, vLLM and Docker: local inference, quantization and performance.",
      "now.i2tag": "knowledge",
      "now.i2": "Building RAG systems with Qdrant and embeddings, connecting LLMs to databases and APIs.",
      "now.i3tag": "product",
      "now.i3": "Evolving my elevator inspection dashboard from a single-client project into a marketable product.",

      "exp.title": "Experience",
      "exp.c.date": "08/2026 — present",
      "exp.c.b1": "Development and deployment of generative AI solutions on NVIDIA Jetson AGX Thor, with Nemotron, vLLM and Docker.",
      "exp.c.b2": "Design and implementation of RAG systems with Qdrant and embeddings, integrating LLMs with databases and APIs.",
      "exp.c.b3": "Document Intelligence pipelines for automated document extraction and processing with Python and FastAPI.",
      "exp.c.b4": "Model optimization and evaluation: local inference, quantization, performance, benchmarks and automated testing.",
      "exp.a.b1": "LLM document-extraction pipelines with Structured Outputs and automatic validation, on on-premise LLMs: Ollama over multi-GPU with models like Gemma, Qwen and DeepSeek.",
      "exp.a.b2": "LLM benchmarking — quality, latency, throughput and GPU usage — to decide with data which model to use.",
      "exp.a.b3": "End-to-end document processing: OCR, preprocessing, chunking and postprocessing.",
      "exp.a.b4": "Prompt design and optimization to improve accuracy, consistency and error reduction, with testing and manual validation.",
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
      "proj.intro": "Every project, told the way I think about it: what the problem was, which technical decision I made, and what it covered. No inflated metrics.",
      "proj.label.problem": "problem",
      "proj.label.approach": "decision",
      "proj.label.result": "outcome",
      "proj.label.challenge": "challenge",
      "proj.label.scope": "scope",
      "proj.c1.title": "Generative AI at the edge: Jetson AGX Thor",
      "proj.c1.problem": "Running generative AI locally on edge hardware, with efficient inference and no dependency on the cloud.",
      "proj.c1.approach": "Deployment on NVIDIA Jetson AGX Thor with Nemotron and vLLM in Docker containers, backed by quantization (NVFP4) and performance benchmarks.",
      "proj.c1.result": "Development, deployment, optimization and evaluation of models with local inference and automated testing.",
      "proj.c2.title": "RAG and Document Intelligence",
      "proj.c2.problem": "Connecting LLMs to proprietary data —databases, APIs and documents— so they answer with real information.",
      "proj.c2.approach": "RAG systems with Qdrant and embeddings, integrated with databases and APIs, plus Document Intelligence pipelines with Nemotron Parse and OCR on Python and FastAPI.",
      "proj.c2.result": "End-to-end automated document extraction and processing.",
      "proj.p1.title": "Document extraction with on-premise LLMs",
      "proj.p1.problem": "Complex technical documents with key information trapped in unstructured text, hard to exploit at scale.",
      "proj.p1.approach": "End-to-end pipeline with on-premise LLMs: OCR and preprocessing, chunking, inference with Ollama on multi-GPU (Gemma, Qwen, DeepSeek), Structured Outputs with automatic validation, and postprocessing.",
      "proj.p1.result": "Accuracy, consistency and error reduction improved iteratively through prompt engineering, testing and manual validation.",
      "proj.p2.title": "LLM benchmarking",
      "proj.p2.problem": "Choosing a local model blindly: no comparable data on quality or the real cost per inference.",
      "proj.p2.approach": "Benchmarking system measuring output quality, latency, throughput and GPU usage per model and configuration.",
      "proj.p2.result": "Comparing models with data on quality, latency, throughput and GPU usage, not intuition.",
      "proj.p3.title": "Elevator inspection dashboard",
      "proj.p3.problem": "Managing elevator inspections from a single dashboard.",
      "proj.p3.approach": "Custom application with FastAPI and SQLite, integrating the Anthropic API for AI capabilities. Lightweight stack, easy to deploy and maintain.",
      "proj.p3.result": "Working application, with a vision of turning it into a marketable product.",
      "proj.p4.title": "Custom automation pipeline",
      "proj.p4.problem": "Automating a process end to end, as a personal project.",
      "proj.p4.approach": "Custom pipeline orchestrating n8n and FFmpeg, with a purpose-built Telegram bot for system notifications.",
      "proj.p4.result": "End-to-end automation, with its own Telegram alerts.",

      "stack.title": "Stack",
      "stack.c1": "LLM & Generative AI",
      "stack.c1.t0": "Embeddings",
      "stack.c1.t1": "Prompt engineering",
      "stack.c1.t2": "AI agents",
      "stack.c2": "Edge AI",
      "stack.c2.t1": "Local inference",
      "stack.c2.t2": "Quantization",
      "stack.c3": "Document Intelligence",
      "stack.c3.t1": "Structured extraction",
      "stack.c4": "Backend & Data",
      "stack.c4.t1": "REST APIs",
      "stack.c5": "Evaluation",
      "stack.c5.t1": "LLM benchmarks",
      "stack.c6": "Infra, Frontend & Tools",

      "edu.title": "Education",
      "edu.e1.date": "2025 — 2026",
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
      "Nemotron", "vLLM", "Jetson AGX Thor", "RAG", "Qdrant", "Ollama",
      "Gemma", "Qwen", "DeepSeek", "Claude Code", "OpenAI", "Python",
      "FastAPI", "PostgreSQL", "CUDA", "Docker", "Linux", "pytest",
      "Playwright", "Pandas", "scikit-learn", "n8n", "Angular", "React",
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
    { text: "✓ chunking", cls: "t-ok", pause: 260 },
    { text: "✓ llm inference · structured outputs", cls: "t-ok", pause: 260 },
    { text: "✓ schema validation", cls: "t-ok", pause: 420 },
    { text: "{", cls: "t-json", pause: 120 },
    { text: '  "doc_type": "technical_report",', cls: "t-json", pause: 120 },
    { text: '  "fields": { ... },', cls: "t-json", pause: 120 },
    { text: '  "schema_valid": true', cls: "t-json", pause: 120 },
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
