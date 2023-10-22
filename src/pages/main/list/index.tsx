import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { pokemonListState, totalCountState } from "store/info";
import { PokemonAPI } from "api";
import Card from "./card";

const ListSection = styled.section`
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 3rem 3rem;
  }
`;

const List = () => {
  const [startIdx, setStartIdx] = useState(0);

  const totalCount = useRecoilValue(totalCountState);
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);

  useEffect(() => {
    const getInfo = async () => {
      const totalInfoArray = [];

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
          <Card pokemonInfo={pokemon} key={idx} />
        ))}
      </div>
    </ListSection>
  );
};

export default List;
