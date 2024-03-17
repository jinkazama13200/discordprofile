import { Container, Divider, Button, Box, styled, Stack } from "@mui/material";
import React, { Fragment } from "react";
import UserAvatar from "../discordProfile/UserAvatar/UserAvatar";
import IconGroup from "../discordProfile/IconGroup/IconGroup";
import DiscordLogo from "../../assets/img/discord2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../../apis/rolesAPI";

const UserDetails = styled("div")`
  background-color: #000000a2;
  position: relative;
  top: -40px;
  border-radius: 5px;
  padding: 10px;
`;
const DisplayName = styled("h3")`
  margin: 0;
`;
const UserName = styled("span")`
  margin: 0;
`;
const Title = styled("h6")`
  font-weight: bold;
  margin: 0;
`;
const AboutMeContentDiv = styled("div")`
  margin: 5px 0;
  font-size: 13px;
`;
const DateDiv = styled("div")`
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Date = styled("span")`
  margin: 0;
  font-size: 13px;
`;
const Link = styled(Button)`
  color: black;
  font-weight: bold;
  padding: 5px 0;
  font-size: 12px;
  text-transform: none;
`;
const Logo = styled("img")`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
const Space = styled("hr")`
  border-color: gray;
`;
const RoleDiv = styled("div")`
  margin: 5px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Role = styled("div")`
  padding: 2px 5px;
  display: flex;
  align-items: center;
  line-height: inherit;
  gap: 5px;
  background-color: #232428;
  border-radius: 5px;
  position: relative;
`;
const RoleName = styled("span")`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 1px;
  display: inline-block;
`;
const RoleDot = styled("div")`
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;
const RoleLogo = styled("img")`
  width: 15px;
  height: 15px;
  object-fit: cover;
`;

export default function UserInfomation({ user }) {
  // Link array: if wanna add some new link into your profile just push an new object in linkArray and change their value you want
  const linkArray = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100007450140700",
      icon: <FacebookIcon />,
    },
    {
      id: 2,
      name: "Git Hub",
      url: "https://github.com/jinkazama13200",
      icon: <GitHubIcon />,
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://www.instagram.com/iamjiiinnn/",
      icon: <InstagramIcon />,
    },
  ];

  // call api for roles
  const { data: roles = [] } = useQuery({
    queryKey: ["roles"],
    queryFn: () => getRoles(),
  });

  const pfp = user[0]?.pfp || "";

  const roleRender = (arr) => {
    return arr.map((item) => {
      return (
        <Role key={item.id}>
          <RoleDot style={{ backgroundColor: item.color }} />
          <RoleLogo
            style={{ display: item.icon ? "block" : "none" }}
            src={item.icon}
            alt={item.name}
          />
          <RoleName>{item.name}</RoleName>
        </Role>
      );
    });
  };

  const linkRender = (arr) => {
    return arr.map((item) => {
      return (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          startIcon={item.icon}
          variant="contained"
          color="inherit"
          fullWidth
        >
          {item.name}
        </Link>
      );
    });
  };

  const usernameRender = (arr) => {
    return arr.map((item) => {
      return (
        <div key={item.id}>
          <DisplayName>{item.name}</DisplayName>
          <UserName>{item.nickname}</UserName>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <Container>
        {/* Avatar and Icon Part */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            top: "-60px",
          }}
        >
          <UserAvatar pfp={pfp} />
          <IconGroup />
        </div>
        {/* User Details Part */}
        <UserDetails>
          {/* Displayname and Username */}
          {user.length > 0 && usernameRender(user)}
          <Space />
          {/* About Me */}
          <div>
            <Title>ABOUT ME</Title>
            <AboutMeContentDiv>
              {/* Some content about me */}
              <p>Ho Chi Minh City, Dist 5.</p>
              <p>Work Hard, Play Hard !!!!!</p>
              {/* link */}
              <Stack spacing={1}>{linkArray && linkRender(linkArray)}</Stack>
            </AboutMeContentDiv>
          </div>
          {/* Member Since */}
          <div>
            <Title>DISCORD MEMBER SINCE</Title>
            <DateDiv>
              <Logo src={DiscordLogo} alt="discord-logo" />
              <Date>Nov 27, 2020</Date>
            </DateDiv>
          </div>
          {/* ROLES */}
          <div>
            <Title>ROLES</Title>
            <RoleDiv>{roles && roleRender(roles)}</RoleDiv>
          </div>
        </UserDetails>
      </Container>
    </Fragment>
  );
}
