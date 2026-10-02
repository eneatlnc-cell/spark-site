import React from 'react'
import { CHAT } from '../data.js'
import { IcChevronLeft, IcDoubleCheck } from './icons.jsx'

/* Engine 聊天畫面 — 依真實 App 版面重繪（淡紫背景 · 藍漸層氣泡 · 密封訊息） */
export default function PhoneEngine() {
  return (
    <div className="phone" aria-label="Engine 應用截屏">
      <div className="screen screen-lav">
        <div className="p-status">
          <span>14:08</span>
          <span className="p-status-r">
            <i className="p-sig" /><i className="p-wifi" /><i className="p-bat" />
          </span>
        </div>

        <div className="chat-head">
          <IcChevronLeft />
          <span className="p-title"><b>{CHAT.title}</b></span>
        </div>

        <div className="relay-row"><i className="relay-dot" />{CHAT.relay}</div>

        <div className="chat-body">
          {CHAT.msgs.map((m, i) =>
            m.react ? (
              <div className="react-pill" key={i}>{m.react}</div>
            ) : (
              <div className={`msg ${m.from}`} key={i}>
                {m.sealed ? (
                  <>
                    <span className="msg-seal">🔒 已密封 · {m.price}</span>
                    <span className="msg-hint">{m.hint}</span>
                  </>
                ) : m.unlocked ? (
                  <>
                    <span className="msg-seal open">🔓 已解鎖 · {m.price}</span>
                    <span>{m.text}</span>
                  </>
                ) : (
                  <span>{m.text}</span>
                )}
                <small className="msg-meta">
                  {m.time}{m.from === 'me' && <IcDoubleCheck />}
                </small>
              </div>
            )
          )}
        </div>

        <div className="chat-input">
          <span className="p-emoji">😊</span>
          <span className="p-field">輸入訊息…</span>
          <span className="p-lock">🔒</span>
        </div>
      </div>
    </div>
  )
}
