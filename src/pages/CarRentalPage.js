import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  Input,
  IconButton,
  Typography,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import Image1 from "../Images/25a157f3c7a6480a1342039369c1eb85_5.jpg";
export default function RentalParkingPage() {
  return (
    <main sx={{ backgroundColor: "#f0f0f0" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Box
            sx={{
              marginTop: 2,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
              display: { xs: "none", md: "none", lg: "flex" },
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "1000" }}>
              Car
            </Typography>
            &nbsp; &nbsp; &nbsp;
            <Typography
              id="parking"
              variant="h3"
              sx={{
                color: "#f17a12",
                fontWeight: "1000",
              }}
            >
              Rental
            </Typography>
            &nbsp; &nbsp; &nbsp;
            <Typography variant="h3" sx={{ fontWeight: "1000" }}>
              services
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "50px",
            }}
          >
            <Paper
              elevation={24}
              sx={{
                backgroundColor: "#f17a12",
                padding: "40px",
                borderRadius: "40px",
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: "800" }}>
                Find, book and rent car in<br></br> easy steps
              </Typography>
              <Typography
                variant="h5"
                sx={{ paddingLeft: "10px", color: "#fff", fontWeight: "700" }}
              >
                <IconButton
                  sx={{
                    p: 2,
                    backgroundColor: "#000",
                    color: "#ffffff",
                    fontWeight: "700",
                  }}
                >
                  1
                </IconButton>
                &nbsp; Choose number of passengers
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginY: "5px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "700", paddingLeft: "10px", color: "#000" }}
                >
                  <IconButton
                    sx={{
                      p: 2,
                      backgroundColor: "#000",
                      color: "#ffffff",
                      fontWeight: "700",
                    }}
                  >
                    2
                  </IconButton>
                  &nbsp; Select destination
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginY: "5px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    paddingLeft: "10px",
                    color: "#ffffff",
                    fontWeight: "700",
                  }}
                >
                  <IconButton
                    sx={{
                      p: 2,
                      backgroundColor: "#000",
                      color: "#ffffff",
                      fontWeight: "700",
                    }}
                  >
                    3
                  </IconButton>
                  &nbsp; Select pickup date
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{ paddingLeft: "10px", color: "#000", fontWeight: "700" }}
              >
                <IconButton
                  sx={{
                    p: 2,
                    backgroundColor: "#000",
                    color: "#ffffff",
                    fontWeight: "700",
                  }}
                >
                  4
                </IconButton>
                &nbsp; Select return date
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  paddingLeft: "10px",
                  color: "#ffffff",
                  textAlign: "center",
                  fontWeight: "700",
                  borderBottom: "5px solid black",
                }}
              >
                Driver can be hired on request
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid
          item
          md={12}
          lg={6}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "40px",
          }}
        >
          <Box sx={{ padding: "12px" }}>
            <img src={Image1} style={{ width: "680px",height:"530px",borderRadius:"50px" }} alt="Mahali Mzuri" />
          </Box>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Grid
            item
            md={4}
            lg={2}
            sx={{
              justifyContent: "center",
              marginY: "15px",
              backgroundColor: "#ffffff",
              paddingX: "20px",
              borderRight: "2px solid #f17a12",
            }}
          >
            <FormControl fullWidth sx={{ m: 2 }}>
              <Typography
                color="#f17a12"
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "600" }}
              >
                <span style={{ color: "red" }}>*</span>
                Number of passengers
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value="5">1 to 5</MenuItem>
                <MenuItem value="7">5 to 7</MenuItem>
                <MenuItem value="14">14</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            md={4}
            lg={2}
            sx={{
              justifyContent: "center",
              marginY: "15px",
              backgroundColor: "#ffffff",
              paddingX: "20px",
              borderRight: "2px solid #f17a12",
            }}
          >
            <FormControl fullWidth sx={{ m: 2 }}>
              <Typography
                color="#f17a12"
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "600" }}
              >
                <span style={{ color: "red" }}>*</span>
                Choose destination
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value="Maasai Mara national park">
                  Maasai Mara
                </MenuItem>
                <MenuItem value="Aberdare">Aberdare</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            md={4}
            lg={2}
            sx={{
              justifyContent: "center",
              marginY: "15px",
              backgroundColor: "#ffffff",
              paddingX: "20px",
              borderRight: "2px solid #f17a12",
            }}
          >
            <FormControl sx={{ m: 2 }}>
              <Typography
                color="#f17a12"
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "600" }}
              >
                <span style={{ color: "red" }}>*</span>
                Car pick up date
              </Typography>
              <Input required type="datetime-local" name="car_pick_up_date" />
            </FormControl>
          </Grid>
          <Grid
            item
            md={4}
            lg={2}
            sx={{
              justifyContent: "center",
              marginY: "15px",
              backgroundColor: "#ffffff",
              paddingX: "20px",
              borderRight: "2px solid #f17a12",
            }}
          >
            <FormControl sx={{ m: 2 }}>
              <Typography
                color="#f17a12"
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "600" }}
              >
                <span style={{ color: "red" }}>*</span>
                Car return date
              </Typography>
              <Input required type="datetime-local" name="car_pick_up_date" />
            </FormControl>
          </Grid>
          <Grid
            item
            md={4}
            lg={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginY: "15px",
              backgroundColor: "#ffffff",
            }}
          >
            <Box>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  backgroundColor: "#f17a12",
                  margin: "5px",
                  borderRadius: "10px",
                  fontWeight: "600",
                }}
              >
                Search Vehicle
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginY: "10px",
        }}
      >
        <Grid item xs={11} sx={{ marginY: "30px" }}>
          <Card
            sx={{
              height: "500px",
              backgroundColor: "#f0f0f0",
              border: "5px solid #f17a12",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              color="#000"
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              Vehicle Cards to be displayed in here for booking purposes.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
