import React from "react";
import { useLocation, useParams } from "react-router";

import { DetailContainer } from "./styles";
import { PokemonInfo } from "types";

type AbilitiesType = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const { image, name, abilities, flavor, height, weight, types } = location
    .state.pokemon as PokemonInfo;

  const typeNmae = types.map((item) => item.type.name);

  return (
    <DetailContainer>
      <div className="detail">
        <div className="img-wrap">
          <img src={image} alt="포켓몬 이미지" />
        </div>
        <p># {id}</p>
        <p className="name">{name}</p>
        <p>{flavor[0].flavor_text}</p>
        <div>
          <div className="info-wrap">
            <span className="title">Abilities: </span>
            {abilities.map((item: AbilitiesType, idx: number) => (
              <span key={idx} className="ability">
                {item.ability.name}
              </span>
            ))}
          </div>
          <div className="info-wrap">
            <span className="title">Height: </span>
            <span className="info">{height}</span>
          </div>
          <div className="info-wrap">
            <span className="title">Weight: </span>
            <span className="info">{weight}</span>
          </div>
          <div className="info-wrap">
            <span className="title">Type: </span>
            {typeNmae.map((name, idx) => (
              <span className="type-name" key={idx}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DetailContainer>
  );
}

export default DetailPage;
