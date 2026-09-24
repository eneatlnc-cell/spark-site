import React from 'react'
import { Link } from 'react-router-dom'
import { APP, ORDER } from '../data.js'
import AppIcon from '../components/AppIcon.jsx'

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <header className="page hero-home">
        <div className="container">
          <span className="kicker"><span className="dot" />兩個 App · 一條主權迴路</span>
          <h1>金鑰留在<span className="grad">網路上不了的地方</span>，Engine 只做加密社交。</h1>
          <p className="lead">為第一天使用者打造的實體隔離組合：負責簽名的 App 永遠不碰網路，負責對談的 App 永不持有私鑰。全部開源、可審計。</p>

          <div className="dl-stack">
            {ORDER.map((key) => {
              const d = APP[key]
              return (
                <a key={key} className="dl-btn" href={d.url} target="_blank" rel="noopener noreferrer">
                  <AppIcon app={key} />
                  <span className="dl-meta">
                    <b>下載 {d.name}</b>
                    <span className="dl-sub">{d.shy} · Android</span>
                  </span>
                  <span className="dl-go">→</span>
                </a>
              )
            })}
          </div>
          <p className="dl-note">Android 安裝包 · 基於公開的 Engine3.0 協定棧</p>
        </div>
      </header>

      {/* ===== 兩個 APP ===== */}
      <section className="section" id="apps">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">這個組合</span>
            <h2>兩個 App，一件事一件。</h2>
            <p>Engine 是永遠在線、負責對談的那一半；Vault 是永遠離線、負責簽名的那一半。兩者互不兼職——這正是關鍵。</p>
          </div>

          <div className="app-grid">
            {ORDER.map((key, i) => {
              const d = APP[key]
              return (
                <article key={key} className={`app-card app-${key}`} data-accent={key}>
                  <div className="app-card-top">
                    <AppIcon app={key} size="lg" />
                    <div>
                      <h3>{d.name}</h3>
                      <span className="role">{d.tag}</span>
                    </div>
                  </div>
                  <p className="one-liner">{d.blurb}</p>
                  <ul>
                    {d.features.map(([t, x]) => (
                      <li key={t}><span className="ck">✓</span><b>{t}</b><span>{x}</span></li>
                    ))}
                  </ul>
                  <div className="app-card-actions">
                    <Link to={`/${key}`} className="btn primary">認識 {d.name}</Link>
                    <a className="btn ghost" href={d.url} target="_blank" rel="noopener noreferrer">下載 APK</a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== 三步 ===== */}
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
    </>
  )
}