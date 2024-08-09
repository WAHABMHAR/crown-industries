import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import model_one from "../../assets/images/truckModel1.png";
import model_two from "../../assets/images/truckModel2.png";
import { CustomButton } from "../../styles/muiStyles";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TruckModel = () => {
  useGSAP(() => {
    const truckModelText = gsap.timeline();

    const truckModel = gsap.from(".truck_model", {
      opacity: 0,
      //   width: "1rem",
      duration: 1.5,
    });

    ScrollTrigger.create({
      trigger: ".truck_model_sec",
      start: "top bottom",
      scroller: "body",
      onEnter: () => {
        truckModelText.restart();
        truckModel.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });

    truckModelText.from(".model_text", {
      opacity: 0,
      x: 100,
      duration: 0.7,
      stagger: 0.1, // Delay between each menu item animation
    });
  });
  return (
    <Box
      id="featured"
      component={"section"}
      sx={{ background: "#f2f2f2", overflow: "hidden" }}
    >
      <Container maxWidth="xl">
        <Box
          className="flex_center truck_model_sec"
          sx={{
            width: "100%",
            height: { xl: "46rem", xs: "44rem" },
            gap: "3rem",
          }}
        >
          <Box
            className="mode_box flex_column"
            sx={{
              gap: "1.5rem",
              width: "25rem",
              height: "40rem",
            }}
          >
            <Typography
              className="model_text"
              variant="h3"
              color="primary.main"
              sx={{
                fontFamily: "Oswald",
                fontSize: { xl: "3.4rem", xs: "2.6rem" },
                fontWeight: "400",
              }}
            >
              Model 567
            </Typography>
            <Box
              className="model_text"
              sx={{ width: "70px", height: "2px", background: "#f2c616" }}
            ></Box>
            <Typography
              className="model_text"
              variant="p"
              color="pGrey"
              sx={{
                fontSize: { xl: "1.4rem", xs: "1.2rem" },
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              Classic styling combined with modern innovations. It’s in our
              heritage.
            </Typography>
            <Box sx={{ width: { xl: "24rem", xs: "20rem" } }}>
              <img
                className="truck_model"
                src={model_one}
                alt="rental_truck_model"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
              />
            </Box>
            <CustomButton
              href="#gallery"
              className="model_text flex_center"
              sx={{
                width: { xs: "8rem" },
                height: { xs: "2.5rem" },
                fontSize: { xl: "1rem", xs: "0.8rem" },
              }}
            >
              Learn More
            </CustomButton>
          </Box>
          <Box
            className="mode_box flex_column"
            sx={{
              gap: "1.5rem",
              width: "25rem",
              height: "40rem",
              alignItems: "flex-start",
            }}
          >
            <Typography
              className="model_text"
              variant="h3"
              color="primary.main"
              sx={{
                fontFamily: "Oswald",
                fontSize: { xl: "3.4rem", xs: "2.6rem" },
                fontWeight: "400",
              }}
            >
              Model 389
            </Typography>
            <Box
              className="model_text"
              sx={{ width: "70px", height: "2px", background: "#f2c616" }}
            ></Box>
            <Typography
              className="model_text"
              variant="p"
              color="pGrey"
              sx={{
                fontSize: { xl: "1.4rem", xs: "1.2rem" },
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              Crown Industrials with PFC to offer an unbeatable FMV program for
              Model 337 trucks with van configuration.
            </Typography>
            <Box sx={{ width: { xl: "24rem", xs: "20rem" } }}>
              <img
                className="truck_model"
                src={model_two}
                alt="rental_truck_model"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
              />
            </Box>
            <CustomButton
              href="#gallery"
              className="model_text flex_center"
              sx={{
                width: { xs: "8rem" },
                height: { xs: "2.5rem" },
                fontSize: { xl: "1rem", xs: "0.8rem" },
              }}
            >
              Learn More
            </CustomButton>
          </Box>
          <Box
            className="mode_box flex_column"
            sx={{ gap: "1.5rem", width: "25rem", height: "40rem" }}
          >
            <Typography
              className="model_text"
              variant="h3"
              color="primary.main"
              sx={{
                fontFamily: "Oswald",
                fontSize: { xl: "3.4rem", xs: "2.6rem" },
                fontWeight: "400",
              }}
            >
              On Hightway
            </Typography>
            <Box
              className="model_text"
              sx={{ width: "70px", height: "2px", background: "#f2c616" }}
            ></Box>
            <Typography
              className="model_text"
              variant="p"
              color="pGrey"
              sx={{
                fontSize: { xl: "1.4rem", xs: "1.2rem" },
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              Crown Industrials on-hightway trucks represent the pinnacle of
              innovation, design, and value. Each model is crafted to offer
              versatile solutions for the modern trucking industry's challenges.
              These trucks are engineered to enhance profitability, driver
              comfort, and safety. For any on-highway need, Peterbilt delivers
              vehicles that boost your bottom line. They excel in fuel
              efficiency, offer exceptional resale value, save on weight, and
              provide reliable performance. Plus, they carry the legacy and
              pride of owning a true icon of the North American highway.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TruckModel;
