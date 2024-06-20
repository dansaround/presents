import { Button } from "../Button";
import { Wrapper } from "./CTA.styles";

type CTAProps = {
  filePath: string;
  redirectTo: string;
  ctaText: string;
};

export function CTA({ filePath, redirectTo, ctaText }: CTAProps) {
  const handleDownload = () => {
    const fileURL = filePath;
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "rosamaria.vcf";
    link.click();
  };

  const redirectWhatsapp = () => {
    const newURL = redirectTo;
    const link = document.createElement("a");
    link.href = newURL;
    link.target = "_blank";
    link.click();
  };

  return (
    <Wrapper>
      <Button onClick={handleDownload} $color="">
        Descargar Contacto
      </Button>
      <Button onClick={redirectWhatsapp} $primary>
        {ctaText}
      </Button>
    </Wrapper>
  );
}
