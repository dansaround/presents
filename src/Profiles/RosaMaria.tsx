import {
  CTA,
  Divider,
  Header,
  Socials,
  ImageCard,
  Properties,
  ActionCard,
  Footer,
} from "../components";
import { people } from "../people";
import { MainWrapper } from "./Agent.styles";
import FullImage from "../assets/ExampleBody.png";
import { VideoCard } from "../components/Video";
import RMAVideo from "../assets/rma/video_vertical.mp4";
import { hasProperties } from "../types";

export function RosaMaria() {
  const { profile: rosaMaria } = people[0];
  if (!hasProperties(rosaMaria)) {
    return null; // o un fallback
  }
  return (
    <MainWrapper>
      <Header
        name={rosaMaria.name}
        role={rosaMaria.role!}
        description={rosaMaria.description}
        profilePic={rosaMaria.images!.profile}
        coverImg={rosaMaria.images!.cover!}
      />
      <Socials
        urlWhatsapp={rosaMaria.links!.whatsapp!}
        urlTikTok={rosaMaria.links!.tiktok!}
        urlInstagram={rosaMaria.links!.instagram!}
        urlFacebook={rosaMaria.links!.facebook!}
        urlLinkedIn={rosaMaria.links!.linkedin!}
        urlYoutube={rosaMaria.links!.youtube!}
      />
      <CTA
        filePath={rosaMaria.cta!.vcf!}
        redirectTo={rosaMaria.cta!.linkTo}
        ctaText={rosaMaria.cta!.textCTA}
      />
      <Divider />
      <VideoCard video={RMAVideo} />
      <Divider />

      <Properties properties={rosaMaria!.properties} />
      <Divider />
      <ActionCard
        url={rosaMaria.links!.properties!}
        imgUrl={rosaMaria.images!.cardImage!}
        textTitle="Remax Central Realty"
        textSubtitle="Cónoce Más"
      />
      <Divider />
      <ImageCard
        src={FullImage}
        onClick={() => {
          window.open(rosaMaria.links!.instagram, "_blank");
        }}
      />
      <Footer />
    </MainWrapper>
  );
}
