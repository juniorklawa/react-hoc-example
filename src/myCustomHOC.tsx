import React, { useState } from "react";

// A HOC is a component that takes one or more components as props and returns new components.
// It’s important to mention that HOC’s don’t modify the components passed, they just return new components.
// you can use a loader here too

const myCustomHoc = (Component: React.ElementType, data: number) => () => {
  const [counter, setCounter] = useState(data);

  return (
    <div
      onClick={() => setCounter((prevState) => prevState + 1)}
      style={{ backgroundColor: "blue" }}
    >
      <h1>My HOC {counter}</h1>
      <Component counter={counter} />
    </div>
  );
};

export default myCustomHoc;
