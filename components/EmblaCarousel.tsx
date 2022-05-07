import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { StaticImageData } from "next/image";
import CrouselItem from "./CarouselItem";

type PropType = {
  options?: EmblaOptionsType;
  slides: { image: StaticImageData; name: string; body: string }[];
};

const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props;
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnMouseEnter: false, stopOnInteraction: false })
  );
  const [viewportRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const [currentItem, setCurrentItem] = useState<number>(1);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", function () {
      const currentItemIndex = emblaApi.selectedScrollSnap();

      setCurrentItem(currentItemIndex);
    });
  }, [emblaApi]);

  return (
    <div className="embla flex flex-col items-center h-64" ref={viewportRef}>
      <div className="embla_container w-[550px]">
        {slides.map((slide, index) => (
          <div className="embla_slide flex justify-center mx-4" key={index}>
            <CrouselItem
              avatar={slide.image}
              name={slide.name}
              body={slide.body}
            />
          </div>
        ))}
      </div>
      <div className="blcok lg:hidden flex gap-x-2 mb-11 mt-10">
        {slides.map((_slide, index) => {
          return (
            <span
              key={index}
              className={`inline-block border border-brightRed rounded-full ${
                index === currentItem ? "bg-brightRed" : "bg-white"
              } w-3 h-3`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default EmblaCarousel;
