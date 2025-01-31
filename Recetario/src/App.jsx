import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DetalleReceta } from './paginas/DetalleReceta.jsx'

import { Recetas } from './components/Recetas.jsx'
import { Filters } from './components/Filters.jsx'

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
    <BrowserRouter>
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
          <Routes>
            <Route 
              path='/' 
              element={
                loading ? <p>Cargando...</p> : <Recetas recetas={recetas} />
              } 
            />

            <Route 
              path='/receta/:id' 
              element={
                <DetalleReceta recetas={recetas} />
              } 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
