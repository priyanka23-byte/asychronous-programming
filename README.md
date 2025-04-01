ASYNCHRONOUS PROGRAMMING
This repository contains a series of JavaScript exercises focused on different asynchronous programming techniques, such as callbacks, promises, and async/await. These exercises also integrate API calls to display data dynamically.

OBJECTIVE
The exercises aim to enhance the understanding and implementation of asynchronous programming in JavaScript, with practical exercises involving API calls, error handling, and user interaction. The tasks are divided into three parts:

=> Callbacks

=> Promises

=> Async/Await

PROJECT STURCTURE

The project includes the following files:

=>callbacks.html: HTML structure for the Callback implementation.

=>callbacks.js: JavaScript file containing logic for callback-based asynchronous operations.

=>promises.html: HTML structure for the Promise implementation.

=>promises.js: JavaScript file containing logic for promise-based asynchronous operations.

=>async-await.html: HTML structure for the Async/Await implementation.

=>async-await.js: JavaScript file containing logic for async/await-based asynchronous operations.

=>Each part of the project demonstrates different techniques of handling asynchronous operations and data fetching using the JSONPlaceholder API.

=>Getting Started
PREREQUISITES
To run this project locally, you will need:

A web browser (Chrome, Firefox, etc.)

Running the Project
Clone the repository to your local machine:

bash
Copy
git clone https://github.com/your-username/asynchronous-programming-exercises.git
Navigate to the project folder:

bash
Copy
cd asynchronous-programming-exercises
Open the callbacks.html, promises.html, and async-await.html files in your browser to see the functionality in action.

HOW THE EXCERCISE WORKS

Part 1: Callbacks
Task 1: Basic HTML and CSS structure.

Task 2: A button simulates a delay of 5 seconds using setTimeout(). After 5 seconds, a message is displayed.

Task 3: Fetches post data from the JSONPlaceholder API (https://dummyjson.com/posts) and displays post titles after a delay of 5 seconds.

Part 2: Promises
Task 1: Basic HTML and CSS structure.

Task 2: A Promise is used to fetch post data from the JSONPlaceholder API. Displays a "Loading..." message while the Promise is pending.

Task 3: Implements error handling with a timeout. If the Promise takes longer than 5 seconds, it rejects with a "Operation timed out" message.

Part 3: Async/Await
Task 1: Basic HTML and CSS structure.

Task 2: Uses async/await to fetch data from the JSONPlaceholder API. Displays a "Loading..." message while the data is being fetched.

Task 3: Implements error handling using try/catch to manage errors like network issues or timeouts.

FEATURES

Asynchronous behavior simulated using callbacks, promises, and async/await.

Fetches and displays post data dynamically from the JSONPlaceholder API.

Implements error handling to manage potential issues during asynchronous operations.

Simple user interface for demonstrating asynchronous concepts.

Technologies Used
HTML: Markup language for building the structure of the web pages.

CSS: Styling for the web pages.

JavaScript: Used for implementing asynchronous programming with callbacks, promises, and async/await.

JSONPlaceholder API: A free fake API for testing and prototyping.

Contributing
If you would like to contribute to this project, feel free to fork the repository, make changes, and create a pull request. Any improvements, suggestions, or bug fixes are welcome!

Steps to Contribute:
Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Make your changes and commit them (git commit -m 'Add new feature').

Push to the branch (git push origin feature/your-feature).

Create a pull request.

License
This project is open-source and available under the MIT License.
