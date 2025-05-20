import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import R003 from "./page/part1/R003";
import R004 from "./page/part1/R004";
import R005 from "./page/part1/R005";
import R006 from "./page/part1/R006";
import R007 from "./page/part1/R007";
import R008 from "./page/part1/R008";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/R003" element={<R003/>}></Route>
                <Route path="/R004" element={<R004 />}></Route>
                <Route path="/R005" element={<R005 />}></Route>
                <Route path="/R006" element={<R006 />}></Route>
                <Route path="/R007" element={<R007 />}></Route>
                <Route path="/R008" element={<R008 />}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Routing;