import React from "react";
import { styled } from "@mui/material";
import Banner from "../Banner/Banner";
import UserInfomation from "../../UserInfomation/UserInfomation";
import "animate.css";
import { useQuery } from "@tanstack/react-query";
import { getUserInf } from "../../../apis/userAPI";

const MyProfile = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  border: 2px solid transparent;
  color: white;
  background-color: #232428;
  border-radius: 10px;
  width: 350px;
  background: linear-gradient(to bottom, #b183b3 1%, #eb88ee 50%, #b32fff 100%);
`;

export default function Profile() {
  const { data: user = {} } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInf(),
  });

  const banner = user[0]?.banner || "";

  return (
    <MyProfile>
      <Banner banner={banner} />
      <UserInfomation user={user} />
    </MyProfile>
  );
}
