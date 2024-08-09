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
        width={"55%"}
        height={"100%"}
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
            height: "42rem",
            position: "relative",
          }}
        >
          <Box
            className="truck_sec_one flex_only"
            sx={{
              flexDirection: "column",
              width: "40%",
              gap: { xl: "2.5rem", xs: "2rem" },
            }}
          >
            <Typography
              className="truck_sect_two_text"
              variant="h5"
              color="blackHeading"
              sx={{
                fontFamily: "Open Sans",
                fontSize: { xl: "1.3rem", xs: "1rem" },
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
                fontSize: { xl: "4rem", xs: "3.1rem" },
                fontWeight: 400,
                lineHeight: { xl: "4rem", xs: "3.2rem" },
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
                fontFamily: "Open Sans",
                fontSize: "1.2rem",
                lineHeight: "1.7rem",
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
                width: { xl: "10rem", xs: "8rem" },
                height: { xl: "3rem", xs: "2.5rem" },
                fontFamily: "Open Sans",
                fontSize: "0.9rem",
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
                width: { xl: "52rem", xs: "40rem" },
                height: { xl: "40rem", xs: "28rem" },
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
