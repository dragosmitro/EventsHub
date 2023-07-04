EventsHub - Event Based Social Media App
Technologies used for front-end: React, ReactRouter, Formik, Yup, Redux Toolkit
Technologies used for back-end: NodeJS, ExpressJS, Mongoose + MongoDB, JWT

[FUNCTIONALITIES]
- login page; where users can login using their credentials or register; data stored in MongoDB, password is encrypted
- main page; where users view the main page of the platform
- posts; they appear on the main page; can be text-only or with a photo; they will include the location of the user who posted
- posts reacts; each user can react on a post with a variety of options
- posts comments; users can comment on each others events
- sponsored posts; they appear on the right side of the main page; for monetisation (hard-coded as for now)
- friends; an user can add another one trough the click of a button
- light/dark theme; implemented for better view
- mobile support; the site is responsive to smaller screens

[POSSIBLE EXTENSIONS TO THE APP]
This is a section for features that could be added to the app. These features already have their buttons implemented
- messaging between users; so it will be easier to organise the event (button implemented already)
- notifications; users could see if their friends posted new events (button implemented already)
- help; users could see how to use the app, FAQs and what not (button implemented already)
- managing posts; users might want to delete or edit their posts or comments;
- feed logic; as of now this is not implemented but it could show the events in the same city first, followed by others
- posts polls

[MORE ADVANCED INFO]
- MongoDB stores all the data about the user; there are 2 tables as follows:
USER (_id, firstName, lastName, friends, email, password, picturePath, location)
POST (_id, userId, firstName, lastName, location, description, userPicturePath, picturePath, likes, stars, comments)
- API communication between frontend and backend, using CRUD operations, right HTTP methods & status codes, error handling
- in the server folder, the backend can be found; models subfolder contains the DB table structure, controllers contain the controllers for the posts/auth/users
(also, some data can also be found, used in the early stages of the app to ensure that everything is working fine;
to import that data (posts & users), inside the index.js file in server uncomment line 66 & 67, run once then comment them again)
- in the client folder, the frontend can be found; the src folder is split in this way:
1. components
2. scenes (pages)
3. state (miscellaneous functions for state)
in the theme.js file there are the colors used for this project (in the light & dark theme)

[TUTORIAL]
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

