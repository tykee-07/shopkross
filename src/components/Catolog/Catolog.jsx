import React from 'react'
import "./catolog.css"
import card1 from "../Catolog/svg/card1.svg"
import card2 from "../Catolog/svg/card2.svg"
import card3 from "../Catolog/svg/card3.svg"
import card4 from "../Catolog/svg/card4.svg"
import card5 from "../Catolog/svg/card5.svg"
import card6 from "../Catolog/svg/card6.svg"
import pro1 from "../Catolog/img/product1.png"
import pro2 from "../Catolog/img/pro2.png"
import pro3 from "../Catolog/img/pro3.png"
import pro4 from "../Catolog/img/pro4.png"
import pro5 from "../Catolog/img/pro5.png"

function Catolog() {
  return (
    <>
      <div className="catolog">
        <div className="up">

            {/* 1 */}
            <div className="card">
                <img src={card1} alt="" />
                <p>Женская обувь 
                с 33 размера</p>
            </div>

            {/* 2 */}
            <div className="card">
                <div className="das">
                <img src={card2} alt="" />
                <div className='das2'>
                <img src={card2} alt="" />
                <img src={card2} alt="" />
                </div>
                </div>
                <p>Безупречное фабричное качество обуви</p>
            </div>

            {/* 3 */}
            <div className="card">
                <img src={card3} alt="" />
                <p>Низкие цены, беспроцентная рассрочка, скидки и акции</p>
            </div>

                {/* 4 */}
                <div className="card">
                <img src={card4} alt="" />
                <p>Наличие сертификатов качества на весь товар</p>
            </div>

            {/* 5 */}
            <div className="card">
                <img src={card5} alt="" />
                <p>Быстрая доставка во все города России</p>
            </div>

            {/* 6 */}
            <div className="card">
                <img src={card6} alt="" />
                <p>Удобный простой возврат 
                и гарантия</p>
            </div>
        </div>


        <div className="time">
{/* 1 */}
<hr />
          <div className="weather">
            <h3>Зима</h3>
            <img className='pro1' src={pro1} alt="" />
            <div className="info">
            <div className="weather-left">
                <li>Ботфорты</li>
                <li>Сапоги</li>
                <li>Сапоги-трубы</li>
                <li>Полусапоги</li>
                <li>Ботинки</li>
            </div>
            <div className="weather-right">
                <li>Ботильоны</li>
                <li>Челси</li>
                <li>Дутики</li>
                <li>Угги</li>
            </div>
            </div>
          </div>
        


{/* 2 */}
<hr />

      <div className="weather">
            <h3>Демисезоная</h3>
            <img className='pro2' src={pro2} alt="" />
            <div className="info">
            <div className="weather-left">
                <li>Ботфорты</li>
                <li>Сапоги</li>
                <li>Сапоги-трубы</li>
                <li>Полусапоги</li>
            </div>
            <div className="weather-right">
                <li>Ботинки</li>
                <li>Ботильоны</li>
                <li>Челси</li>
            </div>
            </div>
          </div>
    {/* 3 */}
<hr />

    <div className="weather">
            <h3>Туфли</h3>
            <img className='pro3' src={pro3} alt="" />
            <div className="info">
            <div className="weather-left">
                <li>Туфли</li>
                <li>Туфли-лодочки</li>
                <li>Туфли МериДжейн</li>
                <li>Туфли открытые</li>
                <li>Туфли закрытые</li>
            </div>
            <div className="weather-right">
                <li>Оксфорды</li>
                <li>Дерби</li>
                <li>Броги</li>
                <li>Монки</li>
                <li>Лоферы</li>
            </div>
            </div>
          </div>
        {/* 4 */}
<hr />

        <div className="weather">
            <h3>Лето</h3>
            <img className='pro4' src={pro4} alt="" />
            <div className="info">
            <div className="weather-left">
                <li>Босоножки</li>
                <li>Сабо-Мюли</li>
                <li>Слиперы</li>
                <li>Сандалии</li>
            </div>
            <div className="weather-right">
                <li>Балетки</li>
                <li>Мокасины</li>
                <li>Летние ботильоны</li>
            </div>
            </div>
          </div>


          {/* 5 */}
          <hr />

          <div className="weather">
            <h3>Кеды и кросовки</h3>
            <img className='pro5' src={pro5} alt="" />
            <div className="info">
            <div className="weather-left">
                <li>Кеды</li>
                <li>Кроссовки</li>
            </div>
            <div className="weather-right">
                <li>Кроссовки зимние</li>
                <li>Текстиль</li>
            </div>
            </div>
          </div>
          <hr />

        </div>
      </div>
{/* ---------------------------------------------------------- */}
    

    </>
  )
}

export default Catolog
