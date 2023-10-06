import './App.css'
import Aside from './components/Aside'
import Countries from './components/Countries'
import { useFilter } from './hooks/useFilter'
import Footer from './components/Footer'
import Header from './components/Header'

function App () {
  const { filters, filterContinents, ordenAlpha } = useFilter()
  const continentsFiltered = filterContinents(filters.listApp)
  const continentsOrdered = ordenAlpha(continentsFiltered)

  const cfiltSearch = filterContinents(filters.search)
  const cfilOrdered = ordenAlpha(cfiltSearch)
  const hasSearch = filters.search.length > 0

  return (
    <>
      <Header />
      <Aside />
      {
        hasSearch
          ? <Countries countries={cfilOrdered} />
          : <Countries countries={continentsOrdered} />
      }
      <Footer />
    </>
  )
}

export default App
