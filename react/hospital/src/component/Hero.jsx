import React from "react";
import hero from "../assets/hero-img.jpg";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          padding: "0 !important",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          image={hero}
          alt="surgery image"
          sx={{
            display: "block",
            height: "100%",
          }}
        ></CardMedia>
        <Box
          position={"absolute"}
          width={"100%"}
          py={"calc(2px + 2vw)"}
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            bgcolor: "rgba(0,0,0,0.6)",
          }}
        >
          <Typography
            variant="h1"
            fontWeight={"bold"}
            color="white"
            sx={{
              fontSize: "calc(5px + 5vw)",
            }}
          >
            STAY HEALTHY <br />
            STAY SAFE
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontWeight: "1000",
              bgcolor: "green",
              textTransform: 'lowercase',
              fontSize:'calc(4px + 1vw)',
              padding:'0.5% 2%'
            }}
          >
            call now
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
