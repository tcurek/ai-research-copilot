import {createStep, createWorkflow} from "@mastra/core/workflows";
import { z } from "zod";

const researchStep = createStep({
    id: "research-step",
    inputSchema: z.object({
        message: z.string()
    }),
    outputSchema: z.object({
        message: z.string()
    }),
    execute: async ({ inputData }) => {
        const { message } = inputData;

        return { message: message };
    }
});

const summarizeStep = createStep({
    id: "summarize-step",
    inputSchema: z.object({
        message: z.string()
    }),
    outputSchema: z.object({
        message: z.string()
    }),
    execute: async ({ inputData }) => {
        const { message } = inputData;

        return { message: message };
    }
});

const teacherStep = createStep({
    id: "teacher-step",
    inputSchema: z.object({
        message: z.string()
    }),
    outputSchema: z.object({
        message: z.string()
    }),
    execute: async ({ inputData }) => {
        const { message } = inputData;

        return { message: message };
    }
});

export const agentPipeline = createWorkflow({
    id: "agent-pipeline",
    inputSchema: z.object({
        message: z.string()
    }),
    outputSchema: z.object({
        message: z.string()
    })
}).then(researchStep).then(summarizeStep).then(teacherStep).commit();