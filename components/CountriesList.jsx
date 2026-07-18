import React from 'react'
import CountryCard from './CountryCard'
import CountriesData from '../CountriesData'
export default function CountriesList({ region,query }) {

  const filterCountries = CountriesData.filter((countries)=>{
    const matchregion = region === ""|| countries.region === region
    const matchSearch = countries.name.toLowerCase().includes(query)
    console.log(matchSearch);
    return matchregion && matchSearch
  })
  
  return (

    <>
      {
        filterCountries.map((countries) => {

          return (
            <CountryCard
              key={countries.id}
              flag={countries.flag}
              name={countries.name}
              capital={countries.capital}
              region={countries.region} population={countries.population}
            />
          )
        })
      }

    </>
  )
}

