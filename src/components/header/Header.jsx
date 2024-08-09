import {
  Box,
  Container,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/crownLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const menu = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ABOUT US",
    path: "#about",
  },
  {
    name: "FLEET",
    path: "#fleet",
  },
  {
    name: "GALLERY",
    path: "#gallery",
  },
  {
    name: "CONTACT US",
    path: "#footer",
  },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = (newOpen) => {
    setIsDrawerOpen(newOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    const headerTl = gsap.timeline();
    headerTl.from(".logo_icon_tl", {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: 0.2,
    });

    tl.from("#menu_item", {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: 0.2, // Delay between each menu item animation
    });
  });

  return (
    <Box component={"header"} id="header">
      <Container maxWidth="xl">
        <Box
          sx={{ height: { xl: "90px", xs: "75px" } }}
          className="flex_between_center"
        >
          <Box
            sx={{ width: { xl: "200px", md: "160px", xs: "115px" } }}
            id="logo"
            className="logo_icon_tl"
          >
            <a href="/">
              <img
                src={logo}
                alt="crown-industrial-logo"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
              />
            </a>
          </Box>
          <Box display={{ sm: "flex", xs: "none" }}>
            <List
              className="flex_center"
              sx={{ gap: { md: "1.3rem", xs: "1rem" } }}
            >
              {menu.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    id="menu_item"
                    sx={{ padding: { md: "16px", xs: "16px 6px" } }}
                  >
                    <Box
                      component={"a"}
                      href={item.path}
                      sx={{
                        fontWeight: "600",
                        fontSize: { md: "1rem", xs: "0.7rem" },
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        color: "black",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          color: "#f2c616",
                        },
                      }}
                    >
                      {item.name}
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box sx={{ display: { sm: "none", xs: "block" } }}>
            <MenuIcon
              onClick={() => handleDrawer(true)}
              className="logo_icon_tl"
            />
            <Drawer
              open={isDrawerOpen}
              onClose={() => handleDrawer(false)}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            >
              <Box
                sx={{
                  width: { sm: "500px", xs: "100vw" },
                  height: "100%",
                  backgroundColor: "white",
                }}
              >
                {/* <Box> */}
                <Box
                  sx={{
                    width: "115px",

                    position: "absolute",
                    left: "1.2rem",
                    top: "1rem",
                  }}
                  id="logo"
                  className="logo_icon_tl"
                >
                  <a href="/">
                    <img
                      src={logo}
                      alt="crown-industrial-logo"
                      width={"100%"}
                      height={"100%"}
                      objectFit="cover"
                    />
                  </a>
                </Box>
                <CloseIcon
                  className="logo_icon_tl"
                  onClick={() => handleDrawer(false)}
                  sx={{
                    color: "#2f302f",
                    position: "absolute",
                    right: "1.2rem",
                    top: "1.6rem",
                  }}
                />
                {/* </Box> */}
                <Box className="flex_column" sx={{ marginTop: "5rem" }}>
                  {menu.map((item, index) => {
                    return (
                      <>
                        <Link
                          key={index}
                          underline="none"
                          component={"a"}
                          href={item.path}
                          onClick={() => handleDrawer(false)}
                          sx={{
                            color: "#2f302f",
                            textAlign: "center",
                            padding: "1.5rem 0",
                            fontWeight: "bolder",
                            transition: "0.5s ease-in",
                            "&:hover": {
                              backgroundColor: "#f2c616",
                            },
                          }}
                        >
                          {item.name}
                        </Link>
                        <Divider sx={{ background: "white" }}></Divider>
                      </>
                    );
                  })}
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
