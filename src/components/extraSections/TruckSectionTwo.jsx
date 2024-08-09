import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import truckSecTwo from "../../assets/images/truckSecTwo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TruckSectionTwo = () => {
  useGSAP(() => {
    const truckSecText = gsap.timeline();
    const truck = gsap.from(".truck_two", {
      x: "100%",
      duration: 2.4,
      stagger: 0.2,
    });

    ScrollTrigger.create({
      trigger: ".truck_sec_two",
      start: "top bottom",
      scroller: "body",

      onEnter: () => {
        truckSecText.restart();
        truck.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });

    truckSecText.from(".truck_sec_two_text", {
      opacity: 0,
      x: "-100%",
      duration: 0.7,
      stagger: 0.1,
    });
  });
  return (
    <Box
      id="truck_feature"
      component={"section"}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <Box
        width={{ lg: "55%", md: "55%", xs: "100%" }}
        height={{ lg: "100%", md: "27rem", xs: "26rem" }}
        sx={{
          background: "#f2c616",
          clipPath: "polygon(0 0, 100% 0, 76% 100%, 0 100%)",
          position: "absolute",
          left: "0",
          topL: "0",
        }}
      ></Box>
      <Container maxWidth="xl" className="truck_sec_two">
        <Box
          className="flex_between_center"
          sx={{
            width: "100%",
            height: { xl: "42rem", lg: "36rem", md: "24rem", xs: "45rem" },
            position: "relative",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            className=" flex_only"
            sx={{
              flexDirection: "column",
              marginTop: { xs: "1.5rem" },
              width: { lg: "40%", md: "95%" },
              gap: { xl: "2.5rem", lg: "2rem", xs: "1.4rem" },
            }}
          >
            <Typography
              className="truck_sec_two_text"
              variant="h5"
              color="blackHeading"
              sx={{
                fontFamily: "Open Sans",
                fontSize: { xl: "1.3rem", md: "1rem", xs: "0.8rem" },
                fontWeight: 500,
                lineHeight: "0rem",
              }}
            >
              Endurance
            </Typography>
            <Typography
              className="truck_sec_two_text"
              variant="h2"
              color="white"
              sx={{
                fontFamily: "Oswald",
                fontSize: { xl: "4rem", lg: "3.1rem", xs: "2.3rem" },
                fontWeight: 400,
                lineHeight: { xl: "4rem", lg: "3.2rem", xs: "1rem" },
              }}
            >
              Built for Durability
            </Typography>
            <Box
              className="truck_sec_two_text"
              sx={{ width: "80px", height: "2px", background: "white" }}
            ></Box>
            <Typography
              className="truck_sec_two_text"
              variant="p"
              color="pColor"
              sx={{
                width: { lg: "auto", md: "90%", sm: "65%", xs: "80%" },
                fontFamily: "Open Sans",
                fontSize: { lg: "1.2rem", md: "0.9rem", xs: "0.8rem" },
                lineHeight: { lg: "1.7rem", md: "1.2rem" },
              }}
            >
              The Crown Industrial's Model 367 exemplifies rugged durability and
              superior craftsmanship, purpose-built for the vocational sector.
              Designed to handle the tough conditions of dump, logging,
              construction, and other heavy-duty applications, it features a
              lightweight, all-aluminum cab with lap seam construction and
              bulkhead-style doors, known for its outstanding toughness and
              resistance to corrosion.
            </Typography>
            <Button
              component="a"
              className="truck_sec_two_text"
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
                  sm: "35rem",
                  xs: "20rem",
                },
                height: {
                  xl: "40rem",
                  lg: "31rem",
                  md: "22rem",
                  sm: "25rem",
                  xs: "17rem",
                },
              }}
              className="truck_two"
            >
              <img
                src={truckSecTwo}
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

export default TruckSectionTwo;

// clip-path: polygon(0 0, 100% 0, 76% 100%, 0 100%);
