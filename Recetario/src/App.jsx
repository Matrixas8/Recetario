import './App.css'

import { Recetas } from './components/Recetas.jsx'
import { Filters } from './components/Filters.jsx'
import { Footer } from './components/Footer.jsx'	

import { useSearch } from './hooks/useSearch.js'
import { useRecetas } from './hooks/useRecetas.js'
import { useFilters } from './hooks/useFilters.js'

function App() {

  const { search, updateSearch, error } = useSearch()
  const { filters } = useFilters()
  const { recetas, getListOfRecetas, loading } = useRecetas({ search })

  const handleChange = (event) => {
      const newSearch = event.target.value
      if (newSearch.startsWith(' ')) return
      updateSearch(newSearch)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      getListOfRecetas({ search, filters })
  }
    
  return (
    <div className='page'>
      <header>
        <h1>Recetario</h1>

        <form className='form' onSubmit={handleSubmit}>
            <label>Buscar receta</label>
            <input 
                placeholder='Pasta, Tacos, ...' 
                onChange={handleChange} 
                value={search} 
            />
            <button type='submit'>Buscar</button>
        </form>

        {error && <p style = {{ color : 'red'}} > {error} </p>}

        <Filters />
      </header>

      <main>
        {
          loading 
            ? <p>Cargando...</p>
            : <Recetas recetas = {recetas}/>
        }
      </main>

      <Footer />

    </div>
  )
}

export default App
