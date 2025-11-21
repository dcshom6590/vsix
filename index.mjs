import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";

const server = new McpServer({
  name: "figma-to-code-mcp-server",
  version: "1.0.0",
});

// Predefined best practice prompt for code generation
server.registerPrompt("best-practices-instructions", {
  description:
    "Best practices prompt for converting Figma JSON to React code using Glide Design Library",
  prompt: fs.readFileSync("./docs/instructions.md", { encoding: "utf-8" }),
});

// Shared resource: Glide Design Library documentation JSON
server.registerResource("glide-design-library-docs", {
  description: "Glide Design Library documentation in Markdown format",
  contentType: "text/markdown",
  source: async () => {
    return fs.readFileSync("./docs/glide-documentation.md", { encoding: "utf-8" })
  },
});

server.registerTool(
  "fetch-figma-design",
  {
    title: "Fetch Figma Design and Convert to React Code",
    description:
      "Fetches a specific component or frame from Figma using the Figma API, reads conversion instructions and Glide design library documentation, then generates React code based on the design specifications. Provide the Figma file URL and the node ID of the component you want to convert.",

    inputSchema: {
      figmaUrl: z.url(),
    },
  },
  async (params) => {
    try {
      console.log(params.figmaUrl);
      const figmaDesignJson = JSON.parse(
        fs.readFileSync("./design.json", { encoding: "utf-8" })
      );

      return {
        content: [
          { type: 'text', text: 'Figma JSON fetched; returning with instructions and documentation.' },
        ],
        structuredContent: {
          figmaDesignJson,
          bestPracticesPromptId: 'best-practices-instructions',
          designDocsResourceId: 'glide-design-library-docs',
        },
      };

    } catch (error) {
      return {
        content: [{ type: "text", text: `Error: ${error.message}` }],
        isError: true,
        structuredContent: error.message,
      };
    }
  }
);

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Figma-to-Code MCP Server started successfully!");
};

main().catch((error) => {
  console.error("Error starting Figma-to-Code MCP Server:", error);
  process.exit(1);
});
