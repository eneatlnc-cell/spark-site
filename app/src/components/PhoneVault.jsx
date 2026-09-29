import React from 'react'
import { VAULT } from '../data.js'

/* Vault 畫面 — 依真實 App 版面重繪（深色 · 保險箱狀態 · 子身份/錢包） */

/* 底部標籤圖示：子身份 = 三橫線，錢包 = 疊卡 */
const TabIcon = ({ kind }) =>
  kind === 'id' ? (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
      <rect x="2" y="3" width="12" height="1.8" rx="0.9" fill="currentColor" />
      <rect x="2" y="7.1" width="12" height="1.8" rx="0.9" fill="currentColor" />
      <rect x="2" y="11.2" width="12" height="1.8" rx="0.9" fill="currentColor" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
      <rect x="4.6" y="1.6" width="10" height="5.4" rx="1.4" fill="none"
        stroke="currentColor" strokeWidth="1.5" />
      <rect x="1.4" y="6.2" width="13.2" height="8.2" rx="1.6" fill="none"
        stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )

export default function PhoneVault() {
  return (
    <div className="phone" aria-label="Vault 應用截屏">
      <div className="screen screen-dark">
        <div className="p-status p-status-dark">
          <span>14:13</span>
          <span className="p-status-r">
            <i className="p-sig" /><i className="p-wifi" /><i className="p-bat" />
          </span>
        </div>

        <div className="v-head">
          <b>{VAULT.title}</b>
          <span className="v-lang">{VAULT.lang}</span>
        </div>

        <div className="v-body">
          <div className="v-bind">
            <span className="v-app">{VAULT.bind.app}</span>
            <span className="v-label">{VAULT.bind.label}</span>
            <code className="v-fp">{VAULT.bind.fp}</code>
            <span className="v-time">{VAULT.bind.time}</span>
          </div>

          <div className="v-warn">
            <span className="v-warn-ic">⚠</span>
            <p>{VAULT.warn}</p>
          </div>
        </div>

        <div className="v-tabs">
          <span className="on"><TabIcon kind="id" />{VAULT.tabs[0]}</span>
          <span><TabIcon kind="wallet" />{VAULT.tabs[1]}</span>
        </div>
      </div>
    </div>
  )
}
