import { Box, Container, Typography } from "@mui/material";
import React from "react";
import about from "../../assets/images/about.jpg";
import { AboutHeading } from "../../styles/muiStyles";
import aboutCircle from "../../assets/images/aboutCircle.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
  useGSAP(() => {
    const aboutHeading = gsap.timeline();
    const aboutImages = gsap.timeline();

    const aboutText = gsap.from(".about_text", {
      opacity: 0,
      x: "100%",
      ease: "power1.in",
      duration: 1.3,
    });

    ScrollTrigger.create({
      trigger: ".about_sec",
      start: "top bottom",
      scroller: "body",
      onEnter: () => {
        aboutHeading.restart();
        aboutImages.restart();
        aboutText.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });

    aboutHeading.from(".about_heading", {
      opacity: 0,
      x: "-100%",
      duration: 1,
      stagger: 0.3, // Delay between each menu item animation
    });
    aboutImages.from(".about_img_two", {
      opacity: 0,
      y: "100%",
      ease: "bounce.out",
      duration: 2,
      stagger: 0.2, // Delay between each menu item animation
    });
    aboutImages.from(".about_img_one", {
      opacity: 0,
      rotate: "240",

      x: "-100%",
      y: "3rem",
      duration: 1.4,
      stagger: 0.2, // Delay between each menu item animation
    });
  });

  return (
    <Box
      component={"section"}
      id="about"
      sx={{
        overflow: "hidden",
        background:
          "linear-gradient(130deg, rgba(242,242,242,1) 0%, rgba(242,232,192,1) 50%, rgba(242,198,22,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box className="about_sec">
          <Box sx={{ gap: "5rem", padding: "6rem 0" }} className="flex_center">
            <Box
              className="flex_center"
              sx={{ gap: "1rem", flexDirection: "column", alignItems: "start" }}
            >
              <AboutHeading
                variant="h2"
                color="initial"
                className="about_heading"
                sx={{ fontSize: { xl: "5rem", xs: "3.8rem" } }}
              >
                About
              </AboutHeading>
              <AboutHeading
                sx={{
                  color: "#f2c616",
                  fontSize: { xl: "5rem", xs: "3.8rem" },
                }}
                variant="h2"
                color="initial"
                className="about_heading"
              >
                Company
              </AboutHeading>

              <Box
                className="about_heading"
                sx={{
                  width: "80px",
                  height: "2px",
                  backgroundColor: "#f2c616",
                }}
              ></Box>
              <Box
                sx={{
                  position: "relative",
                  right: "-10rem",
                  bottom: "-3rem",
                  marginLeft: "1rem",
                  background: "2f302f",
                  width: "15rem",
                  borderRadius: "50%",
                }}
              >
                <img
                  className="about_img_one"
                  src={aboutCircle}
                  alt="crown_rentals_logo"
                  width={"100%"}
                  height={"100%"}
                  style={{
                    borderRadius: "50%",
                    zIndex: 10,
                    position: "relative",
                    boxShadow:
                      "rgba(242, 198, 22, 0.3) 0px 19px 38px, rgba(242, 198, 22, 0.22)0px 15px 12px",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box width={"25rem"} sx={{ height: "38rem" }}>
                <img
                  className="about_img_two"
                  src={about}
                  alt="crown_industrial_rentals_about"
                  width={"100%"}
                  height={"100%"}
                  objectFit="cover"
                  style={{
                    zIndex: "5",
                    position: "relative",
                    boxShadow:
                      "rgba(242, 198, 22, 0.25) 0px 54px 55px, rgba(242, 198, 22, 0.12) 0px -12px 30px, rgba(242, 198, 22, 0.12) 0px 4px 6px, rgba(242, 198, 22, 0.17) 0px 12px 13px, rgba(242, 198, 22, 0.09) 0px -3px 5px",
                  }}
                />
              </Box>
            </Box>
            <Typography
              className="about_text"
              component={"p"}
              variant="h6"
              color="pGrey"
              sx={{
                fontSize: { xl: "1.6rem", xs: "1.2rem" },
                fontWeight: 500,
                fontStyle: "italic",
                width: "28rem",
              }}
            >
              Welcome to our industrial rental website, your one-stop
              destination for cars, trucks, trailers, and machinery. With
              equipment available 24/7, we cater to both short and long-term
              hire needs. Whether you're hauling heavy loads or powering through
              projects, our reliable rentals ensure you get the job done
              efficiently. Explore our diverse inventory and experience seamless
              rentals tailored to your schedule.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
