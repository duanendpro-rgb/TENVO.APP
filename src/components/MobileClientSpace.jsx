import Card, { Badge } from './Card.jsx'

export default function MobileClientSpace() {
  return (
    <div className="mx-auto h-[844px] w-[390px] overflow-y-auto rounded-[2.5rem] border-8 border-brand-dark bg-brand-bg p-5 shadow-xl">
      <p className="text-sm text-brand-textMuted">Salut Inès,</p>
      <h1 className="mb-5 font-display text-2xl font-extrabold">Ta séance du jour</h1>
      <div className="mb-5 rounded-2xl bg-brand-dark p-5 text-white">
        <p className="text-sm text-brand-lime">Aujourd'hui · 09:00</p>
        <p className="font-display text-xl font-bold">Sortie longue — 12 km</p>
        <button className="mt-4 w-full rounded-full bg-brand-lime py-2 font-semibold text-brand-dark">Commencer</button>
      </div>
      <Card title="Cette semaine">
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">Lundi — Renforcement <Badge ok>Fait</Badge></li>
          <li className="flex justify-between">Mercredi — Fractionné <Badge ok>Fait</Badge></li>
          <li className="flex justify-between">Samedi — Sortie longue <Badge>À faire</Badge></li>
        </ul>
      </Card>
    </div>
  )
}
