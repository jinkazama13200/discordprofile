import { styled } from "@mui/material";
import React from "react";
import BannerImg from "../../../assets/img/fallen Shiba.png";

export default function Banner({ banner }) {
  const BannerDiv = styled("div")`
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px 10px 0px 0px;
  `;
  const MyBanner = styled("img")`
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    height: 120px;
    opacity: 0;
  `;
  return (
    <BannerDiv>
      <MyBanner src={BannerImg} alt="discord-banner" />
    </BannerDiv>
  );
}
