export default function TestimonialCard({ quote, author }) {
  return (
    <div className="card p-6">
      <p className="italic">“{quote}”</p>
      <p className="mt-2 text-sm text-zinc-600">— {author}</p>
    </div>
  )
}
