# CKEditor 5 Integration Demo (React + TypeScript + Vite)

This project demonstrates a modern integration of [CKEditor 5](https://ckeditor.com/ckeditor-5/) into a React application using TypeScript and Vite. It features a modular configuration system and custom table plugins for advanced editing capabilities.

## Features

- **CKEditor 5** integration with React via `@ckeditor/ckeditor5-react`
- Modular, extensible configuration for fonts, images, tables, lists, links, headings, and more
- Custom plugins:
  - **DistributeColumnsEvenly**: Evenly distributes table column widths
- Clean, idiomatic TypeScript codebase
- Fast development with Vite
- ESLint and recommended TypeScript settings

## Project Structure

```
src/
  App.tsx                # Main app component
  main.tsx               # React entry point
  index.css              # Global styles
  components/
    CKEditorDemo/        # CKEditor demo component
  configs/               # Modular CKEditor configuration files
  plugins/               # Custom CKEditor plugins
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Custom Plugins

### DistributeColumnsEvenly

Adds a toolbar button to evenly distribute all columns in the selected table.

## Configuration

All CKEditor configuration is modularized in `src/configs/` for easy extension and reuse. You can add or modify features by editing or adding config files.

## Extending

- Add new configuration options in `src/configs/`.
- Add new plugins to `src/plugins/` and register them in the appropriate config.
- Use the barrel files (`index.ts`) for clean imports.

## Linting

```bash
npm run lint
```

## Build

```bash
npm run build
```

## License

This project is for demo and educational purposes. CKEditor 5 is licensed separately; see [CKEditor 5 licensing](https://ckeditor.com/legal/ckeditor-oss-license/) for details.
