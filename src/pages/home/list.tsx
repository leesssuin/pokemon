import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { pokemonListState, totalCountState } from "store/info";
import { PokemonAPI } from "api";

const ListSection = styled.section`
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .card {
    width: 100%;
    border: 1px solid black;
  }
`;

export default function ListPage() {
  const [startIdx, setStartIdx] = useState(0);

  const totalCount = useRecoilValue(totalCountState);
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);

  useEffect(() => {
    const getInfo = async () => {
      let totalInfoArray = [];

      for (let i = 0; i < startIdx + 20; i++) {
        try {
          const defaultInfo = await PokemonAPI.getDefualtInfo(i + 1);
          const speciesInfo = await PokemonAPI.getSpeciesInfo(i + 1);

          totalInfoArray.push({ ...defaultInfo, ...speciesInfo });
        } catch (err) {
          console.log(err);
        }
      }

      setPokemonList(totalInfoArray);
    };

    getInfo();
  }, []);

  return (
    <ListSection>
      <div className="container">
        {pokemonList?.map((pokemon, idx) => (
          <div key={idx}>
            <img src={pokemon.image} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </ListSection>
  );
}
