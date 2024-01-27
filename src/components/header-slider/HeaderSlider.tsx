import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FacebookFill } from "akar-icons";
import "swiper/css";
import "swiper/css/effect-fade";

import testHeader from "../../img/container_ai_2.png";
import testHeader2 from "../../img/container_ai_3.png";
import testHeader3 from "../../img/container_ai_1.png";
import "./header-slider.css";

const HeaderSlider = () => {
  return (
    <section className="header-carousel">
      <Swiper
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header-carousel-slide">
            <div className="header-carousel-slide-background">
              <div className="header-carousel-slide-overflow"></div>
              <img src={testHeader3} alt="" />
            </div>
            <div className="header-carousel-slide-content wrapper">
              <h1>Willkommen bei Noske Kaeser Container Service</h1>
              <h2>Containertransport, einfach gemacht</h2>
            </div>
            <div className="header-carousel-side-left">
              <div className="line"></div>
              <a href="https://www.facebook.com" target="_blank">
                <FacebookFill
                  strokeWidth={2}
                  size={32}
                  className="header-carousel-link-svg"
                />
              </a>
              <div className="line"></div>
            </div>
            <div className="header-carousel-side-right"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-carousel-slide">
            <div className="header-carousel-slide-background">
              <div className="header-carousel-slide-overflow"></div>
              <img src={testHeader} alt="" />
            </div>
            <div className="header-carousel-slide-content wrapper">
              <h1>Willkommen bei Noske Kaeser Container Service</h1>
              <h2>Containertransport, einfach gemacht</h2>
            </div>
            <div className="header-carousel-side-left">
              <div className="line"></div>
              <FacebookFill
                strokeWidth={2}
                size={32}
                className="header-carousel-link-svg"
              />
              <div className="line"></div>
            </div>
            <div className="header-carousel-side-right"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-carousel-slide">
            <div className="header-carousel-slide-background">
              <div className="header-carousel-slide-overflow"></div>
              <img src={testHeader2} alt="" />
            </div>
            <div className="header-carousel-slide-content wrapper">
              <h1>Willkommen bei Noske Kaeser Container Service</h1>
              <h2>Containertransport, einfach gemacht</h2>
            </div>
            <div className="header-carousel-side-left">
              <div className="line"></div>
              <FacebookFill
                strokeWidth={2}
                size={32}
                className="header-carousel-link-svg"
              />
              <div className="line"></div>
            </div>
            <div className="header-carousel-side-right"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeaderSlider;
