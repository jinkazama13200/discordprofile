import React, { Fragment } from "react";
import User from "./UserMng/User";
import Roles from "./RolesMng/Roles";
import { Box } from "@mui/material";

export default function UserManager() {
  return (
    <Fragment>
      <Box sx={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center",gap:"20px",py:2}}>
        <User />
        <Roles />
      </Box>
    </Fragment>
  );
}
