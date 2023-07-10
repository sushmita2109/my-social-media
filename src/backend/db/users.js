import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Aspiring FullStack Developer",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sample",
    lastName: "User",
    username: "user",
    password: "user123",
    bio: "Aspiring Backend Developer",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Lakshman",
    lastName: "Dutta",
    username: "lakshmandutta",
    password: "user123",
    bio: "Aspiring Frontend Developer",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sushmita",
    lastName: "Kumari",
    username: "sushmitakumari",
    email: "sushmitakumari@gmail.com",
    password: "sushmita",
    bio: "Aspiring Frontend Developer",
    website: "",
    profileAvatar: "",
    backgroundImage: "",
    createdAt: "2022-08-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
