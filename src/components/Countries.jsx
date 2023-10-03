/* eslint-disable react/prop-types */
import Card from './Card'
import './Countries.css'
function Countries ({ countries }) {
  return (
    <main className='countries'>
      <ul>
        {
          countries.map(country => (
            <Card key={country.id} country={country}/>
          ))
        }
      </ul>
    </main>
  )
}
export default Countries
