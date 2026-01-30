import styled from "styled-components";

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    transform: scale(0.99);
  }
`;
