import {
  CoverContainer,
  CoverImage,
  Description,
  ImageOverlay,
  ProfileImage,
  Subtitle,
  Title,
  Wrapper,
} from "./Header.styles";
import ProfilePic from "../../assets/profile_pic.png";
import { Socials } from "../Socials";

export function Header() {
  const backImgUrl =
    "https://www.befunky.com/images/wp/wp-2022-09-Color-Palette-Featured.png?auto=avif,webp&format=jpg&width=1150&crop=16:9";

  return (
    <Wrapper>
      <CoverContainer>
        <CoverImage src={backImgUrl} />
        <ImageOverlay />
      </CoverContainer>
      <ProfileImage src={ProfilePic} />
      <Title>Rosa María Álvarez</Title>
      <Subtitle>Asesora Inmobiliaria |❤️✈️| Estudiante de coaching</Subtitle>
      <Description>
        Me dedico a brindar un servicio personalizado y de calidad, adaptado a
        la necesidad de cada cliente.
      </Description>
      <Socials />
    </Wrapper>
  );
}
