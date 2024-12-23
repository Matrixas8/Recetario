import { Opciones } from './Opciones.jsx'

export function Header () {
    return(
        <header>
            <h1>Recetario</h1>

            <form className='form'>
                <label>Buscar receta</label>
                <input placeholder='Pasta, Tacos, ...' />
                <button type='submit'>Buscar</button>
            </form>

            <Opciones
                label="Categoría"
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
            />

            <Opciones
            label="Tiempo de preparación"
                options={[
                    { value: 'all', label: 'Ninguno' },
                    { value: '15', label: 'Menos de 15 minutos' },
                    { value: '30', label: 'Menos de 30 minutos' },
                    { value: '45', label: 'Menos de 45 minutos' },
                    { value: '60', label: 'Menos de 60 minutos' },

                ]}
            />

            <Opciones
                label="Tipo de dieta"
                options={[
                    { value: 'all', label: 'Ninguna' },
                    { value: 'vegana', label: 'Vegana' },
                    { value: 'vegetariana', label: 'Vegetariana' },
                    { value: 'Sin gluten', label: 'Sin gluten' },
                    { value: 'Lacto-vegetariana', label: 'Lacto-vegetariana' },
                    { value: 'Ovo-vegetariana', label: 'Ovo-vegetariana' },
                    { value: 'Pescetariana', label: 'Pescetariana' },
                    { value: 'Paleo', label: 'Paleo' },
                    { value: 'Primal', label: 'Primal' },
                    { value: 'Whole30', label: 'Whole30' },
                ]}
            />
        </header>
    )    
}