
import React from 'react'
import '../style/index.css'
export default function search({setQuery}) {
  return (
    <div className="search-container">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search for a country..." onChange={(e)=> setQuery(e.target.value.toLowerCase()) } />
        </div>
  )
}
