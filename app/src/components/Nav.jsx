import React from 'react'

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Spark 首頁">
          <span className="mark">◆</span>Spark<span className="brand">.</span>
        </a>
        <nav className="nav-links">
          <a href="#engine" className="navLink">Engine</a>
          <a href="#vault" className="navLink">Vault</a>
          <a href="#start" className="navLink">開始使用</a>
        </nav>
        <a className="nav-cta" href="#download">下載</a>
      </div>
    </header>
  )
}
