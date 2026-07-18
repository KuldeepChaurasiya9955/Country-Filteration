import Header from "./components/Header"
import './style/index.css'
import Searchbar from "./components/Searchbar"
import Selectmenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import { useState } from "react"



const App = () => {
   const [region , setRegion] = useState("")
   const [query , setQuery] = useState('')
  return (
    <>
      <Header />
     <main>
       <div className="search-filter-container">
        <Searchbar setQuery = {setQuery} />
        <Selectmenu setRegion={setRegion} />
      </div>
    <div className="countriesList">
        <CountriesList region = {region} query = {query} />
    </div>
     </main>

    </>
  )
}
export default App