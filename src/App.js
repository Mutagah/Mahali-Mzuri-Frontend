import RoomPage from "./pages/RoomPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FooterPage from "./components/FooterPage";

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
      path: "/footer",
      element: <FooterPage />,
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <RouterProvider router={router} />
        <FooterPage/>
      </ThemeProvider>
    </>
  );
}

export default App;
