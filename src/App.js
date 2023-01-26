import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import RoomPage from "./pages/RoomPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/About/AboutPage";
import CarRentalPage from "./pages/CarRentalPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
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
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/car-rental",
      element: <CarRentalPage/>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    }
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
