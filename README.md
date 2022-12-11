# React Component Publisher Playground

## Boilerplate starter kit for creating and publishing React components

Easily create, export and publish React.js components. Unit tests and a basic development environment are already configured and ready to run via `npm` scripts.

### Get Started

- Create components within `/src/components` folder. Export them from `/src/index.jsx`.
- Write unit tests within `/src` folder which follow this naming convention: `<filename>.spec.jsx`.
- Build a playground browser application using your library of custom components within the `/playground` folder.

---
**NPM Scripts**
- `npm run serve`: serve local static files from `/playground` folder
- `npm run test`: run unit tests in `/src` folder
- `npm run build`: build production bundle
- `npm run build:dev`: build development bundle only
- `npm run watch`: build development bundle in watch mode
- `npm publish`: publish package. `build` and `test` scripts will automatically run first.
    