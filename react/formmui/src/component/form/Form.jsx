import React from "react";
import {
  Box,
  TextField,
  FormControl,
  FormControlLabel,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import "./form.css";

const inputStyle = {
  "& label": {
    color: "#aaa", // Label color
    padding: "0 10px",
  },
  "& label.Mui-focused": {
    color: "#aaa", // Label color when focused
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#aaa", // Border color before focus
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#aaa", // Border color after focus
  },
  "& .MuiInputBase-input": {
    color: "#fff", // Input text color
    padding: "5px 10px",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#aaa", // Border color on hover
  },
};

const Form = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Shipping address
        </Typography>
        <div>
          <TextField
            fullWidth
            id="standard-basic"
            label="First Name*"
            variant="standard"
            sx={inputStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Last Name*"
            variant="standard"
            sx={inputStyle}
          />
        </div>
        <FormControl fullWidth variant="standard">
          <TextField
            id="standard-basic"
            label="Address line 1*"
            variant="standard"
            sx={inputStyle}
          />
        </FormControl>
        <FormControl fullWidth variant="standard">
          <TextField
            id="standard-basic"
            label="Address line 2*"
            variant="standard"
            sx={inputStyle}
          />
        </FormControl>
        <div>
          <TextField
            fullWidth
            id="standard-basic"
            label="City*"
            variant="standard"
            sx={inputStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="State/Province/Region*"
            variant="standard"
            sx={inputStyle}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="standard-basic"
            label="Zip / Postal code*"
            variant="standard"
            sx={inputStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Country*"
            variant="standard"
            sx={inputStyle}
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Use this address for payment details"
          />
        </div>
        <div className="btn">
          <Button
            variant="contained"
            sx={{ padding: "5px 20px", fontSize: "large" }}
          >
            NEXT
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Form;
