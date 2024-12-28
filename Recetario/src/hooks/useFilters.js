import { useContext } from "react"
import { FiltersContext } from "../context/filters.jsx"

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterRecetas = (recetas) => {
        return recetas.filter(receta => {
            return (
                (filters.category === 'all' || receta.category === filters.category) &&
                (filters.diet === 'all' || receta.diet === filters.diet)
            )
        })
    }

    return { filters, setFilters, filterRecetas }
}