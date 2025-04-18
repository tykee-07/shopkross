import React from 'react'
import "./footer.css"
import logo1 from "../../assets/logo.svg"
function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="logo1">
          <img src={logo1} alt="" />
          <div className="title">
            <h3>КРАСНАЯ ТУФЕЛЬКА</h3>
            <p>магазин женской обуви</p>
          </div>
        </div>
          <hr />
          <div className="info">
              <h4>Общая информация</h4>
            <div>
              <p>Главная</p>
              <p>Новинки</p>
              <p>Распродажа</p>
              <p>Оплата и доставка</p>
              <p>Обмен и возврат</p>
              <p>Магазины</p>
              <p>О нас</p>
              <p>Полезное</p>
              <p>Контакты</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
