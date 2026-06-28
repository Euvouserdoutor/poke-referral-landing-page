import React from 'react';

const LandingPage = () => {
  return (
    <main className="site-root">
      <nav className="top-nav">
        <div className="page-shell nav-inner">
          <a className="brand" href="#top" aria-label="Jefferson Queiroz">
            Jeff<span>Queiroz</span>
          </a>

          <div className="nav-links" aria-label="Navegação principal">
            <a href="#ecossistema">Ecossistema</a>
            <a href="#projetos">Projetos</a>
            <a href="#construindo">Construção</a>
          </div>

          <a className="nav-cta" href="mailto:useleszboy@gmail.com">
            Contato
          </a>
        </div>
      </nav>

      <section id="top" className="hero-premium">
        <div className="page-shell hero-inner">
          <div className="hero-copy">
            <div className="section-kicker">Medicina · IA · Web3 · Produto Digital</div>

            <h1 className="hero-title">
              <span>Jefferson</span>
              <strong>Queiroz</strong>
            </h1>

            <p className="hero-lead">
              Acadêmico de Medicina na UFMG, fundador do EuVouSerDoutor e construtor de produtos digitais que unem educação médica, inteligência artificial, automações e Web3.
            </p>

            <div className="btn-row hero-actions">
              <a className="btn-primary" href="#ecossistema">Conhecer o ecossistema</a>
              <a className="btn-secondary" href="#projetos">Ver projetos</a>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>135K+</strong>
                <span>comunidade</span>
              </div>
              <div>
                <strong>UFMG</strong>
                <span>Medicina</span>
              </div>
              <div>
                <strong>4</strong>
                <span>frentes de construção</span>
              </div>
            </div>
          </div>

          <div className="hero-panel premium-card" aria-label="Painel do ecossistema">
            <div className="terminal-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="code-label">ecossistema.js</div>
            <pre><code>{`const jeffQueiroz = {
  base: "Medicina UFMG",
  founder: "EuVouSerDoutor",
  building: ["StudyNow", "IA", "Web3", "Automações"],
  thesis: "estudo → sistema → produto → liberdade",
  status: "building in public"
}`}</code></pre>
          </div>
        </div>
      </section>

      <section id="ecossistema" className="section ecosystem-section">
        <div className="page-shell">
          <div className="section-kicker">O Ecossistema</div>

          <h2 className="section-title">
            Medicina como base.<br />
            IA como velocidade.<br />
            Produto como escala.
          </h2>

          <p className="section-lead">
            Jeff Queiroz constrói na intersecção entre formação médica, inteligência artificial, conteúdo educacional, automações e Web3. A tese é simples: conhecimento não precisa ficar parado em anotações. Ele pode virar método, sistema, comunidade e produto.
          </p>

          <div className="ecosystem-map">
            <article className="premium-card ecosystem-card">
              <span>01</span>
              <h3>Medicina</h3>
              <p>Base acadêmica, raciocínio clínico, estudo intenso e comunicação responsável.</p>
            </article>

            <article className="premium-card ecosystem-card">
              <span>02</span>
              <h3>Inteligência Artificial</h3>
              <p>Ferramentas, prompts, agentes, automações e fluxos para acelerar estudo e produção.</p>
            </article>

            <article className="premium-card ecosystem-card">
              <span>03</span>
              <h3>Conteúdo</h3>
              <p>Educação médica transformada em linguagem visual, clara e distribuível.</p>
            </article>

            <article className="premium-card ecosystem-card">
              <span>04</span>
              <h3>Produto Digital</h3>
              <p>StudyNow, páginas, sistemas, plataformas e experiências que organizam conhecimento.</p>
            </article>

            <article className="premium-card ecosystem-card">
              <span>05</span>
              <h3>Web3</h3>
              <p>Miniapps, Base, Farcaster, comunidade, ativos digitais e novas formas de distribuição.</p>
            </article>

            <article className="premium-card ecosystem-card">
              <span>06</span>
              <h3>Execução</h3>
              <p>A diferença entre ideia e impacto: construir, testar, ajustar e publicar.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="projetos" className="section projects-section">
        <div className="page-shell">
          <div className="section-kicker">Projetos vivos</div>

          <h2 className="section-title">
            Não é portfólio.<br />
            É um sistema em expansão.
          </h2>

          <p className="section-lead">
            Cada projeto nasce de uma necessidade real: estudar melhor, ensinar com mais clareza, automatizar produção, criar produto e explorar novas formas de comunidade digital.
          </p>

          <div className="projects-grid">
            <article className="premium-card project-card project-featured">
              <div className="project-top">
                <span>Principal</span>
                <small>Educação médica</small>
              </div>
              <h3>EuVouSerDoutor</h3>
              <p>
                Comunidade e conteúdo para pré-meds e estudantes de Medicina. Método, rotina, revisão ativa, provas, mapas e comunicação clara para quem quer evoluir com sistema.
              </p>
              <div className="tag-row">
                <span>135K+</span>
                <span>Medicina</span>
                <span>Conteúdo</span>
                <span>Comunidade</span>
              </div>
            </article>

            <article className="premium-card project-card">
              <div className="project-top">
                <span>Produto</span>
                <small>Estudo inteligente</small>
              </div>
              <h3>StudyNow</h3>
              <p>
                Plataforma de estudo com IA, organização cognitiva, repetição espaçada e estrutura para transformar estudo em sistema.
              </p>
              <div className="tag-row">
                <span>IA</span>
                <span>FSRS</span>
                <span>Estudo</span>
              </div>
            </article>

            <article className="premium-card project-card">
              <div className="project-top">
                <span>Sistema</span>
                <small>IA pessoal</small>
              </div>
              <h3>Codex / IA</h3>
              <p>
                Ambiente de comandos, agentes, automações, prompts, organização de projetos e execução assistida por inteligência artificial.
              </p>
              <div className="tag-row">
                <span>Prompts</span>
                <span>Agentes</span>
                <span>Automação</span>
              </div>
            </article>

            <article className="premium-card project-card">
              <div className="project-top">
                <span>Experimentos</span>
                <small>Onchain</small>
              </div>
              <h3>Web3 / Miniapps</h3>
              <p>
                Exploração de Base, Farcaster, miniapps, smart contracts, airdrops e novas formas de comunidade e distribuição digital.
              </p>
              <div className="tag-row">
                <span>Base</span>
                <span>Farcaster</span>
                <span>Miniapps</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="page-shell">
          <div className="why-layout">
            <div>
              <div className="section-kicker">Por que isso importa</div>
              <h2 className="section-title">
                Estudo vira sistema.<br />
                Sistema vira produto.<br />
                Produto vira liberdade.
              </h2>
            </div>

            <div className="why-stack">
              <article className="premium-card why-card">
                <h3>Não é só estudar Medicina.</h3>
                <p>É transformar aprendizado difícil em método, revisão, clareza e sistemas que outras pessoas também conseguem usar.</p>
              </article>

              <article className="premium-card why-card">
                <h3>Não é só criar conteúdo.</h3>
                <p>É construir distribuição, autoridade, comunidade e produtos em volta de uma tese clara.</p>
              </article>

              <article className="premium-card why-card">
                <h3>Não é só usar IA.</h3>
                <p>É operar ferramentas como extensão da mente: estudar, escrever, automatizar, revisar, construir e publicar com mais velocidade.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="construindo" className="section building-section">
        <div className="page-shell">
          <div className="section-kicker">Construindo em público</div>

          <h2 className="section-title">O ecossistema está vivo.</h2>

          <p className="section-lead">
            A construção acontece em camadas: estudo médico, conteúdo, páginas, automações, produtos digitais, miniapps e sistemas de IA. Nada fica parado na ideia.
          </p>

          <div className="build-grid">
            <div className="build-item">
              <strong>01</strong>
              <span>Revisões médicas e materiais de estudo</span>
            </div>
            <div className="build-item">
              <strong>02</strong>
              <span>Conteúdo para EuVouSerDoutor</span>
            </div>
            <div className="build-item">
              <strong>03</strong>
              <span>StudyNow e sistemas de aprendizagem</span>
            </div>
            <div className="build-item">
              <strong>04</strong>
              <span>Automações com IA e agentes</span>
            </div>
            <div className="build-item">
              <strong>05</strong>
              <span>Miniapps, Base e Farcaster</span>
            </div>
            <div className="build-item">
              <strong>06</strong>
              <span>Produtos digitais escaláveis</span>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="page-shell">
          <div className="premium-card final-cta-card">
            <div className="section-kicker">Jeff Queiroz</div>

            <h2>
              Isso não é apenas uma página pessoal.<br />
              É o início de um ecossistema.
            </h2>

            <p>
              Medicina, inteligência artificial, conteúdo, produto digital e Web3 sendo construídos em tempo real.
            </p>

            <div className="btn-row">
              <a className="btn-primary" href="mailto:useleszboy@gmail.com">Entrar em contato</a>
              <a className="btn-secondary" href="#projetos">Ver projetos</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-premium">
        <div className="page-shell footer-inner">
          <h2 className="footer-word">QUEIROZ.</h2>

          <div className="footer-links">
            <a href="https://instagram.com/euvouserdoutor" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://warpcast.com/useleszboy" target="_blank" rel="noreferrer">Warpcast</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:useleszboy@gmail.com">E-mail</a>

            <p className="footer-copy">
              © 2026 Jefferson Queiroz.<br />
              Medicina · IA · Web3 · Produto Digital.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{siteStyles}</style>
    </main>
  );
};

const siteStyles = `
  :root {
    --bg: #030712;
    --bg-soft: #07111f;
    --bg-deep: #01040d;
    --card: rgba(8, 18, 34, 0.72);
    --card-strong: rgba(10, 25, 48, 0.88);
    --border: rgba(148, 163, 184, 0.18);
    --border-blue: rgba(56, 189, 248, 0.28);
    --text: #f8fafc;
    --muted: #94a3b8;
    --muted-strong: #cbd5e1;
    --blue: #38bdf8;
    --blue-strong: #2563eb;
    --cyan: #22d3ee;
    --violet: #7c3aed;
    --radius-xl: 28px;
    --radius-lg: 22px;
    --shadow-premium: 0 30px 90px rgba(0, 0, 0, 0.45);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.28), transparent 34%),
      radial-gradient(circle at 80% 18%, rgba(34, 211, 238, 0.14), transparent 28%),
      linear-gradient(180deg, #020617 0%, #030712 44%, #020617 100%);
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgba(148, 163, 184, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 163, 184, 0.055) 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: linear-gradient(to bottom, black, transparent 78%);
    z-index: -2;
  }

  body::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.08;
    background-image:
      radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, white 1px, transparent 1px);
    background-size: 7px 7px;
    z-index: -1;
  }

  a { color: inherit; text-decoration: none; }

  .site-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at 12% 14%, rgba(37, 99, 235, 0.18), transparent 26%),
      radial-gradient(circle at 88% 24%, rgba(34, 211, 238, 0.10), transparent 24%),
      linear-gradient(180deg, rgba(2, 6, 23, 0.12), rgba(1, 4, 13, 0.88));
  }

  .page-shell {
    width: min(1180px, calc(100% - 40px));
    margin: 0 auto;
  }

  .section { padding: 96px 0; }

  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 60;
    padding: 18px 0;
    border-bottom: 1px solid rgba(148, 163, 184, 0.10);
    background: rgba(2, 6, 23, 0.62);
    backdrop-filter: blur(20px);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .brand {
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #f8fafc;
  }

  .brand span {
    margin-left: 2px;
    color: #38bdf8;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 30px;
    color: rgba(203, 213, 225, 0.70);
    font-size: 13px;
    font-weight: 700;
  }

  .nav-links a:hover { color: #ffffff; }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 0 18px;
    border-radius: 999px;
    background: #f8fafc;
    color: #020617;
    font-size: 12px;
    font-weight: 900;
  }

  .section-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    padding: 8px 13px;
    border: 1px solid var(--border-blue);
    border-radius: 999px;
    background: rgba(14, 165, 233, 0.08);
    color: #bae6fd;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .section-title {
    margin: 0;
    font-size: clamp(34px, 5vw, 68px);
    line-height: 0.95;
    letter-spacing: -0.065em;
    color: var(--text);
  }

  .section-lead {
    max-width: 760px;
    margin: 22px 0 0;
    color: var(--muted-strong);
    font-size: clamp(17px, 2vw, 21px);
    line-height: 1.65;
  }

  .premium-card {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    background:
      linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(2, 8, 23, 0.74)),
      radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 38%);
    box-shadow: var(--shadow-premium);
    backdrop-filter: blur(18px);
  }

  .premium-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(135deg, rgba(255,255,255,0.11), transparent 36%);
    opacity: 0.45;
  }

  .btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 0 22px;
    border-radius: 999px;
    font-weight: 800;
    text-decoration: none;
    transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
  }

  .btn-primary {
    color: #020617;
    background: linear-gradient(135deg, #e0f2fe, #38bdf8 45%, #2563eb);
    box-shadow: 0 16px 48px rgba(37, 99, 235, 0.38);
  }

  .btn-secondary {
    color: #e2e8f0;
    border: 1px solid var(--border);
    background: rgba(15, 23, 42, 0.68);
  }

  .btn-primary:hover,
  .btn-secondary:hover { transform: translateY(-2px); }

  .hero-premium {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 132px 0 86px;
    overflow: hidden;
  }

  .hero-premium::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 8%;
    width: 760px;
    height: 760px;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(37,99,235,0.34), transparent 62%);
    filter: blur(14px);
    pointer-events: none;
  }

  .hero-premium::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 72% 42%, rgba(56,189,248,0.13), transparent 30%),
      linear-gradient(180deg, rgba(2,6,23,0.02), rgba(2,6,23,0.82));
    pointer-events: none;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(400px, 0.95fr);
    gap: 64px;
    align-items: center;
  }

  .hero-copy { max-width: 760px; }

  .hero-title {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(72px, 11vw, 148px);
    line-height: 0.78;
    letter-spacing: -0.095em;
    font-weight: 900;
    color: #f8fafc;
  }

  .hero-title span,
  .hero-title strong { display: block; }

  .hero-title strong {
    font-weight: 900;
    background: linear-gradient(135deg, #dbeafe 0%, #38bdf8 34%, #2563eb 68%, #7c3aed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 24px 90px rgba(37, 99, 235, 0.32);
  }

  .hero-lead {
    max-width: 720px;
    margin: 32px 0 0;
    color: #cbd5e1;
    font-size: clamp(18px, 2vw, 23px);
    line-height: 1.58;
  }

  .hero-actions { margin-top: 34px; }

  .hero-metrics {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    margin-top: 42px;
    max-width: 680px;
  }

  .hero-metrics div {
    padding: 18px;
    border: 1px solid rgba(148,163,184,0.16);
    border-radius: 20px;
    background: rgba(15,23,42,0.58);
    backdrop-filter: blur(16px);
  }

  .hero-metrics strong {
    display: block;
    color: #f8fafc;
    font-size: 26px;
    line-height: 1;
  }

  .hero-metrics span {
    display: block;
    margin-top: 8px;
    color: #94a3b8;
    font-size: 14px;
  }

  .hero-panel {
    min-height: 480px;
    padding: 34px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-color: rgba(56,189,248,0.24);
    box-shadow:
      0 34px 110px rgba(0,0,0,0.56),
      0 0 70px rgba(37,99,235,0.20);
  }

  .terminal-bar {
    position: absolute;
    top: 20px;
    left: 24px;
    display: flex;
    gap: 8px;
    z-index: 2;
  }

  .terminal-bar span {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.38);
  }

  .code-label {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 24px;
    padding: 8px 12px;
    border-radius: 999px;
    color: #bae6fd;
    background: rgba(14,165,233,0.09);
    border: 1px solid rgba(56,189,248,0.22);
    font-size: 13px;
    font-weight: 800;
    position: relative;
    z-index: 1;
  }

  .hero-panel pre {
    margin: 0;
    white-space: pre-wrap;
    color: #dbeafe;
    font-size: 15px;
    line-height: 1.85;
    position: relative;
    z-index: 1;
  }

  .hero-panel code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; }

  .ecosystem-section { position: relative; }

  .ecosystem-map {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .ecosystem-card {
    min-height: 260px;
    padding: 28px;
  }

  .ecosystem-card span {
    display: inline-flex;
    color: #38bdf8;
    font-weight: 900;
    font-size: 13px;
    letter-spacing: 0.08em;
    position: relative;
    z-index: 1;
  }

  .ecosystem-card h3 {
    margin: 42px 0 0;
    color: #f8fafc;
    font-size: 27px;
    line-height: 1.05;
    letter-spacing: -0.04em;
    position: relative;
    z-index: 1;
  }

  .ecosystem-card p {
    margin: 16px 0 0;
    color: #94a3b8;
    font-size: 16px;
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }

  .projects-grid {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .project-card {
    padding: 30px;
    min-height: 330px;
    display: flex;
    flex-direction: column;
  }

  .project-featured {
    grid-row: span 2;
    min-height: 682px;
    background:
      radial-gradient(circle at 30% 0%, rgba(56,189,248,0.24), transparent 38%),
      linear-gradient(145deg, rgba(15,23,42,0.94), rgba(2,8,23,0.82));
  }

  .project-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    position: relative;
    z-index: 1;
  }

  .project-top span {
    padding: 8px 12px;
    border-radius: 999px;
    color: #bae6fd;
    background: rgba(14,165,233,0.1);
    border: 1px solid rgba(56,189,248,0.24);
    font-size: 12px;
    font-weight: 900;
  }

  .project-top small {
    color: #64748b;
    font-weight: 800;
  }

  .project-card h3 {
    margin: auto 0 0;
    color: #f8fafc;
    font-size: clamp(32px, 4vw, 58px);
    line-height: 0.95;
    letter-spacing: -0.06em;
    position: relative;
    z-index: 1;
  }

  .project-card p {
    margin: 20px 0 0;
    color: #cbd5e1;
    font-size: 17px;
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 26px;
    position: relative;
    z-index: 1;
  }

  .tag-row span {
    padding: 8px 11px;
    border-radius: 999px;
    color: #dbeafe;
    background: rgba(15,23,42,0.78);
    border: 1px solid rgba(148,163,184,0.16);
    font-size: 12px;
    font-weight: 800;
  }

  .why-layout {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 48px;
    align-items: start;
  }

  .why-stack {
    display: grid;
    gap: 18px;
  }

  .why-card { padding: 26px; }

  .why-card h3 {
    margin: 0;
    color: #f8fafc;
    font-size: 28px;
    line-height: 1.05;
    letter-spacing: -0.04em;
    position: relative;
    z-index: 1;
  }

  .why-card p {
    margin: 14px 0 0;
    color: #94a3b8;
    font-size: 16px;
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }

  .build-grid {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .build-item {
    min-height: 170px;
    padding: 24px;
    border-radius: 24px;
    border: 1px solid rgba(148,163,184,0.16);
    background: rgba(15,23,42,0.56);
  }

  .build-item strong {
    display: block;
    color: #38bdf8;
    font-size: 14px;
    letter-spacing: 0.08em;
  }

  .build-item span {
    display: block;
    margin-top: 46px;
    color: #e2e8f0;
    font-size: 19px;
    line-height: 1.35;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .final-cta { padding: 70px 0 110px; }

  .final-cta-card {
    padding: clamp(32px, 6vw, 72px);
    text-align: center;
    background:
      radial-gradient(circle at 50% 0%, rgba(56,189,248,0.26), transparent 42%),
      linear-gradient(145deg, rgba(15,23,42,0.96), rgba(2,8,23,0.86));
  }

  .final-cta-card .section-kicker {
    margin-left: auto;
    margin-right: auto;
  }

  .final-cta-card h2 {
    margin: 0;
    color: #f8fafc;
    font-size: clamp(38px, 6vw, 78px);
    line-height: 0.95;
    letter-spacing: -0.065em;
    position: relative;
    z-index: 1;
  }

  .final-cta-card p {
    max-width: 720px;
    margin: 24px auto 0;
    color: #cbd5e1;
    font-size: 20px;
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }

  .final-cta-card .btn-row {
    justify-content: center;
    margin-top: 34px;
    position: relative;
    z-index: 1;
  }

  .footer-premium {
    position: relative;
    overflow: hidden;
    padding: 86px 0 58px;
    border-top: 1px solid rgba(148, 163, 184, 0.08);
    background: #01040d;
  }

  .footer-inner {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 60px;
    position: relative;
    z-index: 2;
  }

  .footer-word {
    margin: 0;
    font-size: clamp(60px, 12vw, 180px);
    line-height: 0.78;
    letter-spacing: -0.09em;
    font-weight: 900;
    color: rgba(248, 250, 252, 0.08);
    user-select: none;
    pointer-events: none;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    color: rgba(148, 163, 184, 0.74);
    font-size: 14px;
    white-space: nowrap;
  }

  .footer-links a { transition: color 220ms ease; }
  .footer-links a:hover { color: white; }

  .footer-copy {
    margin-top: 20px;
    color: rgba(100, 116, 139, 0.80);
    font-size: 12px;
    line-height: 1.5;
    text-align: right;
  }

  @media (max-width: 900px) {
    .nav-links { display: none; }

    .hero-premium {
      min-height: auto;
      padding-top: 112px;
    }

    .hero-inner {
      grid-template-columns: 1fr;
    }

    .hero-panel {
      min-height: 360px;
      order: 2;
    }

    .hero-metrics,
    .ecosystem-map,
    .projects-grid,
    .why-layout,
    .build-grid {
      grid-template-columns: 1fr;
    }

    .project-featured {
      grid-row: auto;
      min-height: 430px;
    }

    .project-card { min-height: 360px; }

    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-links { align-items: flex-start; }
    .footer-copy { text-align: left; }
  }

  @media (max-width: 760px) {
    .page-shell { width: min(100% - 28px, 1180px); }
    .section { padding: 72px 0; }
    .section-title { letter-spacing: -0.045em; }
    .hero-title { font-size: clamp(62px, 19vw, 96px); }
    .hero-panel pre { font-size: 13px; }
    .brand { font-size: 16px; }
  }
`;

export default LandingPage;
