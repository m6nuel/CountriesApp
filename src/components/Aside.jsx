import { useId } from 'react'
import './Aside.css'
function Aside () {
  const filterContinent = useId()
  return (
    <div className="filtros">
      <label htmlFor={filterContinent}>Continente: </label>
      <select name="" id={filterContinent}>
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
