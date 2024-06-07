import styled from "styled-components";
import { CTA, Header } from "./components";

const AppWrapper = styled.main`
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <CTA />
    </AppWrapper>
  );
}

export default App;
