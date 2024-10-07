import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Form from "./Form";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          className="bg-[#323232] text-white "
          sx={{
            padding: "0 80px 50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Heading
            head5={"SEND US MESSAGE"}
            para={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
            }
          />
          <Form />
          <Box
            sx={{
              border: "2px solid green",
              width: "100%",
              margin: "20px 0",
            }}
          ></Box>
          <Box>
            <Typography variant="body1">
              © Copyright HEALTH-CARE HOSPITAL 2023 reserved
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "10px 0",
                fontSize: "calc(1rem + 2vw)",
                gap: "20px",
              }}
            >
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
