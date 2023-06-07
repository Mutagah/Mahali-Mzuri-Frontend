import "./App.css"
import React,{useState} from "react";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage"
import RoomPage from "./pages/RoomPage/RoomPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ServicePage from "./pages/ServicePage/ServicePage";
import AboutPage from "./pages/About/AboutPage";
import CarRentalPage from "./pages/CarRentalPage";
import SpecificRoomPage from "./pages/SpecificRoomPage";
import RestaurantPage from "./pages/RestaurantPage/Restaurant"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState({})
  function setCurrentUser(loggedInUser){
    setUser(loggedInUser)
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#121212",
      },
    },
    typography: {
      fontFamily: ["Archivo", "Comfortaa"].join(","),
    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/services",
      element: <ServicePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/rooms",
      element: <RoomPage />,
    },
    {
      path: "/specific-room/:id",
      element: <SpecificRoomPage />,
    },
    {
      path: "/restaurant",
      element: <RestaurantPage />,
    },
    {
      path: "/car-rental",
      element: <CarRentalPage />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/login",
      element: <LoginPage setCurrentUser={setCurrentUser} />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <RouterProvider router={router} />
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
