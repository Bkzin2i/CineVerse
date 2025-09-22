import ThemeToggle from './ThemeToggle'

export default function Header({filter,setFilter,search,setSearch,favsCount,setShowFavs}){
  return (
    <header className="sticky top-0 bg-slate-900/70 backdrop-blur z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-lg text-yellow-400">🎬 CineVerse</h1>
        <div className="flex gap-2 items-center">
          <input className="px-2 py-1 rounded bg-slate-800" placeholder="Buscar..." value={search} onChange={e=>setSearch(e.target.value)} />
          <select className="px-2 py-1 rounded bg-slate-800" value={filter} onChange={e=>setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="filme">Filmes</option>
            <option value="serie">Séries</option>
            <option value="anime">Animes</option>
          </select>
          <button onClick={()=>setShowFavs(true)} className="bg-yellow-400 text-slate-900 px-3 py-1 rounded">❤ {favsCount}</button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}