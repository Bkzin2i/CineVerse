import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [dark,setDark] = useState(true)

  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[dark])

  return (
    <button onClick={()=>setDark(!dark)} className="px-2 py-1 rounded bg-slate-700">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}