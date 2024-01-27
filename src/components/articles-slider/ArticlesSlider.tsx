import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./articles-slider.css";
import cardImg1 from "../../img/card_art_1.jpeg";
import cardImg2 from "../../img/card_art_2.jpg";
import cardImg3 from "../../img/card_art_3.jpeg";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "akar-icons";
import ArticleSlideItem from "./ArticleSlideItem";

const ArticlesSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <section className="articles-carousel">
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
        >
          <SwiperSlide>
            <ArticleSlideItem image={cardImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlideItem image={cardImg2} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlideItem image={cardImg3} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlideItem image={cardImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlideItem image={cardImg2} />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleSlideItem image={cardImg3} />
          </SwiperSlide>
        </Swiper>
        <ChevronLeft
          onClick={handlePrev}
          strokeWidth={2}
          size={36}
          color="#fff"
          className="articles-carousel-left-btn"
        />
        <ChevronRight
          onClick={handleNext}
          strokeWidth={2}
          size={36}
          color="#fff"
          className="articles-carousel-right-btn"
        />
      </section>
      <div className="wrapper">
        <p className="text_primary article-carousel-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          mollis aliquam ut porttitor leo a diam sollicitudin tempor. Placerat
          vestibulum lectus mauris ultrices eros in cursus turpis massa.
        </p>
      </div>
    </>
  );
};

export default ArticlesSlider;
