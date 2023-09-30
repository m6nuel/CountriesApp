import { countriess } from '../service/countries'
import Card from './Card'
// import Card from './Card'
import './Countries.css'
function Countries () {
  return (
    <main className='countries'>
      <ul>
        {
          countriess.map(country => (
            <Card key={country.id} country={country}/>
          ))
        }
      </ul>
    </main>
  )
}
export default Countries
