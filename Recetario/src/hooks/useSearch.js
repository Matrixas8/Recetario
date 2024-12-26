import {useState, useEffect, useRef} from 'react'

export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        
        if (search === '') {
            setError('No se puede buscar una receta vacia')
            return
        }

        if (search.match(/^[0-9]+$/)) {
            setError('No se puede realizar una búsqueda con numeros')
            return
        }

        setError(null)
    }, [search])

    return { search, updateSearch, error }
}