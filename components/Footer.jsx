import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 justify-center md:left-0 flex md:justify-end gap-3 w-full sm:px md:px-12 lg:px-16 xl:px-20 pb-9 z-10">
      <div className="rounded-full bg-white/30 p-3 w-10 h-10">
        <a href="https://www.instagram.com/heisshotel/?hl=es" target="_blank">
          <Image
            src="/icons/instagram.svg"
            alt="Instagram Heiss"
            width={35}
            height={35}
          />
        </a>
      </div>
      <div className="rounded-full bg-white/30 p-3 w-10 h-10 flex items-center justify-center">
        <a href="https://www.facebook.com/hesissmedhotel/" target="_blank">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook Heiss"
            width={12}
            height={20}
          />
        </a>
      </div>
      <div className="rounded-full bg-white/30 p-3 w-10 h-10">
        <a href="https://wa.me/573178946768" target="_blank">
          <Image
            src="/icons/whatsapp.svg"
            alt="Whatsapp Heiss"
            width={26}
            height={25}
          />
        </a>
      </div>
    </div>
  );
}
