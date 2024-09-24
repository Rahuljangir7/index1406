import { Container, Typography } from "@mui/material";
import React from "react";
import { cart1 } from "../data";
import { FaAmbulance, FaHome, FaBed, FaDollarSign } from "react-icons/fa";

const Cart = () => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case "FaAmbulance":
        return <FaAmbulance />;
      case "FaHome":
        return <FaHome />;
      case "FaBed":
        return <FaBed />;
      case "FaDollarSign":
        return <FaDollarSign />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container
        maxWidth
        sx={{
          margin: "0 !important",
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          padding: "0px calc(1rem + 2vw) !important",
        }}
      >
        {cart1.map((carts) => {
          return (
            <>
              <Container
                sx={{
                  width: "25%",
                  padding: "16px 0 !important",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Render Icon */}
                <div
                  style={{
                    fontSize: "40px",
                    marginBottom: "10px",
                    color: "white",
                    padding: "10px",
                    background: "green",
                    borderRadius: "50%",
                  }}
                >
                  {getIconComponent(carts.icon)}
                </div>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "1000",
                    fontSize: "calc(0.4rem + 1vw)",
                    marginBottom: "8px",
                  }}
                >
                  {carts.heading}
                </Typography>
                <Typography variant="body1">{carts.des}</Typography>
              </Container>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Cart;
