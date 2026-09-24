import React from 'react'
import { APP } from '../data.js'

export default function AppIcon({ app, size }) {
  return <img className={`app-ic ${size || ''}`} src={APP[app].icon} alt={`${APP[app].name} 圖示`} />
}