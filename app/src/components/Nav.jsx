import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Spark 首頁">
          <span className="mark">◆</span>Spark<span className="brand">.</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/vault" className="navLink">Vault</NavLink>
          <NavLink to="/engine" className="navLink">Engine</NavLink>
        </nav>
      </div>
    </header>
  )
}