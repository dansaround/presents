import {
  CardSubtitle,
  CardTitle,
  Image,
  TextSide,
  Wrapper,
} from "./ActionCard.styles";

type ActionCardProps = {
  url: string;
  imgUrl: string;
  textTitle: string;
  textSubtitle: string;
};

export function ActionCard({
  url,
  imgUrl,
  textTitle,
  textSubtitle,
}: ActionCardProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <Wrapper onClick={handleClick}>
      <Image src={imgUrl} />
      <TextSide>
        <CardTitle>{textTitle}</CardTitle>
        <CardSubtitle>{textSubtitle}</CardSubtitle>
      </TextSide>
    </Wrapper>
  );
}
