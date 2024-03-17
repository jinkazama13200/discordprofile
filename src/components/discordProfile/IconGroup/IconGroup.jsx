import React from "react";
import { Stack, Skeleton, styled } from "@mui/material";
import Nitro from "../../../assets/img/discord-nitro.png";
import Boost from "../../../assets/img/level-3-discord-boost.png";
import Hype from "../../../assets/img/hypesquad19.gif";
import Hype2 from "../../../assets/img/HypeSquad_Events39.png";

export default function IconGroup({ isLoading }) {
  const IconDiv = styled("div")`
    display: flex;
    justify-content: space-around;
    background-color: ${isLoading ? "#00000045" : "black"};
    padding: 5px;
    gap: 5px;
    height: 100%;
    border-radius: 10px;
    position: relative;
    top: 80px;
  `;

  const IconImg = styled("img")`
    width: 20px;
    height: 20px;
    object-fit: cover;
    cursor: pointer;
  `;
  const iconList = [
    {
      id: 1,
      icon: Nitro,
    },
    {
      id: 2,
      icon: Boost,
    },
    {
      id: 3,
      icon: Hype,
    },
    {
      id: 4,
      icon: Hype2,
    },
  ];

  const iconRender = (array) => {
    return array.map((item) => {
      return <IconImg key={item.id} src={item.icon} alt="icon" />;
    });
  };

  return (
    <IconDiv>
      {isLoading ? (
        <Stack spacing={1} direction="row">
          <Skeleton
            variant="circular"
            animation="wave"
            width="20px"
            height="20px"
          />
          <Skeleton
            variant="circular"
            animation="wave"
            width="20px"
            height="20px"
          />
          <Skeleton
            variant="circular"
            animation="wave"
            width="20px"
            height="20px"
          />
        </Stack>
      ) : (
        iconList.length > 0 && iconRender(iconList)
      )}
    </IconDiv>
  );
}
