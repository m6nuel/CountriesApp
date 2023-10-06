/* eslint-disable react/prop-types */
import { useState, createContext } from 'react'
import { countriess } from '../service/countries'

const list = structuredClone(countriess)
export const FiltersContext = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    listInit: countriess,
    listApp: list,
    continents: 'all',
    alpha: 'all',
    search: []
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}
