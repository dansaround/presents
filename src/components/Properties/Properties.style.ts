import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
  /* width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  overflow: hidden;
  padding: 20px 0; */
`;

export const SwiperPro = styled(Swiper)`
  width: 100%;
`;

export const SwiperSlidePro = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  width: auto;
  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 100px; //TODO
`;

export const Card = styled.div`
  flex: 0 0 auto;
  flex-direction: column;
  width: 250px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #363636;
`;

export const Title = styled.h2`
  font-size: 0.9em;
`;
export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: auto;
  object-fit: cover;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 1em;
  color: #888;
`;

export const Location = styled.h4`
  font-size: 0.6;
  font-weight: 500;
  margin: 0;
  color: #fff;
`;
