# Big refreshment of React!

I'm currently trying to refresh as many things as I could! I was trying React a couple of times but always my job requires me to focus more on other technologies. Now I have a perfect moment to reorganise all of the thoughts and knowledge that I learned.

I base this revamp on Udemy and YouTube courses because the goal is to do literally everything - Redux, TypeScript, hooks, tailwind, authorizations with some databases and maybe Next.js! So let's startin' and <a href="https://www.youtube.com/watch?v=svUtlHC2ph4">let's gooo</a>!

This repo is merged version of my two other repos. One with <a href="https://github.com/GimpFather/react-course">JS React</a>, another one with <a href="https://github.com/GimpFather/typescript-course">TS React</a>.

Disclaimer for poor `.scss` files. I really like writing styles, but at this moment there are so many more important things to do, so I'm using pre-given styles in 99% of the examples.

Disclaimer for taking this project serious: As I said - I'm using video courses to refresh everything, so sometimes you gonna find repetitive code or static approaches. You shouldn't look at these! 

# What can you find in this repo?

- <a href="https://github.com/GimpFather/react-courses/tree/dev/js-expenses-chart">`js-expenses-chart-app`</a> is the app that has base React knowledge, based on some Udemy course. It's a static application for keeping tabs on your expenses.
- <a href="https://github.com/GimpFather/react-courses/tree/dev/ts-adding-users-app">`ts-adding-users-app`</a> it's a simple app completely built in Typescript. It's a static app when you can only add a user to the bigger group.
- <a href="https://github.com/GimpFather/react-courses/tree/dev/js-login-app">`js-login-app`</a> it's an app that covers three topics - `useEffect`, `useReducer` and `Context API`. Unfortunately, it's not a TypeScript app, because the roots were provided by the course instructor but I'm 100% sure that I'm gonna touch on these three topics with TypeScript soon.

# Developer part - setup

## Instalation

The project requires: 
- Node 16 or higher.
- Npm or Yarn.

The projects are based on `create-react-app`.<br>
After downloading repo, enter app that you would like to see and install dependencies by running `npm install` or `yarn install`. <br>
You need to be in the root of app, not the repo - for example: `react-courses/js-login-app`. <br>
Then just run `npm start` or `yarn start`.

## Build

In order to build application you need to use `npm build` or `yarn build` in root of the chosen app folder.<br>
You should also compile `.sass` files, but I didn't make yet a script for that. 
