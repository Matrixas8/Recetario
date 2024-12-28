import { useId } from 'react'
import { Opciones } from "./Opciones"
import { useFilters } from '../hooks/useFilters.js'

export function Filters() {
    const { filters, setFilters } = useFilters()
  
    const categoryId = useId()
    const dietId = useId()

    const handleChangecategory = (event) => {
        setFilters(prevState => ({ 
            ...prevState, 
            category: event.target.value 
        }))
    }

    const handleChangediet = (event) => {
        setFilters(prevState => ({ 
            ...prevState, 
            diet: event.target.value 
        }))
    }

    
    return (
        <>
            <Opciones
                label="Categoría"
                id={categoryId}
                value={filters.category}

                options={[
                    { value: 'all', label: 'Todas' },
                    { value: 'italian', label: 'Italiana' },
                    { value: 'mexican', label: 'Mexicana' },
                    { value: 'chinese', label: 'China' },
                    { value: 'japanese', label: 'Japonesa' },
                    { value: 'spanish', label: 'Española' },
                    { value: 'french', label: 'Francesa' },
                    { value: 'american', label: 'Americana' },
                    { value: 'indian', label: 'India' },
                    { value: 'thai', label: 'Tailandesa' },
                    { value: 'greek', label: 'Griega' },
                    { value: 'british', label: 'Inglesa' },
                    { value: 'moroccan', label: 'Marroquí' },
                    { value: 'korean', label: 'Coreana' },
                    { value: 'vietnamese', label: 'Vietnamita' },
                    { value: 'irish', label: 'Irlandesa' },
                    { value: 'jamaican', label: 'Jamaicana' },
                    { value: 'russian', label: 'Rusa' },
                    { value: 'brazilian', label: 'Brasileña' },
                    { value: 'portuguese', label: 'Portuguesa' },
                    { value: 'african', label: 'Africana' },
                    { value: 'nordic', label: 'Nórdica' },
                    { value: 'caribbean', label: 'Caribeña' },
                    { value: 'middle eastern', label: 'Oriente Medio' },
                ]}

                onChange={handleChangecategory}
            />

            <Opciones
                label="Tipo de dieta"
                id={dietId}
                value={filters.diet}

                options={[
                    { value: 'all', label: 'Ninguna' },
                    { value: 'vegan', label: 'Vegana' },
                    { value: 'vegetarian', label: 'Vegetariana' },
                    { value: 'gluten Free', label: 'Sin gluten' },
                    { value: 'lacto-Vegetarian', label: 'Lacto-vegetariana' },
                    { value: 'ovo-Vegetarian', label: 'Ovo-vegetariana' },
                    { value: 'pescetarian', label: 'Pescetariana' },
                    { value: 'paleo', label: 'Paleo' },
                    { value: 'primal', label: 'Primal' },
                    { value: 'whole30', label: 'Whole30' },
                    { value: 'ketogenic', label: 'Ketogenic' },
                ]}
                
                onChange={handleChangediet}
            />
        </>
    )
}