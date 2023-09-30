/* eslint-disable react/prop-types */
function Card ({ country }) {
  return (
    <li>
      {
        country.bandera
          ? <img src={country?.bandera} alt={country.nombre} />
          : <img src='../mocks/No-Image-Found.png' />
      }
      <h3>{country.nombre}</h3>
      <span>{country.region}</span>
    </li>
  )
}
export default Card
