import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home';
import Weather from "./pages/Weather";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true, Component: Home},
      {path:"/weather", Component: Weather},
    ]
  }

]);


export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}
