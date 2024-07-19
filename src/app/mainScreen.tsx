import React, { useState } from "react";
import { FirstPhase } from "./firstPhase";
export const MainScreen: React.FC = () => {
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const startTest = () => {
    setTestStarted(true);
  };
  return !testStarted ? (
    <div style={divOneStyle}>
      <div onClick={startTest} style={textStyle}>
        Начать тест
      </div>
    </div>
  ) : (
    <FirstPhase />
  );
};

const divOneStyle: React.CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100vh",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle: React.CSSProperties = {
  borderRadius: "5px",
  fontSize: "50px",
  border: "2px solid black",
  padding: "10px",
  cursor: "pointer",
};
