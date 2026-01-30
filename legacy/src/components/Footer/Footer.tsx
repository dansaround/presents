import { SocialIcon } from "react-social-icons";
import { FooterWrapper } from "./Footer.styles";

export function Footer() {
  return (
    <FooterWrapper>
      © 2024 por Daniel Kcomt | @dansaround.dev
      <SocialIcon
        href="https://www.linkedin.com/in/daniel-kcomt-frontend-developer/"
        target="_blank"
        network="linkedin"
        style={{ height: "25px", width: "25px" }}
      />
    </FooterWrapper>
  );
}
