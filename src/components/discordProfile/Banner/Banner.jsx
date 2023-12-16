import { styled } from "@mui/material";
import React from "react";
import BannerImg from "../../../assets/img/fallen Shiba.png";

const MyBanner = styled("img")`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  height: 120px;
  opacity: 0;
`;

const BannerDiv = styled("div")`
  background-image: url("https://i.pinimg.com/originals/44/eb/17/44eb17afabc36a2df89e9bed6494587b.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px 10px 0px 0px;
`;

export default function Banner() {
  return (
    <BannerDiv>
      <MyBanner src={BannerImg} alt="discord-banner" />
    </BannerDiv>
  );
}
