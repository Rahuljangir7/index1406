import { Button, TextField } from "@mui/material";

import React from "react";

const Form = () => {
  const inputStyle = () => {
    return {
      "& .MuiOutlinedInput-root": {
        color: "#aaa",
        fontFamily: "Arial",
        fontWeight: "bold",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#aaa",
          borderWidth: "2px",
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#aaa",
          },
        },
        "&:hover:not(.Mui-focused)": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#aaa",
          },
        },
      },
      "& .MuiInputLabel-outlined": {
        color: "#aaa",
        fontWeight: "bold",
        "&.Mui-focused": {
          color: "#fff",
          fontWeight: "bold",
        },
      },
    };
  };
  return (
    <form action="/action" className="max-[768px]:w-[-webkit-fill-available]">
      <div className="pb-10 flex flex-col gap-5 w-full">
        <div className="grid md:grid-cols-3 gap-5 md-gap-10 grid-cols-1">
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            sx={inputStyle}
          />
          <TextField
            label="Number"
            type="number"
            variant="outlined"
            sx={inputStyle}
          />
          <TextField
            label="Gmail"
            type="email"
            variant="outlined"
            sx={inputStyle}
          />
        </div>
        <textarea
          name="message"
          id="msg"
          rows={10}
          className="w-full max-w-[100%] rounded resize-y bg-transparent border-2 border-[#aaa] px-3 py-2"
        ></textarea>
        <div className="w-full text-center">
          <Button
            variant="contained"
            sx={{
              fontWeight: "1000",
              bgcolor: "green",
              textTransform: "lowercase",
              fontSize: "calc(0.7rem + 1vw)",
              padding: {lg:"0.9% 2.5%",xs:"10px"},
            }}
          >
            Send message
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
