import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { SectionHeading } from "../../styles/muiStyles";
import excavator from "../../assets/images/hireTruck/hireOne.jpeg";
import trucks from "../../assets/images/hireTruck/hireTwo.jpeg";
import lightVehicle from "../../assets/images/hireTruck/hireOne.jpeg";
import loader from "../../assets/images/hireTruck/loaders.jpeg";
import trailer from "../../assets/images/hireTruck/Trailers.jpeg";
import cranes from "../../assets/images/hireTruck/cranes.jpeg";
import paver from "../../assets/images/hireTruck/pavers.jpeg";

import GalleryBox from "./GalleryBox";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsData = [
  {
    projName: "trucks",
    projIMG: trucks,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
  {
    projName: "Light Vehicles",
    projIMG: lightVehicle,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
  {
    projName: "Loaders",
    projIMG: loader,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
  {
    projName: "Trailers",
    projIMG: trailer,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
  {
    projName: "Pavers",
    projIMG: paver,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
  {
    projName: "Cranes",
    projIMG: cranes,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
  {
    projName: "Excavators",
    projIMG: excavator,
    projDesc:
      "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#",
  },
];

const Gallery = () => {
  useGSAP(() => {
    const galleryHeading = gsap.timeline();
    const galleryTrucks = gsap.timeline();

    ScrollTrigger.create({
      trigger: ".gallery_container",
      start: "top bottom",
      scroller: "body",
      onEnter: () => {
        galleryHeading.restart();
        galleryTrucks.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });
    galleryHeading.from(".gallery_heading", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      stagger: 0.2, // Delay between each menu item animation
    });

    galleryTrucks.from(".gallery_trucks", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      stagger: 0.2, // Delay between each menu item animation
    });
  });
  return (
    <Box
      id="gallery"
      component={"section"}
      sx={{
        background:
          "linear-gradient(121deg, rgba(242,242,242,1) 0%, rgba(242,232,192,1) 50%, rgba(242,198,22,1) 90%)",
        padding: "2rem 0",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" className="gallery_container">
        <Box
          className="flex_column"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: "1.6rem",
          }}
        >
          <Box className="flex_center" sx={{ gap: "1rem" }}>
            <SectionHeading
              variant="h2"
              color="#2f302f"
              className="gallery_heading"
              sx={{ fontSize: { xs: "2.5rem" } }}
            >
              Our{" "}
            </SectionHeading>
            <SectionHeading
              component={"span"}
              variant="body1"
              color="#f2c616"
              className="gallery_heading"
              sx={{ fontSize: { xs: "2.5rem" } }}
            >
              Gallery
            </SectionHeading>
          </Box>
          <Box
            className="gallery_heading"
            sx={{ width: "80px", height: "2px", backgroundColor: "#f2c616" }}
          ></Box>
          <Box
            className="gallery_data flex_center"
            sx={{ marginTop: "2rem", gap: "4rem", flexWrap: "wrap" }}
          >
            {projectsData?.map((item, index) => {
              return <GalleryBox key={index} data={item} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
