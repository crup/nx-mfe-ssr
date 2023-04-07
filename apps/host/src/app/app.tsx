import * as React from "react";

import NxWelcome from "./nx-welcome";

import { Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("home/Module"));

const Cart = React.lazy(() => import("cart/Module"));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
