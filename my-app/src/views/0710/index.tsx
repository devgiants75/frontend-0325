import React from "react";
import Event01 from "./a_Event/Event01";
import Event02 from "./a_Event/Event02";
import Event03 from "./a_Event/Event03";
import Event04 from "./a_Event/Event04";
import Event05 from "./a_Event/Event05";
import Practice01 from "./b_Practice/Practice01";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0710
      </h1>

      <h2>1. Event</h2>
      <Event01 />
      <Event02 />
      <Event03 />
      <Event04 />
      <Event05 />

      <h2>2. Practice</h2>
      <Practice01 />
      
    </div>
  );
}
