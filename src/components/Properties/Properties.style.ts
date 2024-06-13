import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 1.3em;
  margin: 10px 0px;
  text-align: center;
`;

export const SwiperSlidePro = styled(SwiperSlide)`
  width: auto;
`;
export const Card = styled.div`
  width: 180px;
  height: 340px;
  flex: 0 0 auto;
  border-radius: 15px;
  margin-bottom: 10px;
  flex-direction: column;
  background-color: #363636;
  /* border: 1px solid #ccc; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
`;

export const TextContainer = styled.div`
  padding: 0px 10px;
`;

export const Location = styled.h4`
  color: #fff;
  margin: 5px 0;
  font-weight: 500;
  font-size: 0.6em;
`;

export const CardTitle = styled.h3`
  font-size: 0.7em;
  font-weight: 700;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 0.7em;
  color: #585858;
  margin: 5px 0px;
`;
