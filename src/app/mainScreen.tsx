import React, { useState } from "react";
import { FirstPhase } from "./firstPhase";
import { DesidersPhase } from "./desidersPhase";
export const MainScreen: React.FC = () => {
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const startTest = () => {
    setTestStarted(true);
  };
  const handleCheckbox = () => {
    setCheckbox((prev) => !prev);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return !testStarted ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={startTest}
        style={{
          borderRadius: "5px",
          fontSize: "50px",
          border: "2px solid black",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Нажмите, чтобы начать первый раунд
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите свое имя"
        style={{
          padding: "5px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
          marginBottom: "20px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          onClick={handleCheckbox}
          style={{
            border: "1px solid black",
            cursor: "pointer",
            marginRight: "10px",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: checkbox ? "#4CAF50" : "#fff",
          }}
        >
          {checkbox && (
            <div
              style={{
                color: "white",
                fontSize: "16px",
                lineHeight: "1",
                position: "absolute",
              }}
            >
              ✓
            </div>
          )}
        </div>
        <div>Записать мой результат</div>
      </div>
    </div>
  ) : (
    <DesidersPhase saveResults={checkbox} nickname={inputValue} />
  );
};
