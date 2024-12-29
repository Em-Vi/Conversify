import { Configuration } from "openai";
// This is the configuration needed to interact with openAI API
export const configureOpenAI = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANISATION_ID,
    });
    return config;
};
//# sourceMappingURL=openai-config.js.map