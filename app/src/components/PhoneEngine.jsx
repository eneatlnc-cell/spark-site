import React from 'react'
import { CHAT } from '../data.js'

/* Engine 聊天畫面 — 純 CSS 模擬截屏 */
export default function PhoneEngine() {
  return (
    <div className="phone" aria-label="Engine 應用截屏">
      <div className="screen screen-light">
        <div className="p-status">
          <span>9:41</span>
          <span className="p-status-r">
            <i className="p-sig" /><i className="p-wifi" /><i className="p-bat" />
          </span>
        </div>

        <div className="chat-head">
          <span className="p-back">‹</span>
          <span className="p-ava e">⛵</span>
          <span className="p-title">
            <b>{CHAT.title}</b>
            <small>🔒 {CHAT.sub}</small>
          </span>
        </div>

        <div className="chat-body">
          {CHAT.msgs.map((m, i) =>
            m.sys ? (
              <div className="chat-sys" key={i}>{m.sys}</div>
            ) : (
              <div className={`msg ${m.from}`} key={i}>
                {m.who && <small>{m.who}</small>}
                <span>{m.text}</span>
              </div>
            )
          )}
          <div className="chat-day">今天 14:02</div>
        </div>

        <div className="chat-input">
          <span className="p-ic-plus">＋</span>
          <span className="p-field">訊息</span>
          <span className="p-send">↑</span>
        </div>
      </div>
    </div>
  )
}
