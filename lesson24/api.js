export const api = {
  get(limit, offset) {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
  },
};
