import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="galaxy-bg">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="glass-panel" style={{ gridRow: '1 / 3' }}>
          <h2 style={{ color: 'var(--primary-glow)', fontSize: '1.2rem' }}>GALAXY_V77</h2>
          <nav style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['Main Core', 'Analytics', 'Security Hub', 'Cloud Nodes', 'Saleh Settings'].map(item => (
              <div key={item} style={{ fontSize: '0.9rem', opacity: '0.7', cursor: 'pointer', padding: '10px' }}>{item}</div>
            ))}
          </nav>
        </aside>

        {/* Top Header Section */}
        <header className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: 0 }}>System Overview</h3>
            <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Welcome back, Commander Saleh</p>
          </div>
          <div className="status-tag">SECURE CONNECTION</div>
        </header>

        {/* Main Content Area */}
        <main className="glass-panel">
          <div className="grid-3">
            <div className="stat-box">
              <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>NETWORK SPEED</span>
              <h2 style={{ color: 'var(--primary-glow)' }}>1.2 Gbps</h2>
            </div>
            <div className="stat-box">
              <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>ACTIVE NODES</span>
              <h2>244</h2>
            </div>
            <div className="stat-box">
              <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>THREAT LEVEL</span>
              <h2 style={{ color: '#00ffaa' }}>ZERO</h2>
            </div>
          </div>

          <div style={{ height: '200px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ opacity: 0.3 }}>[ Visual Data Stream Chart Placeholder ]</p>
          </div>
        </main>

        {/* Bottom Footer Info */}
        <footer className="glass-panel" style={{ gridColumn: '1 / 3', padding: '15px', fontSize: '0.8rem', textAlign: 'center' }}>
          <span style={{ opacity: 0.5 }}>PROJECT:</span> SALEH_COMMAND_CENTER // <span style={{ opacity: 0.5 }}>YEAR:</span> 2026 // <span style={{ color: 'var(--primary-glow)' }}>DEPLOYED_ON_VERCEL</span>
        </footer>
      </div>
    </div>
  );
};

export default App;