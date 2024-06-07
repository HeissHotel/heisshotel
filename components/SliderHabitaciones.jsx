import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";

const SliderHabitaciones = () => {
  return (
    <div className=" w-full h-screen">
      <div className="text-white h-screen text-center flex items-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
          <Image
            src="/images/habitacionSection.webp"
            alt="Habitación Small"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 flex z-20 flex-col justify-center w-full gap-5">
            <div className="items-center text-center flex flex-col gap-2">
              <span className="p-medium-16">DESCUBRE</span>
              <p className="p-light-24 w-3/4 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center">
                Ofrecemos diferentes categorías de habitaciones escoge la que
                mejor se acomode a tu estadia.
              </p>
            </div>
            <div className="">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>DESCRIPCIÓN</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <section className="md:flex md:grid-col-3 bg-black text-white gap-4 py-8 md:px-12 md:py-8 lg:py-10 lg:px-16 xl:py-12 xl:px-32 justify-center lg:justify-between items-end relative">
                    <DrawerClose className="absolute top-8 right-8 text-2xl">X</DrawerClose>
                    <div className="flex px-8 md:px-5 col-span-2 gap-5 md:gap-9 lg:gap-10 xl:gap-36 justify-center">
                      <div className="flex flex-col grid-col-2 h-40 md:gap-7 md:w-40 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-64 xl:gap-10 justify-between">
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/camas.svg"
                            alt="Camas Queen"
                            width={25}
                            height={29}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Camas Queen</p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/wifi.svg"
                            alt="Wifi"
                            width={25}
                            height={29}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">
                            Conexión de alta velocidad
                          </p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/armario.svg"
                            alt="Armario"
                            width={25}
                            height={29}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Armario</p>
                        </div>
                      </div>
                      <div className="flex flex-col grid-cols-2 h-40 md:w-40 md:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-64 xl:gap-10 justify-between">
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/bar.svg"
                            alt="Bar"
                            width={25}
                            height={29}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Mini bar</p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/ducha.svg"
                            alt="Ducha"
                            width={25}
                            height={29}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Cuarto de baño con ducha</p>
                        </div>
                        <div className="flex gap-5 lg:gap-10 items-center text-left">
                          <Image
                            src="/icons/cafetera.svg"
                            alt="Cafetera"
                            width={25}
                            height={29}
                            className="md:w-[40px] lg:w-[50px]"
                          />
                          <p className="p-light-16">Set de cafetera</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-right md:w-96 xl:w-5/6 pt-10 px-7">
                      <h3 className="h6">PODRAS ENCONTRAR</h3>
                      <p className="p-light-12 pt-3 md:pt-7">
                        Nuestras habitaciones están diseñadas para ofrecer el
                        máximo confort y elegancia. Disfruta de camas queen
                        size, Wi-Fi gratuito, televisores de pantalla plana y
                        baños privados con artículos de tocador de lujo. Algunas
                        habitaciones también cuentan con balcones privados para
                        que puedas disfrutar de vistas panorámicas de Medellín.
                      </p>
                    </div>
                  </section>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-max mx-auto">
              <Button variant="destructive" size="lg" asChild>
                <Link href="/habitaciones/habitacionSmall">ESTÁNDAR</Link>
              </Button>
              <Button variant="destructive" size="lg" asChild>
                <Link href="/habitaciones/habitacionMedium">SUPERIOR</Link>
              </Button>
              <Button variant="destructive" size="lg" asChild>
                <Link href="/habitaciones/habitacionLarge">SUITE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHabitaciones;
