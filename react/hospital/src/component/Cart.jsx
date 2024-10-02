import { Box, Typography } from "@mui/material";
import { cart } from "../data";
import Radio from "@mui/material/Radio";
import * as React from "react";
import { IoMdPerson } from "react-icons/io";
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
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { pink } from "@mui/material/colors";

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
        return <FaMedkit />; // Default icon if no match
    }
  };

  return (
    <>
      <Box
        sx={{
          margin: "0 !important",
          display: "grid",
          gridTemplateColumns: {
            lg: "repeat(4,1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          },
          gap: "20px",
          padding: "0px calc(1rem + 2vw) !important",
        }}
      >
        {cart[0].map((carts, index) => {
          return (
            <Box
              key={index} // Add a key here
              sx={{
                width: { md: "80%", sm: "100%" },
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
                  fontSize: { md: "calc(0.3rem + 1vw)", sm: "25px" },
                  marginBottom: "2px",
                }}
              >
                {carts.heading}
              </Typography>
              <Typography variant="body1">{carts.des}</Typography>
            </Box>
          );
        })}
      </Box>
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
      case "FaMapMarkerAlt":
        return <FaMapMarkerAlt />;
      case "FaEnvelope":
        return <FaEnvelope />;
      case "FaPhone":
        return <FaPhone />;
      case "IoMdPerson":
        return <IoMdPerson />;
      default:
        return null;
    }
  };
  return (
    <>
      <Box
        sx={{
          padding: "16px 5px !important",
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
      </Box>
    </>
  );
};

export const Radio1 = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "radio-buttons",
    inputProps: { "arial-label": item },
  });

  return (
    <>
      <div className="radio-btn flex justify-center">
        <Radio
          {...controlProps("a")}
          sx={{
            color: pink[50],
            "&.Mui-checked": {
              color: pink[50],
            },
          }}
        />
        <Radio
          {...controlProps("b")}
          sx={{
            color: pink[50],
            "&.Mui-checked": {
              color: pink[50],
            },
          }}
        />
        <Radio
          {...controlProps("c")}
          sx={{
            color: pink[50],
            "&.Mui-checked": {
              color: pink[50],
            },
          }}
        />
      </div>
    </>
  );
};
