import React from 'react'
import { Link } from 'react-router-dom'
import { APP } from '../data.js'
import AppIcon from '../components/AppIcon.jsx'

export default function AppPage({ app, title, titleGrad, lead, isEngine }) {
  const d = { ...APP[app], title, titleGrad, lead }
  return (
    <>
      <header className="page page-hero" data-accent={app}>
        <div className="container">
          <Link to="/" className="back">← 回首頁</Link>
          <div className="hero-row">
            <div>
              <span className="section-tag">{d.tag}</span>
              <h1>{d.title} <span className="grad">{d.titleGrad}</span></h1>
              <p className="lead">{d.lead}</p>
              <div className="stat-grid">
                {d.stats.map(([v, l]) => (
                  <div className="stat" key={l}><b>{v}</b><span>{l}</span></div>
                ))}
              </div>
              <div className="hero-actions">
                <a className="btn primary" href={d.url} target="_blank" rel="noopener noreferrer">↓ 下載 {d.name}</a>
                {isEngine && (
                  <a className="btn ghost" href="https://github.com/eneatlnc-cell/Engine3.0" target="_blank" rel="noopener noreferrer">↗ Engine3.0 審計函式庫</a>
                )}
              </div>
            </div>
            <div className="hero-art">
              <div className="art-card">
                <AppIcon app={app} size="xl" />
                <span className="art-name">{d.name}</span>
                <span className="art-desc">{d.shy}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section alt" id="why" data-accent={app}>
        <div className="container">
          <div className="section-head">
            <span className="section-tag">{d.why.kicker}</span>
            <h2>{d.why.title[0]} <span className="grad">{d.why.title[1]}</span></h2>
            <p>{d.why.sub}</p>
          </div>
          <div className="feature-grid">
            {d.why.features.map(([t, x]) => (
              <div className="feature" key={t}><h4>{t}</h4><p>{x}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}