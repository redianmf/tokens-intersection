export enum TokenListSource {
  DEBRIDGE = "DEBRIDGE",
  LIFI = "LIFI",
  ODOS = "ODOS",
}

export interface IBaseToken {
  symbol: string;
  name: string;
  decimals: number;
  address?: string;
}

export interface IDeBridgeToken extends IBaseToken {
  logoURI?: string;
  tags?: any[];
  eip2612?: boolean;
}

export interface ILifiToken extends IBaseToken {
  chainId: number;
  priceUSD: string;
  coinKey?: string;
  logoURI?: string;
}

export interface IOdosToken extends IBaseToken {
  assetId?: string;
  assetType?: string;
  protocolId?: string | null;
  isRebasing?: boolean;
}
