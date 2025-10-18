import { Agent } from "@mastra/core/agent"
import type { ResearchResult } from "../../types/models";
import { WebSearchTool } from "../tools/WebSearchTool";

export const ResearchAgent = new Agent({
    name: "researcher",
    instructions: "Finds and retrieves relevant information for user queries",
    model: "alibaba-cn/deepseek-r1",
    tools: { WebSearchTool }
});