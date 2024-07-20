import React, { useEffect, useState } from "react";
import { getRandomKeys, Movie } from "./movies";
import { SixthPhase } from "./sixthPhase";

interface FifthPhaseProps {
  winnersFromFourthPhase: Record<number, Movie>;
  losersFromFirstPhase: Record<number, Movie>;
  losersFromSecondPhase: Record<number, Movie>;
  losersFromThirdPhase: Record<number, Movie>;
  losersFromFourthPhase: Record<number, Movie>;
}

export const FifthPhase: React.FC<FifthPhaseProps> = ({
  winnersFromFourthPhase,
  losersFromFirstPhase,
  losersFromSecondPhase,
  losersFromThirdPhase,
  losersFromFourthPhase,
}) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...winnersFromFourthPhase }
  );
  const [winners, setWinners] = useState<Record<number, Movie>>({});
  const [losers, setLosers] = useState<Record<number, Movie>>({});
  const [currentMovies, setCurrentMovies] = useState<Record<number, Movie>>({});
  const [round, setRound] = useState<number>(1);
  const [roundEnded, setRoundEnded] = useState<boolean>(false);
  const [savedCount, setSavedCount] = useState<number>(0);

  const getNextMovies = (): void => {
    if (Object.keys(availableMovies).length < 4) {
      setRoundEnded(true);
    }

    const randomKeys = getRandomKeys(4, availableMovies);
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
    const selectedMovie = currentMovies[selectedKey];

    if (selectedMovie) {
      const remainingKeys = Object.keys(currentMovies).filter(
        (key) => Number(key) !== selectedKey
      );
      const remainingMovies = remainingKeys.reduce((acc, key) => {
        acc[Number(key)] = currentMovies[Number(key)];
        return acc;
      }, {} as Record<number, Movie>);

      setWinners((prev) => ({ ...prev, ...remainingMovies }));
      setLosers((prev) => ({ ...prev, [selectedKey]: selectedMovie }));
      getNextMovies();
      setRound((prev) => prev + 1);
    }
  };

  const handleSaveMovie = (key: number) => {
    if (savedCount < 1) {
      const movie = losers[key];
      if (movie) {
        setWinners((prev) => ({ ...prev, [key]: movie }));
        setLosers((prev) => {
          const updatedLosers = { ...prev };
          delete updatedLosers[key];
          return updatedLosers;
        });
        setSavedCount((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    getNextMovies();
  }, []);

  return !roundEnded ? (
    <div style={{ padding: "20px" }}>
      <div
        style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}
      >
        Пятый раунд {round}/{21}
        <br />
        Выберите 1 фильм, который вам нравится МЕНЕЕ всего
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
        }}
      >
        {Object.entries(currentMovies).map(([key, movie]) => (
          <div
            key={key}
            onClick={() => handleMovieSelection(Number(key))}
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
        ))}
      </div>
    </div>
  ) : savedCount === 1 ? (
    <SixthPhase
      winnersFromFifthPhase={winners}
      losersFromFirstPhase={losersFromFirstPhase}
      losersFromSecondPhase={losersFromSecondPhase}
      losersFromThirdPhase={losersFromThirdPhase}
      losersFromFourthPhase={losersFromFourthPhase}
      losersFromFifthPhase={losers}
    />
  ) : (
    <div style={{ padding: "20px" }}>
      <div
        style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}
      >
        Раунд завершён! Выберите 1 фильм, который вы спасете(он перейдет в
        следующий раунд):
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
          padding: "20px",
        }}
      >
        {Object.entries(losers).map(([key, movie]) => (
          <div
            key={key}
            onClick={() => handleSaveMovie(Number(key))}
            style={{
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "#f0f0f0",
              textAlign: "center",
              fontSize: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={movie.img}
              alt={movie.name}
              style={{ width: "100%", height: "auto" }}
            />
            {movie.name}
          </div>
        ))}
      </div>
    </div>
  );
};
