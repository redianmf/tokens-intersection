import { IBaseToken } from "../types";

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
const rawMayanToken = {
  ethereum: [
    {
      name: "ETH",
      standard: "native",
      symbol: "ETH",
      mint: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      verified: true,
      contract: "0x0000000000000000000000000000000000000000",
      chainId: 1,
      wChainId: 2,
      decimals: 18,
      logoURI: "https://statics.mayan.finance/eth.png",
      wrappedAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      coingeckoId: "weth",
      pythUsdPriceId:
        "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
      realOriginContractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      realOriginChainId: 2,
      supportsPermit: false,
      hasAuction: true,
    },
  ],
};
const mayanToken: IBaseToken[] = [
  {
    symbol: "ETH",
    name: "ETH",
    decimals: 18,
    address: "0x0000000000000000000000000000000000000000",
  },
];
const rawGenericToken = [
  {
    lorem: 42161,
    address: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
    name: "Curve DAO Token",
    symbol: "CRV",
    decimals: 18,
    ipsum: "Curve DAO Token",
    sit: "CRV",
    dolor: ["erc20", "can_swap"],
    amet: false,
  },
];
const genericToken: IBaseToken[] = [
  {
    address: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
    decimals: 18,
    name: "Curve DAO Token",
    symbol: "CRV",
  },
];

export {
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
};
