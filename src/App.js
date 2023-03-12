import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
      },
      {
        path: "/services",
        element: <h1>Services</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
