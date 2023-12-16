import React, { Fragment } from "react";
import { Container, styled } from "@mui/material";
import Profile from "./Profile/Profile";

const Background = styled("div")`
  background-image: url("https://i.pinimg.com/originals/8e/46/15/8e46150f790fbefe438d9c2767c32ad1.gif");
  background-repeat: round;
  background-position: center;
  height: 100vh;
`;
export default function Main() {
  return (
    <Background>
      <Profile />
    </Background>
  );
}
