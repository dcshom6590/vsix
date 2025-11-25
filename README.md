# VSIX Repository

This repository contains a collection of Visual Studio Code extensions (.vsix files) and a Model Context Protocol (MCP) server for converting Figma designs to React code.

## Contents

### VS Code Extensions

The repository includes various VS Code extensions for development productivity:

- **GitHub Copilot** - AI pair programmer
- **GitHub Copilot Chat** - AI-powered chat assistant
- **Tailwind CSS IntelliSense** - Intelligent Tailwind CSS tooling
- **Path Intellisense** - Autocomplete for file paths
- **ESLint** - JavaScript/TypeScript linting
- **GitLens** - Enhanced Git capabilities
- **Prettier** - Code formatter
- **Jest Runner** - Run Jest tests
- **Auto Close/Rename Tag** - HTML/XML tag helpers
- **Import Cost** - Display import/require package sizes
- **Rainbow CSV** - CSV file viewer
- **Thunder Client** - API testing tool
- **Code Spell Checker** - Spelling checker
- And more...

### Figma to Code MCP Server

An MCP server (`index.mjs`) that facilitates the conversion of Figma designs to React code using the Glide Design Library.

#### Features

- Fetches Figma design specifications from JSON files
- Provides best practices guidance for code conversion
- Integrates with Glide Design Library documentation
- Supports structured output for LLM-based code generation

#### Usage

The MCP server registers:
1. **Prompt**: `best-practices-instructions` - Guidelines for converting Figma to React
2. **Resource**: `glide-design-library-docs` - Glide component documentation
3. **Tool**: `fetch-figma-design` - Fetches and processes Figma design data

#### Running the Server

```bash
node index.mjs
```

The server uses stdio transport for communication with MCP clients.

## Documentation

- [Conversion Instructions](./docs/instructions.md) - Best practices for Figma to React conversion
- [Glide Design Library](./docs/glide-documentation.md) - Component documentation

## Design Files

- `design.json` - Primary Figma design export
- `design1.json` - Additional design specifications

## Requirements

- Node.js (for running the MCP server)
- MCP client for interacting with the server

## License

See repository license for details.