import Card, { Badge } from './Card.jsx'

const SESSIONS = [
  { time: '09:00', client: 'Inès Bernard', type: 'Renforcement', done: true },
  { time: '11:30', client: 'Marc Lefèvre', type: 'Mobilité', done: true },
  { time: '17:00', client: 'Sarah Dubois', type: 'Cardio', done: false },
]

export default function ProDashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="font-display text-3xl font-extrabold">Bonjour Coach 👋</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {[['Clients actifs', '24'], ['Séances cette semaine', '18'], ['Paiements en attente', '3']].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-brand-textMuted">{label}</p>
            <p className="font-display text-3xl font-extrabold">{value}</p>
          </Card>
        ))}
      </div>
      <Card title="Séances du jour">
        <ul className="divide-y divide-brand-border">
          {SESSIONS.map((s) => (
            <li key={s.time} className="flex items-center justify-between py-3">
              <span className="w-16 font-semibold">{s.time}</span>
              <span className="flex-1">{s.client} — <span className="text-brand-textMuted">{s.type}</span></span>
              <Badge ok={s.done}>{s.done ? 'Terminée' : 'À venir'}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
