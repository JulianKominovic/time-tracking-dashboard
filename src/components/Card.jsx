import React from "react";
import { useContext } from "react/cjs/react.development";
import styled from "styled-components";
import ContextDataType from "../context/ContextDataType";
const Container = styled.article`
  position: relative;
  @media screen and (max-width: 1023px) {
    height: 150px;
  }
`;

const CardTop = styled.main`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.bg};
  border-radius: 18px;
  overflow: hidden;

  @media screen and (max-width: 1023px) {
    padding: 0;
  }
`;

const CardBody = styled.header`
  position: absolute;
  border-radius: 18px;
  bottom: -1px;
  left: -1px;
  border: 1px solid #1d204b;
  height: 80%;
  width: 80%;
  background-color: #1d204b;
  padding: 0 10%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    background-color: #34397b;
    border: 1px solid #34397b;
  }

  @media screen and (max-width: 1023px) {
    justify-content: space-evenly;
  }
`;

const IconTopRight = styled.img`
  position: absolute;
  top: -2%;
  right: 6%;

  object-fit: cover;
`;

const Title = styled.h1`
  color: white;

  font-size: 18px;
  font-weight: 500;
`;

const Hours = styled.h2`
  color: white;

  font-size: 48px;
  font-weight: 300;
`;

const CardBodyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(10);
  }
`;

const ButtonImage = styled.img``;

const SmallText = styled.small`
  color: white;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 300;
`;

const HoursContainer = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const COLORS = [
  "#FF8B64",
  "#56C2E6",
  "#FF5E7D",
  "#4BCF83",
  "#7235D1",
  "#F1C75B",
];
const Card = ({ title, timeframes, itemIndex }) => {
  const [currentDataType] = useContext(ContextDataType);
  const cardImageSvg = `/images/icon-${title
    .toLowerCase()
    .replace(` `, "-")}.svg`;

  return (
    <Container>
      <CardTop bg={COLORS[itemIndex]}>
        <IconTopRight src={cardImageSvg}></IconTopRight>
      </CardTop>
      <CardBody>
        <CardBodyHeader>
          <Title>{title}</Title>
          <Button>
            <ButtonImage src="/images/icon-ellipsis.svg"></ButtonImage>
          </Button>
        </CardBodyHeader>
        <HoursContainer>
          <Hours>{`${
            timeframes[currentDataType.toLowerCase()].current
          }hrs`}</Hours>
          <SmallText>{`Last Week - ${
            timeframes[currentDataType.toLowerCase()].previous
          }hrs`}</SmallText>
        </HoursContainer>
      </CardBody>
    </Container>
  );
};

export default Card;
