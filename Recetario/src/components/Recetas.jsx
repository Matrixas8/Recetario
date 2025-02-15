function ListOfRecetas({ recetas }) {
  return (
    <ul className='recetas'>
      {
        recetas.map( receta => (
          <li className='receta' key={receta.id}>
            <img src={receta.imagen} alt={receta.nombre} />
            <h3>{receta.nombre}</h3>
          </li>
        ))
      }
    </ul>
  )
}

function NoRecetasResults () {
  return (
    <p> No se encontraron recetas </p>
  )
}

export function Recetas ({ recetas }) {
  const hasRecetas = recetas?.length > 0

  return (
      hasRecetas
        ? <ListOfRecetas recetas={recetas} />
        : <NoRecetasResults />
  )
}