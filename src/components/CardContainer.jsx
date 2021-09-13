import React from "react";
import styled from "styled-components";
import { testData } from "../data";
import Card from "./Card";
import TallCard from "./TallCard";

const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  width: 100%;
  height: 100%;
  gap: 1em;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, fit-content);
    gap: 1em;
  }
`;

const CardContainer = () => {
  return (
    <CardGrid>
      <TallCard></TallCard>
      {testData.map((item, index) => (
        <Card key={item.title} {...item} itemIndex={index}></Card>
      ))}
    </CardGrid>
  );
};

export default CardContainer;
