import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/bs-landing.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // Assets (ícones em img/partners/)
  const phoneMock = useBaseUrl('img/phone-mock.png');
  const solanaIcon = useBaseUrl('img/partners/solana.svg');
  const jupiterIcon = useBaseUrl('img/partners/jupiter.svg');
  const heliusIcon = useBaseUrl('img/partners/helius.svg');
  const appUrl = siteConfig.customFields?.appUrl || 'https://app.bagsshield.org';

  return (
    <Layout title="Home" description="Solana Intelligence Layer">
      <div className="bs-landing">
        <div className="bs-hero">
          <div className="bs-container">
            <div className="bs-hero-grid">

              {/* TEXTO */}
              <div className="hero-left">
                <div className="status-pill">
                  <span className="status-dot"></span>
                  <span>All Systems Operational</span>
                </div>

                <h1 className="hero-title">
                  The Intelligence Layer <br/>
                  <span className="txt-gradient">for Solana DeFi.</span>
                </h1>

                <p className="hero-desc">
                  Real-time risk analysis, secure swaps, and deep analytics.
                  Institutional-grade security infrastructure for every trader.
                </p>

                <div className="hero-cta-group">
                  <Link to={appUrl} className="btn-primary">
                    Launch App
                  </Link>
                  <Link to="/docs/intro" className="btn-secondary">
                    Documentation
                  </Link>
                </div>

                <div className="partners-section">
                  <div className="partners-label">TRUSTED BY BUILDERS</div>
                  <div className="partners-grid">
                    <a href="https://solana.com" target="_blank" rel="noreferrer" title="Solana">
                      <img src={solanaIcon} alt="Solana" />
                    </a>
                    <a href="https://jup.ag" target="_blank" rel="noreferrer" title="Jupiter">
                      <img src={jupiterIcon} alt="Jupiter" />
                    </a>
                    <a href="https://helius.dev" target="_blank" rel="noreferrer" title="Helius">
                      <img src={heliusIcon} alt="Helius" />
                    </a>
                  </div>
                </div>
              </div>

              {/* MOCKUP (alinhado à direita no CSS) */}
              <div className="mock-col">
                <div className="phone-wrap">
                  <img className="phone-mock" src={phoneMock} alt="Bags Shield App Mock" loading="eager" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
