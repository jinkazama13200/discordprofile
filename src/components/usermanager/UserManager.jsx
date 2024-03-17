import React, { Fragment } from "react";
import User from "./UserMng/User";
import Roles from "./RolesMng/Roles";
import { Box } from "@mui/material";

export default function UserManager() {
  return (
    <Fragment>
      <Box
        sx={{
          width: `calc(100% - 450px)`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <User />
        <Roles />
      </Box>
    </Fragment>
  );
}
