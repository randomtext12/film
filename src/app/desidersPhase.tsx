import React, { useEffect, useState } from "react";
import { Movie, MOVIES16 } from "./movies";
import { StatisticPhase } from "./statisticPhase";

interface DesidersPhaseProps {
  passedMoviesFromPrevPhase?: Record<number, Movie>;
  nickname: string;
  saveResults: boolean;
}

export const DesidersPhase: React.FC<DesidersPhaseProps> = ({
  passedMoviesFromPrevPhase,
  nickname,
  saveResults,
}) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...MOVIES16 }
  );
  const [passedMovies, setPassedMovied] = useState<Record<number, Movie>>({});
  const [currentMovies, setCurrentMovies] = useState<[number, number] | null>(
    null
  );
  const [filteredMovies, setFilteredMovies] = useState<Record<number, Movie>>(
    Object.fromEntries(
      Object.entries(availableMovies).filter(
        ([key, movie]) => movie.place === ""
      )
    )
  );
  const [winnerMovies, setWinnerMovies] = useState<Record<number, Movie>>({});
  const [thirdPlaceMovies, setThirdPlaceMovies] = useState<
    Record<number, Movie>
  >({});
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [round, setRound] = useState<number>(1);
  const [phase, setPhase] = useState<number>(8);
  const [roundEnded, setRoundEnded] = useState<boolean>(false);

  useEffect(() => {
    getNextMovies();
  }, []);

  useEffect(() => {
    const loserMovies: Record<number, Movie> = Object.fromEntries(
      Object.entries(availableMovies).filter(
        ([key, movie]) => movie.place !== ""
      )
    );
    setPassedMovied((prev) => ({
      ...prev,
      ...loserMovies,
    }));
  }, []);

  useEffect(() => {
    getNextMovies();
  }, [filteredMovies]);

  const getNextMovies = () => {
    const keys = Object.keys(filteredMovies).map(Number);
    if (keys.length >= 2) {
      const selectedKeys = keys.slice(0, 2) as [number, number];
      setCurrentMovies(selectedKeys);
    }
  };

  const handleMovieSelection = (winnerKey: number, loserKey: number) => {
    if (!selectedMovieId) {
      setSelectedMovieId(loserKey);
      setTimeout(() => {
        const winnerMovie = filteredMovies[winnerKey];
        const loserMovie = filteredMovies[loserKey];
        if (phase === 8) {
          loserMovie.place = "9-16";
          setPassedMovied((prev) => ({
            ...prev,
            [loserKey]: loserMovie,
          }));
          setWinnerMovies((prev) => ({
            ...prev,
            [winnerKey]: winnerMovie,
          }));
        } else if (phase === 4) {
          loserMovie.place = "5-8";
          setPassedMovied((prev) => ({
            ...prev,
            [loserKey]: loserMovie,
          }));
          setWinnerMovies((prev) => ({
            ...prev,
            [winnerKey]: winnerMovie,
          }));
        } else if (phase === 2) {
          setThirdPlaceMovies((prev) => ({
            ...prev,
            [loserKey]: loserMovie,
          }));
          setWinnerMovies((prev) => ({
            ...prev,
            [winnerKey]: winnerMovie,
          }));
        } else if (phase === 3) {
          loserMovie.place = "4";
          winnerMovie.place = "3";
          setPassedMovied((prev) => ({
            ...prev,
            [loserKey]: loserMovie,
            [winnerKey]: winnerMovie,
          }));
        } else if (phase === 1) {
          loserMovie.place = "2";
          winnerMovie.place = "1";
          setPassedMovied((prev) => ({
            ...prev,
            [loserKey]: loserMovie,
            [winnerKey]: winnerMovie,
          }));
        }

        const updatedAvailableMovies = { ...filteredMovies };
        delete updatedAvailableMovies[loserKey];
        delete updatedAvailableMovies[winnerKey];
        setFilteredMovies(updatedAvailableMovies);
        setRound((prev) => prev + 1);
        setSelectedMovieId(null);
      }, 500);
    }
  };

  useEffect(() => {
    if (phase === 8 && round > 8) {
      setPhase(4);
      setRound(1);
      setFilteredMovies(winnerMovies);
      setWinnerMovies({});
    } else if (phase === 4 && round > 4) {
      setPhase(2);
      setRound(1);
      setFilteredMovies(winnerMovies);
      setWinnerMovies({});
    } else if (phase === 2 && round > 2) {
      setPhase(3);
      setRound(1);
      setFilteredMovies(thirdPlaceMovies);
    } else if (phase === 3 && round > 1) {
      setPhase(1);
      setRound(1);
      setFilteredMovies(winnerMovies);
      setWinnerMovies({});
    } else if (phase === 1 && round > 1) {
      setRoundEnded(true);
    }
  }, [phase, round]);

  const sortedMovies = Object.entries(passedMovies).sort(
    ([keyA, movieA], [keyB, movieB]) => {
      const extractNumber = (place: string) => {
        const match = place.match(/^\d+/);
        return match ? parseInt(match[0], 10) : Infinity;
      };

      const placeA = extractNumber(movieA.place);
      const placeB = extractNumber(movieB.place);

      return placeA - placeB;
    }
  );

  return !roundEnded ? (
    <div style={{ padding: "20px", height: "100vh", boxSizing: "border-box" }}>
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
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          padding: "20px",
          height: "calc(100% - 88px)",
          justifyContent: "center",
        }}
      >
        {currentMovies &&
          currentMovies.map((key) => {
            const movie = filteredMovies[key];
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
                  width: "100%",
                  minHeight: "400px",
                  cursor: selectedMovieId ? "auto" : "pointer",
                  border: "2px solid black",
                  borderRadius: "5px",
                  overflow: "hidden",
                  textAlign: "center",
                  backgroundColor: "#f0f0f0",
                  opacity: selectedMovieId === Number(key) ? 0 : 1,
                  transition: "opacity 0.85s, background-color 1s",
                }}
              >
                <img
                  src={movie.img}
                  alt={movie.name}
                  style={{
                    width: "100%",
                    height: "calc(100% - 50px)",
                  }}
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
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            fontSize: "25px",
            border: "1px solid black",
          }}
        >
          Ваш рейтинг
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "11%",
              paddingTop: "10px",
              paddingBottom: "10px",
              justifyContent: "center",
              fontSize: "25px",
              border: "1px solid black",
            }}
          >
            Место
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              paddingTop: "10px",
              paddingBottom: "10px",
              justifyContent: "center",
              fontSize: "25px",
              border: "1px solid black",
            }}
          >
            Фильм
          </div>
          <div
            style={{
              display: "flex",
              width: "9%",
              paddingTop: "10px",
              paddingBottom: "10px",
              justifyContent: "center",
              fontSize: "25px",
              border: "1px solid black",
            }}
          >
            Постер
          </div>
        </div>
        {sortedMovies.map(([key, movie]) => (
          <div
            key={key}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              overflow: "hidden",
              justifyContent: "space-between",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "11%",
                height: "100px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "25px",
                border: "1px solid black",
              }}
            >
              {movie.place}
            </div>
            <div
              style={{
                display: "flex",
                width: "80%",
                height: "100px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "25px",
                border: "1px solid black",
              }}
            >
              {movie.name}
            </div>
            <img
              src={movie.img}
              alt={movie.name}
              style={{
                display: "flex",
                width: "9%",
                height: "100px",
                justifyContent: "center",
                fontSize: "25px",
                border: "1px solid black",
              }}
            />
          </div>
        ))}
      </div>
      <StatisticPhase
        saveResults={saveResults}
        nickname={nickname}
        passedMoviesFromPrevPhase={passedMovies}
      />
    </div>
  );
};
