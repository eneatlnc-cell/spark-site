import React from 'react'
import AppPage from './AppPage.jsx'

export default function Engine() {
  return (
    <AppPage
      app="engine"
      title="社交由"
      titleGrad="物理保證"
      lead="Engine 是永遠在線的那一半。它只持有你的公鑰與指紋——從不持有私鑰。每一次身分簽章都跨裝置委派給離線的 Vault；中繼只轉發密文。"
      isEngine
    />
  )
}