"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "/app/css/pagination.css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import 'photoswipe/dist/photoswipe.css';
import "./navigation.css"
import Image from "next/image";
import { CalendarWidget } from "../CalendarWidget";
import { Button } from "../ui/button";

import { register } from "swiper/element/bundle";
register();
import {
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
  FreeMode,
  Navigation,
} from "swiper/modules";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

const SliderHabMedium = () => {
  const galleryImages = [
    "/images/habitacionMedium/all/superior_1.jpg",
    "/images/habitacionMedium/all/superior_2.jpg",
    "/images/habitacionMedium/all/superior_3.jpg",
    "/images/habitacionMedium/all/superior_4.jpg",
    "/images/habitacionMedium/all/superior_5.jpg",
    "/images/habitacionMedium/all/superior_6.jpg",
    "/images/habitacionMedium/all/superior_7.jpg",
    "/images/habitacionMedium/all/superior_8.jpg",
    "/images/habitacionMedium/all/superior_9.jpg",
    "/images/habitacionMedium/all/superior_10.jpg",
    "/images/habitacionMedium/all/superior_11.jpg",
  ];

  return (
    <section className="overflow-y-auto">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <Image
          src="/images/habitacionMedium/mediumprincipal.webp"
          alt="Piscina Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="items-center justify-center mb-20 text-center flex flex-col gap-3 text-white z-20 absolute inset-0">
          <span className="p-light-16 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
            HOTEL HEISS MEDELLÍN
          </span>
          <h2 className="h3">SUPERIOR</h2>
          <div className="mt-5">
            <CalendarWidget />
          </div>
        </div>
      </div>
      {/* carrousel 1 */}
      <div className="text-white h-3/4 text-center flex items-center w-full">
        <Swiper
          slidesPerView={1}
          className="w-full h-[70%]"
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination",
          }}
          modules={[Pagination, Navigation]}
          lazy={true} // Lazy loading
        >
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionMedium/mediumcarrousel.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionMedium/mediumcarrousel2.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
            <Image
              src="/images/habitacionMedium/mediumcarrousel3.webp"
              alt="Piscina Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* carrousel 2 */}
      <div className="text-white text-center flex flex-col md:flex-row items-center w-full">
        <Gallery>  
          <Swiper
            slidesPerView={1}
            className="w-[100%] md:w-[55%] h-[50vh] md:h-screen"
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
              modifierClass: "swiper-pagination",
            }}
            modules={[Pagination, Navigation]}
            navigation
            lazy={true} // Lazy loading
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image}>
                <Item
                  original={image}
                  thumbnail={image}
                  width="1621"
                  height="1081"
                >
                  {({ ref, open }) => (
                    <div ref={ref} onClick={open} role="button">
                      <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
                      <Image
                        src={image}
                        alt="Piscina Image"
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </Gallery>
        <div className="flex flex-col md:w-[45%] gap-10 h-full p-8 pb-32 md:p-16 md:w-[45%] items-end justify-end text-right">
          {/* ICONOS */}
          <div className="">
            <h2 className="h5 py-8">SUPERIOR</h2>
            <p className="p-light-16 pl-2">
              Descubre nuestra cómoda <b>Habitación Superior</b> de 20 mt2 con
              un balcón adicional de 4.5 mt2, diseñada para ofrecer una estancia
              relajante y funcional. Esta habitación combina comodidad interior
              con un espacio exterior privado. ¡Reserva ahora y disfruta de una
              experiencia completa en nuestra Habitación Superior con Balcón!
            </p>
          </div>

          <div className="flex gap-5 md:gap-9 lg:gap-10 xl:gap-10 justify-end">
            <Image
              src="/icons/camas.svg"
              alt="Camas Queen"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />
            <Image
              src="/icons/wifi.svg"
              alt="Wifi"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />

            <Image
              src="/icons/armario.svg"
              alt="Armario"
              width={40}
              height={29.1}
              className="md:w-[40px] lg:w-[50px]"
            />

            <Image
              src="/icons/ducha.svg"
              alt="Ducha"
              width={40}
              height={62.42}
              className="md:w-[40px] lg:w-[50px]"
            />
          </div>
          <Button as child>
            <Link
              href="https://hotels.cloudbeds.com/es/reservation/lLxxdq"
              target="_blank"
            >
              BOOK NOW
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SliderHabMedium;
