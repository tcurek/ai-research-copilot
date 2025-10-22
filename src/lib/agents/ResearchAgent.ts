import { Agent } from "@mastra/core/agent"
import { WebSearchTool } from "../tools/WebSearchTool";
import { GetModel } from "../utils/modelProvider";

export const ResearchAgent = new Agent({
    name: "researcher",
    instructions: "Finds and retrieves relevant information for user queries",
    model: GetModel(),
    tools: { WebSearchTool }
});