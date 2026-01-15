import { Button } from "../Button";
import { Wrapper } from "./CTA.styles";

type CTAProps = {
  filePath: string;
  redirectTo: string;
  ctaText: string;
  vcfText?: string;
};

export function CTA({ filePath, redirectTo, ctaText, vcfText }: CTAProps) {
  const handleDownload = () => {
    const fileURL = filePath;
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "contact.vcf";
    link.click();
  };

  const redirectWhatsapp = () => {
    const newURL = redirectTo;
    const link = document.createElement("a");
    link.href = newURL;
    link.target = "_blank";
    link.click();
  };

  const handleAction = () => {
    // Expresión regular básica para validar email
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(redirectTo);

    if (isEmail) {
      // Lógica de Correo
      window.location.href = `mailto:${redirectTo}?subject=Contacto desde la web`;
    } else {
      // Lógica de WhatsApp / Link externo
      const link = document.createElement("a");
      link.href = redirectTo;
      link.target = "_blank";
      link.rel = "noopener noreferrer"; // Buena práctica de seguridad
      link.click();
    }
  };
  return (
    <Wrapper>
      <Button onClick={handleDownload} $color="">
        {vcfText || "Descargar Contacto"}
      </Button>
      <Button onClick={redirectWhatsapp} $primary>
        {ctaText}
      </Button>
    </Wrapper>
  );
}
