import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Mircea",
    lastName: "Popa",
    email: "mrpopa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p0.jpeg",
    friends: [],
    location: "Constanta, Romania",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Nicu",
    lastName: "Niculae",
    email: "nikniku@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Constanta, Romania",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Adrian",
    lastName: "Aditza",
    email: "aditzzzu@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p2.jpeg",
    friends: [],
    location: "Constanta, Romania",
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Maria",
    lastName: "Ioana",
    email: "mioanaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Tulcea, Romania",
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "John",
    lastName: "Vasilescu",
    email: "vasij@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Tulcea, Romania",
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Marcel",
    lastName: "Ion",
    email: "lionmarcel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Tulcea, Romania",
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Anastasia",
    lastName: "Anna",
    email: "annastasia@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Bucuresti, Romania",
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Andreea",
    lastName: "Marulescu",
    email: "maruandre@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Bucuresti, Romania",
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Nicu",
    lastName: "Niculae",
    location: "Tulcea, Romania",
    description: "In seara asta facem mare gratar! Toata lumea este invitata! Daca ai DPF off berea e din partea mea!",
    picturePath: "post1.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Abia astept sa ajung!",
      "Aduc eu micii",
      "Daca am 3 masini cu DPF off imi dai 3 beri?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Maria",
    lastName: "Ioana",
    location: "Pantelimon, Bucuresti",
    description:
      "Va invit la zilele orasului Pantelimon! O sa cante Smiley!",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Vin si eu cu fetele!",
      "Sper sa cante si melodia ACASA!!",
      "Abia astept seara asta",
      "SMILEYYYYYY",
    ],
  },
];