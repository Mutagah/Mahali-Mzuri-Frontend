import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
// import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/material/CardContent";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
export default function ServicePage() {
  return (
    <main>
      <Grid container sx={{ justifyContent: "center" }} columns={12}>
        <Grid item xs={12}>
          <Box
            sx={{
              m: 2,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
              display: { xs: "none", md: "none", lg: "flex" },
              justifyContent: "center",
            }}
          >
            <Typography variant="h3">Why you should</Typography>
            &nbsp; &nbsp; &nbsp;
            <Typography
              variant="h3"
              sx={{
                color: "#f17a12",
              }}
            >
              stay here
            </Typography>
          </Box>
          <Box
            sx={{
              m: 2,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
              display: { xs: "flex", md: "flex", lg: "none" },
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Why you should</Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h4"
              sx={{
                color: "#f17a12",
              }}
            >
              stay here
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ mx: 5 }}>
        <Grid item xs={6}>
          <CssVarsProvider>
            <Box
              sx={{
                paddingY: "20px",
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                    "& > div:nth-child(3)": {
                      transform: "translate3d(45px, 50px, 40px)",
                    },
                  },
                },
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "250px",
                  backgroundColor: "#f17a12",
                  border: "2px solid",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingLeft: "10px", color: "#ffffff" }}
                >
                  <IconButton
                    sx={{ p: 2, backgroundColor: "#000", color: "#ffffff" }}
                  >
                    1
                  </IconButton>
                  &nbsp; Room Services
                </Typography>
                <CardContent
                  sx={{
                    alignItems: "self-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ justifyContent: "center", mx: 15, color: "white" }}
                  >
                    "Curteous treatment will make a customer a walking
                    advertisement" ~ James Cash Penny. <br></br>
                    With variety of room services to offer, we believe comfort
                    and luxury is the best thing for your stay.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                paddingY: "20px",
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                    "& > div:nth-child(3)": {
                      transform: "translate3d(45px, 50px, 40px)",
                    },
                  },
                },
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "250px",
                  backgroundColor: "#000",
                  border: "2px solid",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingLeft: "10px", color: "#ffffff" }}
                >
                  <IconButton
                    sx={{ p: 2, backgroundColor: "#f17a12", color: "#ffffff" }}
                  >
                    2
                  </IconButton>
                  &nbsp; Restaurant Services
                </Typography>
                <CardContent
                  sx={{
                    alignItems: "self-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ justifyContent: "center", mx: 15, color: "#fff" }}
                  >
                    "Life is short, make it sweet" ~ Sarah Loiuse Delany.{" "}
                    <br></br>
                    Good meals bring people together and with our various
                    african delicacies we are here to serve you.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{
                paddingY: "20px",
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                    "& > div:nth-child(3)": {
                      transform: "translate3d(45px, 50px, 40px)",
                    },
                  },
                },
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "250px",
                  backgroundColor: "#f17a12",
                  border: "2px solid",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ paddingLeft: "10px", color: "#ffffff" }}
                >
                  <IconButton
                    sx={{ p: 2, backgroundColor: "#000", color: "#fff" }}
                  >
                    3
                  </IconButton>
                  &nbsp; Car rentals & Parking Services
                </Typography>
                <CardContent
                  sx={{
                    alignItems: "self-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ justifyContent: "center", mx: 15, color: "white" }}
                  >
                    "Take memories leave footprints" ~ Nweke Pascal. <br></br>
                    Affordable car renting services with optional drivers to take you to our beautiful game drives in the country.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CssVarsProvider>
        </Grid>
        <Grid item xs={6}>
          Yet to design
        </Grid>
      </Grid>
    </main>
  );
}
