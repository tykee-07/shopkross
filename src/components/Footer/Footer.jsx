import React from 'react'
import "./footer.css"
import logo1 from "../../assets/logo.svg"
import timer from "../Footer/svg/timer.svg"
import vax from "../Footer/svg/vax.svg"
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
          <div className="foot">
          <div className="info1 ">
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

          <div className="info1 ">
              <h4>Зима</h4>
            <div>
              <p>Ботфорты</p>
              <p>Сапоги</p>
              <p>Сапоги-трубы</p>
              <p>Полусапоги</p>
              <p>Ботинки</p>
              <p>Ботильоны</p>
              <p>Челси</p>
              <p>Дутики</p>
              <p>Угги</p>
            </div>
          </div>

          <div className="info1 ">
              <h4>Лето</h4>
            <div>
              <p>Босоножки</p>
              <p>Сабо-Мюли</p>
              <p>Слиперы</p>
              <p>Сандалии</p>
              <p>Балетки</p>
              <p>Мокасины</p>
              <p>Летние ботильоны</p>
            </div>
          </div>

          <div className="info1 ">
              <h4>Демисезон</h4>
            <div>
              <p>Ботфорты</p>
              <p>Сапоги</p>
              <p>Сапоги-трубы</p>
              <p>Полусапоги</p>
              <p>Ботинки</p>
              <p>Ботильоны</p>
              <p>Челси</p>
            </div>
          </div>

          <div className="info1 ">
              <h4>Туфли</h4>
            <div>
              <p>Туфли</p>
              <p>Туфли-лодочки</p>
              <p>Туфли МериДжейн</p>
              <p>Туфли открытые</p>
              <p>Оксфорды</p>
              <p>Дерби</p>
              <p>Броги</p>
              <p>Монки</p>
              <p>Лоферы</p>
            </div>
          </div>

          <div className="info1 ">
              <h4>Кеды и кросовки</h4>
            <div>
              <p>Кеды</p>
              <p>Кроссовки</p>
              <p>Кроссовки зимние</p>
              <p>Текстиль</p>
            </div>
          </div>

          <div className="info2 ">
              <h4>Контакты</h4>
            <div>
              <p>Революционная 56 </p>
              <p>+7 (347) 276-91-92</p>
            </div>
            <div>
              <p>Пр. Октября 89</p>
              <p> +7 (347) 235-96-96</p>
            </div>
            <div>
              <p>Первомайская 36</p>
              <p> +7 (347) 264 62-51</p>
            </div>
            <div className="tik-tak">
              <img src={timer} alt="" />
              <p>Ежедневно
              10:00-21:00</p>
            </div>
            <div className="tik-tak">
              <img src={vax} alt="" />
              <p>info@newsite.ru</p>
            </div>
          </div>
        </div>
          <hr />
        <div className="end19">
          <p>Политика компании в отношении обработки 
          персональных данных</p>
          <span>Copyright © 2008-2022. Магазин женской одежды «КРАСНАЯ ТУФЕЛЬКА». 
          Все права защищены</span>
          <p>WEBBEES - Создание и продвижение сайтов</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
