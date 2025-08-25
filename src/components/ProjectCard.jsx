export default function ProjectCard({ title, type, result, desc, img, url, stack }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="card group overflow-hidden flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="badge">{type}</span>
          <span className="text-xs text-zinc-500">{result}</span>
        </div>
        <h3 className="mt-3 font-semibold text-lg">{title}</h3>
        <p className="text-sm text-zinc-600 mt-1">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {stack?.map((t) => (<span key={t} className="badge border border-zinc-200 bg-white">{t}</span>))}
        </div>
      </div>
    </a>
  )
}
