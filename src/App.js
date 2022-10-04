// import "./App.css";
import { MovieContainer } from "./module/Movie/MovieContainer";
import AppHeaderContainer from "./common/AppHeader/AppHeaderContainer";
import { TvContainer } from "./module/TvShow/TvContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

function App() {
  const defaultTheme = createTheme();
  const theme = createTheme({
    breakpoints: {
      values: {
        ...defaultTheme.breakpoints.values,
        xs: 0,
        sm: 400,
        md: 700,
        lg: 1150,
      },
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppHeaderContainer />

        <Container>
          <Routes>
            <Route path="/" element={<MovieContainer />}></Route>

            <Route path="/tv" element={<TvContainer />}></Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
