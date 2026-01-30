import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
`;

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  pointer-events: none;
  transform: translateY(-7px);
  border-radius: 20px;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #fff;
  margin: 20px 0 0 0;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #ccc;
  text-align: center;
`;

export const Description = styled.span`
  font-size: 16px;
  font-weight: 400;

  color: #aaa;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 4em;
  left: 50;
  /* transform: translateY(80px); */
  max-width: 130px;
  border-radius: 50%;
  object-fit: cover;
`;
