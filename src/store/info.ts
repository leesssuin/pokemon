import { atom, selector } from "recoil";

import { PokemonInfo } from "types";
import { PokemonAPI } from "api";

export const totalCountState = selector({
  key: "totalCountState",
  get: async () => {
    const response = await PokemonAPI.getListInfo();

    return response.count;
  },
});

export const pokemonListState = atom<PokemonInfo[]>({
  key: "pokemonListState",
  default: [],
});
