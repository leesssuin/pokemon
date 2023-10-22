import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { PokemonAPI } from "api";
import { pokemonListState } from "store";

const SearchBarSection = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .search-wrap {
    margin: 1rem;

    input {
      margin-right: 1rem;
      width: 15rem;
      height: 2rem;
    }

    button {
      height: 2.35rem;
    }
  }
`;

const SearchBar = () => {
  const [searchId, setSearchId] = useState("");

  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchId(event.target.value);
    },
    [],
  );

  const HandleSearchButtonClick = async () => {
    try {
      const defaultInfo = await PokemonAPI.getDefualtInfo(Number(searchId));
      const speciesInfo = await PokemonAPI.getSpeciesInfo(Number(searchId));

      setPokemonList([{ ...defaultInfo, ...speciesInfo }]);
    } catch (err) {
      alert("데이터를 불러오는데 문제가 발생했습니다.");
    }
  };

  return (
    <SearchBarSection>
      <div className="search-wrap">
        <input
          name="search"
          type="number"
          placeholder="검색할 포켓몬 ID값을 넣어주세요"
          onChange={handleChange}
        />
        <button onClick={HandleSearchButtonClick}>검색</button>
      </div>
    </SearchBarSection>
  );
};

export default SearchBar;
