import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 10px;
  aspect-ratio: 9/16;
  overflow: hidden;
`;

export const Frame = styled.iframe`
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: none;
  transition: 200ms;
`;
