import { Box, Typography } from "@mui/material";
import React from "react";
import hireTruck_one from "../../assets/images/hireTruck/hireOne.jpeg";
import { Line } from "../../styles/muiStyles";
import { truncateText } from "../../utils/utils";

const FleetHireModel = ({ data }) => {
  const { title, pic, desc, path } = data;
  return (
    <Box
      className="flex_column hire_model"
      sx={{
        width: "20rem",
        gap: "1.5rem",
        padding: "0.8rem",

        "&:hover": {
          "& .more_circle": {
            background: "#f2c616",
          },
        },
      }}
    >
      <Typography variant="h5" color="white" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Box sx={{ borderRadius: "5px" }} width={"18rem"} height="16rem">
        <img
          src={pic}
          alt="hire_truck"
          width={"100%"}
          height={"100%"}
          objectFit="cover"
          style={{ borderRadius: "0.5rem" }}
        />
      </Box>
      <Typography
        variant="p"
        color="white"
        sx={{ fontFamily: "Open Sans", fontSize: "1rem", fontWeight: 400 }}
      >
        {truncateText(desc, 200)}
      </Typography>
      <Box className="flex_align_center">
        <Line component={"span"}></Line>
        <Box
          className="flex_center more_circle"
          sx={{
            width: "14rem",
            height: "5rem",
            borderRadius: "5rem",
            transition: "all 0.3s linear",
          }}
        >
          <Typography
            component={"a"}
            href={path}
            variant="p"
            color="white"
            textAlign={"center"}
            sx={{
              fontFamily: "Open Sans",
              fontSize: "1rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            More
          </Typography>
        </Box>
        <Line component={"span"}></Line>
      </Box>
    </Box>
  );
};

export default FleetHireModel;
