import MainView from "Frontend/views/MainView.js";
import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";
import FormLayout from "./views/FormLayout/FormLayout";

export const routes: readonly RouteObject[] = [
  { path: "/", element: <MainView /> },
  { path: "/form", element: <FormLayout /> },
];

export const router = createBrowserRouter([...routes], {basename: new URL(document.baseURI).pathname });
