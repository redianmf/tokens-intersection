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
const mayanTokensEndpoint = "https://price-api.mayan.finance/v3/tokens";

const fetcher = async () => {
  const res = await axios.get(mayanTokensEndpoint);
  const data = JSON.stringify(res.data);

  // console.log(res?.data);

  await saveToFile("./src/data", "mayanTokens.json", data);
};

fetcher().catch((e) => console.log(e));
