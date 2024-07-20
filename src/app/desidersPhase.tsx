import React, { useEffect, useState } from "react";
import { Movie } from "./movies";

interface DesidersPhaseProps {
  winnersFromNinthPhase: Record<number, Movie>;
  losersFromFirstPhase: Record<number, Movie>;
  losersFromSecondPhase: Record<number, Movie>;
  losersFromThirdPhase: Record<number, Movie>;
  losersFromFourthPhase: Record<number, Movie>;
  losersFromFifthPhase: Record<number, Movie>;
  losersFromSixthPhase: Record<number, Movie>;
  losersFromSeventhPhase: Record<number, Movie>;
  losersFromEighthPhase: Record<number, Movie>;
  losersFromNinthPhase: Record<number, Movie>;
}

export const DesidersPhase: React.FC<DesidersPhaseProps> = ({
  winnersFromNinthPhase,
  losersFromFirstPhase,
  losersFromSecondPhase,
  losersFromThirdPhase,
  losersFromFourthPhase,
  losersFromFifthPhase,
  losersFromSixthPhase,
  losersFromSeventhPhase,
  losersFromEighthPhase,
  losersFromNinthPhase,
}) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...winnersFromNinthPhase }
  );
  const [winners8, setWinners8] = useState<Record<number, Movie>>({});
  const [losers8, setLosers8] = useState<Record<number, Movie>>({});
  const [winners4, setWinners4] = useState<Record<number, Movie>>({});
  const [losers4, setLosers4] = useState<Record<number, Movie>>({});
  const [winners2, setWinners2] = useState<Record<number, Movie>>({});
  const [losers2, setLosers2] = useState<Record<number, Movie>>({});
  const [winners1, setWinners1] = useState<Record<number, Movie>>({});
  const [losers1, setLosers1] = useState<Record<number, Movie>>({});
  const [winners3rd, setWinners3rd] = useState<Record<number, Movie>>({});
  const [losers3rd, setLosers3rd] = useState<Record<number, Movie>>({});
  const [currentMovies, setCurrentMovies] = useState<[number, number] | null>(
    null
  );
  const [round, setRound] = useState<number>(1);
  const [phase, setPhase] = useState<number>(8);
  const [roundEnded, setRoundEnded] = useState<boolean>(false);

  const getNextMovies = () => {
    const keys = Object.keys(availableMovies).map(Number);
    if (keys.length >= 2) {
      const selectedKeys = keys.slice(0, 2) as [number, number];
      setCurrentMovies(selectedKeys);
    }
  };

  const handleMovieSelection = (winnerKey: number, loserKey: number) => {
    const winnerMovie = availableMovies[winnerKey];
    const loserMovie = availableMovies[loserKey];
    if (phase === 8) {
      setWinners8((prev) => ({ ...prev, [winnerKey]: winnerMovie }));
      setLosers8((prev) => ({ ...prev, [loserKey]: loserMovie }));
    } else if (phase === 4) {
      setWinners4((prev) => ({ ...prev, [winnerKey]: winnerMovie }));
      setLosers4((prev) => ({ ...prev, [loserKey]: loserMovie }));
    } else if (phase === 2) {
      setWinners2((prev) => ({ ...prev, [winnerKey]: winnerMovie }));
      setLosers2((prev) => ({ ...prev, [loserKey]: loserMovie }));
    } else if (phase === 3) {
      setWinners3rd((prev) => ({ ...prev, [winnerKey]: winnerMovie }));
      setLosers3rd((prev) => ({ ...prev, [loserKey]: loserMovie }));
    } else if (phase === 1) {
      setWinners1((prev) => ({ ...prev, [winnerKey]: winnerMovie }));
      setLosers1((prev) => ({ ...prev, [loserKey]: loserMovie }));
    }

    const updatedAvailableMovies = { ...availableMovies };
    delete updatedAvailableMovies[winnerKey];
    delete updatedAvailableMovies[loserKey];
    setAvailableMovies(updatedAvailableMovies);
    setRound((prev) => prev + 1);
  };

  useEffect(() => {
    if (phase === 8 && Object.keys(winners8).length === 8) {
      setPhase(4);
      setAvailableMovies({ ...winners8 });
      setRound(1);
    } else if (phase === 4 && Object.keys(winners4).length === 4) {
      setPhase(2);
      setAvailableMovies({ ...winners4 });
      setRound(1);
    } else if (phase === 2 && Object.keys(winners2).length === 2) {
      setPhase(3);
      setAvailableMovies({ ...losers2 });
      setRound(1);
    } else if (phase === 3 && Object.keys(winners3rd).length === 1) {
      setPhase(1);
      setAvailableMovies({ ...winners2 });
      setRound(1);
    } else if (phase === 1 && Object.keys(winners1).length === 1) {
      setRoundEnded(true);
    }
  }, [winners8, winners4, winners2, winners1, winners3rd, losers2, phase]);

  useEffect(() => {
    getNextMovies();
  }, [availableMovies]);

  const keys1 = Object.keys(winners1) as unknown as number[];
  const keys2 = Object.keys(losers1) as unknown as number[];
  const keys3 = Object.keys(winners3rd) as unknown as number[];
  const keys4 = Object.keys(losers3rd) as unknown as number[];

  return !roundEnded ? (
    <div style={{ padding: "20px" }}>
      <div
        style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}
      >
        {phase === 8
          ? "Восьмая финала "
          : phase === 4
          ? "Четвертьфинал "
          : phase === 2
          ? "Полуфинал "
          : phase === 1
          ? "Финал "
          : "Финал лузеров "}
        {round}/{phase !== 3 ? phase : "1"}
        <br />
        Выберите 1 фильм, который вам нравится БОЛЬШЕ
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        {currentMovies &&
          currentMovies.map((key) => {
            const movie = availableMovies[key];
            return movie ? (
              <div
                key={key}
                onClick={() =>
                  handleMovieSelection(
                    key,
                    currentMovies.find((k) => k !== key)!
                  )
                }
                style={{
                  width: "23%",
                  cursor: "pointer",
                  border: "2px solid black",
                  borderRadius: "5px",
                  overflow: "hidden",
                  textAlign: "center",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <img
                  src={movie.img}
                  alt={movie.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ padding: "10px", fontSize: "16px" }}>
                  {movie.name}
                </div>
              </div>
            ) : null;
          })}
      </div>
    </div>
  ) : (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "23%",
            border: "2px solid black",
            borderRadius: "5px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          Первое место:{" "}
          <img
            src={winners1[keys1[0]].img}
            alt={winners1[keys1[0]].name}
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ padding: "10px", fontSize: "16px" }}>
            {winners1[keys1[0]].name}
          </div>
        </div>
        <div
          style={{
            width: "23%",
            border: "2px solid black",
            borderRadius: "5px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          Второе место:{" "}
          <img
            src={losers1[keys2[0]].img}
            alt={losers1[keys2[0]].name}
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ padding: "10px", fontSize: "16px" }}>
            {losers1[keys2[0]].name}
          </div>
        </div>
        <div
          style={{
            width: "23%",
            border: "2px solid black",
            borderRadius: "5px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          Третье место:{" "}
          <img
            src={winners3rd[keys3[0]].img}
            alt={winners3rd[keys3[0]].name}
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ padding: "10px", fontSize: "16px" }}>
            {winners3rd[keys3[0]].name}
          </div>
        </div>
        <div
          style={{
            width: "23%",
            border: "2px solid black",
            borderRadius: "5px",
            overflow: "hidden",
            textAlign: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          Четвертое место:{" "}
          <img
            src={losers3rd[keys4[0]].img}
            alt={losers3rd[keys4[0]].name}
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ padding: "10px", fontSize: "16px" }}>
            {losers3rd[keys4[0]].name}
          </div>
        </div>
      </div>
      <div>4-8 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losers4).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <img
              src={movie.img}
              alt={movie.name}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>9-16 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losers8).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <img
              src={movie.img}
              alt={movie.name}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>17-24 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromNinthPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>25-36 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromEighthPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>37-48 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromSeventhPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>49-64 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromSixthPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>65-84 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromFifthPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>85-108 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromFourthPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>109-140 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromThirdPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>141-180 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromSecondPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
      <div>181-232 место:</div>
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(losersFromFirstPhase).map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div style={{ padding: "10px", fontSize: "16px" }}>
              {movie.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
