import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Box } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function ActionAreaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1577870736095-e88b9030dd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="green iguana"
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h6">
              PRODUCT TITLE
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", my: 1 }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Box sx={{ my: 1 }}>
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <StarBorderIcon />
            </Box>
            <Typography gutterBottom variant="subtitle2">
              PRICE: 180Rs
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
