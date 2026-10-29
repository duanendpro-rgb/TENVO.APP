import { useState } from 'react'
import ProDashboard from './components/ProDashboard.jsx'
import ClientProfile from './components/ClientProfile.jsx'
import MobileClientSpace from './components/MobileClientSpace.jsx'
import ClubDashboard from './components/ClubDashboard.jsx'

const SCREENS = [
  { id: 'pro', label: 'Coach', Component: ProDashboard },
  { id: 'client', label: 'Fiche client', Component: ClientProfile },
  { id: 'mobile', label: 'Espace particulier', Component: MobileClientSpace },
  { id: 'club', label: 'Club', Component: ClubDashboard },
]

export default function App() {
  const [active, setActive] = useState('pro')
  const { Component } = SCREENS.find((s) => s.id === active)

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <nav className="sticky top-0 z-10 flex flex-wrap items-center gap-2 border-b border-brand-border bg-white/80 px-6 py-3 backdrop-blur">
        <span className="mr-4 font-display text-xl font-extrabold">Tenvo</span>
        {SCREENS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === s.id
                ? 'bg-brand-dark text-brand-lime'
                : 'text-brand-textMuted hover:bg-brand-bg'
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
      <main className="p-6">
        <Component />
      </main>
    </div>
  )
}
