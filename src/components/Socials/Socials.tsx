import { SocialIcon } from "react-social-icons";
import { Wrapper } from "./Socials.styles";

export default function Socials() {
  const urlWhatsapp = "https://wa.me/message/63G3GQCG742WM1";

  const urlTikTok = "https://www.tiktok.com/@rosamariaalvarezsalas";
  const urlInstagram = "https://www.instagram.com/rosa_alvarezs";
  const urlFacebook = "https://www.facebook.com/rosamariarealtor";
  const urlLinkedIn = "https://www.linkedin.com/in/rosa-maria-alvarez-salas-/";
  const urlYoutube = "https://www.youtube.com/@rosamariaalvarezsalas";

  return (
    <Wrapper>
      <SocialIcon href={urlWhatsapp} target="_blank" network="whatsapp" />
      <SocialIcon href={urlInstagram} target="_blank" network="instagram" />
      <SocialIcon href={urlTikTok} target="_blank" network="tiktok" />
      <SocialIcon href={urlFacebook} target="_blank" network="facebook" />
      <SocialIcon href={urlLinkedIn} target="_blank" network="linkedin" />
      <SocialIcon href={urlYoutube} target="_blank" network="youtube" />
    </Wrapper>
  );
}
