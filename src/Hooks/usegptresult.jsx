import { GoogleGenAI } from "@google/genai";
import { GPT_PROMPT } from "../utils/prompt"
import { API_key_gemini } from "../utils/const";

const usegptresult = async (message) => {


const prompt = GPT_PROMPT(message);
const ai = new GoogleGenAI({
    apiKey:API_key_gemini,
});

const interaction = await ai.interactions.create({
  model: "gemini-3.5-flash-lite",
  input: prompt,
});
return interaction.output_text;
};
export default usegptresult;
