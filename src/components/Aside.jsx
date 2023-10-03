import { useId } from 'react'
import './Aside.css'
import { useFilter } from '../hooks/useFilter'
function Aside () {
  const filterContinent = useId()
  const { setFilters } = useFilter()

  const handleContinent = (event) => {
    setFilters(prevState => ({
      ...prevState,
      continents: event.target.value
    }))
  }

  return (
    <div className="filtros">
      <label htmlFor={filterContinent}>Continente: </label>
      <select name="" id={filterContinent} onChange={handleContinent}>
        <option value="all">Todos</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  )
}
export default Aside
