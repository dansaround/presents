import {
  Card,
  Image,
  Title,
  Wrapper,
  Location,
  CardTitle,
  SwiperSlidePro,
  Price,
  TextContainer,
  Tag,
  MoreButton,
} from "./Properties.style";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Property } from "../../types";

type PropertiesProps = {
  properties: Property[];
};

export function Properties({ properties }: PropertiesProps) {
  return (
    <Wrapper>
      <Title>Inmuebles disponibles</Title>

      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={10}
        modules={[FreeMode, Pagination]}
      >
        {properties.map((property) => {
          const handleClick = () => {
            const url = property.url;
            window.open(url, "_blank");
          };
          return (
            <SwiperSlidePro key={property.url}>
              <Card>
                <Tag $isForSale={property.type === "Venta" ? true : false}>
                  {property.type === "Venta" ? "VENTA" : "ALQUILER"}
                </Tag>
                <Image src={property.image} alt={`Imagen ${property.title}`} />
                <TextContainer>
                  <Location>{property.location}</Location>
                  <CardTitle>{property.title}</CardTitle>
                  <Price>{property.priceUsd}</Price>
                  <MoreButton
                    style={{
                      transform: "scale(0.8) ",
                      padding: "8px 10px",
                    }}
                    onClick={handleClick}
                  >
                    VER MÁS
                  </MoreButton>
                </TextContainer>
              </Card>
            </SwiperSlidePro>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
