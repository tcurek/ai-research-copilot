import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { env }  from "node:process";

export const WebSearchTool = createTool({
    id: "web-search-tool",
    description: "Searches the web for recent or factual information.",
    inputSchema: z.object({
      query: z.string()
    }),
    outputSchema: z.object({
      title: z.string(),
      snippet: z.string(),
      url: z.string()
    }),
    execute: async ({ context }) => {
      const { query } = context;
   
      const response = await fetch(`https://api.tavily.com/search?q=${encodeURIComponent(query)}`, {
        headers: { "Authorization": `Bearer ${env.TAVILY_API_KEY}` }
      });
      const json = await response.json();
   
      return { 
            title: json.title,
            snippet: json.snippet,
            url: json.url
       };
    }
  });