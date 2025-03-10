// Lib
import { describe, expect, test } from "@jest/globals";

// Functions
import {
  normalizeCbridgeTokens,
  normalizeDeBridgeTokens,
  normalizeGenericTokens,
  normalizeHashPortTokens,
  normalizeMayanTokens,
  normalizeOdosTokens,
} from "./tokenListNormalizer";

import {
  cBridgeToken,
  deBridgeToken,
  genericToken,
  hashPortToken,
  lifiToken,
  mayanToken,
  odosToken,
  rawCbridgeToken,
  rawDeBridgeToken,
  rawGenericToken,
  rawHashPortToken,
  rawLifiToken,
  rawMayanToken,
  rawOdosToken,
} from "./tokenListNormalizerDummyData";

describe("Generic token list normalizer (token list which conform with IBaseToken structure)", () => {
  test("Able to normalize generic token list", () => {
    const normalizedGenerecToken = normalizeGenericTokens(rawGenericToken);
    expect(normalizedGenerecToken).toEqual(genericToken);
  });

  test("Able to normalize li.fi token list", () => {
    const normalizedLifiToken = normalizeGenericTokens(rawLifiToken.tokens[1]);
    expect(normalizedLifiToken).toEqual(lifiToken);
  });
});

describe("Non generic token list normalizer (token list which not conform with IBaseToken structure)", () => {
  test("Able to normalize odos token list", () => {
    const normalizedOdosToken = normalizeOdosTokens(rawOdosToken.tokenMap);
    expect(normalizedOdosToken).toEqual(odosToken);
  });

  test("Able to normalize deBridge token list", () => {
    const normalizedDeBridgeToken = normalizeDeBridgeTokens(
      rawDeBridgeToken.tokens
    );
    expect(normalizedDeBridgeToken).toEqual(deBridgeToken);
  });

  test("Able to normalize hashport token list", () => {
    const normalizedHashPortToken = normalizeHashPortTokens(
      rawHashPortToken,
      250
    );
    expect(normalizedHashPortToken).toEqual(hashPortToken);
  });

  test("Able to normalize cBridge token list", () => {
    const normalizedCbridgeToken = normalizeCbridgeTokens(
      rawCbridgeToken[1].token
    );
    expect(normalizedCbridgeToken).toEqual(cBridgeToken);
  });

  test("Able to normalize Mayan token list", () => {
    const normalizedMayanToken = normalizeMayanTokens(rawMayanToken.ethereum);
    expect(normalizedMayanToken).toEqual(mayanToken);
  });
});
