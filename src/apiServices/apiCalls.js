import HTTP from "./http-common";

import { TOP_SCORERS } from "./apiConstants";

import { topScorersMockData } from "../mockDatas";

export const getTopScorers = (
  params,
  callback,
  errorcallback,
  loadingCallback
) => {
  // console.log("getTopScorers");

  loadingCallback(true);
  callback(topScorersMockData);
  loadingCallback(false);

  // HTTP.get(TOP_SCORERS, { params })
  //   .then((response) => {
  //     callback(response);
  //     loadingCallback(false);
  //   })
  //   .catch((error) => {
  //     console.log(error?.message);
  //     if (error?.message.includes("fail")) callback(topScorersMockData);
  //     else errorcallback(error);

  //     loadingCallback(false);
  //   });
};
