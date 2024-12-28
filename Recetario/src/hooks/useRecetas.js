import { getRecetas } from '../servicios/receta.js'
import { useRef, useState, useCallback} from 'react'

export function useRecetas ({ search }) {
    const [recetas, setRecetas] = useState([])
    const [, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const previousSearch = useRef(search)

    const getListOfRecetas = useCallback(async ({ search, filters }) => {
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newRecetas = await getRecetas({ search, filters })
            setRecetas(newRecetas)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    return { recetas, getListOfRecetas, loading }
}