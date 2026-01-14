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
import { useEffect, useState } from "react";

export function CeciCruz() {
  const { profile: ceciCruz } = people[1];
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const handleToggleLanguage = () => {
    setToggleLanguage(!toggleLanguage);
  };

  useEffect(() => {
    document.title = `${ceciCruz.name} | Productora - Dramaturga`;
  }, [ceciCruz.name]);

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
        urlInstagram={ceciCruz.links!.instagram!}
        urlLinkedIn={ceciCruz.links!.linkedin!}
      />
      <CTA
        filePath={ceciCruz.cta!.vcf!}
        redirectTo={ceciCruz.cta!.linkTo}
        ctaText={ceciCruz.cta!.textCTA}
      />
      <Divider />
      Seccion 1
      <Divider />
      Seccion 2
      <Divider />
      <ActionCard
        url={ceciCruz.links!.properties!}
        imgUrl={ceciCruz.images!.cardImage!}
        textTitle="Contáctame por email"
        textSubtitle="Enviar mensaje"
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
