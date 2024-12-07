import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// Importações de Rotas
import MainLayout from "./components/routes/MainLayout.jsx";
import Login from "./components/routes/Login.jsx";
import Register from "./components/routes/Register.jsx";
import Account from "./components/routes/Account.jsx";
import Home from "./components/routes/Home.jsx";
import NotificationPage from "./components/routes/NotificationPage.jsx";
import SearchPage from "./components/routes/SearchPage.jsx";
import SettingsPage from "./components/routes/SettingsPage.jsx";
import ErrorPage from "./components/routes/ErrorPage.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";
import AccountAnswers from "./components/routes/AccountAnswers.jsx";
import AccountAmazings from "./components/routes/AccountAmazings.jsx";
import PostPage from "./components/routes/PostPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <MainLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/home" />,
                    },
                    {
                        path: "/home",
                        element: <Home />
                    },
                    {
                        path: "/account/:id",
                        element: <Account />,
                    },
                    {
                        path: "/account/answers/:id",
                        element: <AccountAnswers />,
                    },
                    {
                        path: "/account/amazings/:id",
                        element: <AccountAmazings />,
                    },
                    {
                        path: "/notifications/:id",
                        element: <NotificationPage />,
                    },
                    {
                        path: "/search",
                        element: <SearchPage />,
                    },
                    {
                        path: "/settings/:id",
                        element: <SettingsPage />,
                    },
                    {
                        path: "/post/:id",
                        element: <PostPage />,
                    },
                    {
                        path: "*",
                        element: <ErrorPage />,
                    },
                ],
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserContextProvider>
            <RouterProvider router={router} />
        </UserContextProvider>
    </StrictMode>
);
