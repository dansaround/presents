import styled from "styled-components";
import { CTA, Divider, Header, Properties, Socials } from "./components";
import { people } from "./people";
import { ActionCard } from "./components/";

const AppWrapper = styled.main`
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

function App() {
  const { rosaMaria } = people[0];
  const { properties: rmaProperties } = rosaMaria;
  return (
    <>
      <AppWrapper>
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
      </AppWrapper>
    </>
  );
}

export default App;
