import { styled } from "@mui/material";
import React from "react";

export default function UserAvatar({ pfp }) {
  const Avatar = styled("div")`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url(${pfp});
    border: 5px solid #000000ac;
    background-size: 100%;
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
      border: 5px solid #000000ac;
    }
  `;
  return <Avatar />;
}
