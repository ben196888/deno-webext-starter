# Deno Webext Starter

This is a starter template for building web extensions using Deno, Vite, and React. It provides a simple setup to get
you started with writing your own web extension.

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

##### Troubleshooting

Vite Plugin Web Extension adds `http://localhost` to `content_security_policy.extension_pages[script-src]` in the
manifest when running in dev mode. It leads firefox to block the extension. So we use the production build to test the
extension in firefox.

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
- `manifest.json`: Manifest file for both Chrome and Firefox. Using {{chrome}} and {{firefox}} to replace the browser
  specific fields.
- `vite.config.ts`: Vite configuration file

### Message Passing

The starter template uses the `webext-bridge` package to simplify message passing between the background script, content
scripts, and UI components. You can find more information about the package
[here](https://serversideup.net/open-source/webext-bridge/docs)

## Customization

Feel free to customize the project to suit your needs. You can add more features, change the UI, or modify the build
process.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License.
