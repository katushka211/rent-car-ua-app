import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/catalog">
            <button>Catalog</button>
          </NavLink>
          <NavLink to="/favorites">
            <button>Favorites</button>
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  );
};
