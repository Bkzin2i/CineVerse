export default function Modal({item,close,toggleFav,isFav}){
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded max-w-2xl w-full relative">
        <button onClick={close} className="absolute top-2 right-2">✕</button>
        <div className="grid md:grid-cols-2 gap-4">
          <img src={item.image} alt={item.title} className="rounded" />
          <div>
            <h2 className="text-xl font-bold">{item.title} <span className="text-slate-400">({item.year})</span></h2>
            <p className="text-slate-400 mb-2">{item.genre}</p>
            <p>{item.description}</p>
            <button className="mt-3 px-3 py-1 bg-yellow-400 text-slate-900 rounded" onClick={()=>toggleFav(item.id)}>
              {isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}