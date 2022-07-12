import { useRef } from 'react'

const apiKey = 'ea92314d'

function App () {
  /* Reglas de los hooks
     --se deben de ejecutar en la cabecera (logica) de un componente no dentro de funciones
     --no se pueden cargar en condicionales, ni ciclos */
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  }

  return (
    <section className='container'>
      <h3 className='text-center'>Buscador de Peliculas</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            className='form-control'
            placeholder='Buscar pelicula'
            name='buscador'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
    </section>
  )
}

export default App
