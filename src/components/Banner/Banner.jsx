import React from 'react'
import "./banner.css"
import foto1 from "../Banner/img/foto1.png"
import logo from "../Banner/svg/logo.svg"
function Banner() {
  return (
    <>
      <div className="banner container">
        <div className="ban">
        <img src={foto1} alt="" />
        </div>
        <div className="logo">
            <img src={logo} alt="" />
           <div className="logo1">
           <h3>КРАСНАЯ ТУФЕЛЬКА</h3>
           <p>магазин женской обуви</p>
           </div>
        </div>
        <div className="text">
            <h2>ЖЕНСКАЯ ОБУВЬ С 33 РАЗМЕРА</h2>
        </div>
      </div>
    </>
  )
}

export default Banner
