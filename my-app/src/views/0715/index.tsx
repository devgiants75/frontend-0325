import React from "react";
import Router01 from "./a_Router/Router01";
import { Route, Routes } from "react-router-dom";
import Router02 from "./a_Router/Router02";
import Router03 from "./a_Router/Router03";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0715
      </h1>

      <Routes>
        <Route path="/router01/*" element={<Router01 />} />
        <Route path="/router02" element={<Router02 />} />
        <Route path="/router03" element={<Router03 />} />

      </Routes>

    </div>
  );
}
