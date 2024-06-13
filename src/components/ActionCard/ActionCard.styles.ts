import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 130px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #363636;
  /* border: 1px solid #ccc; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
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
