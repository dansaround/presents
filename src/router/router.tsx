import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RosaMaria } from "../components/Agents/RosaMaria";
import App from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
    <Route path="/rosamaria" element={<RosaMaria />} />,
  ])
);
