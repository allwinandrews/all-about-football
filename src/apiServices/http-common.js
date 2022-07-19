import axios from "axios";

import { BASE_URL } from "./apiConstants";

const mode = "dev";
// const mode = "staging";
// const mode = "prod";

const baseValues = {
  baseProtocol: {
    dev: "https://",
    staging: "http://",
    prod: "https://",
  },
  baseHost: {
    dev: BASE_URL,
  },
};

const baseProtocol = baseValues.baseProtocol[mode];
const baseHost = baseValues.baseHost[mode];

const HTTP = axios.create({
  baseURL: baseProtocol + baseHost,
  // timeout: 600000
  headers: {
    "X-RapidAPI-Key": "FAKE",
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});

export default HTTP;
