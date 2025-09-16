<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Frontend Forge - Shaping the Digital Foundation</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --bg-primary: #0a0a0b;
        --bg-secondary: #1a1a1c;
        --bg-tertiary: #2a2a2d;
        --accent-gold: #d4af37;
        --accent-blue: #4a9eff;
        --accent-silver: #c0c0c8;
        --text-primary: #ffffff;
        --text-secondary: #a8a8b2;
        --text-muted: #6b6b78;
        --border-subtle: rgba(255, 255, 255, 0.08);
        --glow-subtle: rgba(212, 175, 55, 0.15);
      }

      body {
        font-family: "Inter", sans-serif;
        background: var(--bg-primary);
        color: var(--text-primary);
        line-height: 1.7;
        overflow-x: hidden;
        scroll-behavior: smooth;
      }

      /* Cosmic Background */
      .cosmic-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background: radial-gradient(
            circle at 25% 25%,
            rgba(212, 175, 55, 0.03) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 75% 75%,
            rgba(74, 158, 255, 0.02) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.01) 0%,
            transparent 70%
          );
      }

      /* Floating Particles */
      .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
      }

      .particle {
        position: absolute;
        width: 1px;
        height: 1px;
        background: rgba(212, 175, 55, 0.3);
        border-radius: 50%;
        animation: float 20s linear infinite;
      }

      .particle:nth-child(odd) {
        background: rgba(74, 158, 255, 0.2);
        animation-duration: 25s;
      }

      @keyframes float {
        0% {
          transform: translateY(100vh) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(50px);
          opacity: 0;
        }
      }

      .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      /* Header */
      header {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(10, 10, 11, 0.8);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border-subtle);
        z-index: 1000;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      header.scrolled {
        background: rgba(10, 10, 11, 0.95);
        border-bottom-color: var(--accent-gold);
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;
      }

      .logo {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        color: var(--text-primary);
        position: relative;
      }

      .logo::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: var(--accent-gold);
        transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .logo:hover::after {
        width: 100%;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 3rem;
        align-items: center;
      }

      .nav-links a {
        text-decoration: none;
        color: var(--text-secondary);
        font-weight: 300;
        font-size: 0.95rem;
        letter-spacing: 0.05em;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }

      .nav-links a::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -10px;
        width: 4px;
        height: 4px;
        background: var(--accent-gold);
        border-radius: 50%;
        opacity: 0;
        transform: translateY(-50%) scale(0);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .nav-links a:hover {
        color: var(--text-primary);
        transform: translateX(15px);
      }

      .nav-links a:hover::before {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }

      .nav-cta {
        background: transparent;
        border: 1px solid var(--accent-gold);
        padding: 0.8rem 2rem;
        color: var(--accent-gold);
        text-decoration: none;
        font-weight: 400;
        letter-spacing: 0.05em;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .nav-cta::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--accent-gold);
        transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
      }

      .nav-cta:hover::before {
        left: 0;
      }

      .nav-cta:hover {
        color: var(--bg-primary);
        transform: translateY(-1px);
      }

      /* Hero Section */
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        padding: 8rem 0 4rem;
      }

      .hero-content {
        max-width: 800px;
        animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero-badge {
        display: inline-block;
        background: rgba(212, 175, 55, 0.1);
        border: 1px solid rgba(212, 175, 55, 0.3);
        padding: 0.6rem 1.5rem;
        margin-bottom: 3rem;
        font-size: 0.85rem;
        font-weight: 300;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--accent-gold);
        animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
      }

      .hero h1 {
        font-family: "Space Grotesk", sans-serif;
        font-size: clamp(3rem, 8vw, 6rem);
        font-weight: 300;
        line-height: 1.1;
        margin-bottom: 2rem;
        background: linear-gradient(
          135deg,
          var(--text-primary) 0%,
          var(--accent-gold) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 200;
        color: var(--text-secondary);
        margin-bottom: 3rem;
        line-height: 1.6;
        animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
      }

      .hero p {
        font-size: 1.1rem;
        font-weight: 300;
        color: var(--text-muted);
        margin-bottom: 4rem;
        line-height: 1.8;
        max-width: 600px;
        animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s both;
      }

      .hero-actions {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1s both;
      }

      .btn {
        padding: 1rem 2.5rem;
        text-decoration: none;
        font-weight: 400;
        letter-spacing: 0.05em;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        border: 1px solid transparent;
      }

      .btn-primary {
        background: var(--accent-gold);
        color: var(--bg-primary);
        border-color: var(--accent-gold);
      }

      .btn-primary::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--text-primary);
        transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: -1;
      }

      .btn-primary:hover::before {
        left: 0;
      }

      .btn-primary:hover {
        color: var(--bg-primary);
        transform: translateY(-2px);
      }

      .btn-secondary {
        background: transparent;
        color: var(--text-secondary);
        border-color: var(--border-subtle);
      }

      .btn-secondary:hover {
        color: var(--text-primary);
        border-color: var(--accent-gold);
        transform: translateY(-2px);
      }

      /* Status Section */
      .status-section {
        padding: 8rem 0;
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(26, 26, 28, 0.5) 100%
        );
        position: relative;
      }

      .status-section::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100px;
        background: linear-gradient(
          to bottom,
          transparent,
          var(--accent-gold),
          transparent
        );
        transform: translateX(-50%);
      }

      .status-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8rem;
        align-items: center;
      }

      .status-text {
        animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .status-text h2 {
        font-family: "Space Grotesk", sans-serif;
        font-size: 2.5rem;
        font-weight: 300;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        letter-spacing: 0.02em;
      }

      .status-text h3 {
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--accent-gold);
        margin-bottom: 2rem;
        letter-spacing: 0.05em;
      }

      .status-text p {
        font-size: 1rem;
        font-weight: 300;
        color: var(--text-secondary);
        line-height: 1.8;
        margin-bottom: 2rem;
      }

      .progress-section {
        margin: 3rem 0;
      }

      .progress-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        font-weight: 300;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .progress-label span:first-child {
        color: var(--text-secondary);
      }

      .progress-label span:last-child {
        color: var(--accent-gold);
      }

      .progress-track {
        height: 2px;
        background: var(--bg-tertiary);
        position: relative;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: linear-gradient(
          90deg,
          var(--accent-gold),
          var(--accent-blue)
        );
        width: 0%;
        transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }

      .progress-fill::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 100%;
        background: var(--text-primary);
        box-shadow: 0 0 20px var(--accent-gold);
      }

      .progress-fill.animate {
        width: 35%;
      }

      /* Visual Display */
      .status-visual {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .foundation-grid {
        width: 400px;
        height: 400px;
        position: relative;
        border: 1px solid var(--border-subtle);
        background: radial-gradient(
          circle at center,
          rgba(212, 175, 55, 0.03) 0%,
          transparent 70%
        );
      }

      .foundation-grid::before,
      .foundation-grid::after {
        content: "";
        position: absolute;
        background: var(--border-subtle);
      }

      .foundation-grid::before {
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        transform: translateY(-50%);
      }

      .foundation-grid::after {
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
        transform: translateX(-50%);
      }

      .grid-nodes {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .node {
        position: absolute;
        width: 6px;
        height: 6px;
        background: var(--accent-gold);
        border-radius: 50%;
        animation: pulse 3s ease-in-out infinite;
      }

      .node:nth-child(1) {
        top: 25%;
        left: 25%;
        animation-delay: 0s;
      }
      .node:nth-child(2) {
        top: 25%;
        right: 25%;
        animation-delay: 0.5s;
      }
      .node:nth-child(3) {
        bottom: 25%;
        left: 25%;
        animation-delay: 1s;
      }
      .node:nth-child(4) {
        bottom: 25%;
        right: 25%;
        animation-delay: 1.5s;
      }
      .node:nth-child(5) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-delay: 2s;
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 0.3;
          transform: scale(1);
          box-shadow: 0 0 5px var(--accent-gold);
        }
        50% {
          opacity: 1;
          transform: scale(1.5);
          box-shadow: 0 0 20px var(--accent-gold);
        }
      }

      /* Features Section */
      .features {
        padding: 8rem 0;
        background: var(--bg-primary);
      }

      .section-header {
        text-align: center;
        margin-bottom: 6rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .section-header h2 {
        font-family: "Space Grotesk", sans-serif;
        font-size: 2.5rem;
        font-weight: 300;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        letter-spacing: 0.02em;
      }

      .section-header p {
        font-size: 1.1rem;
        font-weight: 300;
        color: var(--text-secondary);
        line-height: 1.7;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
      }

      .feature-card {
        background: rgba(26, 26, 28, 0.3);
        border: 1px solid var(--border-subtle);
        padding: 3rem 2.5rem;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .feature-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: var(--accent-gold);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .feature-card:hover::before {
        transform: scaleX(1);
      }

      .feature-card:hover {
        transform: translateY(-5px);
        border-color: var(--accent-gold);
        background: rgba(26, 26, 28, 0.5);
      }

      .feature-icon {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--accent-gold);
        opacity: 0.8;
      }

      .feature-card h3 {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.3rem;
        font-weight: 400;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        letter-spacing: 0.02em;
      }

      .feature-card p {
        font-size: 0.95rem;
        font-weight: 300;
        color: var(--text-secondary);
        line-height: 1.7;
      }

      /* Timeline Section */
      .timeline {
        padding: 8rem 0;
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(26, 26, 28, 0.3) 100%
        );
        position: relative;
      }

      .timeline::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          var(--accent-gold),
          transparent,
          var(--accent-gold)
        );
        transform: translateX(-50%);
        opacity: 0.3;
      }

      .timeline-content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
      }

      .timeline h2 {
        font-family: "Space Grotesk", sans-serif;
        font-size: 2.5rem;
        font-weight: 300;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
      }

      .timeline-subtitle {
        font-size: 1.2rem;
        font-weight: 300;
        color: var(--accent-gold);
        margin-bottom: 3rem;
        letter-spacing: 0.05em;
      }

      .timeline-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
        margin-top: 4rem;
      }

      .timeline-item {
        text-align: center;
        position: relative;
      }

      .timeline-item::before {
        content: "";
        position: absolute;
        top: -20px;
        left: 50%;
        width: 8px;
        height: 8px;
        background: var(--accent-gold);
        border-radius: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 20px var(--accent-gold);
      }

      .timeline-phase {
        font-size: 0.85rem;
        font-weight: 400;
        color: var(--accent-gold);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 1rem;
      }

      .timeline-item h3 {
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--text-primary);
        margin-bottom: 1rem;
      }

      .timeline-item p {
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--text-secondary);
        line-height: 1.6;
      }

      /* Footer */
      footer {
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-subtle);
        padding: 4rem 0 2rem;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 4rem;
        margin-bottom: 3rem;
      }

      .footer-section h3 {
        font-family: "Space Grotesk", sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        letter-spacing: 0.02em;
      }

      .footer-section p,
      .footer-section a {
        font-size: 0.9rem;
        font-weight: 300;
        color: var(--text-secondary);
        text-decoration: none;
        line-height: 1.8;
        display: block;
        margin-bottom: 0.5rem;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .footer-section a:hover {
        color: var(--accent-gold);
        transform: translateX(5px);
      }

      .footer-bottom {
        border-top: 1px solid var(--border-subtle);
        padding-top: 2rem;
        text-align: center;
      }

      .footer-bottom p {
        font-size: 0.85rem;
        font-weight: 300;
        color: var(--text-muted);
        letter-spacing: 0.05em;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .nav-links {
          display: none;
        }

        .hero {
          padding: 6rem 0 2rem;
          text-align: center;
        }

        .hero h1 {
          font-size: 2.5rem;
        }

        .hero-actions {
          justify-content: center;
        }

        .status-container {
          grid-template-columns: 1fr;
          gap: 4rem;
          text-align: center;
        }

        .foundation-grid {
          width: 300px;
          height: 300px;
        }

        .features-grid {
          grid-template-columns: 1fr;
        }

        .timeline-items {
          grid-template-columns: 1fr;
        }
      }

      /* Intersection Observer animations */
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
      }
    </style>
  </head>
  <body>
    <!-- Cosmic Background -->
    <div class="cosmic-bg"></div>

    <!-- Floating Particles -->
    <div class="particles" id="particles"></div>

    <!-- Header -->
    <header id="header">
      <nav class="container">
        <div class="logo">Frontend Forge</div>
        <ul class="nav-links">
          <li><a href="#hjem">Hjem</a></li>
          <li><a href="#status">Status</a></li>
          <li><a href="#visjon">Visjon</a></li>
          <li><a href="#fremtid">Fremtid</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="#" class="nav-cta">Følg utviklingen</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="hjem">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">Shaping Digital Foundation</div>
          <h1>Frontend Forge</h1>
          <div class="hero-subtitle">
            Where builders, dreamers, and curious minds converge to shape the
            web's foundation
          </div>
          <p>
            🎨 Feiring av byggerne, drømmerne og de nysgjerrige sinnene som
            former nettet. Her støtter vi kreativitet, styrker webenthusiaster
            og holder internett som en åpen lekeplass for ideer. Din kode, dine
            drømmer, vårt fellesskap.
          </p>
          <div class="hero-actions">
            <a href="#status" class="btn btn-primary">Utforsk visjonen</a>
            <a href="#fremtid" class="btn btn-secondary">Se fremtidsplanene</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Status Section -->
    <section class="status-section" id="status">
      <div class="container">
        <div class="status-container">
          <div class="status-text animate-on-scroll">
            <h2>Foundation under konstruksjon</h2>
            <h3>Bygger fundamentet for fremtidens webutvikling</h3>
            <p>
              Som Hari Seldon som planla Galactic Empire's fremtid, bygger vi
              Frontend Forge med langsiktig visjon. Hver linje kode, hver
              designbeslutning, hver interaksjon er nøye planlagt for å skape en
              plattform som vil forme hvordan webutviklere og designere
              samarbeider i generasjoner fremover.
            </p>

            <div class="progress-section">
              <div class="progress-label">
                <span>Foundation Progress</span>
                <span>35%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" id="progressBar"></div>
              </div>
            </div>

            <p>
              Dette er ikke bare en plattform - det er en foundation for
              fremtidens kreative kodere. En base hvor innovasjon møter
              samarbeid, hvor individuelle visjoner blir til kollektiv kraft.
            </p>
          </div>

          <div class="status-visual animate-on-scroll">
            <div class="foundation-grid">
              <div class="grid-nodes">
                <div class="node"></div>
                <div class="node"></div>
                <div class="node"></div>
                <div class="node"></div>
                <div class="node"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="visjon">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <h2>Foundation Capabilities</h2>
          <p>
            En evolusjonær plattform designet for å vare gjennom teknologiske
            skifter og generasjoner av utviklere
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card animate-on-scroll">
            <div class="feature-icon">🏛️</div>
            <h3>Eternal Architecture</h3>
            <p>
              Bygd for å vare. Vår arkitektur er designet for å tilpasse seg
              fremtidens teknologier mens den bevarer kjerneverdiene av
              samarbeid og kreativitet.
            </p>
          </div>

          <div class="feature-card animate-on-scroll">
            <h3>Psychohistory of Code</h3>
            <div class="feature-icon">📊</div>
            <p>
              Prediktive algoritmer som forstår kodingsmønstre og
              samarbeidsstrømmer, og hjelper utviklere å finne de perfekte
              prosjektene og partnerne.
            </p>
          </div>

          <div class="feature-card animate-on-scroll">
            <div class="feature-icon">🌌</div>
            <h3>Galactic Collaboration</h3>
            <p>
              Samarbeid på en skala som transcenderer geografiske og tidsmessige
              grenser. Asynkron arbeid som føles som sanntid.
            </p>
          </div>

          <div class="feature-card animate-on-scroll">
            <div class="feature-icon">⚡</div>
            <h3>Prime Radiant Knowledge</h3>
            <p>
              En levende kunnskapsbase som evolverer med fellesskapet, hvor hver
              bidrag styrker det kollektive forståelsen.
            </p>
          </div>

          <div class="feature-card animate-on-scroll">
            <div class="feature-icon">🔮</div>
            <h3>Second Foundation Mentoring</h3>
            <p>
              AI-drevet mentorskap som matcher erfarne utviklere med nykommere,
              og sikrer kontinuerlig kunnskapsoverføring.
            </p>
          </div>

          <div class="feature-card animate-on-scroll">
            <div class="feature-icon">🚀</div>
            <h3>Foundation's Edge Projects</h3>
            <p>
              Banebrytende prosjekter som definerer fremtiden for webutvikling,
              initiert og støttet av fellesskapet.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline" id="fremtid">
      <div class="container">
        <div class="timeline-content">
          <h2>The Seldon Plan</h2>
          <div class="timeline-subtitle">
            En omfattende plan for Frontend Forge's evolusjon
          </div>

          <div class="timeline-items">
            <div class="timeline-item animate-on-scroll">
              <div class="timeline-phase">Foundation Era</div>
              <h3>Core Platform</h3>
              <p>
                Etablering av grunnleggende infrastruktur, brukerregistrering og
                prosjektdeling
              </p>
            </div>

            <div class="timeline-item animate-on-scroll">
              <div class="timeline-phase">Expansion Era</div>
              <h3>Community Features</h3>
              <p>Forum, samarbeidsverktøy og mentorprogram implementeres</p>
            </div>

            <div class="timeline-item animate-on-scroll">
              <div class="timeline-phase">Intelligence Era</div>
              <h3>AI Integration</h3>
              <p>
                Prediktive matching, intelligent forslag og automatisert
                kunnskapsorganisering
              </p>
            </div>

            <div class="timeline-item animate-on-scroll">
              <div class="timeline-phase">Transcendence Era</div>
              <h3>Global Foundation</h3>
              <p>
                Plattformen blir det de facto stedet for webutviklingssamarbeid
                på verdensbasis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="kontakt">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Frontend Forge</h3>
            <p>
              Building the foundation for tomorrow's web creators. A platform
              designed to outlast technological shifts and unite developers
              across time and space.
            </p>
          </div>

          <div class="footer-section">
            <h3>Foundation</h3>
            <a href="#">Architecture Documentation</a>
            <a href="#">Development Roadmap</a>
            <a href="#">Research Papers</a>
            <a href="#">Foundation Principles</a>
          </div>

          <div class="footer-section">
            <h3>Community</h3>
            <a href="#">Join the Foundation</a>
            <a href="#">Developer Network</a>
            <a href="#">Knowledge Base</a>
            <a href="#">Mentorship Program</a>
          </div>

          <div class="footer-section">
            <h3>Contact</h3>
            <a href="mailto:foundation@frontendforge.dev"
              >foundation@frontendforge.dev</a
            >
            <a href="#">Research Council</a>
            <a href="#">Partner Inquiries</a>
            <a href="#">Foundation Charter</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>
            &copy; 2024 Frontend Forge Foundation. Shaping the digital future
            across generations.
          </p>
        </div>
      </div>
    </footer>

    <script>
      // Create floating particles
      function createParticles() {
        const particlesContainer = document.getElementById("particles");
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.left = Math.random() * 100 + "%";
          particle.style.animationDelay = Math.random() * 20 + "s";
          particle.style.animationDuration = Math.random() * 10 + 15 + "s";
          particlesContainer.appendChild(particle);
        }
      }

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Progress bar animation
      const progressObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.getElementById("progressBar").classList.add("animate");
            }
          });
        },
        { threshold: 0.5 }
      );

      progressObserver.observe(document.querySelector(".progress-section"));

      // Scroll animations
      const scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "-50px",
        }
      );

      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        scrollObserver.observe(el);
      });

      // Initialize particles
      createParticles();

      // Add staggered delays to timeline items
      document.querySelectorAll(".timeline-item").forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
      });

      // Add staggered delays to feature cards
      document.querySelectorAll(".feature-card").forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
      });
    </script>
  </body>
</html>
