import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/crownLogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const footerMenuOne = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "#",
  },
  {
    name: "Fleet",
    path: "#fleet",
  },
];
const footerMenuTwo = [
  {
    name: "Gallery",
    path: "#gallery",
  },
  {
    name: "Featured Trucks",
    path: "#featured",
  },

  {
    name: "Technology",
    path: "#",
  },
];
const footerMenuThree = [
  {
    text: "0405820820",
    icon: <WhatsAppIcon sx={{ color: "#f2c616", fontSize: "2.5rem" }} />,
  },
  {
    text: "admin@crownindustrialrentals.com",
    icon: <LocalPostOfficeIcon sx={{ color: "#f2c616", fontSize: "2.5rem" }} />,
  },
  {
    text: "1107 Mamre road kemps creek NSW 2178",
    icon: <LocationOnIcon sx={{ color: "#f2c616", fontSize: "2.5rem" }} />,
  },
];

const Footer = () => {
  useGSAP(() => {
    const menu_one = gsap.timeline();
    const menu_two = gsap.timeline();
    const menu_three = gsap.timeline();

    const footer_logo = gsap.from(".footer_logo", {
      x: "-100%",
      opacity: 0,
      duration: 1,
    });

    ScrollTrigger.create({
      trigger: "#footer",
      start: "top bottom",
      scroller: "body",
      onEnter: () => {
        menu_one.restart();
        menu_two.restart();
        menu_three.restart();
        footer_logo.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });

    menu_one.from(".footer_menu_one", {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    menu_two.from(".footer_menu_two", {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    menu_three.from(".footer_menu_three", {
      x: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  return (
    <Box
      overflow={"hidden"}
      id="footer"
      component={"footer"}
      sx={{ backgroundColor: "#f2f2f2", padding: "5rem 0" }}
    >
      <Container maxWidth="xl">
        <Box className="flex_column_center" sx={{ alignItems: "center" }}>
          <Box
            width={"65%"}
            height={"2px"}
            backgroundColor="#f2c616"
            marginBottom={"4rem"}
          ></Box>
          <Box
            className="flex_center"
            sx={{ gap: { xl: "3.4rem", xs: "3rem" } }}
          >
            <Box sx={{ width: { xl: "22rem", lg: "18rem" } }}>
              <a href="/">
                <img
                  className="footer_logo"
                  src={logo}
                  alt="crown_rental_logo"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                />
              </a>
            </Box>
            <Box className="flex_column_center" sx={{ gap: "1.5rem" }}>
              {footerMenuOne?.map((item, index) => {
                return (
                  <Typography
                    className="footer_menu_one"
                    href={item?.path}
                    component={"a"}
                    variant="h6"
                    color="#2f302f"
                    key={index}
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: { xl: "1.5rem", xs: "1.3rem" },
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    {item?.name}
                  </Typography>
                );
              })}
            </Box>
            <Box className="flex_column_center" sx={{ gap: "1.5rem" }}>
              {footerMenuTwo?.map((item, index) => {
                return (
                  <Typography
                    className="footer_menu_two"
                    href={item?.path}
                    component={"a"}
                    variant="h6"
                    color="#2f302f"
                    key={index}
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: { xl: "1.5rem", xs: "1.3rem" },
                      fontWeight: 500,

                      textDecoration: "none",
                    }}
                  >
                    {item?.name}
                  </Typography>
                );
              })}
            </Box>
            <Box
              className="flex_column"
              sx={{ alignItems: "flex-start", gap: "1.5rem" }}
            >
              {footerMenuThree?.map((item, index) => {
                return (
                  <>
                    <Box
                      className="flex_center footer_menu_three"
                      sx={{ gap: "1rem" }}
                    >
                      {item?.icon}
                      <Typography
                        variant="h6"
                        color="#2f302f"
                        key={index}
                        sx={{
                          fontFamily: "Open sans",
                          fontSize: { xl: "1.5rem", xs: "1.3rem" },
                        }}
                      >
                        {item?.text}
                      </Typography>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Box>
          {/* <Box
            width={"65%"}
            height={"2px"}
            backgroundColor="#f2c616"
            marginTop={"4rem"}
          ></Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
