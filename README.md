Nom: Mohammadreza Habibzadeh - 2296191

Github : https://github.com/farzad283/React.git        

Scenario 1=> branch: main 

Scenario 2 => branch: senario2



----------------------------------------------------------------------------------------

Description:

Dans ce projet, une liste d'informations sur le produit est fournie.

• La première page est la couverture du projet, sur laquelle vous pouvez naviguer ou cliquer pour accéder à la liste des produits.

• Sur cette page, on peut voir la liste des produits et on peut la modifier en cliquant sur le bouton "Modifier" de chaque produit. Et supprimez ce produit en cliquant sur le bouton "Supprimer". Vous pouvez également créer un nouveau produit en cliquant sur le bouton "Ajouter".


-----------------------------------------------------------------------------------------

Références :

https://getbootstrap.com/docs/5.3/examples/album/

https://dummyjson.com/

-----------------------------------------------------------------------------------------

La documentation: 


1-	Créer un dossier nommé “react-tp2” :

          npx create-react-app react-tp2

2-	

o	Cd react-tp2
o	npm start

3-	Créer un dossier nommé components dans dossier src
4-	Installé :
o	npm i react-icons
o	npm install react-route-dom
o	npm install bootstrap


Pour  scenario 1:   créer dossier build

    npm run build
    sudo npm i -g serve
    sudo npx serve -s build -p 8080

or --------------------------------------------------------------------------

-	Ajouter cette command sur page « package.json » :

o	” homepage” = ” https://e229691.webdev.cmaisonneuve.qc.ca/build”

    npm run build


Pour  scenario 2:   

     npm install json-server

-	Ajouter cette command sur page « package.json » :

o	"server": "json-server --watch db.json --port 5000"

     npm run server
     new terminal : npm start





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
