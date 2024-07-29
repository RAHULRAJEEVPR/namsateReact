import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import { Provider } from "react-redux";
import appStore from "../Util/appStore";

const AppLayout = () => {
  return (
    <>
    <Provider store={appStore}>

      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restraunt/:id", element: <RestrauntMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
  