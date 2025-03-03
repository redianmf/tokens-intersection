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

interface IHashPortToken extends IBaseToken {
  id?: string;
  isNative?: boolean;
  icon?: string;
  bridgeableNetworks?: any;
}

interface IHashPortNetwork {
  id?: number;
  name?: string;
}
export interface IRawHashPortToken {
  network: IHashPortNetwork;
  assets: { [key: string]: IHashPortToken };
}

interface ICbridgeTokenDetails {
  symbol: string;
  address: string;
  decimal: number;
  xfer_disabled: boolean;
}

export interface ICbridgeToken {
  token: ICbridgeTokenDetails;
  name: string;
  icon?: string;
}
