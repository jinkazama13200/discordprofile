import React, { Fragment, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserInf, updateUserInf } from "../../../apis/userAPI";

const userSchema = object({
  name: string().required("Empty."),
  nickname: string().required("Empty."),
  banner: string().required("Empty."),
  pfp: string().required("Empty."),
});

export default function User() {
  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInf(),
  });

  const { mutate: onSubmit, isLoading: updating } = useMutation({
    mutationFn: (data) => {
      const id = user[0].id;
      console.log(data);
      return updateUserInf(id, data);
    },
    onSuccess: () => {
      alert("Edit Completed");
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      nickname: "",
      banner: "",
      pfp: "",
    },
    resolver: yupResolver(userSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (user) {
      setValue("name", user[0]?.name);
      setValue("nickname", user[0]?.nickname);
      setValue("banner", user[0]?.banner);
      setValue("pfp", user[0]?.pfp);
    }
  }, [user]);

  return (
    <Fragment>
      <Box
        sx={{
          p: 2,
        }}
        component={Paper}
      >
        <Typography variant="h4">User</Typography>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          autoComplete="off"
        >
          {/* form Box */}
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
            component="div"
          >
            <Box component="div">
              <Typography variant="subtitle1">Name</Typography>
              <TextField
                {...register("name")}
                color="secondary"
                variant="standard"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Box>
            <Box component="div">
              <Typography variant="subtitle1">Nickname</Typography>
              <TextField
                {...register("nickname")}
                color="secondary"
                variant="standard"
                error={!!errors.nickname}
                helperText={errors.nickname?.message}
              />
            </Box>
            <Box component="div">
              <Typography variant="subtitle1">Banner</Typography>
              <TextField
                {...register("banner")}
                color="secondary"
                variant="standard"
                error={!!errors.banner}
                helperText={errors.banner?.message}
              />
            </Box>
            <Box component="div">
              <Typography variant="subtitle1">Pfp</Typography>
              <TextField
                {...register("pfp")}
                color="secondary"
                variant="standard"
                error={!!errors.pfp}
                helperText={errors.pfp?.message}
              />
            </Box>
          </Box>
          {/* submit btn */}
          <Button
            type="submit"
            sx={{ mt: 2, px: 5, py: 2 }}
            variant="contained"
            color="inherit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
