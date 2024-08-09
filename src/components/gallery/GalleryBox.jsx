import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { truncateText } from "../../utils/utils";

const StyledBox = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryBox = ({ data }) => {
  return (
    <Box
      className="gallery_trucks"
      width={{ xl: "25rem", xs: "20rem" }}
      height={{ xl: "23rem", xs: "18rem" }}
      sx={{
        backgroundColor: "transparent",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        perspective: "1000px",
        cursor: "pointer",
        ":hover": {
          "& .flip_inner_box": {
            transform: "rotateY(180deg)",
          },
        },
      }}
    >
      <Box
        className="flip_inner_box"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.4s",
          transformStyle: " preserve-3d",
          borderRadius: "5px",
          ":hover": {
            "& .flip_front": {
              zIndex: 1,
            },
            "& .flip_back": {
              zIndex: 2,
            },
          },
        }}
      >
        <StyledBox
          zIndex={2}
          className="flip_front"
          backgroundColor="transparent"
          sx={{
            border: "2px solid #f2c616",
            borderRadius: "5px",
            backfaceVisibility: "hidden",
            mozBackfaceVisibility: "hidden",
            webkitBackfaceVisibility: "hidden",
          }}
        >
          <Box
            width={"100%"}
            height={"100%"}
            overflow={"hidden"}
            borderRadius={"4px"}
            position={"relative"}
            sx={{
              ":before": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                // background: "#5c5c2f",
              },
            }}
          >
            <img
              src={data?.projIMG}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
              }}
            />
          </Box>
        </StyledBox>
        <StyledBox
          className="flip_back"
          sx={{
            backgroundColor: "rgba(242, 198, 22, 1)",
            transform: "rotateY(180deg)",
            border: "2px solid #f2c616",
            borderRadius: "5px",
            flexDirection: "column",
            backfaceVisibility: "hidden",
            mozBackfaceVisibility: "hidden",
            webkitBackfaceVisibility: "hidden",
            gap: "1rem",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            fontSize={{ xl: "1.7rem", xs: "1.4rem" }}
            fontFamily={"Open Sans"}
            textTransform={"uppercase"}
            letterSpacing={"1px"}
            fontWeight={600}
            color="white"
          >
            {data?.projName}
          </Typography>
          <Typography
            variant="h2"
            fontSize={{ xl: "0.9rem", xs: "0.8rem" }}
            fontFamily={"Open Sans"}
            letterSpacing={"1px"}
            padding={"1rem"}
            fontWeight={500}
            color="#5c5c2f"
          >
            {truncateText(data?.projDesc, 180)}
          </Typography>
        </StyledBox>
      </Box>
    </Box>
  );
};

export default GalleryBox;
