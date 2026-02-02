import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// --- Componentes SVG Inline (Sem dependências extras) ---
const Icons = {
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Zap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Chart: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Solana: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h12l4-4H8z" />
      <path d="M8 10h12l4-4H8z" />
      <path d="M4 2h12l4 4H8z" />
    </svg>
  ),
  Planet: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Cube: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
};

// --- Componente: Status Badge (Health URL configurável) ---
const ApiStatusBadge = ({ healthUrl }: { healthUrl: string }) => {
  const [status, setStatus] = useState<'loading' | 'online' | 'unknown'>('loading');

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    fetch(healthUrl, { signal: controller.signal, cache: 'no-store' })
      .then((res) => setStatus(res.ok ? 'online' : 'unknown'))
      .catch(() => setStatus('unknown'))
      .finally(() => clearTimeout(timeoutId));

    return () => clearTimeout(timeoutId);
  }, [healthUrl]);

  const colorClass =
    status === 'online' ? 'badge-online' : status === 'unknown' ? 'badge-unknown' : 'badge-loading';
  const text = status === 'online' ? 'API Online' : status === 'unknown' ? 'API Unknown' : 'Checking...';

  return (
    <div className={`status-badge ${colorClass}`}>
      <span className="status-dot"></span>
      {text}
    </div>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const cf = (siteConfig.customFields as any) || {};
  const healthUrl: string = cf.healthUrl || '/api/health';
  const appUrl: string = cf.appUrl || 'https://app.bagsshield.org';

  return (
    <Layout title={siteConfig.title} description="The Ultimate Solana Intelligence Layer">
      {/* Container Principal com Fundo Cyber */}
      <div className="cyber-wrapper">
        <div className="cyber-grid-overlay"></div>
        <div className="cyber-glow-spot top-left"></div>
        <div className="cyber-glow-spot bottom-right"></div>

        <main className="main-content">
          {/* HERO SECTION */}
          <section className="hero-section">
            <div className="container">
              <div className="hero-grid">
                {/* Coluna Esquerda: Texto */}
                <div className="hero-text">
                  <ApiStatusBadge healthUrl={healthUrl} />
                  <h1 className="hero-title">
                    Bags Shield: The Ultimate <br />
                    <span className="text-gradient">Solana Intelligence</span> Layer.
                  </h1>
                  <p className="hero-subtitle">
                    Real-time risk analysis, secure swaps, and advanced analytics for the Solana ecosystem.
                  </p>
                  <div className="hero-cta-group">
                    <a className="button button--primary button--lg glow-button" href={appUrl}>
                      Launch Web App
                    </a>
                    <Link className="button button--secondary button--lg glass-button" to="/docs/api/overview">
                      Read Docs
                    </Link>
                  </div>
                </div>

                {/* Coluna Direita: Imagem 3D */}
                <div className="hero-visual">
                  <div className="phone-perspective-wrapper">
                    <div className="phone-frame">
                      {/* Placeholder ou imagem real */}
                      <img
                        src="/img/phone-mock.png"
                        alt="Bags Shield App Interface"
                        className="phone-screen"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.classList.add('fallback-frame');
                        }}
                      />
                      <div className="phone-fallback-content">
                        <Icons.Shield />
                        <h3>Bags Shield</h3>
                        <div className="scan-circle">
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                    {/* Elementos flutuantes decorativos */}
                    <div className="floating-card card-1">
                      <span>Risk: Low</span>
                    </div>
                    <div className="floating-card card-2">
                      <span>Simulated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="features-section">
            <div className="container">
              <div className="section-header">
                <h2>Key Features</h2>
              </div>
              <div className="cards-grid">
                <div className="glass-card">
                  <div className="card-icon">
                    <Icons.Shield />
                  </div>
                  <h3>Scan Risk</h3>
                  <p>Instant contract analysis detecting rugpulls, honeypots, and mutable metadata.</p>
                </div>
                <div className="glass-card">
                  <div className="card-icon">
                    <Icons.Chart />
                  </div>
                  <h3>Secure Analytics</h3>
                  <p>Deep dive into holder distribution and liquidity lock status in real-time.</p>
                </div>
                <div className="glass-card">
                  <div className="card-icon">
                    <Icons.Zap />
                  </div>
                  <h3>Swift Swaps</h3>
                  <p>Integrated Jupiter routing for the best prices with safety checks pre-execution.</p>
                </div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="steps-section">
            <div className="container">
              <div className="section-header">
                <h2>How It Works</h2>
              </div>
              <div className="steps-grid">
                <div className="step-item">
                  <span className="step-number">01</span>
                  <h3>Paste Contract</h3>
                  <p>Input any Solana SPL token address into the scanner.</p>
                </div>
                <div className="step-item">
                  <span className="step-number">02</span>
                  <h3>Get Analysis</h3>
                  <p>Receive a comprehensive safety score and risk report.</p>
                </div>
                <div className="step-item">
                  <span className="step-number">03</span>
                  <h3>Trade Safely</h3>
                  <p>Swap directly within the app if the token passes your checks.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ECOSYSTEM PARTNERS */}
          <section className="partners-section">
            <div className="container">
              <div className="section-header">
                <h2>Ecosystem Partners</h2>
              </div>
              <div className="partners-row">
                <div className="partner-logo">
                  <Icons.Solana /> <span>Solana</span>
                </div>
                <div className="partner-logo">
                  <Icons.Planet /> <span>Jupiter</span>
                </div>
                <div className="partner-logo">
                  <Icons.Cube /> <span>Helius</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
