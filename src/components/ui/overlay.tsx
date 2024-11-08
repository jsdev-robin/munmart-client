import React from "react";

const Overlay = ({ ...rest }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black/01 dark:bg-background/50 z-40 transition-all"
      {...rest}
    />
  );
};

export default Overlay;
