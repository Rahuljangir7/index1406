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

const Form = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{fontWeight:"bold"}}>Shipping address</Typography>
        <div>
          <TextField
            fullWidth
            id="standard-basic"
            label="First Name*"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Last Name*"
            variant="standard"
          />
        </div>
        <FormControl fullWidth variant="standard">
          <TextField
            id="standard-basic"
            label="Address line 1*"
            variant="standard"
          />
        </FormControl>
        <FormControl fullWidth variant="standard">
          <TextField
            id="standard-basic"
            label="Address line 2*"
            variant="standard"
          />
        </FormControl>
        <div>
          <TextField
            fullWidth
            id="standard-basic"
            label="City*"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="State/Province/Region*"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="standard-basic"
            label="Zip / Postal code*"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Country*"
            variant="standard"
          />
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Use this address for payment details"
          />
        </div>
        <div className="btn">
          <Button variant="contained" sx={{padding: '5px 20px' , fontSize:'large'}}>NEXT</Button>
        </div>
      </Box>
    </>
  );
};

export default Form;
