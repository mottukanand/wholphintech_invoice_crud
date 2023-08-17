import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

export function Address({
  type,
  name,
  street,
  phone,
  email,
  BtnIcon,
  btnText,
}) {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                sx={{ fontSize: "1rem", fontWeight: 600, mb: "16px" }}
                gutterBottom
              >
                {type}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontSize: "0.875rem", fontWeight: 600 }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "0.875rem" }}
                gutterBottom
              >
                {street}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "0.875rem" }}
                gutterBottom
              >
                {phone}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "0.875rem" }}
                gutterBottom
              >
                {email}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "right" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  startIcon={<BtnIcon />}
                  sx={{
                    color: "rgb(38, 38, 38)",
                    backgroundColor: "transparent",
                    borderColor: "rgb(38, 38, 38)",
                  }}
                >
                  {btnText}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
