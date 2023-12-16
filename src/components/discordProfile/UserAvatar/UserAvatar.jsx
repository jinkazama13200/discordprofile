import { styled } from "@mui/material";
import React from "react";

const Avatar = styled("div")`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgray;
  border: 5px solid #0000007b;
  background-image: url("https://i.pinimg.com/originals/cf/14/4e/cf144e2f98b0e75b45ea82cfc20371d7.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
    border: 5px solid #0000007b;
  }
`;

export default function UserAvatar() {
  return <Avatar />;
}
