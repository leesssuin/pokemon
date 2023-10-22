import axios from "axios";

export const instace = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default instace;
