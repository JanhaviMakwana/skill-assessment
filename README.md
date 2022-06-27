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

# Formik Overview

Is a small group of React Components and hooks for building forms in React and React Native.
Created by Jared Palmer.
Provides basic form programming and validation.

# Helps In

1. Getting values in and out of form state
2. Validation and error messages
3. Handling form submission

# Why Formik

-> Building forms with React involves setting up state as the container for user data and
props to control how state is updated.

# Installation

npm i formik

# We can use it in two ways

-> need to pass our form's initialValues, a submission function, a validate function
-> keeps track of errors, values, touched of fields

1. useFormik hook
   -> provides
   -> handleSubmit
   -> handleChange
   -> handleBlur
   -> values
   -> errors
   -> isValid
   -> dirty
   -> state and helper methods in a variable called "formik"

2. react Components
   -> provides <Formik/>, <Form/>, <Field/>, <ErrorMessage/>
