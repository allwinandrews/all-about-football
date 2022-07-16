export const symbolSplit = (key, symbol = "_") => key.split(symbol);

export function capitalizeWords(toCapitalizeArray, toUpperCaseArray = []) {
  return toCapitalizeArray.map((element) =>
    toUpperCaseArray.includes(element)
      ? element.toUpperCase()
      : element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
  );
}

export function getCapitalizedLabelAndRemoveSymbols(string) {
  const stringWithoutChars = string.replace(/[-/]/g, " ");

  return capitalizeWords(stringWithoutChars.split(" ")).join(" ");
}
