import axios from "axios";
import { saveToFile } from "./saveToFile";

const odosTokensEndpoint = "https://api.odos.xyz/info/tokens/137";
const deBridgeTokensEndpoint =
  "https://dln.debridge.finance/v1.0/token-list?chainId=137";
const lifiTokensEndpoint = "https://li.quest/v1/tokens?chainTypes=EVM";
const hashportTokensEndpoint =
  "https://mainnet.api.hashport.network/api/v1/assets";
const kyberTokensEndpoint =
  "https://aggregator-api.kyberswap.com/ethereum/api/v1/routes";
const paraswapTokensEndpoint = "https://api.paraswap.network/tokens/137";
const cBridgeTokensEndpoint =
  "https://cbridge-prod2.celer.app/v2/getTransferConfigsForAll";

const fetcher = async () => {
  const res = await axios.get(cBridgeTokensEndpoint);
  const data = JSON.stringify(res.data.chain_token);

  console.log(res?.data?.chain_token);

  await saveToFile("./src/data", "cBridgeTokens.json", data);
};

fetcher().catch((e) => console.log(e));
