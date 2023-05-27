import React, { Component, useEffect } from "react";
import AOS from "aos";
import $ from "jquery";
import Category_1 from "./img/category_1.png";
import Category_2 from "./img/category_2.png";
import Category_3 from "./img/category_3.png";
import Category_4 from "./img/category_4.png";
import Knifes_1 from "./img/knifes_1.png";
import Knife_1 from "./img/knife_1.png";
import Knife_2 from "./img/knife_2.png";

export default class FourCategory extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    AOS.init();
    //See category 1 new items
    $(".category_2 .noviy").click(function () {
      $(this).css({
        opacity: " 100%",
        "border-bottom": "2px solid #c80000",
      });
      $(".category_2 .popularniy").css({
        opacity: " 50%",
        "border-bottom": "2px solid transparent",
      });
      $(".category_2 .category_2_1 .new").css({
        display: "block",
      });
      $(".category_2 .category_2_2 .popular").css({
        display: "none",
      });
    });

    //See category 2 famous items
    $(".category_2 .popularniy").click(function () {
      $(this).css({
        opacity: " 100%",
        "border-bottom": "2px solid #c80000",
      });
      $(".category_2 .noviy").css({
        opacity: " 50%",
        "border-bottom": "2px solid transparent",
      });
      $(".category_2 .category_2_1 .new").css({
        display: "none",
      });
      $(".category_2 .category_2_2 .popular").css({
        display: "block",
      });
    });

    // Way to another collections component
    $(".collection a").hover(function () {
      $(".collection .more").css({
        display: "block",
      });
    });
  }
  render() {
    return (
      <div className="fourCategory">
        <div className="categories">
          <a href="#">
            <img src={Category_1} />
            <p>Кухонные ножи</p>
          </a>
          <a href="#">
            <img src={Category_2} />
            <p>Складные ножи</p>
          </a>
          <a href="#">
            <img src={Category_3} />
            <p>Точилки для ножей</p>
          </a>
          <a href="#">
            <img src={Category_4} />
            <p>Аксессуары для кухни</p>
          </a>
        </div>

        <div className="fc_content">
          <div className="collection">
            <img src={Knifes_1} />
            <span className="more">Подробнее</span>
            <a href="#">
              <i class="fa-solid fa-arrow-right fa-shake"></i>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="Fcc_item new"
          >
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_1} />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_2} className="knife_2" />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_1} />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_2} className="knife_2" />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_1} />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_2} className="knife_2" />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
        </div>

        <div className="subscription">
          <h1>Узнавайте первым о новинках и новостях</h1>
          <form>
            <input type="email" placeholder="Ваш e-mail" />
            <button>
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </form>
        </div>

        <div className="fc_content fc_content2">
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_1} />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_2} className="knife_2" />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="Fcc_item new"
          >
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_1} />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="Fcc_item">
            <div className="shop">
              <i class="fa-solid fa-plus fa-beat"></i>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            </div>
            <img src={Knife_2} className="knife_2" />
            <h5>Складной нож SQ01-B</h5>
            <p>850 р.</p>
          </div>
        </div>

        <div className="category_2">
          <ul>
            <li className="noviy">НОВИНКИ</li>
            <li className="popularniy">ПОПУЛЯРНОЕ</li>
          </ul>
          <div className="fc_content category_2_1">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item new"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_1} />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item new"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_2} className="knife_2" />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item new"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_1} />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item new"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_2} className="knife_2" />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
          </div>
          <div className="fc_content category_2_2">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item popular"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_2} className="knife_2" />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item popular"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_1} />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item popular"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_2} className="knife_2" />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="Fcc_item popular"
            >
              <div className="shop">
                <i class="fa-solid fa-plus fa-beat"></i>
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </div>
              <img src={Knife_1} />
              <h5>Складной нож SQ01-B</h5>
              <p>850 р.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
