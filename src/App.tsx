import React from "react";
import { Route, Routes } from "react-router";

import GlobalStyles from "styles/globalStyle";
import DetailPage from "pages/detail";
import { Header } from "components";
import MainPage from "pages/main";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
