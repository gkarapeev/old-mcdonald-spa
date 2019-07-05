# Welcome to Old MacDonald verse generator

The Old MacDonald verse generator lets users quickly generate verses for the song by just specifying animal-sound pairs.

![home layout of the SPA](http://gkarapeev.eu/farm/home.png)

## Table of contents

1. [Project Brief](#1-project-brief)
2. [Design Document](#2-design-document)
3. [Project Organization](#3-project-organization)
4. [Component Documentation](#4-component-documentation)
5. [Dependencies](#5-dependencies)
6. [Information about package scripts](#6-information-about-package-scripts)

### 1. Project Brief

* Write an SPA to show 5 verses of the nursery rhyme “Old MacDonald Had a Farm” with 5 animals of your choosing.
* Extend your app to allow the user to provide their own set of animals and sounds through some UI.

[View full brief here](Project%20Brief)

### 2. Design Document

The code in this project is an implementation of the following design document. The 'custom' song mode layout follows its fifth ("Custom layout v5") iteration.

![component layout](http://gkarapeev.eu/farm/guidelines.png)

[View full design document here](Design%20Guidelines)

### 3. Project Organization

1. /Design Guidelines - contains the design document
2. /Project Brief - the project brief
3. /public - contains the index.html file and manifest.json
4. /src - contains the starting point of the react SPA - index.js

   /src/components - all the react components
   /src/components/\__tests__ - a jest test for each component

   /src/data - stores the default animal-sound list

   /src/img - all the project images 

### 4. Component Documentation

Below are the 5 main components in this project and their purposes

![component layout](http://gkarapeev.eu/farm/components.png)

##### App
* Contains the whole app state.
* Contains the Add, Change, and Delete functions for custom song verses.
* Maps each object in the [animal list](src/data) to an individual song verse

##### Nav
* Two &lt;NavLink> components from 'react-router-dom' for switching between 'original' and 'custom' song modes

##### Paper
* A flexible component which can be used in many instances of the app. Helps for visual consistency.

##### Verse
* Contains the original song lyrics and just changes the species and sound for each animal. Species and sound are both contained in the 'animal' object passed down to &lt;Verse> from &lt;App>

##### Word
* Renders either a regular &lt;span> element or an &lt;input> element based on the 'variant' prop. The 'variant' prop comes down from &lt;App> and is ultimately set based on the app route.


### 5. Dependencies

Just run `npm install` in the directory of this project to install all of its dependencies

1. "enzyme": "^3.10.0",
2. "enzyme-adapter-react-16": "^1.14.0",
3. "react": "^16.8.6",
4. "react-dom": "^16.8.6",
5. "react-redux": "^7.1.0",
6. "react-router-dom": "^5.0.1",
7. "react-scripts": "3.0.1",
8. "redux": "^4.0.1"

### 6. Information about package scripts

Due to time restrictions, this project was kickstarted with `create-react-app` and therefore all the default scripts that come with it are conveniently available:

#### `npm start`

Runs the app in the development mode.&lt;br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.&lt;br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.&lt;br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.&lt;br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.&lt;br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.