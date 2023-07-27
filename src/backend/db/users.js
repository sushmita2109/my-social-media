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
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658_vfeumr.jpg",
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
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179151/avatars/young-woman-white_25030-39552_l54dms.avif",
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
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/handsome-businessman-suit_88465-811_stoyer.jpg",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "user123",
    bio: "Aspiring Frontend Developer",
    profile_pic:
      "https://res.cloudinary.com/dcsyrk6s3/image/upload/v1690179150/avatars/businessman-icon-color-vector-illustration_755164-2088_yd0wms.jpg",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
