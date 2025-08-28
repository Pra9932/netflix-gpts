import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export default client;
