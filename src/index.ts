import { TokenIntersectionBuilder } from "./intersectionBuilder";
import {
  normalizeCbridgeTokens,
  normalizeDeBridgeTokens,
  normalizeGenericTokens,
  normalizeMayanTokens,
  normalizeOdosTokens,
} from "./utils/tokenListNormalizer";

import rawDeBridgeTokensBase from "./data/deBridgeTokensBase.json";
import rawDeBridgeTokensBsc from "./data/deBridgeTokensBsc.json";
import rawDeBridgeTokensPol from "./data/deBridgeTokensPol.json";

import rawOdosTokensBase from "./data/odosTokensBase.json";
import rawOdosTokensBsc from "./data/odosTokensBsc.json";
import rawOdosTokensPol from "./data/odosTokensPol.json";

import rawCbridgeTokens from "./data/cBridgeTokens.json";
import rawCurveTokens from "./data/curveTokens.json";
import rawLifiTokens from "./data/lifiTokens.json";
import rawMayanTokens from "./data/mayanTokens.json";

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

  const lifiTokensBase = normalizeGenericTokens(rawLifiTokens.tokens[8453]);
  const lifiTokensBsc = normalizeGenericTokens(rawLifiTokens.tokens[56]);
  const lifiTokensPol = normalizeGenericTokens(rawLifiTokens.tokens[137]);

  const cBridgeTokensBase = normalizeCbridgeTokens(
    rawCbridgeTokens[8453].token
  );
  const cBridgeTokensBsc = normalizeCbridgeTokens(rawCbridgeTokens[56].token);
  const cBridgeTokensPol = normalizeCbridgeTokens(rawCbridgeTokens[137].token);

  const odosTokensBase = normalizeOdosTokens(rawOdosTokensBase.tokenMap);
  const odosTokensBsc = normalizeOdosTokens(rawOdosTokensBsc.tokenMap);
  const odosTokensPol = normalizeOdosTokens(rawOdosTokensPol.tokenMap);

  const mayanTokensArb = normalizeMayanTokens(rawMayanTokens.arbitrum);
  const mayanTokensBase = normalizeMayanTokens(rawMayanTokens.base);
  const mayanTokensBsc = normalizeMayanTokens(rawMayanTokens.bsc);
  const mayanTokensPol = normalizeMayanTokens(rawMayanTokens.polygon);

  const curveTokensArb = normalizeGenericTokens(rawCurveTokens.arbitrum.tokens);
  const curveTokensBase = normalizeGenericTokens(rawCurveTokens.base.tokens);
  const curveTokensBsc = normalizeGenericTokens(rawCurveTokens.bsc.tokens);
  const curveTokensPol = normalizeGenericTokens(rawCurveTokens.polygon.tokens);

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

  const cBridgeBasBsc = tokensBuilder
    .addTokens(cBridgeTokensBase)
    .addTokens(cBridgeTokensBsc)
    .execute();

  const mayanBasBsc = tokensBuilder
    .addTokens(mayanTokensArb)
    // .addTokens(mayanTokensBase)
    .addTokens(mayanTokensPol)
    .execute();

  const curveBasBsc = tokensBuilder
    .addTokens(curveTokensBase)
    .addTokens(curveTokensBsc)
    .execute();

  const basBscWithDeBridge = tokensBuilder
    .addTokens(odosTokensBase)
    .addTokens(deBridgeBasBsc)
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
