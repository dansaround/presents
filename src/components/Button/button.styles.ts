import styled from "styled-components";

export const Button = styled.button<{
  $primary?: boolean;
  $weight?: number;
  $color?: string;
}>`
  gap: 10px;
  border: none;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0.2em;
  padding: 0.8em 5px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  font-weight: ${(props) => props.$weight || 800};
  color: ${(props) => (props.$primary ? "white" : "white")};
  background: ${(props) =>
    props.$primary ? "#FF0000" : props.$color || "blue"};

  &:hover {
    background: ${(props) => (props.$primary ? "white" : "#3F88C5")};
    color: ${(props) => (props.$primary ? "#6B70FF" : "white")};
  }

  &:active {
    transform: scale(0.97);
  }
`;
