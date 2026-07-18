

import React, { useState } from 'react'

export default function Header() {
  const [darkTheme , setDarkTheme ] = useState(false)
const changeBgc = ()=>{
    
    if(!darkTheme){
      document.querySelector("body").style.background = "#0f1820"
      document.querySelector(".header-container").style.background = "#192a38"
      document.querySelector(".search-container").style.background = "#192a38"
      document.querySelector(".fa-solid").style.color="white"
      document.querySelector("input").style.color ="white"
      document.querySelectorAll(".country-card").forEach((card)=>{
        card.style.background = "#192a38"
        card.style.color = "white"
      })
      document.body.style.color = "white"
    }
   else{
     document.querySelector("body").style.background = "#f6f6f6"
      document.querySelector(".header-container").style.background = "#fdfeff"
      document.querySelector(".search-container").style.background = "#fdfeff"
     document.querySelectorAll(".country-card").forEach((card)=>{
        card.style.background = "#f6f7f8f"
        card.style.color = "black"
      })
      document.body.style.color = "black"
   }
   setDarkTheme(!darkTheme)
  }
  return (
    <>
      <header className='header-container'>
        <div className="header-content">
          <h2 className='title'>
            <a href="/">Where in the world ?</a>
            </h2>
          <p className='theme-changer'>
            <i onClick={changeBgc} className="fa-regular fa-moon" />
            &nbsp;&nbsp;Dark Mode
          </p>
        </div>
      </header>
    </>
  )
}
