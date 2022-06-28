import Script from 'next/script'
import {Swiper, SwiperSlide} from 'swiper/react';

import Card from './Card';

import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from "swiper";
import React, { useRef, useState } from "react";
import {homeData} from '../src/data.js';

const cards = homeData.OurCapabilities.Cards;
export default function CardCarousel () {
  return (
    <div className="w-full flex flex-col items-center justify-center">
         <Script src="https://www.google-analytics.com/analytics.js" />
         <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"></Script>
         <Swiper
        centerInsufficientSlides={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          cards.map((card, index) => {
            return <SwiperSlide key={index} ><Card content={card.description} title={card.title} image={card.image}></Card></SwiperSlide>
          })
        }
        </Swiper>
    </div>
  )
}
