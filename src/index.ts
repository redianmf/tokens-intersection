import { TokenIntersectionBuilder } from "./intersectionBuilder";
import {
  normalizeDeBridgeTokens,
  normalizeLifiTokens,
  normalizeOdosTokens,
} from "./utils/tokenListNormalizer";

import rawDeBridgeTokensBase from "./data/deBridgeTokensBase.json";
import rawDeBridgeTokensBsc from "./data/deBridgeTokensBsc.json";
import rawDeBridgeTokensPol from "./data/deBridgeTokensPol.json";

import rawLifiTokensBase from "./data/lifiTokensBase.json";
import rawLifiTokensBsc from "./data/lifiTokensBsc.json";
import rawLifiTokensPol from "./data/lifiTokensPol.json";

import rawOdosTokensBase from "./data/odosTokensBase.json";
import rawOdosTokensBsc from "./data/odosTokensBsc.json";
import rawOdosTokensPol from "./data/odosTokensPol.json";

import { saveToFile } from "./utils/saveToFile";

const main = async () => {
  // Normalize token data
  const deBridgeTokensBase = normalizeDeBridgeTokens(
    rawDeBridgeTokensBase.tokens
  );
  const deBridgeTokensBsc = normalizeDeBridgeTokens(
    rawDeBridgeTokensBsc.tokens
  );
  const deBridgeTokensPol = normalizeDeBridgeTokens(
    rawDeBridgeTokensPol.tokens
  );

  const lifiTokensBase = normalizeLifiTokens(rawLifiTokensBase.tokens[8453]);
  const lifiTokensBsc = normalizeLifiTokens(rawLifiTokensBsc.tokens[56]);
  const lifiTokensPol = normalizeLifiTokens(rawLifiTokensPol.tokens[137]);

  const odosTokensBase = normalizeOdosTokens(rawOdosTokensBase.tokenMap);
  const odosTokensBsc = normalizeOdosTokens(rawOdosTokensBsc.tokenMap);
  const odosTokensPol = normalizeOdosTokens(rawOdosTokensPol.tokenMap);

  // Create token intersection
  const tokensBuilder = new TokenIntersectionBuilder();

  const deBridgeBasBsc = tokensBuilder
    .addTokens(deBridgeTokensBase)
    .addTokens(deBridgeTokensBsc)
    .execute();

  const lifiBasBsc = tokensBuilder
    .addTokens(lifiTokensBase)
    .addTokens(lifiTokensBsc)
    .execute();

  const basBscWithDeBridge = tokensBuilder
    .addTokens(odosTokensBase)
    .addTokens(lifiBasBsc)
    .addTokens(odosTokensBsc)
    .execute();

  console.log({
    supportedOdosBase: odosTokensBase.length,
    supportedBridge: lifiBasBsc.length,
    supportedOdosBsc: odosTokensBsc.length,
    total: basBscWithDeBridge.length,
    tokens: basBscWithDeBridge,
  });

  // await saveToFile(
  //   "./src/result",
  //   "basBscWithDeBridge.json",
  //   JSON.stringify(basBscWithDeBridge)
  // );
};

main().catch((e) => console.log(e));
