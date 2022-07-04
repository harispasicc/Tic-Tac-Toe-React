Tic-Tac-Toe Project

Project description

Tic-Tac-Toe (American English), nought and crosses (Commonwealth English),is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3\*3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner, It is a solved game with a forced draw assuming best play from poth players.

Below are all the basic requirements:

First of all, players should introduce themselves before the game, Although there is no need for credentials or any kind of authentication, this screen is called a Login screen.

Both players should enter their names in the form fields. The button START has to be the "subrit"button, and will accept as values the players' names, and forward the app to the next screen. Since this is a very simple form with two fields and one (submit) button, this is a great opportunity to learn how to make simple, effective, and clean forms.
There are some restrictions related to this form: Both players have to enter their names START button should not be enabled if any of the two fields are empty. After entering both names, the START button will forward the app to the Game Screen.

The game is finished when all cells are occupied without a winner, or when one of the players puts three of his signs in the same row, in the same column, or on the same diagonal.

Having displayed the message, the app should show the history of games on the screen. Time delay between the message about the current game and the history of games can be defined by time (for example 5 seconds), or by the user's click After each game, the history will be updated and saved on the local storage.

Project Features:

-Login.js: Contains login auth details
-Game.js: Contains main logic, buttons, alerts
-Header.js: Contains navbar
-Board.js: Contains board and cells
-CalculateWinner.js: Contains winner logic
-Squares.js: Conatins value which is imported to Board.js
-Footer.js Contains author details

Built With:

-HTML
-CSS
-JS
-React JS

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
