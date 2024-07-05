import React from "react";

import Reducer01 from "./b_Reducer/Reducer01";
import Reducer02 from "./b_Reducer/Reducer02";
import Reducer03 from "./b_Reducer/Reducer03";
import Reducer04 from "./b_Reducer/Reducer04";


export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0705
      </h1>

      <h2>1. review</h2>


      <h2>2. useReducer</h2>
      <Reducer01 />
      <Reducer02 />
      <Reducer03 />
      <Reducer04 />
      
    </div>
  );
}
