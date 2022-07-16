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
    // "X-RapidAPI-Key": "3503b5dc1fmsh4fbe269a0a24b51p1e8433jsnb009d1fcd530",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});

export default HTTP;
