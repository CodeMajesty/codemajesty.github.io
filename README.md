# CodeMajesty Website

## DEV

- Install deps:

  ```sh
  npm i
  ```

- Start up a hot-reloading `local web server` for development:

  ```sh
  npm run dev
  ```

  alias for:

  ```sh
  npx @11ty/eleventy --serve --port=8891
  ```

- Build your production-ready application::

  ```sh
  npm run build
  ```

  alias for:

  ```sh
  npx @11ty/eleventy
  ```

  Your website should be located in `/_site_` folder.

- Code formatting is done by [Prettier](https://prettier.io/). Simply format project files by following predefined rules in `.prettierrc.json`:

  ```sh
  npx prettier --write .
  ```

  To exclude files from formatting, please refer to `.prettierignore` (should correspond to `.gitignore`).

- Run e2e tests:

  ```sh
  npm run cy:test
  ```

- Start Cypress testing framework in GUI mode:
  ```sh
  npm run cy:open
  ```
