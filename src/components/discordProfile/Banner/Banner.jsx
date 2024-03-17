import { styled } from "@mui/material";
import React from "react";
import BannerImg from "../../../assets/img/fallen Shiba.png";
import { Skeleton } from "@mui/material";

export default function Banner({ banner, isLoading }) {
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
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height="120px"
        />
      ) : (
        <BannerDiv>
          <MyBanner src={BannerImg} alt="discord-banner" />
        </BannerDiv>
      )}
    </>
  );
}
