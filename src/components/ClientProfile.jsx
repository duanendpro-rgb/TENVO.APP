import Card, { Badge } from './Card.jsx'

export default function ClientProfile() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
      <Card className="md:col-span-1">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime font-display text-2xl font-extrabold">IB</div>
        <h1 className="font-display text-2xl font-extrabold">Inès Bernard</h1>
        <p className="text-sm text-brand-textMuted">Cliente depuis mars 2025</p>
        <p className="mt-4 text-sm"><strong>Objectif :</strong> préparation semi-marathon</p>
      </Card>
      <div className="space-y-6 md:col-span-2">
        <Card title="Programme en cours">
          <ul className="space-y-2">
            <li className="flex justify-between">Semaine 1 — Base aérobie <Badge ok>Fait</Badge></li>
            <li className="flex justify-between">Semaine 2 — Fractionné <Badge ok>Fait</Badge></li>
            <li className="flex justify-between">Semaine 3 — Sortie longue <Badge>À faire</Badge></li>
          </ul>
        </Card>
        <Card title="Notes du coach">
          <p className="text-sm text-brand-textMuted">Bonne progression sur l'endurance. Surveiller la cheville gauche.</p>
        </Card>
      </div>
    </div>
  )
}
