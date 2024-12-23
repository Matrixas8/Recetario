import { getRecetas } from '../servicios/receta.js'
import {useEffect, useState} from 'react'

export function useRecetas () {
    const [recetas, setRecetas] = useState([])

    useEffect(() => {
        const getListOfRecetas = async () => {
            try {
                const data = await getRecetas(10)
                setRecetas(data)
            } catch (error) {
                console.error('Error al obtener las recetas')
            }
        }

        getListOfRecetas()
    }, [])

    return recetas
}