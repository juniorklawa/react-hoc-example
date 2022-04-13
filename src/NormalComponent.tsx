import React from "react";
import myCustomHoc from "./myCustomHOC";

interface NormalComponentProps {
  counter: string;
}

const NormalComponent = ({ counter }: NormalComponentProps) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Normal component</h1>
      <h3>{counter}</h3>
    </div>
  );
};

export default myCustomHoc(NormalComponent, 10);
