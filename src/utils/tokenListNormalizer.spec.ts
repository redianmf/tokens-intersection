// Lib
import { expect, test } from "@jest/globals";
import { IBaseToken } from "../types";

// Functions
import {
  normalizeCbridgeTokens,
  normalizeDeBridgeTokens,
  normalizeHashPortTokens,
  normalizeLifiTokens,
  normalizeOdosTokens,
} from "./tokenListNormalizer";

// Data
const rawOdosToken = {
  tokenMap: {
    "0x0000000000000000000000000000000000000000": {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      assetId: "eth",
      assetType: "eth",
      protocolId: "native",
      isRebasing: false,
    },
  },
};
const odosToken: IBaseToken[] = [
  {
    symbol: "ETH",
    name: "Ethereum",
    decimals: 18,
    address: "0x0000000000000000000000000000000000000000",
  },
];
const rawDeBridgeToken = {
  tokens: {
    "0x0000000000000000000000000000000000000000": {
      symbol: "ETH",
      name: "Ethereum",
      decimals: 18,
      address: "0x0000000000000000000000000000000000000000",
      logoURI:
        "https://tokens.debridge.finance/Logo/8453/0x0000000000000000000000000000000000000000/small/token-logo.svg",
      tags: [],
      eip2612: false,
    },
  },
};
const deBridgeToken: IBaseToken[] = [
  {
    symbol: "ETH",
    name: "Ethereum",
    decimals: 18,
    address: "0x0000000000000000000000000000000000000000",
  },
];
const rawLifiToken = {
  tokens: {
    "1": [
      {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000",
        symbol: "ETH",
        name: "ETH",
        decimals: 18,
        priceUSD: "2744",
        coinKey: "ETH",
        logoURI:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
      },
    ],
  },
};
const lifiToken: IBaseToken[] = [
  {
    symbol: "ETH",
    name: "ETH",
    decimals: 18,
    address: "0x0000000000000000000000000000000000000000",
  },
];
const rawHashPortToken = [
  {
    network: { id: 250, name: "Fantom" },
    assets: {
      "0x19D84401948DC6f01f44C62BA97e57BFb3af065f": {
        id: "0x19D84401948DC6f01f44C62BA97e57BFb3af065f",
        name: "Tune.FM",
        symbol: "JAM[ftm]",
        isNative: false,
        decimals: 8,
        icon: "https://cdn.shared.hashport.network/JAM.svg",
      },
    },
  },
];
const hashPortToken: IBaseToken[] = [
  {
    symbol: "JAM[ftm]",
    name: "Tune.FM",
    decimals: 8,
    address: "0x19D84401948DC6f01f44C62BA97e57BFb3af065f",
  },
];
const rawCbridgeToken = {
  "1": {
    token: [
      {
        token: {
          symbol: "AAVE",
          address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
          decimal: 18,
          xfer_disabled: false,
        },
        name: "AAVE Token",
        icon: "https://get.celer.app/cbridge-icons/aave.png",
        inbound_lmt: "",
        inbound_epoch_cap: "",
        transfer_disabled: false,
        liq_add_disabled: false,
        liq_rm_disabled: false,
        liq_agg_rm_src_disabled: false,
        delay_threshold: "",
        delay_period: 0,
      },
    ],
  },
};
const cBridgeToken: IBaseToken[] = [
  {
    symbol: "AAVE",
    name: "AAVE Token",
    decimals: 18,
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
  },
];

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

test("Able to normalize li.fi token list", () => {
  const normalizedLifiToken = normalizeLifiTokens(rawLifiToken.tokens[1]);
  expect(normalizedLifiToken).toEqual(lifiToken);
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
