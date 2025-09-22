import Card from './Card'

export default function Favorites({items,close,openModal,toggleFav}){
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-slate-900 p-6 rounded max-w-4xl w-full relative">
        <button onClick={close} className="absolute top-2 right-2">✕</button>
        <h2 className="text-lg font-bold mb-4">Seus Favoritos</h2>
        {items.length===0 ? <p className="text-slate-400">Você ainda não adicionou favoritos.</p> :
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map(item=>(
            <Card key={item.id} item={item} openModal={openModal} toggleFav={toggleFav} isFav={true} />
          ))}
        </div>}
      </div>
    </div>
  )
}