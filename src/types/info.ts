export interface PokemonInfo {
  id: number;
  name: string;
  abilities: [];
  height: number;
  image: string;
  types: [];
  weight: number;
  species?: PokemonInfoSpeciesInfo;
}

export interface PokemonInfoSpeciesInfo {
  name: string;
  flavor: [];
}
