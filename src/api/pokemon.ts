import axios from "./config/axiosInstance";
import { PokemonInfo, PokemonInfoSpeciesInfo } from "types";

type PageInfo = {
  count: number;
  next: string | null;
  preveious: string | null;
  results: [];
};

const getListInfo = async <T = PageInfo>() => {
  const response = await axios.get<T>("/pokemon?limit=20&offset=$20");

  return response.data;
};

const getDefualtInfo = async (id: number): Promise<any> => {
  const response = await axios.get(`/pokemon/${id}`);

  return {
    id: response.data.id,
    abilities: response.data.abilities,
    height: response.data.height,
    image: response.data.sprites.front_default,
    types: response.data.types,
    weight: response.data.weight,
  } as PokemonInfo;
};

const getSpeciesInfo = async (id: number): Promise<any> => {
  const response = await axios.get(`/pokemon-species/${id}`);

  const nameList = response.data.names;
  const flavorTextList = response.data.flavor_text_entries;

  const name = nameList.find((item: any) => item.language.name === "ko").name;
  const flavorTextArray = flavorTextList.filter(
    (item: any) => item.language.name === "ko",
  );

  return {
    name,
    flavor: flavorTextArray,
  } as PokemonInfoSpeciesInfo;
};

export const PokemonAPI = { getListInfo, getDefualtInfo, getSpeciesInfo };
