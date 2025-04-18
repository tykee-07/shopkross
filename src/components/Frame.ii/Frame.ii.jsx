import React from "react";
import "./Frame.ii.css";
import blog1 from "../Frame.ii/img/blog1.png";
import blog2 from "../Frame.ii/img/blog2.png";
import blog3 from "../Frame.ii/img/blog3.png";
import blog4 from "../Frame.ii/img/blog4.png";
import blog5 from "../Frame.ii/img/blog5.png";
import blog6 from "../Frame.ii/img/blog6.png";
import blog7 from "../Frame.ii/img/blog7.png";
import blog8 from "../Frame.ii/img/blog8.png";



function Frameii() {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Наш блог</h2>
      <div className="blog-tabs">
        <span className="active">Популярное</span>
        <span>Мода</span>
        <span>Покупка</span>
        <span>Уход</span>
        <span>Ремонт</span>
      </div>
      <div className="blog-grid">
        <div className="blog-item">
          <img src={blog1} alt="Туфли на каблуке" />
          <h3>Как правильно выбирать туфли на каблуке?</h3>
          <p>1 мая 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog2} alt="Уход за кожаной обувью" />
          <h3>Лучшие средства для ухода за кожаной обувью ТОП-10</h3>
          <p>26 апреля 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog3} alt="Уход за замшей" />
          <h3>Как правильно ухаживать за замшей и нубуком?</h3>
          <p>14 апреля 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog4} alt="Спрей для обуви" />
          <h3>Лучшие спреи для обуви от грязи и воды ТОП-5</h3>
          <p>5 мая 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog5} alt="Удобная обувь" />
          <h3>Как выбрать удобную и практичную обувь на каждый день?</h3>
          <p>20 марта 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog6} alt="Продлить срок обуви" />
          <h3>Как продлить идеальное состояние любой обуви?</h3>
          <p>20 апреля 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog7} alt="Туфли на каблуке 2" />
          <h3>Как правильно выбрать туфли на каблуке?</h3>
          <p>1 мая 2021</p>
        </div>
        <div className="blog-item">
          <img src={blog8} alt="Обувь весна" />
          <h3>Лучшие средства для ухода за кожанной обувью ТОП-10</h3>
          <p>26 апреля 2021</p>
        </div>
      </div>
    </section>
  );
}

export default Frameii;