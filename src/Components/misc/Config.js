const BASE_URL = `https://api.tvmaze.com`;

export async function apiGet(queryString) {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const result = await response.json();
  //   console.log(result);
  return result;
}
