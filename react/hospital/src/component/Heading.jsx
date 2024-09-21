import { Container, Typography } from "@mui/material";
import React from "react";

const Heading = ({ head5, head3, para }) => {
  return (
    <>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        gap:1,
        padding: 'calc(5px + 5vw) 0 0',
        textAlign:'center',
      }}>
        <Typography variant="h6" sx={{
            fontWeight:'bold',
        }}>{head5}</Typography>
        <Typography variant="h3" sx={{
            fontWeight:'bold',
        }}>{head3}</Typography>
        <Typography variant="span" sx={{
            border: 'thin solid green',
            width: 200,
        }}></Typography>
        <Typography sx={{
            fontWeight:'700',
            width:'60%',
        }}>{para}</Typography>
      </Container>
    </>
  );
};

export default Heading;
