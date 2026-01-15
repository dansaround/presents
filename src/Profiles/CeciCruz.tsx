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
import { useEffect, useState } from "react";
import FullImage from "../assets/ceci/COVER FINAL.jpg";
import { Button } from "../components/Button";
import { MainWrapper } from "./Agent.styles";
import { MdOutlineTranslate } from "react-icons/md";
import { YouTube } from "../components/YoutubeVideo/YoutubeVideo";
import { Seo } from "../utils/Seo";
// import { VideoCard } from "../components/Video";

export function CeciCruz() {
  const { profile: ceciCruz } = people[1];
  const [toggleLanguage, setToggleLanguage] = useState(true);

  const handleToggleLanguage = () => {
    setToggleLanguage(!toggleLanguage);
  };

  useEffect(() => {
    document.title = `${ceciCruz.name} | Productora - Dramaturga`;
  }, [ceciCruz.name]);

  return (
    <MainWrapper>
      <Seo
        name={ceciCruz.name}
        description={
          toggleLanguage
            ? "Bachiller en Ciencias y Artes de la Comunicación..."
            : "Bachelor in Communication Sciences..."
        }
        image={"https://hackmd.io/_uploads/SkXWxkUBWx.jpg"}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button onClick={handleToggleLanguage} $color="#8a0081">
          <MdOutlineTranslate size={30} />
          {toggleLanguage ? "TRANSLATE TO ENGLISH" : "TRADUCIR AL ESPAÑOL"}
        </Button>
      </div>
      <Header
        name={ceciCruz.name}
        role={ceciCruz.role!}
        description={
          toggleLanguage
            ? ceciCruz.description
            : "Cultural manager | Director | Producer | Artist and scenic creator"
        }
        profilePic={ceciCruz.images!.profile}
        coverImg={ceciCruz.images!.cover!}
      />
      <Socials
        urlWhatsapp={ceciCruz.links!.whatsapp!}
        urlInstagram={ceciCruz.links!.instagram!}
        urlLinkedIn={ceciCruz.links!.linkedin!}
      />
      <CTA
        filePath={ceciCruz.cta?.vcf!}
        vcfText={toggleLanguage ? "Descargar Contacto" : "Download VCard"}
        redirectTo={ceciCruz.cta!.linkTo}
        ctaText={toggleLanguage ? "Escribir mail" : "Send mail"}
      />
      <Divider />
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7", // Clave para que no se vea apretado
          color: "#e0e0e0 ", // Cambia a si tu fondo es oscuro
          textAlign: "justify", // Alineación limpia
          maxWidth: "750px", // Evita que las líneas sean infinitas
          margin: "20px auto", // Centra el bloque y da espacio arriba/abajo
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "0.01em",
          opacity: 0.9, // Suaviza un poco el color
        }}
      >
        {toggleLanguage
          ? `Bachiller en Ciencias y Artes de la Comunicación con mención en Artes
        Escénicas por la PUCP, egresada de la V Promoción del programa de
        Formación Actoral de Ciclorama (2024), invitada al Encuentro de Mujeres
        Creadoras y Performáticas 2024 “Alquimias y Poéticas del Cuerpo” del
        Grupo...... `
          : "Bachelor in Communication Sciences and Arts with a mention in Performing Arts from the PUCP, graduated from the V Promotion of the Ciclorama Actor Training program (2024), invited to the Meeting of Creative and Performing Women 2024 “Alchemies and Poetics of the Body” of the Group......"}
      </p>
      <Divider />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <YouTube videoId="nkWjNT33SvI" />
      </div>
      <Divider />
      <ActionCard
        url={ceciCruz.links!.properties!}
        imgUrl={ceciCruz.images!.cardImage!}
        textTitle={
          toggleLanguage ? "Cecilia Cruz Dossier ES" : "Cecilia Cruz Dossier EN"
        }
        textSubtitle={toggleLanguage ? "Descargar" : "Download"}
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
