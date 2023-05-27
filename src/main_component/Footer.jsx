import React from "react";
import logo from "./img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="f_left">
          <div className="fl_top">
            <img src={logo} />
            <h4>легендарные ножи, создающие шедевры</h4>
          </div>
          <div className="fl_bottom">
            <p>
              Компания «Tuotown» – эксклюзивный представитель профессиональных
              кухонных ножей, изготовленных лучшими мастерами Восточной Азии
              с применением передового европейского оборудования и современных
              материалов.
            </p>
            <br/>
            <p>
              Они отличаются идеальным балансом и фантастической остротой.
              Сочетают в себе вековые традиции и новейшие разработки.
              Также предлагаем широкий ассортимент сопутствующих товаров.
            </p>
          </div>
        </div>
        <div className="f_center">
          <div className="fc_top">
            <h4>Информация</h4>
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="fc_top">
            <h4 className="katalog">Каталог</h4>
            <ul>
              <li>
                <a href="#">Кухонные ножи</a>
              </li>
              <li>
                <a href="#">Складные ножи</a>
              </li>
              <li>
                <a href="#">Точилки для ножей</a>
              </li>
              <li>
                <a href="#">Аксессуары</a>
              </li>
            </ul>
          </div>
          <div className="fc_social">
            <h4>Мы в соцсетях</h4>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-wikipedia-w"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="f_right">
          <h3>Контактная информация</h3>
          <ul>
          <h2>+7 (981) 120-11-17</h2>
          <p>tuotown@mail.ru</p>
          <p>08:00 — 18:00, ежедневно</p>
          <p>Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф, 22-68-70</p>
          </ul>
        </div>  
      </div>
      <div className="copyright">
        <p>
          TuoTown &copy;Abduraxmon Kamilov{" "}
          <a href="https://t.me/kamilo_vv" target="_blank">
            <i class="fa-brands fa-telegram fa-beat"></i>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
