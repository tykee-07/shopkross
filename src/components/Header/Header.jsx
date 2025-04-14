import React from 'react'
import "./header.css"
import logo from "../../assets/logo.svg"
import lin from "../../assets/lin.svg"
import search from "../../assets/search.svg"
import insta from "../../assets/insta.svg"
import teleg from "../../assets/teleg.svg"
import whats from "../../assets/whats.svg"
import akk from "../../assets/akk.svg"
import like from "../../assets/like.svg"
import backet from "../../assets/backet.svg"
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    <div className='header container'>
      <div className="header-left">
        <img src={logo} alt="" />
        <div className="header-text">
        <h3>КРАСНАЯ ТУФЕЛЬКА</h3>
        <p>магазин женской обуви</p>
        </div>
        <div className="katalo">
          <img src={lin} alt="" />
          <p>Каталог обуви</p>
        </div>
      </div>
      <div className="header-cent">
        <input type="text" placeholder='Введите артикул или название товара...'/>
        <div className="search">
          <img src={search} alt="" />
        </div>
      </div>
      <div className="header-right">
        <div className="net">
            <img src={insta} alt="" />
            <div className="teleg">
              <img src={teleg} alt="" />
            </div>
            <div className="whats">
              <img src={whats} alt="" />
            </div>
        </div>
        <div className="net2">
          <div className="conect">
            <img src={akk} alt="" />
          </div>
          <div className="conect">
            <img src={like} alt="" />
          </div>
          <div className="conect">
            <img src={backet} alt="" />
          </div>
        </div>
      </div>
    </div>
      {/* -----------------------------header-down */}
      <hr className='container' />
    <div className="down container">
     <ul>
        <Link>Новинки</Link>
        <Link>Распродажа</Link>
        <Link>Оплата и доставка</Link>
        <Link>Обмен и возврат</Link>
        <Link>Магазины</Link>
        <Link>О нас</Link>
        <Link>Полезное</Link>
        <Link>Контакты</Link>
      </ul>
    </div>
    </>
  )
}

export default Header
