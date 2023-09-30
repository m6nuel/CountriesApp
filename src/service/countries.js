import countries from '../mocks/countries.json'

export const countriess = countries.map(country => ({
  id: country.cca3,
  nombre: country.name.common,
  bandera: country.flags[1],
  continente: country.continents,
  subRegion: country.subregion,
  region: country.region
}))

// export const countriesArr = () => {
//   return (
//     countries?.map(country => ({
//       id: country.cca3,
//       nombre: country.name[0],
//       bandera: country.flags[0],
//       continente: country.continents,
//       subRegion: country.subregion,
//       region: country.region
//     }))
//   )
// }
