import { useScrollReveal } from "../hooks/"; // Asegúrate de que la ruta sea correcta
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
import { useState } from "react";
import FullImage from "../assets/ceci/COVER FINAL.jpg";
import { Button } from "../components/Button";
import { MainWrapper } from "./Agent.styles";
import { MdOutlineTranslate } from "react-icons/md";
import { YouTube } from "../components/YoutubeVideo/YoutubeVideo";
import { Seo } from "../utils/Seo";

export function CeciCruz() {
  const { profile: ceciCruz } = people[1];
  const [toggleLanguage, setToggleLanguage] = useState(true);

  // Instancias del hook para cada bloque
  const revealHeader = useScrollReveal();
  const revealSocials = useScrollReveal();
  const revealCTA = useScrollReveal();
  const revealAbout = useScrollReveal();
  const revealVideo = useScrollReveal();
  const revealProject = useScrollReveal();
  const revealDossier = useScrollReveal();
  const revealImage = useScrollReveal();

  const handleToggleLanguage = () => {
    setToggleLanguage(!toggleLanguage);
  };

  return (
    <MainWrapper>
      <Seo
        name={ceciCruz.name}
        description={
          toggleLanguage
            ? "Gestora cultural | Directora | Productora | Artista y creadora escénica"
            : "Cultural manager | Director | Producer | Artist and scenic creator"
        }
        image={"https://hackmd.io/_uploads/SJoHz1IBWl.png"}
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleToggleLanguage} $color="#8a0081">
          <MdOutlineTranslate size={30} />
          {toggleLanguage ? "TRANSLATE TO ENGLISH" : "TRADUCIR AL ESPAÑOL"}
        </Button>
      </div>

      {/* SECCIÓN HEADER */}
      <div ref={revealHeader.ref} className={revealHeader.className}>
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
      </div>

      <div ref={revealSocials.ref} className={revealSocials.className}>
        <Socials
          urlWhatsapp={ceciCruz.links!.whatsapp!}
          urlInstagram={ceciCruz.links!.instagram!}
          urlLinkedIn={ceciCruz.links!.linkedin!}
        />
      </div>

      <div ref={revealCTA.ref} className={revealCTA.className}>
        <CTA
          filePath={ceciCruz.cta?.vcf!}
          vcfText={toggleLanguage ? "Descargar Contacto" : "Download VCard"}
          redirectTo={ceciCruz.cta!.linkTo}
          ctaText={toggleLanguage ? "Escribir mail" : "Send mail"}
        />
      </div>

      <Divider />

      {/* SECCIÓN SOBRE MÍ */}
      <div
        ref={revealAbout.ref}
        className={`${revealAbout.className} space-y-4`}
      >
        <h3 className="text-center px-4 text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          {toggleLanguage ? "Sobre mí" : "About me"}
        </h3>
        <p className="text-center px-4 text-md md:text-lg lg:text-xl font-light py-1 max-w-[750px] mx-auto opacity-90 leading-relaxed">
          {toggleLanguage
            ? `Artista y creadora escénica afroperuana, directora, productora y gestora cultural. Mi trabajo entrelaza lo artístico con temas de relevancia social como la igualdad de género, la educación sexual integral, la búsqueda y construcción de identidad y el antirracismo.`
            : "Afro-Peruvian performing artist-creator, director, producer, and cultural manager. My work intertwines art with socially relevant themes such as gender equality, sexual education, the construction of identity, and anti-racism."}
        </p>
      </div>

      <Divider />

      {/* SECCIÓN VIDEO */}
      <div
        ref={revealVideo.ref}
        className={`${revealVideo.className} flex w-full justify-center`}
      >
        <YouTube videoId="nkWjNT33SvI" />
      </div>

      <Divider />

      {/* SECCIÓN PROYECTO */}
      <div ref={revealProject.ref} className={revealProject.className}>
        <h3 className="text-center px-4 text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          {toggleLanguage
            ? "Cecilia: Mucha veces, en distintos lugares"
            : "Cecilia: Many times, in many places"}
        </h3>
        <p className="text-center px-4 text-md md:text-lg lg:text-xl font-light py-1 max-w-[750px] mx-auto opacity-90 leading-relaxed">
          {toggleLanguage
            ? `Proyecto ganador de Estímulos Económicos para la Cultura 2024 del Ministerio de Cultura del Perú...`
            : `Winning project of the 2024 Economic Stimuli for Culture...`}
        </p>
      </div>

      <Divider />

      {/* CARDS FINALES */}
      <div ref={revealDossier.ref} className={revealDossier.className}>
        <ActionCard
          url={
            toggleLanguage
              ? "https://shorturl.at/NPbNB"
              : "https://shorturl.at/829hp"
          }
          imgUrl={ceciCruz.images!.cardImage!}
          textTitle={
            toggleLanguage
              ? "Cecilia Cruz Dossier ES"
              : "Cecilia Cruz Dossier EN"
          }
          textSubtitle={toggleLanguage ? "Descargar" : "Download"}
        />
      </div>

      <Divider />

      <div ref={revealImage.ref} className={revealImage.className}>
        <ImageCard
          src={FullImage}
          onClick={() => {
            window.open(ceciCruz.links!.instagram, "_blank");
          }}
        />
      </div>

      <Footer />
    </MainWrapper>
  );
}
