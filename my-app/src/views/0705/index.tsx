import React from "react";

import UseMemo from "./a_review/UseMemo";
import UseCallback from "./a_review/UseCallback";
import UseEffect from "./a_review/UseEffect";
import Todo from "./a_review/Todo";


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
      <UseMemo />
      <UseCallback />
      <UseEffect />

      <Todo />
      
    </div>
  );
}
