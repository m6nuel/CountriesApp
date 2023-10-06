import { useId, useContext } from 'react'
import './Aside.css'
import { useFilter } from '../hooks/useFilter'
import { FiltersContext } from '../context/filters'

function Aside () {
  const filterContinent = useId()
  const ordenAlpha = useId()
  const { setFilters } = useFilter()
  const { filters } = useContext(FiltersContext)

  const handleContinent = (event) => {
    setFilters(prevState => ({
      ...prevState,
      continents: event.target.value
    }))
  }

  const handleOrdenAlpha = (e) => {
    setFilters(prevState => ({
      ...prevState,
      alpha: e.target.value
    }))
  }

  return (
    <div className="filtros">
      <div>
        <label htmlFor={filterContinent}>Continente: </label>
        <select name="" id={filterContinent} onChange={handleContinent} value={filters.continents}>
          <option value="all">Todos</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
      </div>

      <div>
        <label htmlFor={ordenAlpha}>Orden Alfabetico: </label>
        <select name="" id={ordenAlpha} onChange={handleOrdenAlpha}>
          <option value="all">Todo</option>
          <option value="asc">Orden Ascendente</option>
          <option value="des">Orden Descendente</option>
        </select>
      </div>
    </div>
  )
}
export default Aside
