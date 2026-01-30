import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 130px;
  display: grid;
  cursor: pointer;
  overflow: hidden;
  transition: 300ms;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #363636;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #535353;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px 0px 0px 0px;
`;

export const TextSide = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.5;
  font-weight: 700;
  margin: 0;
`;

export const CardSubtitle = styled.h3`
  font-size: 1;
  font-weight: 400;
  margin: 0;
`;
