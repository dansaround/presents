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

type HeaderProps = {
  name: string;
  role: string;
  description?: string;
  profilePic: string;
  coverImg: string;
};

export function Header({
  name = "Nombre y apellido",
  role = "Título de Cargo",
  description,
  profilePic,
  coverImg,
}: HeaderProps) {
  return (
    <Wrapper>
      <CoverContainer>
        <CoverImage src={coverImg} />
        <ImageOverlay />
      </CoverContainer>
      <ProfileImage src={profilePic} />
      <Title>{name}</Title>
      <Subtitle>{role}</Subtitle>
      <Description>{description}</Description>
    </Wrapper>
  );
}
