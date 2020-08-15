import axios from "axios";

const apiCidades = axios.create({
  baseURL:
    "https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=SC",
});

export default apiCidades;
