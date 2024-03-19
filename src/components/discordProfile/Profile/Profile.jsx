import React from "react";
import { styled } from "@mui/material";
import Banner from "../Banner/Banner";
import UserInfomation from "../../UserInfomation/UserInfomation";
import "animate.css";
import { useQuery } from "@tanstack/react-query";
import { getUserInf } from "../../../apis/userAPI";

const MyProfile = styled("div")`
  border: 1px solid #b32fff;
  color: white;
  border-radius: 10px;
  width: 350px;
  background: linear-gradient(to right, #b183b3 0%, #b32fff 51%, #b183b3 100%);
  background-size: 200%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.3s all;
  z-index: 1;
  &:hover {
    background-position: right;
  }
`;

export default function Profile() {
  const { data: user = {}, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInf(),
  });

  const banner = user[0]?.banner || "";

  return (
    <MyProfile>
      <Banner banner={banner} isLoading={isLoading} />
      <UserInfomation user={user} isLoading={isLoading} />
    </MyProfile>
  );
}
