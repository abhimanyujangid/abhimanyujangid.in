"use client";

import photo1 from "@/public/images/abhimanyu.webp";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySection = () => {
  const photos = [
    {
      id: 1,
      src: photo1,
      alt: "Photo 1",
    }
  ];

  return (
    <section className="overflow-hidden">
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
        Project
      </h2>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-60 h-80 my-8 overflow-hidden"
      >
        {photos.map((photo) => (
          <SwiperSlide
            key={photo.id}
            className="flex items-center justify-center rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GallerySection;
