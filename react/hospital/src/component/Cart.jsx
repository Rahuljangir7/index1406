import { Container, Typography } from "@mui/material";
import { cart } from "../data";
import Radio from "@mui/material/Radio";
import * as React from "react";
import {
  FaAmbulance,
  FaHome,
  FaBed,
  FaDollarSign,
  FaCampground,
  FaMedkit,
  FaClock,
  FaHospitalAlt,
  FaLeaf,
} from "react-icons/fa";

export const Cart = () => {
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
        {cart.map((carts) => {
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

export const Cart1 = ({ icon, heading, des, num }) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case "FaCampground":
        return <FaCampground />;
      case "FaMedkit":
        return <FaMedkit />;
      case "FaClock":
        return <FaClock />;
      case "FaHospitalAlt":
        return <FaHospitalAlt />;
      case "FaLeaf":
        return <FaLeaf />;
      default:
        return null;
    }
  };
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
          className="numbers"
          style={{
            fontSize: "40px",
            marginBottom: "10px",
            color: "white",
            padding: "10px",
            background: "green",
            borderRadius: "50%",
          }}
        >
          {getIconComponent(icon)}
          {num}
        </div>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "1000",
            fontSize: "calc(0.3rem + 1vw)",
            marginBottom: "8px",
          }}
        >
          {heading}
        </Typography>
        <Typography variant="body1">{des}</Typography>
      </Container>
    </>
  );
};

export const Radio1 = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="radio-btn flex justify-center">
        <Radio
          checked={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
        <Radio
          checked={selectedValue === "c"}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ "aria-label": "C" }}
        />
      </div>
    </>
  );
};
