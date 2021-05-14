const BASE_URL = `https://api.tvmaze.com`;

export async function apiGet(queryString) {
  try {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
