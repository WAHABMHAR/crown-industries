import { Box, Container, Drawer, List, ListItem } from "@mui/material";
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
    gsap.from("#logo", { opacity: 0, y: -100, duration: 1 });

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
          <Box sx={{ width: { xl: "200px", xs: "160px" } }} id="logo">
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
          <Box display={"flex"}>
            <List className="flex_center" sx={{ gap: "0.8rem" }}>
              {menu.map((item, index) => {
                return (
                  <ListItem key={index} id="menu_item">
                    <Box
                      component={"a"}
                      href={item.path}
                      sx={{
                        fontWeight: "600",
                        fontSize: { xl: "1rem", xs: "0.8rem" },
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
          <Box sx={{ display: "none" }}>
            <MenuIcon onClick={() => handleDrawer(true)} />
            <Drawer
              open={isDrawerOpen}
              onClose={() => handleDrawer(false)}
              sx={{ backgroundColor: "rgba(255, 205, 5, 0.1)" }}
            >
              <Box
                sx={{
                  width: "500px",
                  height: "100%",
                  backgroundColor: "black",
                }}
              >
                <Box>
                  <CloseIcon
                    onClick={() => handleDrawer(false)}
                    sx={{ color: "white" }}
                  />
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
