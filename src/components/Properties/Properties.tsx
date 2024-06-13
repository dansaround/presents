import {
  Card,
  CardTitle,
  Image,
  Location,
  SwiperPro,
  SwiperSlidePro,
  Title,
  Wrapper,
} from "./Properties.style";
import { Button } from "../Button";

import { FreeMode, Pagination } from "swiper/modules";
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
      <Title>Inmuebles disponibles</Title>

      <SwiperPro
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
                <Location>{property.location}</Location>
                <CardTitle>{property.title}</CardTitle>

                <Button
                  style={{ transform: "scale(0.8) translate(0px, -10px)" }}
                  onClick={handleClick}
                >
                  {property.priceUsd}
                </Button>
              </Card>
            </SwiperSlidePro>
          );
        })}
      </SwiperPro>
    </Wrapper>
  );
}
