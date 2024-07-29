import React, { useEffect, useState } from "react";
import { getRandomKeys, Movie } from "./movies";
import { SixthPhase } from "./sixthPhase";

interface FifthPhaseProps {
  passedMoviesFromPrevPhase: Record<number, Movie>;
  nickname: string;
  saveResults: boolean;
}

export const FifthPhase: React.FC<FifthPhaseProps> = ({
  passedMoviesFromPrevPhase,
  nickname,
  saveResults,
}) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...passedMoviesFromPrevPhase }
  );
  const [passedMovies, setPassedMovied] = useState<Record<number, Movie>>({});
  const [currentMovies, setCurrentMovies] = useState<Record<number, Movie>>({});
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [round, setRound] = useState<number>(1);
  const [roundEnded, setRoundEnded] = useState<boolean>(false);
  const [savedMovies, setSavedMovies] = useState<Record<number, Movie>>({});
  const [savingEnded, setSavingEnded] = useState<boolean>(false);
  const [savedCount, setSavedCount] = useState<number>(0);

  const filteredMovies: Record<number, Movie> = Object.fromEntries(
    Object.entries(availableMovies).filter(([key, movie]) => movie.place === "")
  );
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

  const getNextMovies = (): void => {
    if (Object.keys(filteredMovies).length < 4) {
      setRoundEnded(true);
    }

    const randomKeys = getRandomKeys(4, filteredMovies);
    const selectedMovies = randomKeys.reduce((acc, key) => {
      acc[key] = availableMovies[key];
      return acc;
    }, {} as Record<number, Movie>);

    setCurrentMovies(selectedMovies);

    const updatedAvailableMovies = { ...availableMovies };
    randomKeys.forEach((key) => delete updatedAvailableMovies[key]);
    setAvailableMovies(updatedAvailableMovies);
  };

  const handleMovieSelection = (selectedKey: number) => {
    if (!selectedMovieId) {
      setSelectedMovieId(selectedKey);
      setTimeout(() => {
        const selectedMovie = currentMovies[selectedKey];
        selectedMovie.place = "82-104";

        if (selectedMovie) {
          const remainingKeys = Object.keys(currentMovies).filter(
            (key) => Number(key) !== selectedKey
          );
          const remainingMovies = remainingKeys.reduce((acc, key) => {
            acc[Number(key)] = currentMovies[Number(key)];

            return acc;
          }, {} as Record<number, Movie>);

          setPassedMovied((prev) => ({
            ...prev,
            ...remainingMovies,
            [selectedKey]: selectedMovie,
          }));
          getNextMovies();
          setRound((prev) => prev + 1);
          setSelectedMovieId(null);
        }
      }, 500);
    }
  };

  const handleChooseSavedMovies = (key: number) => {
    if (savedCount < 3) {
      if (savedMovies[key]?.name === passedMovies[key]?.name) {
        setSavedMovies((prev) => {
          const updatedLosers = { ...prev };
          delete updatedLosers[key];
          return updatedLosers;
        });
        setSavedCount((prev) => prev - 1);
      } else {
        const movie = passedMovies[key];
        setSavedMovies((prev) => ({ ...prev, [key]: movie }));
        setSavedCount((prev) => prev + 1);
      }
    } else {
      if (savedMovies[key]?.name === passedMovies[key]?.name) {
        setSavedMovies((prev) => {
          const updatedLosers = { ...prev };
          delete updatedLosers[key];
          return updatedLosers;
        });
        setSavedCount((prev) => prev - 1);
      }
    }
  };

  const handleEndSavingMovies = () => {
    if (savedCount === 3) {
      const keys = Object.keys(savedMovies).map(Number);
      for (const key of keys) {
        if (passedMovies[key]) {
          passedMovies[key].place = "";
        }
      }
      setSavingEnded(true);
    }
  };

  useEffect(() => {
    getNextMovies();
  }, []);

  return !roundEnded ? (
    <div style={{ padding: "20px", height: "100vh", boxSizing: "border-box" }}>
      <div style={{ fontSize: "18px", textAlign: "center" }}>
        Пятый раунд {round}/{26}
        <br />
        Выберите 1 фильм, который вам нравится МЕНЕЕ всего
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          padding: "20px",
          height: "calc(100% - 88px)",
          justifyContent: "center",
        }}
      >
        {Object.entries(currentMovies)
          .filter(([key, movie]) => movie.place === "")
          .map(([key, movie]) => (
            <div
              key={key}
              onClick={() => handleMovieSelection(Number(key))}
              style={{
                width: "100%",
                minHeight: "400px",
                cursor: selectedMovieId ? "auto" : "pointer",
                border: "2px solid black",
                borderRadius: "5px",
                textAlign: "center",
                backgroundColor: "#f0f0f0",
                opacity: selectedMovieId === Number(key) ? 0 : 1,
                transition: "opacity 0.85s, background-color 1s",
              }}
            >
              <img
                src={movie?.img}
                alt={movie?.name}
                style={{
                  width: "100%",
                  height: "calc(100% - 50px)",
                }}
              />
              <div style={{ padding: "10px", fontSize: "16px" }}>
                {movie?.name}
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : savingEnded ? (
    <SixthPhase
      passedMoviesFromPrevPhase={passedMovies}
      saveResults={saveResults}
      nickname={nickname}
    />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        padding: "20px",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}
      >
        Раунд завершён! Вам нужно выбрать 3 фильма, которые вы спасете(они
        перейдут в следующий раунд):
      </div>
      <div
        style={{
          display: "flex",
          width: "200px",
          marginBottom: "20px",
          fontSize: "18px",
          border: "1px solid black",
          justifyContent: "center",
          borderRadius: "5px",
          cursor: savedCount < 3 ? "default" : "pointer",
          backgroundColor: savedCount < 3 ? "#f0f0f0" : "#47d37d",
        }}
        onClick={handleEndSavingMovies}
      >
        Завершить спасение
      </div>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "5px",
          padding: "10px",
        }}
      >
        {Object.entries(passedMovies)
          .filter(([key, movie]) => movie.place === "82-104")
          .map(([key, movie]) => (
            <div
              key={key}
              onClick={() => handleChooseSavedMovies(Number(key))}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                cursor:
                  savedCount < 3
                    ? "pointer"
                    : savedMovies[Number(key)]
                    ? "pointer"
                    : "default",
                backgroundColor: savedMovies[Number(key)]
                  ? "#47d37d"
                  : "#f0f0f0",
                border: "2px solid black",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              <img
                src={movie?.img}
                alt={movie?.name}
                style={{ width: "90%", padding: "5px" }}
              />
              {movie?.name}
            </div>
          ))}
      </div>
    </div>
  );
};
