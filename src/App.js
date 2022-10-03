// import "./App.css";
import { MovieContainer } from "./module/Movie/MovieContainer";
import AppHeaderContainer from "./common/AppHeader/AppHeaderContainer";
import { TvContainer } from "./module/TvShow/TvContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    // <>

    //   <MovieContainer />
    // </>
    <BrowserRouter>
      <AppHeaderContainer />
      <Container>
        <Routes>
          <Route path="/" element={<MovieContainer />}></Route>

          <Route path="/tv" element={<TvContainer />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
