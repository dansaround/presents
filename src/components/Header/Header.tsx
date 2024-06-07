import {
  CoverImage,
  Description,
  ProfileImage,
  Subtitle,
  Title,
  Wrapper,
} from "./Header.styles";
import ProfilePic from "../../assets/profile_pic.png";

export const Header = () => {
  const backImgUrl =
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Wrapper>
      <CoverImage src={backImgUrl} />
      <ProfileImage src={ProfilePic} />
      <Title>Rosa María Álvarez</Title>
      <Subtitle>Asesora Inmobiliaria |❤️✈️| Estudiante de coaching</Subtitle>
      <Description>
        {" "}
        Me dedico a brindar un servicio personalizado y de calidad, adaptado a
        la necesidad de cada cliente.
      </Description>
    </Wrapper>
  );
};
