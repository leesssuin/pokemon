import React from "react";
import { Route, Routes } from "react-router";

import GlobalStyles from "styles/globalStyle";
import ListPage from "pages/home/list";
import { Header } from "components";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
