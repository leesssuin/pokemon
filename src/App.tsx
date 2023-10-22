import React from "react";
import { Route, Routes } from "react-router";

import GlobalStyles from "styles/globalStyle";
import MainPage from "pages/main";
import { Header } from "components";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
