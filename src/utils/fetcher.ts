import axios from "axios";
import { saveToFile } from "./saveToFile";

const odosTokensEndpoint = "https://api.odos.xyz/info/tokens/137";
const deBridgeTokensEndpoint =
  "https://dln.debridge.finance/v1.0/token-list?chainId=137";
const lifiTokensEndpoint = "https://li.quest/v1/tokens?chainTypes=EVM";
const hashportTokensEndpoint =
  "https://mainnet.api.hashport.network/api/v1/assets";

const fetcher = async () => {
  const res = await axios.get(lifiTokensEndpoint);
  const data = JSON.stringify(res.data);

  await saveToFile("./src/data", "lifiTokens.json", data);
};

fetcher().catch((e) => console.log(e));
