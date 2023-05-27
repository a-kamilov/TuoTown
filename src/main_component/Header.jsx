import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo from "./img/logo.png";
import menu_icon from "./img/menu-icon.png";
import $ from "jquery";

export default class Header extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    $(".n_left img").click(function () {
      $(".h_form").css({
        left: 0,
      });
      $(".header , .fourCategory, .aboutUs, .news, .footer, .copyright").css({
        filter: "brightness(40%)",
      });
    });

    $(".fa-chevron-left").click(function () {
      $(".h_form").css({
        left: "-100%",
      });
      $(".header , .fourCategory, .aboutUs, .news, .footer, .copyright").css({
        filter: "brightness(100%)",
      });
    });
  }
  render() {
    const countProduct = 0;
    return (
      <>
        <form className="h_form">
          <i class="fa-solid fa-chevron-left"></i>
          <ul>
            <li>
              <a href="#">Кухонные ножи TUOTOWN</a>
            </li>
            <li>
              <a href="#">Складные ножи TUOTOWN</a>
            </li>
            <li>
              <a href="#">Кухонные ножи QXF</a>
            </li>
            <li>
              <a href="#">Точильные камни</a>
            </li>
            <li>
              <a href="#">Наборы для BBQ</a>
            </li>
            <li>
              <a href="#">Кухонные принадлежности</a>
            </li>
            <li>
              <a href="#">Туристические товары</a>
            </li>
          </ul>
          <ul className="form_ul2">
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Как проехать</a>
            </li>
          </ul>
        </form>
        <div className="header">
          <div className="navbar">
            <div className="n_left">
              <img src={menu_icon} />
              <i class="fa-solid fa-phone"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              <i class="fa fa-map-marker"></i>
              <p>8 981 120-11-17</p>
            </div>
            <a href="#">
              <img src={logo} />
            </a>
            <div className="n_right">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <i class="fas fa-search"></i>
            </div>
          </div>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="h_content">
                <h1>Исключительное качество без компромиссов</h1>
                <p>
                  Ножи «Tuotown» – это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h_content">
                <h1>Исключительное качество без компромиссов</h1>
                <p>
                  Ножи «Tuotown» – это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h_content">
                <h1>Исключительное качество без компромиссов</h1>
                <p>
                  Ножи «Tuotown» – это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h_content">
                <h1>Исключительное качество без компромиссов</h1>
                <p>
                  Ножи «Tuotown» – это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
                <button>ПОДРОБНЕЕ</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
  }
}
