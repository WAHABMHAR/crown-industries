import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { SectionHeading } from "../../styles/muiStyles";
import FleetHireModel from "./FleetHireModel";
import hireOne from "../../assets/images/hireTruck/hireOne.jpeg";
import hireTwo from "../../assets/images/hireTruck/hireTwo.jpeg";
import hireThree from "../../assets/images/hireTruck/hireThree.jpeg";
import hireFour from "../../assets/images/hireTruck/hireFour.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ModelData = [
  {
    title: "Light Vehicles",
    pic: hireOne,
    desc: "Light vehicles are often designed to be fuel-efficient, reducing operating costs and environmental impact. They typically have better mileage compared to heavier vehicles, making them ideal for daily commutes and city driving.",
    path: "#truck_feature",
  },
  {
    title: "Trucks",
    pic: hireTwo,
    desc: "Trucks are built with powerful engines capable of handling heavy loads and demanding tasks.They offer high torque and horsepower, ensuring strong performance in various driving conditions, including off-road and steep terrains.",
    path: "#truck_feature",
  },
  {
    title: "Trailer Hire",
    pic: hireThree,
    desc: "Trailers are built to handle heavy loads, with strong frames and robust construction materials designed to endure rigorous use.They feature high load capacities, allowing them to transport large quantities of goods, machinery, or equipment efficiently.",
    path: "#truck_feature",
  },
  {
    title: "Machinery",
    pic: hireFour,
    desc: "Modern machinery is designed to enhance efficiency, allowing tasks to be completed faster and with greater precision.Advanced technology and automation features reduce the need for manual intervention, increasing overall productivity and throughput",
    path: "#truck_feature",
  },
];

const FleetHire = () => {
  useGSAP(() => {
    const hireHeading = gsap.timeline();
    const hireModel = gsap.timeline();

    ScrollTrigger.create({
      trigger: ".hire_model_container",
      start: "top bottom",
      scroller: "body",
      onEnter: () => {
        hireHeading.restart();
        hireModel.restart();
      },
      toggleActions: "play none none none", // Ensure it only plays on enter
    });

    hireHeading.from(".hire_model_heading", {
      opacity: 0,
      y: 100,
      duration: 0.7,
      stagger: 0.2,
    });
    hireModel.from(".hire_model", {
      // opacity: 0,
      y: 300,
      duration: 1,
      stagger: 0.2,
    });
  });
  return (
    <Box
      component={"section"}
      id="fleet"
      sx={{ background: "#2f302f", padding: "2rem 0", overflow: "hidden" }}
    >
      <Container maxWidth="xl" className="hire_model_container">
        <Box
          className="flex_column"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            background: "#2f302f",
            gap: "1.6rem",
          }}
        >
          <Box className="flex_center" sx={{ gap: "1rem" }}>
            <SectionHeading
              variant="h2"
              color="white"
              className="hire_model_heading"
            >
              Fleet{" "}
            </SectionHeading>
            <SectionHeading
              component={"span"}
              variant="body1"
              color="#f2c616"
              className="hire_model_heading"
            >
              Hire
            </SectionHeading>
          </Box>
          <Box
            className="hire_model_heading"
            sx={{ width: "80px", height: "2px", backgroundColor: "#f2c616" }}
          ></Box>
          <Box
            className="fleet_hire_data flex_center"
            sx={{ marginTop: "2rem", gap: "1rem", flexWrap: "wrap" }}
          >
            {/* helllthere */}
            {ModelData?.map((item, index) => {
              return <FleetHireModel data={item} key={index} />;
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FleetHire;
