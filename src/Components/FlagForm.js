import React, { useState } from "react";

import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";



function FlagForm({ onSubmitAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    flag: "",
  });


  ////////  Controlled form  ////////
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newItem) => onSubmitAdd(newItem));

    setFormData({ name: "", flag: "" });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: "12px" }}>
      <TextField
        required
        onChange={handleChange}
        value={formData.name}
        type="text"
        name="name"
        label="Add Country Name"
        variant="standard"
        size="medium"
        sx={{
          marginRight: "10px",
          width: "20%",
        }}
      />
      <TextField
        required
        onChange={handleChange}
        value={formData.flag}
        type="text"
        name="flag"
        label="Add Image link"
        variant="standard"
        size="medium"
        sx={{ marginRight: "10px", width: "20%" }}
      />
      <Button
        type="submit"
        variant="outlined"
        sx={{ borderColor: "white", color: "white", height: "43px" }}
      >
        Add
      </Button>
    </Box>
  );
}

export default FlagForm;
