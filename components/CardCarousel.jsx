import Script from 'next/script'
import {Swiper, SwiperSlide} from 'swiper/react';

import Card from './Card';

import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from "swiper";
import React, { useRef, useState } from "react";
import homeData from '../src/data.js';

const cards = homeData.OurCapabilities.Cards;
export default function CardCarousel () {
  return (
    <div className="w-full flex justify-center items-center">
         <Script src="https://www.google-analytics.com/analytics.js" />
         <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"></Script>
         <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          cards.map((card) => {
            return <SwiperSlide><Card content={card.description} title={card.title} image={card.image}></Card></SwiperSlide>
          })
        }
        </Swiper>
    </div>
  )
}
