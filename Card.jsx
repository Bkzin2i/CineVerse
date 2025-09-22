export default function Card({item,openModal,toggleFav,isFav}){
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
      <div className="p-2 flex flex-col gap-1">
        <h3 className="font-semibold text-sm">{item.title}</h3>
        <p className="text-xs text-slate-400">{item.year} • {item.genre}</p>
        <div className="flex gap-2 mt-1">
          <button className="px-2 py-1 bg-slate-700 rounded text-xs" onClick={()=>openModal(item)}>Ver</button>
          <button className="px-2 py-1 bg-yellow-400 text-slate-900 rounded text-xs" onClick={()=>toggleFav(item.id)}>
            {isFav ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  )
}