# My Story task (For Axelspace)

React app that displays a story of my life. Build as a frontend assignment for Axelspace.

A hosted build can be found here:
[My Story](https://bright-daffodil-dd560f.netlify.app/)

## Prerequisites

Run `npm install` to install all dependencies.

As for the integration tests installing a Plugin for Cypress-Cucumber will make the tests easier to read.
You will also get test case highlights and feature to steps autolinking.
If you are using VS Code you should be recommended by VS Code to install "Cucumber (Gherkin) Full Support".
If not using VS code there is probably a plugin available for your IDE.

## The following scripts are available at your service:

- `npm start` - Starts the project on port `3000`
- `npm run build` - Builds the project
- `npm run test` - Runs unit tests (very few)
- `npm run cy:open` - Runs all the Cypress integration tests using Cypress GUI
- `npm run cy:run` - Runs all the Cypress integration tests in the terminal

### Some thoughts and future improvements

I was thinking about creating a context to pass the different states/setStates over the app.
But it might be harder to follow when reviewing so I decided to keep it simple just passing the states and their setters as props.
Another idea would be to use [React-Signal](https://www.npmjs.com/package/react-signal) for communication between the components.

I didn't have enough time to get TS-config paths to work, so some imports might be a little bit long. Fixing this should clean it up a bit.
