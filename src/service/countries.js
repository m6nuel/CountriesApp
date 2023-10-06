import countries from '../mocks/countries.json'

export const countriess = countries.map(country => ({
  id: country.cca3,
  nombre: country.name.common,
  bandera: country.flags[1],
  continente: country.continents,
  subRegion: country.subregion,
  region: country.region
}))

export const getCountriesByName = async ({ search }) => {
  if (search === '') return

  try {
    const resp = await fetch(`https://restcountries.com/v3/name/${search}`)
    const countries = await resp.json()
    return countries?.map(country => ({
      id: country.cca3,
      nombre: country.name.common,
      bandera: country.flags[1],
      continente: country.continents,
      subRegion: country.subregion,
      region: country.region
    }))
  } catch (error) {
    throw new Error(error)
  }
}
