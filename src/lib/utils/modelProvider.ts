export const GetModel = (): string => {
    if(!process.env.LLM_MODEL) 
        throw new Error("Missing an LLM Provider and Model in the .env file.");
    return process.env.LLM_MODEL;
};