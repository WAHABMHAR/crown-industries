import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import truckSecOne from "../../assets/images/truckIntro.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TruckSectionOne = () => {
  useGSAP(() => {
    const truckSecText = gsap.timeline();
    const truck = gsap.from(".truck", {
      x: "100%",
      duration: 2.4,
      stagger: 0.2,
    });

    ScrollTrigger.create({
      trigger: ".truck_sec_one",
      start: "top bottom",
      scroller: "body",
      onEnter: () => {
        truckSecText.restart();
        truck.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });

    truckSecText.from(".truck_sect_two_text", {
      opacity: 0,
      x: "-100%",
      duration: 0.9,
      stagger: 0.2,
    });
  });
  return (
    <Box
      component={"section"}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <Box
        width={{ lg: "55%", md: "55%", xs: "100%" }}
        height={{ lg: "100%", md: "25rem", xs: "22rem" }}
        sx={{
          background: "#f2c616",
          clipPath: "polygon(0 0, 100% 0, 76% 100%, 0 100%)",
          position: "absolute",
          left: "0",
          topL: "0",
        }}
      ></Box>
      <Container maxWidth="xl">
        <Box
          className="flex_between_center"
          sx={{
            width: "100%",
            height: { xl: "42rem", lg: "36rem", md: "24rem", xs: "42rem" },
            position: "relative",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            className="truck_sec_one flex_only"
            sx={{
              flexDirection: "column",
              marginTop: { xs: "1.5rem" },
              width: { lg: "40%", md: "95%" },
              gap: { xl: "2.5rem", lg: "2rem", xs: "1.4rem" },
            }}
          >
            <Typography
              className="truck_sect_two_text"
              variant="h5"
              color="blackHeading"
              sx={{
                fontFamily: "Open Sans",
                fontSize: { xl: "1.3rem", md: "1rem", xs: "0.8rem" },
                fontWeight: 500,
                lineHeight: "0rem",
              }}
            >
              INNOVATIVE SOLUTIONS
            </Typography>
            <Typography
              className="truck_sect_two_text"
              variant="h2"
              color="white"
              sx={{
                fontFamily: "Oswald",
                fontSize: { xl: "4rem", lg: "3.1rem", xs: "2.3rem" },
                fontWeight: 400,
                lineHeight: { xl: "4rem", lg: "3.2rem", xs: "1rem" },
              }}
            >
              Crown Technology
            </Typography>
            <Box
              className="truck_sect_two_text"
              sx={{ width: "80px", height: "2px", background: "white" }}
            ></Box>
            <Typography
              className="truck_sect_two_text"
              variant="p"
              color="pColor"
              sx={{
                width: { lg: "auto", md: "85%", sm: "65%", xs: "80%" },
                fontFamily: "Open Sans",
                fontSize: { lg: "1.2rem", md: "0.9rem", xs: "0.8rem" },
                lineHeight: { lg: "1.7rem", md: "1.2rem" },
              }}
            >
              For more than 75 years, Crown Industrials has led the industry in
              the design, manufacture and support of commercial vehicles. By
              developing and integrating innovative technologies that result in
              bottom-line benefits, Crown Industrials continues to bring its
              customers new levels of efficiency, productivity and
              profitability.
            </Typography>
            <Button
              component="a"
              href="#gallery"
              className="truck_sect_two_text"
              sx={{
                color: "white",
                border: "2px solid white",
                width: { xl: "10rem", lg: "8rem", xs: "6rem" },
                height: { xl: "3rem", lg: "2.5rem", xs: "2.1rem" },
                fontFamily: "Open Sans",
                fontSize: { lg: "0.9rem", xs: "0.7rem" },
                fontWeight: 600,

                "&:hover": {
                  background: "white",
                  color: "#2f302f",
                  border: "none",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box>
            <Box
              sx={{
                width: {
                  xl: "52rem",
                  lg: "42rem",
                  md: "32rem",
                  sm: "40rem",
                  xs: "24rem",
                },
                height: {
                  xl: "40rem",
                  lg: "31rem",
                  md: "26rem",
                  sm: "28rem",
                  xs: "18rem",
                },
              }}
              className="truck"
            >
              <img
                src={truckSecOne}
                alt="rental_truck_section"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TruckSectionOne;

// clip-path: polygon(0 0, 100% 0, 76% 100%, 0 100%);
