import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
    regionCode: "ID",
  },
  headers: {
    "X-RapidAPI-Key": "e07de26c81msh4ecf8704de1d705p1eeb1bjsn270bac8d450b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);

  return response.data;
};
