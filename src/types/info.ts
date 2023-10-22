export interface PokemonInfo {
  id: number;
  name: string;
  abilities: [];
  height: number;
  image: string;
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
  flavor: {
    flavor_text: string;
    language: { name: string; url: string };
    version: { name: string; url: string };
  }[];
}

export interface PokemonInfoSpeciesInfo {
  name: string;
  flavor: [];
}
