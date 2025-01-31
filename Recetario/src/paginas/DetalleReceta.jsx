import { useParams, Link } from 'react-router-dom';

export function DetalleReceta ({ recetas }) {
  const { id } = useParams();
  const receta = recetas.find(r => r.id === parseInt(id));

  if (!receta) return <p>Receta no encontrada</p>;

  return (
    <div>
      <h2>{receta.nombre}</h2>
      
      <img src={receta.imagen} alt={receta.nombre} />
      <p>{receta.descripcion}</p>
      
      <Link to='/'>Volver</Link>
    </div>
  );
}
