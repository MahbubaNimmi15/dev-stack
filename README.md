# Dev Stack

Dev Stack is an interactive developer technology explorer that helps users discover modern tools, frameworks, languages, and databases and build a personalized technology stack for their projects. Users can compare technologies, check difficulty and ratings, and organize their preferred tools in one place.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

1. Explore modern development technologies with category, difficulty level, rating, and badges.
2. Build a personalized developer stack by selecting preferred technologies while preventing duplicate selections.
3. Remove individual technologies or clear the complete stack with instant notification feedback.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like syntax inside JavaScript or TypeScript. It makes React components easier to create, read, and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State stores data inside a component that can change while the application is running.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook stores and updates data in a React component. I used it for technology data, selected technologies, loading status, and the mobile navigation menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs code after a component is loaded. I used it to fetch technology information from the technologies.json file when the application starts.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list and efficiently update the correct item when something changes.

### 6. What is conditional rendering?

Conditional rendering means displaying different content depending on a condition. In this project, I used it to show an empty stack message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?

A parent component passes data to a child component using props. A child can communicate with the parent by calling a function that the parent passes through props.

## GitHub Repository

https://github.com/MahbubaNimmi15/dev-stack

## Live Site
https://dev-stack-rho.vercel.app/

