import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import Image1 from "../Images/photo-1621293954908-907159247fc8.jpeg";
import Image2 from "../Images/Rectangle 3671.png";
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
            <Typography variant="h3" sx={{ fontWeight: "1000" }}>
              Why you should
            </Typography>
            &nbsp; &nbsp; &nbsp;
            <Typography
              variant="h3"
              sx={{
                color: "#f17a12",
                fontWeight: "1000",
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
      <Grid container sx={{ px: 5 }}>
        <Grid item xs={12} md={12} lg={6} sx={{ px: 3 }}>
          <CssVarsProvider>
            <Box
              sx={{
                paddingY: "20px",
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "250px",
                  backgroundColor: "#f17a12",
                  border: "2px solid",
                  overflowY: "scroll",
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
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "250px",
                  backgroundColor: "#000",
                  border: "2px solid",
                  overflowY: "scroll",
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
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: "250px",
                  backgroundColor: "#f17a12",
                  border: "2px solid",
                  overflowY: "scroll",
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
                  &nbsp;{" "}
                  <Link
                    href="/car-rental"
                    underline="none"
                    sx={{ color: "#ffffff" }}
                  >
                    Car rentals & Parking Services
                  </Link>
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
                    Affordable car renting services with optional drivers to
                    take you to our beautiful game drives in the country.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </CssVarsProvider>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            px: 3,
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Image1}
              style={{
                maxWidth: "100%",
                height: "300px",
              }}
              alt="Mahali Mzuri"
            />
          </Box>
          <img
            src={Image2}
            style={{
              maxWidth: "50%",
            }}
            alt="Mahali Mzuri"
          />
        </Grid>
      </Grid>
    </main>
  );
}
