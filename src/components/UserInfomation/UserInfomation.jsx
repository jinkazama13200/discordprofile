import { Container, Divider, Button, Box, styled, Stack } from "@mui/material";
import React, { Fragment } from "react";
import UserAvatar from "../discordProfile/UserAvatar/UserAvatar";
import IconGroup from "../discordProfile/IconGroup/IconGroup";
import DiscordLogo from "../../assets/img/discord2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import HTML from "../../assets/img/html.png";
import CSS from "../../assets/img/css.png";
import JavaScript from "../../assets/img/javascript.png";
import SASS from "../../assets/img/sass.png";
import GIT from "../../assets/img/git.png";
import ReactJs from "../../assets/img/react.png";

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

export default function UserInfomation() {
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

  // Role array: if wanna add some new role,do the same step as link Array
  // for the icon: u can also using url instead of local file from ur PC
  const roleArray = [
    {
      id: 1,
      name: "HTML",
      icon: HTML,
      color: "#f3936c",
    },
    {
      id: 2,
      name: "CSS",
      icon: CSS,
      color: "#2397F3",
    },
    {
      id: 3,
      name: "Javascript",
      icon: JavaScript,
      color: "#F7DF1E",
    },
    {
      id: 4,
      name: "Git Hub",
      icon: GIT,
      color: "#DE4C36",
    },
    {
      id: 5,
      name: "SASS",
      icon: SASS,
      color: "#C46093",
    },
    {
      id: 6,
      name: "React JS",
      icon: ReactJs,
      color: "#0B98B1",
    },
    {
      id: 7,
      name: "Jinnnnn",
      icon: "https://i.pinimg.com/736x/78/c6/cf/78c6cfc484d4cf4a1fe3b19aa6f1c7e3.jpg",
      color: "#B192F5",
    },
    {
      id: 8,
      name: "Perm Nitro",
      icon: "https://i.pinimg.com/originals/15/8b/88/158b886aca8ce4421934166eed498481.gif",
      color: "#7489D8",
    },
  ];

  const roleRender = (array) => {
    return array.map((item) => {
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

  const linkRender = (array) => {
    return array.map((item) => {
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
          <UserAvatar />
          <IconGroup />
        </div>
        {/* User Details Part */}
        <UserDetails>
          {/* Displayname and Username */}
          <div>
            <DisplayName>Jinnnnn</DisplayName>
            <UserName>iamjinnnnn___</UserName>
          </div>
          <Space />
          {/* About Me */}
          <div>
            <Title>ABOUT ME</Title>
            <AboutMeContentDiv>
              {/* Some content about me */}
              <p>Ho Chi Minh City, Dist 5.</p>
              <p>Word Hard, Play Hard !!!!!</p>
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
            <RoleDiv>{roleArray && roleRender(roleArray)}</RoleDiv>
          </div>
        </UserDetails>
      </Container>
    </Fragment>
  );
}
