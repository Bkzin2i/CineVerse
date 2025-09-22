import Card from './Card'

export default function Catalog({items,openModal,toggleFav,favorites}){
  if(items.length===0) return <p className="text-slate-400">Nenhum título encontrado.</p>
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map(item=>(
        <Card key={item.id} item={item} openModal={openModal} toggleFav={toggleFav} isFav={favorites.includes(item.id)} />
      ))}
    </div>
  )
}