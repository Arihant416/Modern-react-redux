## `Project - Season`

- `App.js` has code to determine location + month

- `SeasonDisplay.js` shows different text/icons based on props

## `App Challenges`

- Need to get the user's physical location (Geolocation API)
- Need to determine the current month
- Need to change text and styling based on location + month

## `Why Class Based Component?`

- In functional based component the geolocation api takes
  good amount of time to return our position (in our case it is the geolocation api).
- By the time it finally returns the position, we see we've already rendered the App component .
- And re-rendering Functional Components is tedious.
  Hence Class-based Component.

## `Rules of Class Components`

- Must be a Javascript Class
- Must extend (subclass) React.Component
- Must define a 'render' method that returns some amount of JSX

## `Rules of State`

- Only usable with class components.(Technically can be used with functional components using the `hooks` system).
- Don't get confused between state and props.
- 'State' is a JS object that contains data relevant to a component
- Updating 'state' on a component causes the component to (almost) instantly rerender.
- State must be initialized when a component is created.
- State can _only_ be updated using the function _`setState`_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
