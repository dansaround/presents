import styled from "styled-components";

export const Button = styled.button<{
  $primary?: boolean;
  $weight?: number;
  $color?: string;
}>`
  background: ${(props) =>
    props.$primary ? "#FF0000" : props.$color || "blue"};
  color: ${(props) => (props.$primary ? "white" : "white")};
  width: 100%;
  font-size: 1em;
  font-weight: ${(props) => props.$weight || 800};
  margin: 15px 0.2em;
  padding: 0.8em 5px;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$primary ? "white" : "#3F88C5")};
    color: ${(props) => (props.$primary ? "#6B70FF" : "white")};
  }

  &:active {
    transform: scale(0.97);
  }
`;
