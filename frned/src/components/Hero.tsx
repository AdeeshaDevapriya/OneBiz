import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Stack,
  Grid,
} from "@mui/material";

export default function Hero(): JSX.Element {
  const images: string[] = [
    "/Owner.JPG",
    "/Owner.JPG",
    "/Owner.JPG",
    "/Owner.JPG",
    "/Owner.JPG",
  ];

  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* 📝 Left Side - Text */}
          <Grid item xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography
                variant="h3"
                component="h1"
                fontWeight={800}
                gutterBottom
                className="text-gray-900"
              >
                Make your business shine online
              </Typography>

              <Typography
                variant="subtitle1"
                color="textSecondary"
                className="text-gray-600 mb-8"
              >
                Professional, affordable single-page websites for local shops
                and small businesses.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
                alignItems="center"
                className="mb-10"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#contact"
                  className="px-8 py-3 rounded-lg shadow-md normal-case"
                >
                  Get a Website
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="https://wa.me/94763748420"
                  className="px-8 py-3 rounded-lg normal-case"
                >
                  WhatsApp
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* 🖼️ Right Side - Smooth Flowing Images (No Box) */}
          <Grid item xs={12} md={6}>
            <div className="overflow-hidden relative w-full">
              <div className="flex gap-6 animate-scroll-free">
                {images.concat(images).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`slide-${index}`}
                    className="w-64 h-64 object-cover rounded-3xl flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes scroll-free {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-free {
            display: flex;
            width: calc(200%);
            animation: scroll-free 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
