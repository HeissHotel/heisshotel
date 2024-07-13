"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import { register } from "swiper/element/bundle";
register();
import {
  Navigation,
  Mousewheel,
  Pagination,
  EffectFade,
  Keyboard,
} from "swiper/modules";
import { Button } from "./ui/button";
import { CalendarWidget } from "./CalendarWidget";
import CardExperiencias from "./CardExperiencias";
import Footer from "./Footer";
import "/app/css/navegation.css";
import "/app/css/pagination.css";
import GoogleMaps from "./GoogleMaps";
import { Badge } from "./ui/badge";
import { getAllHomePageContent } from "@/lib/api";

const SliderHome = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [homeContent, setHomeContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllHomePageContent();
        setHomeContent(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching home page content:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const swiperModules = isMobile
    ? []
    : [Keyboard, Mousewheel, Pagination, EffectFade];
  const swiperProps = isMobile
    ? {}
    : { effect: "fade", fadeEffect: { crossFade: true }, mousewheel: true };

  const renderSlides = () => {
    if (isLoading) {
      return <div>Cargando...</div>;
    }

    if (!homeContent || homeContent.length === 0) {
      return <div>No hay datos disponibles.</div>;
    }

    const homeContentData = homeContent.find(
      (entry) => entry.principalTitle === "Heiss Hotel"
    );
    const habitacionesContentData = homeContent.find(
      (entry) => entry.principalTitle === "Habitaciones"
    );
    const espaciosContentData = homeContent.find(
      (entry) => entry.principalTitle === "Espacios"
    );
    const experienciasContentData = homeContent.find(
      (entry) => entry.principalTitle === "Experiencias"
    );
    return (
      <>
        {/* Inicio */}
        <div className="text-white h-screen flex justify-center items-center text-center">
          <div className="relative w-full h-full ">
            <div className="absolute inset-0 p-1 bg-black opacity-20 z-10"></div>
            <Image
              src="/images/mediumcarrousel2.webp"
              alt="Fachada Heiss"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center mb-28 items-center z-20">
              <h1 className="h1">{homeContentData.principalTitle}</h1>
              <CalendarWidget />
            </div>
          </div>
        </div>
        {/* Habitaciones */}
        <div className="text-white h-screen text-center flex justify-center items-center">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <Image
              src="/images/Habitacion_Small_Front.webp"
              alt="Habitación Small"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 flex z-20 flex-col justify-center px-5">
              <div className="flex flex-col gap-3 items-center">
                <span className="p-regular-16 uppercase">
                  {habitacionesContentData.subtitleHome}
                </span>
                <h2 className="h2"> {habitacionesContentData.titleHome}</h2>
                <p className="p-light-24 w-3/4 md:w-2/5 lg:w-2/5 xl:w-2/5">
                  {habitacionesContentData.descriptionHome}
                </p>
              </div>
              <div className="py-6">
                <Button asChild variant="secondary">
                  <Link href="/habitaciones">HABITACIONES</Link>
                </Button>
              </div>
              <div className="flex md:flex-row justify-center gap-4 max-w-max mx-auto">
                <Button variant="destructive" size="lg" asChild>
                  <Link href="/habitaciones/habitacionEstandar">ESTÁNDAR</Link>
                </Button>
                <Button variant="destructive" size="lg" asChild>
                  <Link href="/habitaciones/habitacionSuite">SUITE</Link>
                </Button>
                <Button variant="destructive" size="lg" asChild>
                  <Link href="/habitaciones/habitacionSuperior">SUPERIOR</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Espacios */}
        <div className="text-white h-screen text-center flex justify-center items-center sliderHome">
          {/* Para móviles  */}
          <div className="lg:hidden bg-cover bg-center w-full h-full flex flex-col justify-center items-center">
            <div className="relative w-full h-full ">
              <div className="absolute inset-0 p-1 bg-black opacity-25 z-10"></div>
              <Image
                src="/images/Zona_Comercial.webp"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="Zona Comercial"
              />
              <div className="absolute inset-0 flex flex-col justify-center mb-28 md:-mb-6 items-center z-20">
                <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                  <span className="p-regular-16 uppercase">
                    {espaciosContentData.subtitleHome}
                  </span>
                  <h2 className="h2">{espaciosContentData.titleHome}</h2>
                  <p className="text-white p-light-24 w-3/4 md:w-2/5 lg:w-1/2 xl:w-1/2 lg:text-left lg:float-left">
                    {espaciosContentData.descriptionHome}
                  </p>
                </div>
                <div className="my-5 lg:my-8">
                  <Button asChild>
                    <Link href="/espacios">CONOCE MÁS</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Para dispositivos grandes */}
          <div className="hidden z-50 lg:absolute lg:grid lg:grid-cols-4 gap-6 p-8 w-full h-full vertical">
            <div className="lg:flex hidden">
              <Swiper
                direction={"vertical"}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                spaceBetween={20}
                loop={true}
                slidesPerView={"auto"}
                rewind={true}
                modules={[Navigation]}
                className="w-full h-screen vertical z-50"
                style={{
                  "--swiper-navigation-size": "10px",
                  "--swiper-navigation-weight": "10px",
                }}
              >
                <div className="flex flex-col h-[100%]">
                  <SwiperSlide style={{ height: "20rem" }}>
                    <CardExperiencias
                      imageUrl="/images/Terraza.webp"
                      altText="Rooftop heiss"
                      title="ROOFTOP"
                      height="20rem"
                      linkUrl={"/espacios/#rooftop-section"}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "20rem" }}>
                    <CardExperiencias
                      imageUrl="/images/Piscina.webp"
                      altText="Piscina heiss"
                      title="PISCINA CON JACUZZI"
                      height="20rem"
                      linkUrl={"/espacios/#piscina-section"}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "20rem" }}>
                    <CardExperiencias
                      imageUrl="/images/Lobby.webp"
                      altText="Lobby heiss"
                      title="LOBBY"
                      height="20rem"
                      linkUrl={"/espacios/#lobby-section"}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "20rem" }}>
                    <CardExperiencias
                      imageUrl="/images/gimnasio.webp"
                      altText="Gimnasio heiss"
                      title="GIMNASIO"
                      height="20rem"
                      linkUrl={"/espacios/#gimnasio-section"}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "20rem" }}>
                    <CardExperiencias
                      imageUrl="/images/salademasajes.webp"
                      altText="Sala de masajes heiss"
                      title="SALA DE MASAJES"
                      height="20rem"
                      linkUrl={"/espacios/#salamasajes-section"}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ height: "20rem" }}>
                    <CardExperiencias
                      imageUrl="/images/Zona_Comercial.webp"
                      altText="zona comercial heiss"
                      title="ZONA COMERCIAL"
                      height="20rem"
                      linkUrl={"/espacios/#comercial-section"}
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="absolute bg-cover w-[100%] h-[93%] bg-center md:col-span-3 rounded-3xl z-10 inset-0 relative-image">
              <Image
                src="/images/Zona_Comercial.webp"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="rounded-3xl bg-black opacity-60"
                alt="Zona comercial"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center p-8 md:p-16 lg:text-left lg:pl-32 md:mt-36 z-20">
                <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start">
                  <span className="text-white text-parrafo-regular-18 uppercase">
                    {espaciosContentData.subtitleHome}
                  </span>
                  <h2 className="text-white h2 uppercase">
                    {" "}
                    {espaciosContentData.titleHome}
                  </h2>
                  <p className="text-white p-light-24 w-3/4 md:w-4/5 lg:w-4/5 xl:w-3/4 lg:text-left lg:float-left">
                    {espaciosContentData.descriptionHome}
                  </p>
                  <Button asChild>
                    <Link href="/espacios">CONOCE MÁS</Link>
                  </Button>
                </div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next pr-12 pt-9">
                <Badge className={"-rotate-90"}>Explora</Badge>
              </div>
            </div>
          </div>
        </div>
        {/* Experiencias */}
        <div className="text-white h-screen text-center flex justify-center items-center">
          <div
            className="flex flex-col justify-center"
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
              }}
            >
              <source src="/images/Experiencias_Heiss.mp4" type="video/mp4" />
            </video>
            <div className="text-center flex flex-col content-center z-20 lg:text-left lg:pl-44 px-5 ">
              <div className="mb-5 md:my-8">
                <Button asChild>
                  <Link href="https://wa.me/573135250564" target="_blank">
                    EXPLORAR
                  </Link>
                </Button>
              </div>
              <div className="items-center lg:text-right flex flex-col gap-3 md:gap-5 lg:items-start ">
                <span className="p-regular-16 uppercase">
                  {experienciasContentData.subtitleHome}
                </span>
                <h2 className="h2"> {experienciasContentData.titleHome}</h2>
                <p className="p-light-24 w-3/4 md:w-4/5 lg:w-4/5 xl:w-3/4 lg:text-left lg:float-left">
                  {experienciasContentData.descriptionHome}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="text-white h-screen hidden sm:flex w-full">
          <div className="flex h-screen w-full">
            <div className="h-full w-[70%] relative">
              <GoogleMaps />
            </div>
            <div className="hidden sm:flex w-full relative inset-0 bg-black opacity-80">
              <Image
                src={"/images/_URV6897.webp"}
                fill
                style={{ objectFit: "cover" }}
                alt="Mapa"
              />
            </div>
          </div>
        </div>
        {/* footer */}
        <div>
          <Footer>
            <div className="hidden sm:flex h-[26vh]">
              <Image
                src="/images/habitacionLarge/largedetalles.webp"
                fill
                style={{ objectFit: "cover" }}
                alt="Habitación"
              />
            </div>

            {isMobile && (
              <div className="h-[35vh]">
                <GoogleMaps />
              </div>
            )}
          </Footer>
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <div className="w-full h-screen overflow-auto">{renderSlides()}</div>
      ) : (
        <Swiper
          direction={"vertical"}
          spaceBetween={0}
          keyboard={true}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            modifierClass: "swiper-pagination",
          }}
          modules={swiperModules}
          {...swiperProps}
          className="w-full h-screen"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>{renderSlides().props.children[0]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[1]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[2]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[3]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[4]}</SwiperSlide>
          <SwiperSlide>{renderSlides().props.children[5]}</SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default SliderHome;
