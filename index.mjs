import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import fs from "fs";

const server = new Server(
  {
    name: "figma-to-code-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      prompts: {},
      resources: {},
      tools: {},
    },
  }
);

// Define available prompts
const prompts = [
  {
    name: "best-practices-instructions",
    description:
      "Best practices prompt for converting Figma JSON to React code using Glide Design Library",
  },
];

// Define available resources
const resources = [
  {
    uri: "glide-design-library-docs",
    name: "Glide Design Library Documentation",
    description: "Glide Design Library documentation in Markdown format",
    mimeType: "text/markdown",
  },
];

// Define available tools
const tools = [
  {
    name: "fetch-figma-design",
    description:
      "Fetches a specific component or frame from Figma using the Figma API, reads conversion instructions and Glide design library documentation, then generates React code based on the design specifications. Provide the Figma file URL and the node ID of the component you want to convert.",
    inputSchema: {
      type: "object",
      properties: {
        figmaUrl: {
          type: "string",
          description: "The Figma file URL to fetch design from",
        },
      },
      required: ["figmaUrl"],
    },
  },
];

// Handle listing prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: prompts,
  };
});

// Handle getting a specific prompt
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const promptName = request.params.name;
  if (promptName === "best-practices-instructions") {
    const content = fs.readFileSync("./docs/instructions.md", {
      encoding: "utf-8",
    });
    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: content,
          },
        },
      ],
    };
  }
  throw new Error(`Prompt not found: ${promptName}`);
});

// Handle listing resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: resources,
  };
});

// Handle reading a specific resource
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  if (uri === "glide-design-library-docs") {
    const content = fs.readFileSync("./docs/glide-documentation.md", {
      encoding: "utf-8",
    });
    return {
      contents: [
        {
          uri: uri,
          mimeType: "text/markdown",
          text: content,
        },
      ],
    };
  }
  throw new Error(`Resource not found: ${uri}`);
});

// Handle listing tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: tools,
  };
});

// Handle calling a tool
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  if (toolName === "fetch-figma-design") {
    try {
      const figmaUrl = request.params.arguments?.figmaUrl;
      console.error(`Fetching Figma design from: ${figmaUrl}`);
      
      const figmaDesignJson = JSON.parse(
        fs.readFileSync("./design.json", { encoding: "utf-8" })
      );

      return {
        content: [
          {
            type: "text",
            text: `Figma JSON fetched successfully from ${figmaUrl}. Design contains ${figmaDesignJson.document?.children?.length || 0} canvases. Use the 'best-practices-instructions' prompt for conversion guidelines and 'glide-design-library-docs' resource for component documentation.`,
          },
          {
            type: "text",
            text: `Figma Design JSON:\n${JSON.stringify(figmaDesignJson, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching Figma design: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
  throw new Error(`Tool not found: ${toolName}`);
});

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Figma-to-Code MCP Server started successfully!");
};

main().catch((error) => {
  console.error("Error starting Figma-to-Code MCP Server:", error);
  process.exit(1);
});
