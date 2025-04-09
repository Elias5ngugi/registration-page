import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper
} from "@mui/material";


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f0f2f5"
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          borderRadius: "16px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Create Your Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            fullWidth
            required
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            required
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            required
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "black",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              p: 1.5,
              '&:hover': {
                bgcolor: "orange"
              }
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default RegisterForm;
