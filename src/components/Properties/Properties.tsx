import "swiper/css";
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
} from "./Properties.style";
import "swiper/css/pagination";
import { Button } from "../Button";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

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
      <Title>Inmuebles disponibles</Title>

      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
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
                <Image src={property.image} alt={`Imagen ${property.title}`} />
                <TextContainer>
                  <Location>{property.location}</Location>
                  <CardTitle>{property.title}</CardTitle>
                  <Price>{property.priceUsd}</Price>
                  <Button
                    style={{
                      transform: "scale(0.8) translate(0px, -10px)",
                      fontWeight: "800",
                      padding: "8px 10px",
                    }}
                    onClick={handleClick}
                  >
                    VER MÁS
                  </Button>
                </TextContainer>
              </Card>
            </SwiperSlidePro>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
