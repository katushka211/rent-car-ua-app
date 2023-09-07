import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));
const CatalogPage = lazy(() => import("../pages/Catalog"));
const FavoritesPage = lazy(() => import("../pages/Favorites"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/catalog"
          element={<CatalogPage />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};
