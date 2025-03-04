import {
  IBaseToken,
  ICbridgeToken,
  IDeBridgeToken,
  ILifiToken,
  IMayanToken,
  IOdosToken,
  IRawHashPortToken,
} from "../types";

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

export const normalizeHashPortTokens = (
  tokenList: IRawHashPortToken[],
  chainId: number
): IBaseToken[] => {
  const tokens: IBaseToken[] = [];

  const tokensInChain = tokenList.find((item) => item.network.id === chainId);

  if (!tokensInChain?.assets) throw new Error("No hashport tokens found");

  const { assets } = tokensInChain;
  for (let key in assets) {
    const token: IBaseToken = {
      address: key,
      decimals: assets[key].decimals,
      name: assets[key].name,
      symbol: assets[key].symbol,
    };

    tokens.push(token);
  }

  return tokens;
};

export const normalizeCbridgeTokens = (
  tokenList: ICbridgeToken[]
): IBaseToken[] => {
  const tokens = tokenList
    // ?.filter((tok) => !tok.token.xfer_disabled)
    .map((item) => {
      const token: IBaseToken = {
        address: item.token.address,
        decimals: item.token.decimal,
        name: item.name,
        symbol: item.token.symbol,
      };

      return token;
    });

  return tokens;
};

export const normalizeMayanTokens = (
  tokenList: IMayanToken[]
): IBaseToken[] => {
  const tokens = tokenList.map((item) => {
    const token: IBaseToken = {
      address: item.contract,
      decimals: item.decimals,
      name: item.name,
      symbol: item.symbol,
    };

    return token;
  });

  return tokens;
};
