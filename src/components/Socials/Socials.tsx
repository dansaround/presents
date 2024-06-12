import { SocialIcon } from "react-social-icons";
import { Wrapper } from "./Socials.styles";

type SocialsProps = {
  urlWhatsapp?: string;
  urlTikTok?: string;
  urlInstagram?: string;
  urlFacebook?: string;
  urlLinkedIn?: string;
  urlYoutube?: string;
};

export function Socials({
  urlWhatsapp,
  urlTikTok,
  urlInstagram,
  urlFacebook,
  urlLinkedIn,
  urlYoutube,
}: SocialsProps) {
  return (
    <Wrapper>
      {urlWhatsapp && (
        <SocialIcon href={urlWhatsapp} target="_blank" network="whatsapp" />
      )}
      {urlInstagram && (
        <SocialIcon href={urlInstagram} target="_blank" network="instagram" />
      )}
      {urlTikTok && (
        <SocialIcon href={urlTikTok} target="_blank" network="tiktok" />
      )}
      {urlFacebook && (
        <SocialIcon href={urlFacebook} target="_blank" network="facebook" />
      )}
      {urlLinkedIn && (
        <SocialIcon href={urlLinkedIn} target="_blank" network="linkedin" />
      )}
      {urlYoutube && (
        <SocialIcon href={urlYoutube} target="_blank" network="youtube" />
      )}
    </Wrapper>
  );
}
