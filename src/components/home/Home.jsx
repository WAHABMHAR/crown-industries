import React from "react";
import HeroSection from "../heroSection/HeroSection";
import TruckSectionOne from "../extraSections/TruckSectionOne";
import TruckModel from "../tuckModel/TruckModel";
import FleetHire from "../fleetHire/FleetHire";
import TruckSectionTwo from "../extraSections/TruckSectionTwo";
import Gallery from "../gallery/Gallery";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Box component={"main"}>
        <HeroSection />
        <TruckSectionOne />
        <TruckModel />
        <FleetHire />
        <TruckSectionTwo />
        <Gallery />
        <Footer />

        {/* <TruckTechnology/> */}
        {/* <Box sx={{height:"100vh"}}></Box> */}
      </Box>
    </>
  );
};

export default Home;
