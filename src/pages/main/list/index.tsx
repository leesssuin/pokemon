import React, { useEffect, useRef, useState } from "react";
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

    .target-ref {
      width: 100%;
      height: 200px;
    }
  }
`;

const List = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const totalCount = useRecoilValue(totalCountState);
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);

  let startIdx = 0;

  const getInfo = async (startNumber: number) => {
    const totalInfoArray: any = [];

    for (let i = startNumber; i < startNumber + 20; i++) {
      try {
        const defaultInfo = await PokemonAPI.getDefualtInfo(i + 1);
        const speciesInfo = await PokemonAPI.getSpeciesInfo(i + 1);

        totalInfoArray.push({ ...defaultInfo, ...speciesInfo });
      } catch (err) {
        alert("데이터를 불러오는데 문제가 발생했습니다.");
      }
    }

    setPokemonList((prevState) => prevState.concat(totalInfoArray));
    startIdx = startIdx + 20;
    setIsLoaded(false);

    if (startIdx > totalCount && !totalCount) {
      setIsEnd(false);
    }
  };

  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getInfo(startIdx);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (isLoaded && !isEnd) {
      getInfo(startIdx);
    }
  }, [isLoaded]);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    setTarget(targetRef.current);

    if (target && !isEnd) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target, isLoaded]);

  return (
    <ListSection>
      <div className="container">
        {pokemonList?.map((pokemon, idx) => (
          <Card pokemonInfo={pokemon} key={idx} />
        ))}
        <div ref={targetRef} className="target-ref" />
      </div>
    </ListSection>
  );
};

export default List;
