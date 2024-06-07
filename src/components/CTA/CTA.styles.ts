import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  max-width: 100%;
  align-items: center;
  border-radius: 15px;
`;

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#E94F37" : "#3F88C5")};
  color: ${(props) => (props.$primary ? "white" : "white")};
  width: 100%;
  font-size: 1em;
  font-weight: 400;
  margin: 15px 0.2em;
  padding: 0.8em 5px;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$primary ? "white" : "#3F88C5")};
    color: ${(props) => (props.$primary ? "#E94F37" : "white")};
  }

  &:active {
    transform: scale(0.97);
  }
`;
