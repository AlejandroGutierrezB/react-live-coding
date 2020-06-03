const baseUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs ({ limit = 25, keyword = 'morty', page = 0 } = {}) {
  const apiURL = `${baseUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}