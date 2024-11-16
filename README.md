# Deno Webext Starter

This is a starter template for building web extensions using Deno, Vite, and React. It provides a simple setup to get you started with writing your own web extension.

## Prerequisites

- [Deno](https://deno.land/) v2.0.0 or later
- [Node.js](https://nodejs.org/) (for Vite)

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/ben196888/deno-webext-starter.git
cd deno-webext-starter
```

### Install Dependencies

```sh
deno install
```

### Start the Development Server

By default, the following command will spin up the development server for Chrome:

```sh
deno task dev
```

To start the development server for a specific browser, use:

#### Chrome

```sh
deno task dev:chrome
```

#### Firefox

```sh
deno task dev:firefox
```

This will start a development server and watch for changes. You can load the extension in your browser for testing.

### Build for Production

By default, the following command will build the extension for both Chrome and Firefox:

```sh
deno task build
```

To build the extension for a specific browser, use:

#### Chrome

```sh
deno task build:chrome
```

#### Firefox

```sh
deno task build:firefox
```

This will build the extension for production. The output will be in the `dist` directory.

## Load the Extension in Your Browser

### Chrome

1. Open Chrome and go to `chrome://extensions/`.
1. Enable "Developer mode" by toggling the switch in the top right.
1. Click "Load unpacked" and select the `dist/chrome` directory.

### Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
1. Click "Load Temporary Add-on" and select any file in the `dist/firefox` directory.

## Project Structure

- `src/`: Source code for the extension
  - `background/`: Background scripts
  - `content/`: Content scripts
  - `popup/`: Popup UI
  - `options/`: Options page
  - `sidepanel/`: Side panel UI
- `manifest.chrome.json`: Manifest file for Chrome
- `manifest.firefox.json`: Manifest file for Firefox
- `vite.config.ts`: Vite configuration file

## Customization

Feel free to customize the project to suit your needs. You can add more features, change the UI, or modify the build process.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
