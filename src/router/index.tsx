import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import WeatherDetailsPage from "../pages/WeatherDetailsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SearchPage />,
    },
    {
        path: "/weather",
        element: <WeatherDetailsPage />,
    },
]);