import React from "react";
import AnimatedCursor from "react-animated-cursor";
const Cursor = () => {
  return (
    <>
      {" "}
      <AnimatedCursor
        innerSize={8}
        outerSize={36}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1}
        outerStyle={{
          backgroundColor: "transparent",
          border: "1px solid red",
        }}
        innerStyle={{
          backgroundColor: "red",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default Cursor;