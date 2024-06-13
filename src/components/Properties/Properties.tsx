import React from "react";
import {
  Card,
  Location,
  Price,
  SwiperPro,
  SwiperSlidePro,
  Title,
  Wrapper,
} from "./Properties.style";
import { Button } from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Property = {
  url: string;
  image: string;
  title: string;
  priceSol: string;
  priceUsd: string;
  location: string;
};

type PropertiesProps = {
  properties: Property[];
};

export function Properties({ properties }: PropertiesProps) {
  return (
    <Wrapper>
      <SwiperPro
        slidesPerView={"auto"}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {properties.map((property) => {
          const handleClick = () => {
            const url = property.url;
            window.open(url, "_blank");
          };
          return (
            <SwiperSlidePro key={property.url}>
              <Card>
                {/* <img src={property.image} alt={`Imagen ${property.title}`} /> */}
                <Title>{property.title}</Title>

                <Price>Price Usd: {property.priceUsd}</Price>
                <Location>{property.location}</Location>
                <Button onClick={handleClick}> Ver Más</Button>
              </Card>
            </SwiperSlidePro>
          );
        })}
      </SwiperPro>
    </Wrapper>
  );
}
