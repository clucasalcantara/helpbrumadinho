# Help Brumadinho - Dropoff Locations

The idea of this project is to list and help users to find near dropoff points of helping resources for the
Brumadinho - MG catastrophy.

## Requirements

- Node 10+
- NPM 6+

---

## Tech stack (In development)

- React v16.8
- Semantic UI
- Apollo Client
- Docz
- Jest
- ESLint
- Prettier

---

## Naming conventions

```
Regular component

src/components/atoms/title <- Folder name
├── Title.js    <- Component file
├── Title.mdx   <- Docz file
├── __tests__   <- Tests folder
│   ├── Title.test.js   <- Tests file
│   └── __snapshots__
│       └── Title.test.js.snap
└── index.js   <- Reflection export folder

Composed name component
src/components/atoms/my-awesome-component <- Folder name
├── MyAwesomeComponent.js    <- Component file
├── MyAwesomeComponent.mdx   <- Docz file
├── __tests__   <- Tests folder
│   ├── MyAwesomeComponent.test.js   <- Tests file
│   └── __snapshots__
│       └── MyAwesomeComponent.test.js.snap
└── index.js   <- Reflection export folder
```

---

## Running locally

```
$ git clone git@github.com:clucasalcantara/helpbrumadinho.git
$ yarn
$ yarn start:mock
$ yarn start
```

---

## Available Scripts

### `yarn start:mock`

Starts the mock server on the port 4000.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

Available enpoints.<br>

- `http://localhost:4000/dropoffs`

- `http://localhost:4000/statistics`

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn docz:dev`

Launches the docz server in the interactive watch mode.

### `yarn docz:build`

Build the docz static output.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
