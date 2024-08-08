import { Box, Container, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/images/banner.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomBannerText } from "../../styles/muiStyles";

const HeroSection = () => {
  useGSAP(() => {
    const bannerHeading = gsap.timeline();

    bannerHeading.from(".banner_heading", {
      opacity: 0,
      x: "100%",
      duration: 1,
      stagger: 0.2, // Delay between each menu item animation
    });
  });
  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        height: { xl: "48rem", xs: "36rem" },
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      ></Box>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box
          sx={{
            float: "inline-end",
            height: "100%",
            position: "relative",
            top: "25%",
            zIndex: 3,
            overflow: "hidden",
          }}
        >
          <Typography
            className="banner_heading"
            variant="h5"
            color="white"
            sx={{
              fontFamily: "Oswald",
              fontSize: { xl: "1.5rem", xs: "1rem" },
              textShadow: "1px 0px 1px black",
              textTransform: "uppercase",
            }}
          >
            Crown Industrial Rental is Your's
          </Typography>
          <CustomBannerText
            className="banner_heading"
            sx={{ fontSize: { xl: "7rem" } }}
          >
            Specialist Heavy
          </CustomBannerText>
          <CustomBannerText
            className="banner_heading"
            sx={{ fontSize: { xl: "7rem" } }}
          >
            Commercials
          </CustomBannerText>
          <CustomBannerText
            className="banner_heading"
            sx={{
              color: "#f2c616",
              textTransform: "uppercase",
              fontSize: { xl: "7rem" },
            }}
          >
            Hire Supplier
          </CustomBannerText>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
