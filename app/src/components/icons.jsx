import React from 'react'

/* 全站統一 SVG 圖標（替換文字符號，告別土味） */
const S = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' }

export const IcCheck = (p) => (
  <svg {...p} width="13" height="13" viewBox="0 0 14 14" aria-hidden="true">
    <path {...S} strokeWidth="2.4" d="M2 7.5 L5.5 11 L12 3.5" />
  </svg>
)

export const IcArrowUpRight = (p) => (
  <svg {...p} width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
    <path {...S} strokeWidth="2" d="M4.5 11.5 L11.5 4.5 M5.8 4.5 H11.5 V10.2" />
  </svg>
)

export const IcChevronLeft = (p) => (
  <svg {...p} className="p-back" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <path {...S} strokeWidth="2.4" d="M12.5 4 L6 10 L12.5 16" />
  </svg>
)

export const IcDoubleCheck = (p) => (
  <svg {...p} width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"
    style={{ verticalAlign: '-2px', marginLeft: 4 }}>
    <path {...S} strokeWidth="2" d="M1.5 8.5 L4.5 11.5 L9 5 M7 11.2 L13.5 3.5" />
  </svg>
)

/* Spark 品牌標記（白色菱形） */
export const IcSpark = (p) => (
  <svg {...p} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M6 0.6 L11.4 6 L6 11.4 L0.6 6 Z" fill="currentColor" />
  </svg>
)
