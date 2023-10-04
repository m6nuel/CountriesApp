import './App.css'
import Aside from './components/Aside'
import Countries from './components/Countries'
import { countriess } from '../src/service/countries'
import { useFilter } from './hooks/useFilter'
import Footer from './components/Footer'
import Header from './components/Header'

function App () {
  const { filterContinents, ordenAlpha } = useFilter()
  const continentsFiltered = filterContinents(countriess)
  const continentsOrdered = ordenAlpha(continentsFiltered)
  return (
    <>
      <Header />
      <Aside />
      <Countries countries={continentsOrdered} />
      <Footer />
    </>
  )
}

export default App
