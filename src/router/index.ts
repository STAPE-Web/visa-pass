import Country from "@/pages/Country";
import Home from "@/pages/Home";

const routes = [
    { path: '*', element: Home },
    { path: '/country/:id', element: Country },
];

export { routes };