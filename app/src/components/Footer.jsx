import React from 'react'
import { Link } from 'react-router-dom'
import { APP, ORDER, LOOP, FOOT } from '../data.js'

const routeOf = { vault: '/vault', engine: '/engine' }

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo"><span className="mark">◆</span>Spark<span className="brand">.</span></Link>
            <p className="desc">{FOOT.desc}</p>
          </div>
          <div>
            <h4>App</h4>
            <ul>
              {ORDER.map((k) => (
                <li key={k}><Link to={routeOf[k]}>{APP[k].name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>更大的迴路</h4>
            <ul>
              {LOOP.map(([n, u]) => (
                <li key={u}><a href={u} target="_blank" rel="noopener noreferrer">{n}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <p className="version">{FOOT.license}</p>
      </div>
    </footer>
  )
}