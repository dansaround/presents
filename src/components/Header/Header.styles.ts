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
  border-radius: 15px;
  overflow: hidden;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%; /* Adjust the height as necessary */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  pointer-events: none; /* Ensures the overlay doesn't block clicks */
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin-bottom: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #fff;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: #ccc;
  margin-bottom: 0.75em;
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
  top: 5em;
  left: 50;
  /* transform: translateY(80px); */
  max-width: 130px;
  border-radius: 50%;
  object-fit: cover;
`;
