

export default function CountryCard({flag , name , region, capital, population}) { 
  return (
    <>
   <div className="country-card">
    <img src={flag} />
   <div className="card-text">
    <h3 className="card-title">{name}</h3>
    <p><b>Capital: </b>{capital}</p>
    <p><b>Population: </b>{population}</p>
    <p><b>Region: </b>{region}</p>
   </div>

   </div>
    </>
  )
}
