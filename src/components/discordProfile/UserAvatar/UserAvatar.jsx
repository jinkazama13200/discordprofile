import { styled } from "@mui/material";
import React from "react";
import { Skeleton } from "@mui/material";
export default function UserAvatar({ pfp, isLoading }) {
  const Avatar = styled("div")`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url(${pfp});
    border: 5px solid #fefefe;
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
      border: 5px solid #fefefe;
    }
  `;

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="circular"
          width="100px"
          height="100px"
          animation="wave"
        />
      ) : (
        <Avatar />
      )}
    </>
  );
}
