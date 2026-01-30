import { Frame, Wrapper } from "./Video.styles";

type VideoCardProps = {
  video: string;
};

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <Wrapper>
      <Frame width="100%" height="100%" src={video} />
    </Wrapper>
  );
};
