import {
  CTA,
  Divider,
  Header,
  Socials,
  ImageCard,
  ActionCard,
  Footer,
} from "../components";
import { people } from "../people";
import { MainWrapper } from "./Agent.styles";
import FullImage from "../assets/ceci/COVER CECI.jpg";
import { VideoCard } from "../components/Video";
import RMAVideo from "../assets/rma/video_vertical.mp4";

export function CeciCruz() {
  const { profile: ceciCruz } = people[1];

  return (
    <MainWrapper>
      <Header
        name={ceciCruz.name}
        role={ceciCruz.role!}
        description={ceciCruz.description}
        profilePic={ceciCruz.images!.profile}
        coverImg={ceciCruz.images!.cover!}
      />
      <Socials
        urlWhatsapp={ceciCruz.links!.whatsapp!}
        urlTikTok={ceciCruz.links!.tiktok!}
        urlInstagram={ceciCruz.links!.instagram!}
        urlFacebook={ceciCruz.links!.facebook!}
        urlLinkedIn={ceciCruz.links!.linkedin!}
        urlYoutube={ceciCruz.links!.youtube!}
      />
      <CTA
        filePath={ceciCruz.cta!.vcf!}
        redirectTo={ceciCruz.cta!.linkTo}
        ctaText={ceciCruz.cta!.textCTA}
      />
      <Divider />
      <VideoCard video={RMAVideo} />
      <Divider />

      <Divider />
      <ActionCard
        url={ceciCruz.links!.properties!}
        imgUrl={ceciCruz.images!.cardImage!}
        textTitle="Remax Central Realty"
        textSubtitle="Cónoce Más"
      />
      <Divider />
      <ImageCard
        src={FullImage}
        onClick={() => {
          window.open(ceciCruz.links!.instagram, "_blank");
        }}
      />
      <Footer />
    </MainWrapper>
  );
}
