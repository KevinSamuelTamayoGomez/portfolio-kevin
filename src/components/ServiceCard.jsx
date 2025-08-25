export default function ServiceCard({ title, desc, tags, price }) {
  return (
    <div className="card p-6 h-full">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-zinc-600 mt-1">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags?.map((t) => (<span key={t} className="badge">{t}</span>))}
      </div>
      <p className="text-sm mt-4"><span className="text-zinc-500">Precio:</span> {price}</p>
    </div>
  )
}
