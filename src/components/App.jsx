import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

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
          path="catalog"
          element={<Catalog />}
        />
        <Route
          path="favorites"
          element={<Favorites />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};
