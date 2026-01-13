import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RosaMaria } from "../Profiles/RosaMaria";
import { CeciCruz } from "../Profiles/CeciCruz";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RosaMaria />} />,
    <Route path="/rosamaria" element={<RosaMaria />} />,
    <Route path="/ceciliacruzrodriguez" element={<CeciCruz />} />,
  ])
);
