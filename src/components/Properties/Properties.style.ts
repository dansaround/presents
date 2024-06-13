import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
`;

export const SwiperPro = styled(Swiper)`
  width: 100%;
`;

export const SwiperSlidePro = styled(SwiperSlide)`
  text-align: start;
  font-size: 18px;
  width: auto;
  padding-bottom: 40px;
`;

export const Card = styled.div`
  flex: 0 0 auto;
  flex-direction: column;
  width: 300px;
  height: 360px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #363636;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 18vh;
  border-radius: 10px;
  overflow: hidden;

  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 1em;
  margin: 0;
`;

export const CardTitle = styled.h2`
  font-size: 1em;
  margin: 0;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 1em;
  color: #888;
`;

export const Location = styled.h4`
  font-size: 0.8em;
  font-weight: 500;
  margin: 5px 0;
  color: #fff;
`;
