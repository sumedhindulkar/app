import React from "react";

import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import NavBar from "../components/Navbar";
function AddProduct() {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 4 }}>
          FORM TO ADD NEW PRODUCT
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Product Title"
              placeholder="Rings"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Product Description"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="password"
              label="Product Rating"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="password"
              label="Product Price"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Image URL"
              name="email"
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ p: 1, mt: 2 }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default AddProduct;
