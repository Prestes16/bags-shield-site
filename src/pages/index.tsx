import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import '../css/bs-landing.css';

export default function Home(): JSX.Element {
  const phoneMock = useBaseUrl('img/phone-mock.png');

  const solana = useBaseUrl('img/partners/solana.svg');
  const jupiter = useBaseUrl('img/partners/jupiter.svg');
  const helius = useBaseUrl('img/partners/helius.svg');

  return (
    <Layout
      title="Bags Shield"
      description="Real-time risk analysis, secure swaps, and advanced analytics for the Solana ecosystem."
    >
      <main className="bs-landing">
        <section className="bs-hero">
          <div className="bs-container bs-hero-grid">
            <div>
              <div className="status-pill">
                <span className="status-dot" />
                API OFFLINE
              </div>

              <h1 className="hero-title">
                Bags Shield: The <span className="txt-gradient">Ultimate Solana</span> Intelligence Layer.
              </h1>

              <p className="hero-desc">
                Real-time risk analysis, secure swaps, and advanced analytics for the Solana ecosystem.
              </p>

              <div className="hero-cta-group">
                <a className="btn-primary" href="#" rel="noreferrer">
                  Launch Web App
                </a>
                <Link className="btn-secondary" to="/docs/api">
                  Docs
                </Link>
              </div>

              <div className="partners-section">
                <div className="partners-label">Ecosystem Partners</div>
                <div className="partners-grid">
                  <a href="https://solana.com" target="_blank" rel="noreferrer">
                    <img src={solana} alt="Solana" loading="lazy" />
                    <span>Solana</span>
                  </a>
                  <a href="https://jup.ag" target="_blank" rel="noreferrer">
                    <img src={jupiter} alt="Jupiter" loading="lazy" />
                    <span>Jupiter</span>
                  </a>
                  <a href="https://helius.dev" target="_blank" rel="noreferrer">
                    <img src={helius} alt="Helius" loading="lazy" />
                    <span>Helius</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bs-mock">
              <img src={phoneMock} alt="Bags Shield App mock" loading="eager" />
            </div>
          </div>
        </section>

        <section className="bs-section">
          <div className="bs-container">
            <div className="grid-3">
              <div className="glass">
                <h3>Scan Risk</h3>
                <p>Instant contract analysis detecting rugpulls, honeypots, and mutable metadata.</p>
              </div>
              <div className="glass">
                <h3>Secure Analytics</h3>
                <p>Deep dive into holder distribution and liquidity signals with clear risk explanations.</p>
              </div>
              <div className="glass">
                <h3>Swift Swaps</h3>
                <p>Integrated routing (Jupiter) for the best prices with safety checks before execution.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bs-footer">
          © 2026 Bags Shield. Built for Solana.
        </footer>
      </main>
    </Layout>
  );
}
