import {
  CardSubtitle,
  CardTitle,
  Image,
  TextSide,
  Wrapper,
} from "./ActionCard.styles";

export function ActionCard() {
  const handleClick = () => {
    const url =
      "https://www.remax.pe/web/agents/alvarezr@remax-centralrealty.com/remax-central/";
    window.open(url, "_blank");
  };
  return (
    <Wrapper onClick={handleClick}>
      <Image src="https://media.licdn.com/dms/image/C4E0BAQF33O9w7fQY5g/company-logo_200_200/0/1680119061517?e=1726099200&v=beta&t=tm5mC-0GumFFEGrrrdpY1TTbEm11gg3WLwe0FLlUMoo" />
      <TextSide>
        <CardTitle>Remax Central Realty</CardTitle>
        <CardSubtitle>Conoce más</CardSubtitle>
      </TextSide>
    </Wrapper>
  );
}
