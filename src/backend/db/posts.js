import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Good Moring",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarshbalika",
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658_vfeumr.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Hello Frnds",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Shubham",
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/businessman-icon-color-vector-illustration_755164-2088_yd0wms.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Have a lovely Day....",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    firstName: "Shubham",
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/businessman-icon-color-vector-illustration_755164-2088_yd0wms.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Life is a challege and you have to live it....",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "lakshmandutta",
    firstName: "Lakshman",
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/handsome-businessman-suit_88465-811_stoyer.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Good Moring People",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarshbalika",
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658_vfeumr.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
