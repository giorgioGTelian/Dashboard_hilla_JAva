import MainView from "Frontend/views/MainView.js";
import {
    createBrowserRouter,
    RouteObject
} from "react-router-dom";
import FormLayout from "./views/FormLayout/FormLayout";
import TableView from "./views/TableView.tsx/TableView";

export const routes: readonly RouteObject[] = [
  { path: "/", element: <MainView /> },
  { path: "/form", element: <FormLayout /> },
  { path: "/table", element: <TableView /> },
];

export const router = createBrowserRouter([...routes], {basename: new URL(document.baseURI).pathname });
