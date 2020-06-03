const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms () {
  const apiURL = `${baseUrl}/trending/searches?api_key=${apiKey}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}