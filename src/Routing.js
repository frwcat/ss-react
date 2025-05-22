import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import R003 from "./page/part1/R003";
import R004 from "./page/part1/R004";
import R005 from "./page/part1/R005";
import R006 from "./page/part1/R006";
import R007 from "./page/part1/R007";
import R008 from "./page/part1/R008";
import R009 from "./page/part1/R009";
import R010 from "./page/part1/R010";
import R011 from "./page/part1/R011";
import R012 from "./page/part1/R012";
import R013 from "./page/part1/R013";
import R014 from "./page/part1/R014";
import R015 from "./page/part1/R015";
import R016 from "./page/part1/R016";
import R017 from "./page/part2/R017";
import R018 from "./page/part2/R018";
import R019 from "./page/part2/R019";
import R020 from "./page/part2/R020";
import R021 from "./page/part2/R021";
import R022 from "./page/part2/R022";
import R023 from "./page/part2/R023";

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/R003" element={<R003/>}></Route>
                <Route path="/R004" element={<R004/>}></Route>
                <Route path="/R005" element={<R005/>}></Route>
                <Route path="/R006" element={<R006/>}></Route>
                <Route path="/R007" element={<R007/>}></Route>
                <Route path="/R008" element={<R008/>}></Route>
                <Route path="/R009" element={<R009/>}></Route>
                <Route path="/R010" element={<R010/>}></Route>
                <Route path="/R011" element={<R011/>}></Route>
                <Route path="/R012" element={<R012/>}></Route>
                <Route path="/R013" element={<R013/>}></Route>
                <Route path="/R014" element={<R014/>}></Route>
                <Route path="/R015" element={<R015/>}></Route>
                <Route path="/R016" element={<R016/>}></Route>
                <Route path="/R017" element={<R017/>}></Route>
                <Route path="/R018" element={<R018/>}></Route>
                <Route path="/R019" element={<R019/>}></Route>
                <Route path="/R020" element={<R020/>}></Route>
                <Route path="/R021" element={<R021/>}></Route>
                <Route path="/R022" element={<R022/>}></Route>
                <Route path="/R023" element={<R023/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routing;