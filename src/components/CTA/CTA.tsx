import { Button, Wrapper } from "./CTA.styles";

export function CTA() {
  const handleDownload = () => {
    const fileURL = `src/assets/rosamaria.vcf`;
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "rosamaria.vcf";
    link.click();
  };

  const redirectWhatsapp = () => {
    const newURL = "https://wa.link/2q2tzs";
    const link = document.createElement("a");
    link.href = newURL;
    link.target = "_blank";
    link.click();
  };

  return (
    <Wrapper>
      <Button onClick={handleDownload}>Añadir Contacto</Button>
      <Button onClick={redirectWhatsapp} $primary>
        Escríbeme
      </Button>
    </Wrapper>
  );
}
