import React from 'react'
import { APP, ORDER, LOOP, FOOT } from '../data.js'

const anchorOf = { vault: '#vault', engine: '#engine' }

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="logo"><span className="mark">◆</span>Spark<span className="brand">.</span></a>
            <p className="desc">{FOOT.desc}</p>
          </div>
          <div>
            <h4>App</h4>
            <ul>
              {ORDER.map((k) => (
                <li key={k}><a href={anchorOf[k]}>{APP[k].name}</a></li>
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
