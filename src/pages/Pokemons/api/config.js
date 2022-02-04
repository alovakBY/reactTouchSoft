import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const config = {
    baseURL: BASE_URL,
};

export default axios.create(config);
