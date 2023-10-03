/* eslint-disable react/prop-types */
import { useState, createContext } from 'react'

export const FiltersContext = createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    continents: 'Europe'
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
