import { useState, useEffect } from 'react'
import Header from './components/Header'
import Catalog from './components/Catalog'
import Modal from './components/Modal'
import Favorites from './components/Favorites'

function App() {
  const [catalog, setCatalog] = useState([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [modalItem, setModalItem] = useState(null)
  const [favorites, setFavorites] = useState(()=>JSON.parse(localStorage.getItem('favs')||'[]'))
  const [showFavs, setShowFavs] = useState(false)

  useEffect(()=>{
    fetch('/data.json')
      .then(r=>r.json())
      .then(data=>setCatalog(data))
  },[])

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(favorites))
  },[favorites])

  const toggleFav = (id)=>{
    setFavorites(prev=> prev.includes(id) ? prev.filter(f=>f!==id) : [...prev,id])
  }

  const filtered = catalog.filter(item=>{
    if(filter!=='all' && item.type!==filter) return false
    if(search && !item.title.toLowerCase().includes(search.toLowerCase())) return false
    if(showFavs && !favorites.includes(item.id)) return false
    return true
  })

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 min-h-screen text-slate-100">
      <Header filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} favsCount={favorites.length} setShowFavs={setShowFavs}/>
      <main className="container mx-auto p-4">
        <Catalog items={filtered} openModal={setModalItem} toggleFav={toggleFav} favorites={favorites}/>
      </main>
      {modalItem && <Modal item={modalItem} close={()=>setModalItem(null)} toggleFav={toggleFav} isFav={favorites.includes(modalItem.id)} />}
      {showFavs && <Favorites items={catalog.filter(i=>favorites.includes(i.id))} close={()=>setShowFavs(false)} openModal={setModalItem} toggleFav={toggleFav}/>}    
    </div>
  )
}

export default App