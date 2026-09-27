import React from 'react'
import { APP, ORDER, LOOP } from '../data.js'
import AppIcon from '../components/AppIcon.jsx'
import PhoneEngine from '../components/PhoneEngine.jsx'
import PhoneVault from '../components/PhoneVault.jsx'

/* 兩個 App 的展示段落：手機截屏 + 文案左右交替 */
function AppSection({ app, phone, flip }) {
  const d = APP[app]
  return (
    <section className={`section split ${flip ? 'flip' : ''}`} id={app} data-accent={app}>
      <div className="container split-grid">
        <div className="split-phone">{phone}</div>
        <div className="split-copy">
          <div className="split-head">
            <AppIcon app={app} size="lg" />
            <div>
              <span className="section-tag">{d.tag}</span>
              <h2>{d.name}</h2>
            </div>
          </div>
          <p className="split-lead">{d.blurb}</p>
          <ul className="split-features">
            {d.features.map(([t, x]) => (
              <li key={t}>
                <span className="ck">✓</span>
                <div><b>{t}</b><span>{x}</span></div>
              </li>
            ))}
          </ul>
          <a className="btn primary" href={d.url} target="_blank" rel="noopener noreferrer">
            ↓ 下載 {d.name} <small className="btn-sub">v{d.version.slice(1)} · APK</small>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* ===== HERO：文案 + 手機截屏 ===== */}
      <header className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="kicker"><span className="dot" />兩個 App · 一條主權迴路</span>
            <h1>金鑰留在<br /><span className="grad">網路上不了的地方。</span></h1>
            <p className="lead">Engine 負責端到端加密對談，Vault 在完全離線的裝置上為你簽名。一個在線、一個離線，互不兼職——全部開源、可審計。</p>

            <div className="dl-row" id="download">
              <a className="dl-big" href={APP.engine.url} target="_blank" rel="noopener noreferrer">
                <AppIcon app="engine" />
                <span><b>下載 Engine</b><small>加密社交 · Android</small></span>
              </a>
              <a className="dl-big" href={APP.vault.url} target="_blank" rel="noopener noreferrer">
                <AppIcon app="vault" />
                <span><b>下載 Vault</b><small>離線金鑰 · Android</small></span>
              </a>
            </div>
            <p className="dl-note">Android 安裝包 · 基於公開的 Engine3.0 協定棧</p>
          </div>

          <div className="hero-phones" aria-hidden="true">
            <div className="ph ph-back"><PhoneVault /></div>
            <div className="ph ph-front"><PhoneEngine /></div>
          </div>
        </div>
      </header>

      {/* ===== 兩個 APP：截屏演示 + 說明 ===== */}
      <AppSection app="engine" phone={<PhoneEngine />} />
      <AppSection app="vault" phone={<PhoneVault />} flip />

      {/* ===== 三步開始 ===== */}
      <section className="section alt" id="start">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">三步開始</span>
            <h2>一分鐘，從零到加密。</h2>
          </div>
          <div className="step-list">
            <div className="step"><span className="num">01</span><h3>安裝 Vault</h3><p>建立你的離線保險箱。身分金鑰在此誕生，從此永不出機。</p></div>
            <div className="step"><span className="num">02</span><h3>安裝 Engine</h3><p>掃描 Vault 登入你的身分。線上那一半，從不觸碰私鑰。</p></div>
            <div className="step"><span className="num">03</span><h3>開始對談</h3><p>端到端加密聊天。身分在同一空間內簽名，而不必跨越公網。</p></div>
          </div>
        </div>
      </section>

      {/* ===== 其他迴路（簡要提及） ===== */}
      <section className="section" id="loop">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">更大的迴路</span>
            <h2>這只是前門。</h2>
            <p>Spark 迴路還包括治理、身分與審計函式庫——它們都在另一個站上。</p>
          </div>
          <div className="loop-grid">
            {LOOP.map(([n, u]) => (
              <a className="loop-card" key={u} href={u} target="_blank" rel="noopener noreferrer">
                {n}<span className="go">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 底部下載 CTA ===== */}
      <section className="cta">
        <div className="container">
          <h2>把主權裝進口袋。</h2>
          <p>兩個 APK，離線簽名、在線對談，今天就開始。</p>
          <div className="dl-row center">
            <a className="dl-big" href={APP.engine.url} target="_blank" rel="noopener noreferrer">
              <AppIcon app="engine" /><span><b>下載 Engine</b><small>加密社交 · Android</small></span>
            </a>
            <a className="dl-big" href={APP.vault.url} target="_blank" rel="noopener noreferrer">
              <AppIcon app="vault" /><span><b>下載 Vault</b><small>離線金鑰 · Android</small></span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
