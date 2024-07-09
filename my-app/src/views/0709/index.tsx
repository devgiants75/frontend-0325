import React from "react";
import Custom01 from "./a_Custom/Custom01";
import Custom02 from "./a_Custom/Custom02";
import Custom03 from "./a_Custom/Custom03";
import Custom04 from "./a_Custom/Custom04";
import WebcamDrawingApp from "./c_Practice/WebcamDrawingApp";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0709
      </h1>

      <h2>1. Cutom Hook</h2>
        <Custom01 />
        <Custom02 />
        <Custom03 />
        <Custom04 />

      <h2>2. Practice (커스텀 훅)</h2>

      <h2>3. Practice (웹캠 드로윙 앱)</h2>
      <WebcamDrawingApp />
      
    </div>
  );
}
