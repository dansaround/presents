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

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 500px;
`;

export const Card = styled.div`
  flex: 0 0 auto;
  flex-direction: column;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #363636;
`;

export const Title = styled.h2`
  font-size: 1em;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 100px;
  height: 200px;
  object-fit: scale-down;
`;

export const Price = styled.p`
  font-size: 1em;
  color: #888;
`;

export const Location = styled.h4`
  font-size: 0%.8;
  color: #fff;
`;
