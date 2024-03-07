import { styled } from "@mui/material";
import React from "react";
import Pfp from "../../../assets/img/fallen Shiba.png";

const Avatar = styled("div")`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url("https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/426520071_3734059023519066_5362835849010585068_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V4e3njrEDq4AX8-me8q&_nc_ht=scontent.fhan3-3.fna&oh=00_AfA6Hcw--Ai6PHZE3bvi7jDjlZmh2HzkpQexuZijlhKSyQ&oe=65EF20C7");
  border: 5px solid #000000ac;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: green;
    top: 73px;
    right: 3px;
    border-radius: 50%;
    border: 5px solid #000000ac;
  }
`;

export default function UserAvatar() {
  return <Avatar />;
}
