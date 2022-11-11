import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import { App } from './App'

const container = document.getElementById('root');
const root = createRoot(container);

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>Mariana Anastasia Gianneiou</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Made by Broccoli 🥦</div>
    </div>
  )
}

root.render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
  </>,
  
)
