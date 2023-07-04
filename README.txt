EventsHub - Event Based Social Media App

Overview:
EventsHub is an event-based social media application that allows users to organize and share events with friends and other users. The app is built using modern technologies for both the front-end and back-end, providing a user-friendly experience with various functionalities.
Front-end Technologies:
The front-end of EventsHub is developed using React, a popular JavaScript library for building user interfaces. Other libraries and tools such as ReactRouter, Formik, Yup, and Redux Toolkit are employed to enhance the development process and user experience. The app is designed to be responsive, offering mobile support for smaller screens.
Back-end Technologies:
The back-end of EventsHub is powered by NodeJS and ExpressJS, providing a robust and efficient server-side infrastructure. MongoDB is used as the database, and Mongoose is utilized as the Object Data Modeling (ODM) library for connecting and interacting with the database. User authentication is implemented using JSON Web Tokens (JWT) to ensure secure login and registration processes.

Functionalities:
Login Page & Registration: Users can log in using their credentials or register for a new account. User data, including passwords, is securely stored in MongoDB with encryption.
Main Page: The main page of the app displays a feed of posts shared by users. Posts can contain text-only or photos, and they include the location of the user who posted the event.
Post Reactions: Each user can react to a post with various options, enabling interaction and engagement among users.
Post Comments: Users can comment on each other's events, fostering communication and discussion.
Sponsored Posts: Sponsored posts are displayed on the right side of the main page for monetization purposes. Currently, these are hard-coded, but they could be managed dynamically in the future.
Friends: Users can add other users as friends through a simple button click.
Light/Dark Theme: The app offers a light and dark theme option, allowing users to choose their preferred visual style.
Mobile Support: EventsHub is designed to be responsive, ensuring a smooth experience on smaller screens and mobile devices.

Possible Extensions:
Messaging: Implement a messaging feature to allow users to communicate and organize events more effectively. (button already implemented)
Notifications: Provide users with notifications about new posts from their friends or important updates. (button already implemented)
Help & FAQs: Offer a help section with FAQs to assist users in understanding and navigating the app. (button already implemented)
Managing Posts: Allow users to delete or edit their posts and comments.
Feed Logic: Enhance the feed logic to prioritize showing events in the same city first, followed by others, for a more personalized experience.
Posts Polls: Add the ability for users to create and participate in polls related to events.

Advanced Information:
MongoDB is used to store all user data in two tables: USER and POST.
API communication between the front-end and back-end is implemented using CRUD operations, appropriate HTTP methods, and status codes, with proper error handling.
The backend's server folder contains models and controllers for posts, authentication, and users.
Some initial data is available for testing, which can be imported into MongoDB using specific commands. (to import that data (posts & users), inside the index.js file in server uncomment line 66 & 67, run once then comment them again))
The front-end client folder is organized into components, scenes (pages), and state folders, enhancing code organization and maintainability.
The theme.js file contains color codes used for the light and dark themes.

Tutorial on how to open
open the terminal in the server folder & type these commands:
npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose –force
nodemon index.js
open the terminal in the client folder & type these commands:
npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material
npm run start
inside the server file create a file named ".env"
inside, this file must have the following structure (without the HASHTAGS):
###
MONGO_URL=`<self explanatory>`
JWT_SECRET=`secret string for encoding the password`
PORT=3001
###