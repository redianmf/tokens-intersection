import axios from "axios";
import { saveToFile } from "./saveToFile";

const fetcher = async () => {
  const res = await axios.get("https://api.odos.xyz/info/tokens/137");
  const data = JSON.stringify(res.data);

  await saveToFile("./src/data", "testTokens.json", data);
};

fetcher().catch((e) => console.log(e));
