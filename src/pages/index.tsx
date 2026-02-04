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
          <div className="bs-container hero-grid">
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

              <div className="hero-cta">
                <a className="btn-primary" href="#" rel="noreferrer">
                  Launch Web App
                </a>
                <Link className="btn-secondary" to="/docs/api">
                  Docs
                </Link>
              </div>

              <div className="partners">
                <span className="label">Ecosystem Partners</span>
                <img src={solana} alt="Solana" loading="lazy" />
                <img src={jupiter} alt="Jupiter" loading="lazy" />
                <img src={helius} alt="Helius" loading="lazy" />
              </div>
            </div>

            <div className="hero-art">
              <img className="phone-mock" src={phoneMock} alt="Bags Shield App mock" loading="eager" />
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
