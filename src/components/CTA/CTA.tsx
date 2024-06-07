import { Button, Wrapper } from "./CTA.styles";

export function CTA() {
  return (
    <Wrapper>
      <Button>Añadir Contacto</Button>
      <Button $primary>Escríbeme</Button>
    </Wrapper>
  );
}
