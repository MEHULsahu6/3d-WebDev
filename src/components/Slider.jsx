import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './styles.css';

const Slider = ({ cards = [], pagination = true }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      autoplay={{
        delay: 3000, // Time between slides in milliseconds
        disableOnInteraction: false, // Allows autoplay to continue after user interactions
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={pagination}
      loop={true} // Enable infinite loop
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <h3 className="card-heading">{card.feature}</h3> {/* Use 'feature' as the heading */}
            <p className="card-description">{card.description}</p> {/* Description */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
