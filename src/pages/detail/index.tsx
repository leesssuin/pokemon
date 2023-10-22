import React from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

import { PokemonInfo } from "types";

type AbilitiesType = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
};

const DetailContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    .name {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .img-wrap {
      width: 70%;

      img {
        width: 100%;
      }
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .info {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .info-wrap {
      margin: 1.5rem 0;

      .ability {
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 10px;
        background-color: #a7ce97;
        font-weight: 600;
      }

      .type-name {
        margin: 1rem;
        padding: 0.5rem;
        border: 3px solid #f05e5e;
        border-radius: 10px;
        font-weight: 600;

        &:last-child {
          border: 3px solid #b05ef0;
        }
      }
    }
  }
`;

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const { image, name, abilities, flavor, height, weight, types } = location
    .state.pokemon as PokemonInfo;

  const typeNmae = types.map((item) => item.type.name);
  console.log(">>>>>", id, location);
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
