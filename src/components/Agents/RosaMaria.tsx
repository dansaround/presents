import {
  CTA,
  Divider,
  Header,
  Socials,
  ImageCard,
  Properties,
  ActionCard,
} from "../";
import { people } from "../../people";
import { MainWrapper } from "./Agent.styles";
import FullImage from "../../assets/ExampleBody.png";

const handleRedirect = (url: string) => {
  window.open(url, "_blank");
};

export function RosaMaria() {
  const { rosaMaria } = people[0];
  const { properties: rmaProperties } = rosaMaria;
  return (
    <MainWrapper>
      <Header
        name={rosaMaria.name}
        role={rosaMaria.role}
        description={rosaMaria.description}
        profilePic={rosaMaria.images.profile}
        coverImg={rosaMaria.images.cover}
      />
      <Socials
        urlWhatsapp={rosaMaria.links.whatsapp}
        urlTikTok={rosaMaria.links.tiktok}
        urlInstagram={rosaMaria.links.instagram}
        urlFacebook={rosaMaria.links.facebook}
        urlLinkedIn={rosaMaria.links.linkedin}
        urlYoutube={rosaMaria.links.youtube}
      />
      <CTA
        filePath={rosaMaria.cta.vcf}
        redirectTo={rosaMaria.cta.linkTo}
        ctaText={rosaMaria.cta.textCTA}
      />
      <Divider />
      <Properties properties={rmaProperties} />
      <Divider />
      <ActionCard />
      <Divider />
      <ImageCard
        src={FullImage}
        onClick={() => {
          handleRedirect("https://www.instagram.com/rosa_alvarezs/");
        }}
      />
    </MainWrapper>
  );
}
