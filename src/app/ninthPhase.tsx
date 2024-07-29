import React, { useEffect, useState } from "react";
import { getRandomKeys, Movie } from "./movies";
import { DesidersPhase } from "./desidersPhase";

interface NinthPhaseProps {
  passedMoviesFromPrevPhase: Record<number, Movie>;
  nickname: string;
  saveResults: boolean;
}

export const NinthPhase: React.FC<NinthPhaseProps> = ({
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
    if (Object.keys(filteredMovies).length < 3) {
      setRoundEnded(true);
    }

    const randomKeys = getRandomKeys(3, filteredMovies);
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
        selectedMovie.place = "17-24";

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

  useEffect(() => {
    getNextMovies();
  }, []);

  return !roundEnded ? (
    <div style={{ padding: "20px", height: "100vh", boxSizing: "border-box" }}>
      <div style={{ fontSize: "18px", textAlign: "center" }}>
        Девятый раунд {round}/{8}
        <br />
        Выберите 1 фильм, который вам нравится МЕНЕЕ всего
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
  ) : (
    <DesidersPhase
      passedMoviesFromPrevPhase={passedMovies}
      saveResults={saveResults}
      nickname={nickname}
    />
  );
};
