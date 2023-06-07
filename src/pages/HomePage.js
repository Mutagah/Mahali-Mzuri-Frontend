import * as React from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Button, MobileStepper, Typography } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "San Francisco",
    imgPath:
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80",
  },
];
export default function HomePage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container fluid>
      <Box sx={{ flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 200,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    minHeight: 700,
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <div className="p-4 container text-center">
        <div className="row">
          <div className="col">
            <div
              className="card m-1"
              style={{ borderColor: "#f17a12", borderWidth: "4px" }}
            >
              <div className="card-body">
                <Typography sx={{ fontSize: "20px" }}>🥤</Typography>
                <Typography
                  className="text-decoration-none text-dark"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Free Welcome Drinks
                </Typography>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card m-1"
              style={{ borderColor: "#f17a12", borderWidth: "4px" }}
            >
              <div className="card-body">
                <Typography sx={{ fontSize: "20px" }}>🚘</Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Rental Car services
                </Typography>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card m-1"
              style={{ borderColor: "#f17a12", borderWidth: "4px" }}
            >
              <div className="card-body">
                <Typography sx={{ fontSize: "20px" }}>🏬</Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Resort & Spa
                </Typography>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card m-1"
              style={{ borderColor: "#f17a12", borderWidth: "4px" }}
            >
              <div className="card-body">
                <Typography sx={{ fontSize: "20px" }}>📶</Typography>
                <Typography
                  className="text-decoration-none text-dark"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Free Wifi
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
