const API_KEY = 'cbf63a3de3cc4a7592f5ab4b59511bca'

export const getRecetas = async ({search}) => {
    try {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${search}`
        )
        const data = await response.json()

        const recetas = data.results
        
        return recetas?.map( receta => ({   
            id: receta.id,
            nombre: receta.title,
            imagen: receta.image,
        }))   
    } catch (error) {
        throw new Error('Error al obtener las recetas')
    }
}