import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Heading from "../component/Heading"; // Assuming Heading component is already imported
import { Radio1 } from "../component/Cart"; // Importing Radio1 component

const fixLength = (text, length = 100) => {
  if (text.length > length) {
    return text.substring(0, length); // Truncate if longer
  }
  return text.padEnd(length, " "); // Pad with spaces if shorter
};

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      head5: fixLength(
        "Reach out to us for any inquiries, appointment bookings, or information about our services."
      ),
      para: "Alex Montio",
    },
    {
      id: 1,
      head5: fixLength(
        "Contact us for detailed information about our offerings. We are here to help."
      ),
      para: "Emily Stone",
    },
    {
      id: 2,
      head5: fixLength(
        "Book your appointment with ease and get assistance at every step."
      ),
      para: "John Doe",
    },
  ];

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Set interval for automatic slide change
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  const handleRadioChange = (event) => {
    setCurrentSlide(Number(event.target.value)); // Update the slide based on radio button click
  };

  return (
    <Box
      sx={{
        margin: "0 !important",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "0px calc(1rem + 2vw) 40px !important",
        cursor: "pointer", // Make the whole container interactive
      }}
      className="bg-[#323232] text-white "
    >
      <Heading
        head5={slides[currentSlide].head5}
        para={slides[currentSlide].para}
      />
      <Radio1 selectedValue={currentSlide} handleChange={handleRadioChange} />
    </Box>
  );
};

export default CarouselComponent;
