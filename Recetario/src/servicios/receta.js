const API_KEY = 'cbf63a3de3cc4a7592f5ab4b59511bca'

export const getRecetas = async (numero) => {
    try {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=${numero}`
        )
        const data = await response.json()
        
        return data.results.map( receta => ({   
            id: receta.id,
            nombre: receta.title,
            imagen: receta.image,
        }))   
    } catch (error) {
        throw new Error('Error al obtener las recetas')
    }
}