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

import COVER from "../../assets/Cover.png";

export function Header() {
  return (
    <Wrapper>
      <CoverContainer>
        <CoverImage src={COVER} />
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
