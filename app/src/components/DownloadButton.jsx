import React from 'react'
import { APP } from '../data.js'

export default function DownloadButton({ app, kind = 'ghost' }) {
  const d = APP[app]
  return (
    <a className={`btn ${kind}`} href={d.url} target="_blank" rel="noopener noreferrer">
      <span className="btn-ic">{'↓'}</span> 下載 {d.name}
    </a>
  )
}