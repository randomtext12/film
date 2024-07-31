import React, { useState } from "react";
import { StatisticScreenStart } from "./statisticScreenStart";
import { MainPhase } from "./mainPhase";
export const MainScreen: React.FC = () => {
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [statisticScreenOpened, setStatisticScreenOpened] =
    useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const startTest = () => {
    if (inputValue !== "") {
      setTestStarted(true);
    }
  };
  const handleCheckbox = () => {
    setCheckbox((prev) => !prev);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter" && inputValue !== "") {
      startTest();
    }
  };
  return testStarted ? (
    <MainPhase saveResults={checkbox} nickname={inputValue} />
  ) : statisticScreenOpened ? (
    <StatisticScreenStart
      statisticScreenOpened={statisticScreenOpened}
      setStatisticScreenOpened={setStatisticScreenOpened}
    />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        onKeyDown={handleKeyPress}
        tabIndex={0}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "97vh",
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
            cursor: inputValue !== "" ? "pointer" : "default",
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
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          marginBottom: "30px",
          marginRight: "30px",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingBottom: "2px",
          paddingTop: "2px",
          borderRadius: "5px",
          border: "2px solid black",
          cursor: "pointer",
        }}
        onClick={() => {
          setStatisticScreenOpened(true);
        }}
      >
        Посмотреть статистику
      </div>
    </div>
  );
};
