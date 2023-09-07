import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Catalog } from "../pages/Catalog/Catalog";
import { Favorites } from "../pages/Favorites/Favorites";
import { NotFound } from "../pages/NotFound/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/catalog"
          element={<Catalog />}
        />
        <Route
          path="/favorites"
          element={<Favorites />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
};
