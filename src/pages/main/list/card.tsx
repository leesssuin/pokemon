import React from "react";
import styled from "styled-components";
import { PokemonInfo } from "types";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .card {
    width: 80%;
    margin: 1rem 0;
    border: 1px solid #dadada;
    border-radius: 15px;

    &:hover {
      box-shadow: 0 0.35rem 0.35rem rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }

  img {
    width: 100%;
  }

  p {
    margin: 1rem 0;
    text-align: center;
  }
`;

const Card = ({ pokemonInfo }: { pokemonInfo: PokemonInfo }) => {
  const { image, name } = pokemonInfo;

  return (
    <CardContainer>
      <div className="card">
        <img src={image} />
        <p>{name}</p>
      </div>
    </CardContainer>
  );
};

export default Card;
