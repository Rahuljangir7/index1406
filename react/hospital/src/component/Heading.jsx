import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = ({ head5, head3, para }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          padding: "calc(5px + 5vw) 0 30px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {head5}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
          }}
        >
          {head3}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            border: "thin solid green",
            width: 200,
          }}
        ></Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "700",
            width:{ lg: '60%',xs: '90%'},
          }}
        >
          {para}
        </Typography>
      </Box>
    </>
  );
};

export default Heading;
