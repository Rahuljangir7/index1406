import { Box, Typography } from "@mui/material";
import { cart } from "../data";
import Radio from "@mui/material/Radio";
import * as React from "react";
import { useState, useEffect } from "react";
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
  FaHandshake,
  FaThumbsUp,
  FaUserNurse,
} from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { pink } from "@mui/material/colors";
import Counter from "../utility/Counter";
import docimg from "../assets/doctorimg.png";

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
          padding: "0px calc(1rem + 2vw) 20px !important",
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

export const Cart1 = ({ icon, heading, des, num, useCounter }) => {
  let hoverStyles = ["hover:text-green-600"];
  const getIconComponent = (icon) => {
    switch (icon) {
      case "FaCampground":
        return <FaCampground className={hoverStyles} />;
      case "FaMedkit":
        return <FaMedkit className={hoverStyles} />;
      case "FaClock":
        return <FaClock className={hoverStyles} />;
      case "FaHospitalAlt":
        return <FaHospitalAlt className={hoverStyles} />;
      case "FaLeaf":
        return <FaLeaf className={hoverStyles} />;
      case "FaMapMarkerAlt":
        return <FaMapMarkerAlt />;
      case "FaEnvelope":
        return <FaEnvelope />;
      case "FaPhone":
        return <FaPhone />;
      case "doctorImg":
        return <img src={docimg} alt={"doctor image"} />;
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
          className={"numbers"}
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
          {/* Render num or Counter based on useCounter prop */}
          {useCounter ? <Counter num={num} /> : num}
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

export const Radio1 = ({ selectedValue, handleChange }) => {
  return (
    <div className="radio-btn flex justify-center gap-4">
      {/* Radio buttons for each slide */}
      {[0, 1, 2].map((index) => (
        <Radio
          key={index}
          checked={selectedValue === index}
          onChange={handleChange}
          value={index}
          name="carousel"
          inputProps={{ "aria-label": `Slide ${index + 1}` }}
          sx={{
            color: pink[50],
            "&.Mui-checked": { color: pink[50] },
          }}
        />
      ))}
    </div>
  );
};

export const Icons = ({ i }) => {
  const getIcons = (icon) => {
    switch (icon) {
      case "MdOutlineAccessTimeFilled ":
        return <MdOutlineAccessTimeFilled />;
      case "FaHandshake ":
        return <FaHandshake />;
      case "FaThumbsUp ":
        return <FaThumbsUp />;
      case "FaUserNurse ":
        return <FaUserNurse />;
    }
  };
  return (
    <>
      <div className="text-[calc(1.5rem_+_2vw)] p-2 rounded-full text-white bg-green-800 m-2 me-4">
        {getIcons(i)}
      </div>
    </>
  );
};
