// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Slide } from "./Slide";

import { slider } from "../../../../static/data/Slider";

export const Slider = () => {
  const slides = slider.map(({ imgSrc, text, source, author }, index) => {
    return (
      <SwiperSlide key={index}>
        <Slide imgSrc={imgSrc} text={text} source={source} author={author} />
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      loop={true}
      spaceBetween={80}
      slidesPerView={1.3}
      centeredSlides={true}
      breakpoints={{
        0: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        // when window width is >= 320px
        480: {
          slidesPerView: 1.05,
        },
        // when window width is >= 480px
        768: {
          spaceBetween: 40,
        },
        // when window width is >= 640px
        992: {
          spaceBetween: 80,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};
