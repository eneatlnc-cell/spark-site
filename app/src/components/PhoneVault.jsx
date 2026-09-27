import React from 'react'
import { VAULT_KEYS, SIGN_REQ } from '../data.js'

/* Vault 金鑰畫面 — 純 CSS 模擬截屏（深色） */
export default function PhoneVault() {
  return (
    <div className="phone" aria-label="Vault 應用截屏">
      <div className="screen screen-dark">
        <div className="p-status p-status-dark">
          <span>9:41</span>
          <span className="p-status-r">
            <i className="p-sig" /><i className="p-wifi" /><i className="p-bat" />
          </span>
        </div>

        <div className="vault-head">
          <span className="p-ava v">🛡</span>
          <span className="p-title">
            <b>Vault</b>
            <small>離線金鑰庫</small>
          </span>
          <span className="vault-badge">● 離線</span>
        </div>

        <div className="vault-body">
          <div className="vault-hint">封存於 Keystore TEE · 無 INTERNET 權限</div>

          {VAULT_KEYS.map((k) => (
            <div className="key-card" key={k.fp}>
              <span className="key-ic">🔑</span>
              <span className="key-meta">
                <b>{k.name}</b>
                <code>{k.fp}</code>
              </span>
              <span className="key-note">{k.note}</span>
            </div>
          ))}

          <div className="sign-card">
            <small>簽名請求 · {SIGN_REQ.when}</small>
            <b>來自 {SIGN_REQ.from}</b>
            <span className="sign-what">{SIGN_REQ.what}</span>
            <div className="sign-actions">
              <span className="sign-ok">核准</span>
              <span className="sign-no">拒絕</span>
            </div>
          </div>
        </div>

        <div className="vault-tabs">
          <span className="on">金鑰</span>
          <span>記錄</span>
          <span>設定</span>
        </div>
      </div>
    </div>
  )
}
