import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// --- Ícones (SVGs Limpos) ---
const Icons = {
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Chart: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Zap: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  
  // PARCEIROS (Logos Grandes)
  Solana: () => <svg viewBox="0 0 397 311" fill="none" height="32"><path d="M64.6 238.3L0 302.9H332.1L396.7 238.3H64.6ZM0 72.7L64.6 8H396.7L332.1 72.7H0ZM64.6 155.4L0 220H332.1L396.7 155.4H64.6Z" fill="currentColor"/></svg>,
  Jupiter: () => <svg viewBox="0 0 24 24" fill="none" height="32"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="currentColor"/></svg>,
  Helius: () => <svg viewBox="0 0 24 24" fill="none" height="32"><path d="M16.5 2H7.5V22H16.5V2Z" fill="currentColor"/><path d="M12 10L14 12L12 14L10 12L12 10Z" fill="#020617"/></svg>
};

// --- Badge API (Resiliente) ---
const ApiStatusBadge = () => {
  const { siteConfig } = useDocusaurusContext();
  const [status, setStatus] = useState('checking');
  const apiUrl = siteConfig.customFields?.apiHealthUrl || 'https://bags-shield-api.vercel.app/api/health';

  useEffect(() => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 2000);
    fetch(apiUrl, { signal: controller.signal })
      .then(r => setStatus(r.ok ? 'online' : 'unknown'))
      .catch(() => setStatus('unknown')) // Falha silenciosa para nao quebrar UI
      .finally(() => clearTimeout(id));
    return () => clearTimeout(id);
  }, [apiUrl]);

  return (
    <div className={`cyber-badge ${status}`}>
      <span className="dot"></span>
      {status === 'online' ? 'API Online' : status === 'checking' ? 'Checking...' : 'API Offline'}
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const appUrl = siteConfig.customFields?.appUrl || '#';
  const [imgError, setImgError] = useState(false);

  return (
    <Layout title="Home" description="Solana Intelligence Layer">
      <div className="cyber-landing">
        
        {/* Background */}
        <div className="bg-grid"></div>
        <div className="glow-spot top-right"></div>
        <div className="glow-spot bottom-left"></div>

        <main className="cyber-container">
          
          {/* HERO SECTION */}
          <section className="hero-section">
            <div className="hero-text">
              <ApiStatusBadge />
              <h1 className="hero-title">
                Bags Shield: The <br/>
                <span className="text-highlight">Ultimate Solana</span> <br/>
                Intelligence Layer.
              </h1>
              <p className="hero-desc">
                Real-time risk analysis, secure swaps, and advanced analytics for the Solana ecosystem.
              </p>
              
              <div className="cta-group">
                <Link to={appUrl} className="btn btn-primary">Launch Web App</Link>
                <Link to="/docs/intro" className="btn btn-secondary">Docs</Link>
              </div>
            </div>

            {/* MOCKUP 3D */}
            <div className="hero-visual">
              <div className="phone-wrapper">
                <div className={`phone-frame ${imgError ? 'no-img' : ''}`}>
                  {!imgError ? (
                    <img 
                      src="img/phone-mock.png" 
                      alt="App Interface" 
                      className="phone-img"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Fallback UI Clean */
                    <div className="phone-ui">
                      <div className="ui-top"><Icons.Shield /> <span>Bags Shield</span></div>
                      <div className="ui-center">
                        <div className="radar"></div>
                        <h3>Scanning...</h3>
                      </div>
                    </div>
                  )}
                  <div className="glass-overlay"></div>
                </div>

                {/* Floating Cards (Fixos e Alinhados) */}
                <div className="float-card card-top">
                  <div className="icon-box green"><Icons.Check /></div>
                  <div><div className="label">Risk Level</div><div className="value">Safe (98%)</div></div>
                </div>
                <div className="float-card card-bottom">
                  <div className="icon-box cyan"><Icons.Zap /></div>
                  <div><div className="label">Swap Route</div><div className="value">Jupiter Aggregator</div></div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES GRID */}
          <section className="features-section">
            <div className="grid-3">
              <div className="glass-box">
                <div className="box-icon"><Icons.Shield /></div>
                <h3>Scan Risk</h3>
                <p>Instant contract analysis detecting rugpulls, honeypots, and mutable metadata.</p>
              </div>
              <div className="glass-box">
                <div className="box-icon"><Icons.Chart /></div>
                <h3>Secure Analytics</h3>
                <p>Deep dive into holder distribution and liquidity lock status in real-time.</p>
              </div>
              <div className="glass-box">
                <div className="box-icon"><Icons.Zap /></div>
                <h3>Swift Swaps</h3>
                <p>Integrated Jupiter routing for the best prices with safety checks.</p>
              </div>
            </div>
          </section>

          {/* PARTNERS (Corrigido: Logos Grandes) */}
          <section className="partners-section">
            <h4 className="partners-label">Ecosystem Partners</h4>
            <div className="partners-grid">
              <div className="partner-logo solana"><Icons.Solana /> <span>Solana</span></div>
              <div className="partner-logo jupiter"><Icons.Jupiter /> <span>Jupiter</span></div>
              <div className="partner-logo helius"><Icons.Helius /> <span>Helius</span></div>
            </div>
          </section>

          <footer className="simple-footer">
            <p>© {new Date().getFullYear()} Bags Shield. Built for Solana.</p>
          </footer>

        </main>
      </div>
    </Layout>
  );
}