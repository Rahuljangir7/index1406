import { TextField } from "@mui/material";

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
    <form action="#" className="pb-10 flex flex-col gap-5 w-full">
      <div className="flex gap-5 justify-center">
        <TextField label="Name" variant="outlined" sx={inputStyle()} />
        <TextField label="Number" variant="outlined" sx={inputStyle()} />
        <TextField label="Gmail" variant="outlined" sx={inputStyle()} />
      </div>
      <div className="mx-auto">
        <textarea
          name="message"
          id="msg"
          className="rounded resize-x bg-transparent border-2 border-[#aaa] px-3 py-2"
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
