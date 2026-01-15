import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
    systemInstruction: "You are a code generator copilot for project named Code Sync. Generate code based on the given prompt without any explanation. Return only the code, formatted in Markdown using the appropriate language syntax (e.g., js for JavaScript, py for Python). Do not include any additional text or explanations. If you don't know the answer, respond with 'I don't know'.",
});
