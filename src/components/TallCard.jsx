import React, { useContext } from "react";
import Context from "../context/ContextDataType";
import styled from "styled-components";

const CardContainer = styled.article`
  color: white;
  position: relative;
  width: 100%;
  background-color: #1d204b;
  grid-row: 1/3;
  grid-column: 1;
  height: 100%;
  border-radius: 18px;

  @media screen and (max-width: 1023px) {
    padding-bottom: 2%;
    grid-row: 1/3;
    height: fit-content;
  }
`;

const CardUserInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  top: 0;
  left: 0;
  padding: 10% 10%;
  width: 80%;
  height: 55%;
  border-radius: 18px;
  background-color: #5746ea;

  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    padding: 6% 10%;
    gap: 10%;
  }
`;

const CardUserImg = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  width: 40%;
  height: auto;

  @media screen and (max-width: 1023px) {
    width: 20%;
  }
`;

const CardReportText = styled.small`
  font-weight: 400;
  opacity: 0.6;
`;

const CardUserName = styled.h1`
  font-weight: 300;
  font-size: 36px;
`;

const CardDataSection = styled.div`
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  height: 30%;
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    padding-top: 3%;
  }
`;

const CardDataOption = styled.button`
  color: white;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  opacity: ${(props) => props.opacity};
  cursor: pointer;
  font-size: 18px;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  &:hover {
    opacity: 1;
  }
`;

const TallCard = ({ gridPosition }) => {
  const { currentDataType, setCurrentDataType } = useContext(Context);

  const temporalChooser = ["Daily", "Weekly", "Monthly"];
  return (
    <CardContainer gridPos={gridPosition}>
      <CardUserInfo>
        <CardUserImg src="/images/image-jeremy.png"></CardUserImg>
        <div>
          <CardReportText>Report for</CardReportText>
          <CardUserName>Jeremy Robson</CardUserName>
        </div>
      </CardUserInfo>
      <CardDataSection>
        {temporalChooser.map((item) => (
          <CardDataOption
            key={item}
            opacity={item === currentDataType ? 1 : 0.6}
            onClick={() => {
              setCurrentDataType(item);
            }}
          >
            {item}
          </CardDataOption>
        ))}
      </CardDataSection>
    </CardContainer>
  );
};

export default TallCard;
