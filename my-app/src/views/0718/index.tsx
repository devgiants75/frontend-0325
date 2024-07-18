import React from "react";
import Style01 from './a_Styles/Style01'
import Style02 from './a_Styles/Style02'
import Style03 from './a_Styles/Style03'
import Style04 from "./a_Styles/Style04";
import Style05 from "./a_Styles/Style05";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0718
      </h1>

      <h2>1. Style</h2>
        <Style01 />
        <Style02 />
        <Style03 />
        <Style04 />
        <Style05 />

    </div>
  );
}
