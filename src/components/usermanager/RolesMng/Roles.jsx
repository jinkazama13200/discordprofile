import React, { Fragment, useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addRole,
  getRoleById,
  getRoles,
  removeRoleById,
  updateRoleById,
} from "../../../apis/rolesAPI";
import PNG from "../../../assets/img/css.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const rolesSchema = object({
  name: string().required("Empty."),
  icon: string().required("Empty."),
  color: string().required("Empty."),
});

export default function Roles() {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState(null);

  const ActionBtn = styled(Tooltip)`
    width: 35px;
    height: 35px;
  `;

  // call api get roles data using useQuery
  const { data: roles = [] } = useQuery({
    queryKey: ["roles"],
    queryFn: () => getRoles(),
  });

  // add role using useMutation
  const { mutate: onSubmit } = useMutation({
    mutationFn: (payload) => {
      const id = watch("id");
      if (id) {
        return updateRoleById(id, payload);
      } else {
        return addRole(payload);
      }
    },
    onSuccess: () => {
      alert("successfully.");
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      reset();
    },
  });

  // get role by ID
  const { mutate: handleGetRoleById } = useMutation({
    mutationFn: (id) => getRoleById(id),
    onSuccess: (payload) => {
      setSelected(payload);
    },
  });

  // remove role by id
  const { mutate: handleRemoveRole } = useMutation({
    mutationFn: (id) => removeRoleById(id),
    onSuccess: () => {
      alert("Remove Successfully.");
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  // setup form useing useForm react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      icon: "",
      color: "",
    },
    resolver: yupResolver(rolesSchema),
    mode: "onTouched",
  });

  // render
  const renderRole = (arr) => {
    return arr.map((item) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "initial",
            gap: "10px",
            width: "150px",
            marginTop: "10px",
            cursor: "pointer",
            transition: "0.3s all",
            border: "2px solid transparent",
            padding: "5px",
            "&:hover": {
              border: `2px solid ${item.color}`,
            },
          }}
          key={item.id}
          component={Paper}
        >
          {/* ICON */}
          <Box
            sx={{
              backgroundImage: `url(${item.icon})`,
              backgroundSize: "40px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            component="div"
          >
            <img
              style={{ width: "50px", opacity: 0 }}
              src={PNG}
              alt="icon-png"
            />
          </Box>
          {/* NAME & COLOR */}
          <Box component="div">
            <Typography color={item.color} variant="subtitle1">
              {item.name}
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }} component="div">
              {/* EDIT BTN */}
              <ActionBtn
                sx={{ border: `2px solid ${item.color}` }}
                onClick={() => handleGetRoleById(item.id)}
                placement="bottom-start"
                title="Edit"
              >
                <IconButton>
                  <EditIcon />
                </IconButton>
              </ActionBtn>
              {/* REMOVE BTN */}
              <ActionBtn
                sx={{ border: `2px solid ${item.color}` }}
                onClick={() => handleRemoveRole(item.id)}
                placement="bottom-start"
                title="Remove"
              >
                <IconButton>
                  <DeleteForeverIcon />
                </IconButton>
              </ActionBtn>
            </Box>
          </Box>
        </Box>
      );
    });
  };

  useEffect(() => {
    if (!selected) return;
    setValue("id", selected?.id);
    setValue("name", selected?.name);
    setValue("icon", selected?.icon);
    setValue("color", selected?.color);
  }, [selected]);

  return (
    <Fragment>
      <Box
        sx={{
          marginTop: "20px",
          p: 2,
        }}
        component={Paper}
      >
        <Typography variant="h4">Roles</Typography>
        {/* form Box */}
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          autoComplete="off"
        >
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
            component="div"
          >
            <Box component="div">
              <Typography variant="subtitle1">Role ID</Typography>
              <TextField
                {...register("id")}
                color="secondary"
                variant="standard"
                disabled
              />
            </Box>
            <Box component="div">
              <Typography variant="subtitle1">Role Name</Typography>
              <TextField
                {...register("name")}
                color="secondary"
                variant="standard"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Box>
            <Box component="div">
              <Typography variant="subtitle1">Role Icon (Link) </Typography>
              <TextField
                {...register("icon")}
                color="secondary"
                variant="standard"
                error={!!errors.icon}
                helperText={errors.icon?.message}
              />
            </Box>
            <Box component="div">
              <Typography variant="subtitle1">Role Color (#) </Typography>
              <TextField
                {...register("color")}
                color="secondary"
                variant="standard"
                error={!!errors.color}
                helperText={errors.color?.message}
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
          <Button
            onClick={() => reset()}
            type="button"
            sx={{ ml: 2, mt: 2, px: 5, py: 2 }}
            variant="contained"
            color="error"
          >
            Reset
          </Button>
        </Box>
        {/* role component */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
          }}
          component="div"
        >
          {roles && renderRole(roles)}
        </Box>
      </Box>
    </Fragment>
  );
}
