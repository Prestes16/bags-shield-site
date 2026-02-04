import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/bs-landing.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

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
                  <Link to="/docs/api/overview" className="btn-secondary">
                    Documentation
                  </Link>
                </div>

                <div className="partners-section">
                  <div className="partners-label">TRUSTED BY BUILDERS</div>
                  <div className="partners-grid">
                    <a href="https://solana.com" target="_blank" rel="noreferrer">
                      <img src={solanaIcon} alt="Solana" /> <span>Solana</span>
                    </a>
                    <a href="https://jup.ag" target="_blank" rel="noreferrer">
                      <img src={jupiterIcon} alt="Jupiter" /> <span>Jupiter</span>
                    </a>
                    <a href="https://helius.dev" target="_blank" rel="noreferrer">
                      <img src={heliusIcon} alt="Helius" /> <span>Helius</span>
                    </a>
                  </div>
                </div>
              </div>

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
