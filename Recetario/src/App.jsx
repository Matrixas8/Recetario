import './App.css'

import { Recetas } from './components/Recetas.jsx'
import { Header } from './components/Header.jsx'

import { useRecetas } from './hooks/useRecetas.js'

function App() {
  const recetas = useRecetas()

  return (
    <div className='page'>
      <Header />

      <main>
        <Recetas recetas = {recetas}/>
      </main>
    </div>
  )
}

export default App
