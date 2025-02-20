import { IBaseToken, IDeBridgeToken, ILifiToken, IOdosToken } from "../types";

export const normalizeDeBridgeTokens = (tokenList: {
  [key: string]: IDeBridgeToken;
}): IBaseToken[] => {
  const tokens: IBaseToken[] = [];

  for (let key in tokenList) {
    const token: IBaseToken = {
      address: tokenList[key].address,
      decimals: tokenList[key].decimals,
      name: tokenList[key].name,
      symbol: tokenList[key].symbol,
    };

    tokens.push(token);
  }

  return tokens;
};

export const normalizeLifiTokens = (tokenList: ILifiToken[]): IBaseToken[] => {
  const tokens = tokenList?.map((item) => {
    const token: IBaseToken = {
      address: item.address,
      decimals: item.decimals,
      name: item.name,
      symbol: item.symbol,
    };

    return token;
  });

  return tokens;
};

export const normalizeOdosTokens = (tokenList: {
  [key: string]: IOdosToken;
}): IBaseToken[] => {
  const tokens: IBaseToken[] = [];

  for (let key in tokenList) {
    const token: IBaseToken = {
      address: key,
      decimals: tokenList[key].decimals,
      name: tokenList[key].name,
      symbol: tokenList[key].symbol,
    };

    tokens.push(token);
  }

  return tokens;
};
