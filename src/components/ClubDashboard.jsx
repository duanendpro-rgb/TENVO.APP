import Card from './Card.jsx'

const COACHES = [
  { name: 'Julien Martin', clients: 24 },
  { name: 'Camille Roux', clients: 19 },
  { name: 'Hugo Petit', clients: 12 },
]

export default function ClubDashboard() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="font-display text-3xl font-extrabold">Espace Club</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {[['Coachs', '3'], ['Adhérents', '55'], ['Taux de présence', '87 %']].map(([label, value]) => (
          <Card key={label}>
            <p className="text-sm text-brand-textMuted">{label}</p>
            <p className="font-display text-3xl font-extrabold">{value}</p>
          </Card>
        ))}
      </div>
      <Card title="Équipe">
        <ul className="divide-y divide-brand-border">
          {COACHES.map((c) => (
            <li key={c.name} className="flex justify-between py-3">
              <span>{c.name}</span>
              <span className="text-brand-textMuted">{c.clients} clients</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
