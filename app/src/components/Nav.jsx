import React from 'react'
import { IcSpark } from './icons.jsx'

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Spark 首頁">
          <span className="mark"><IcSpark /></span>Spark<span className="brand">.</span>
        </a>
        <nav className="nav-links">
          <a href="#engine">Engine</a>
          <a href="#vault">Vault</a>
          <a href="#start">開始使用</a>
        </nav>
        <a className="nav-cta" href="#download">下載</a>
      </div>
    </header>
  )
}
