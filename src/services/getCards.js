export const getCards = async (start = 0, limit = 10) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos/?_start=${start}&_limit=${limit}`
  ).then((response) => response.json());
  return data;
};
