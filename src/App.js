import "./App.css";
import SignUp from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/About/AboutPage";
import RoomPage from "./pages/RoomPage/RoomPage";
import SpecificRoomPage from "./pages/SpecificRoomPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ServicePage from "./pages/ServicePage/ServicePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [user, setUser] = useState({});
  function setCurrentUser(loggedInUser) {
    setUser(loggedInUser);
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
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
