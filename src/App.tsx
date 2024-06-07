import styled from "styled-components";
import { Header } from "./components/Header";

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
    </AppWrapper>
  );
}

export default App;
