import React from "react";
import Image from "next/image";

function CardExperiencias({ imageUrl, altText, title, height }) {
  return (
    <div
      style={{ height: height }}
      className="full-width image-height flex-container relative"
    >
      <div className="relative">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-3xl"
          alt={altText}
        />
        <div className="relative inset-0 flex flex-col h-[25rem] px-10 justify-center items-center p-8 opacity-0 bg-black/65 transition-opacity duration-200 ease-in-out hover:opacity-100 pointer-events-auto">
          <h2 className="h6 px-28">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardExperiencias;
