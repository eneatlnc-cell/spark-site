import React from 'react'
import AppPage from './AppPage.jsx'

export default function Vault() {
  return (
    <AppPage
      app="vault"
      title="金鑰留在"
      titleGrad="網路上不了的地方"
      lead="Vault 是這個組合中永遠離線的那一半。私鑰封存在 Keystore TEE，完全沒有 INTERNET 權限；只有當另一台裝置請求時，它才會在空間內透過已簽署的 IPC 完成簽名——絕不透過公網。"
    />
  )
}