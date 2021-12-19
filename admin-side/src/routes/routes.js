import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/login";


export default function NavRoutes() {

    return (
        <Routes>
            <Route element={<Login />} path="/" />
        </Routes>

    )
}

