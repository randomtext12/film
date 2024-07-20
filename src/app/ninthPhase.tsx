import React, { useEffect, useState } from "react";
import { getRandomKeys, Movie } from "./movies";
import { DesidersPhase } from "./desidersPhase";

interface NinthPhaseProps {
  winnersFromEighthPhase: Record<number, Movie>;
  losersFromFirstPhase: Record<number, Movie>;
  losersFromSecondPhase: Record<number, Movie>;
  losersFromThirdPhase: Record<number, Movie>;
  losersFromFourthPhase: Record<number, Movie>;
  losersFromFifthPhase: Record<number, Movie>;
  losersFromSixthPhase: Record<number, Movie>;
  losersFromSeventhPhase: Record<number, Movie>;
  losersFromEighthPhase: Record<number, Movie>;
}

export const NinthPhase: React.FC<NinthPhaseProps> = ({
  winnersFromEighthPhase,
  losersFromFirstPhase,
  losersFromSecondPhase,
  losersFromThirdPhase,
  losersFromFourthPhase,
  losersFromFifthPhase,
  losersFromSixthPhase,
  losersFromSeventhPhase,
  losersFromEighthPhase,
}) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...winnersFromEighthPhase }
  );
  const [winners, setWinners] = useState<Record<number, Movie>>({});
  const [losers, setLosers] = useState<Record<number, Movie>>({});
  const [currentMovies, setCurrentMovies] = useState<Record<number, Movie>>({});
  const [round, setRound] = useState<number>(1);
  const [roundEnded, setRoundEnded] = useState<boolean>(false);

  const getNextMovies = (): void => {
    if (Object.keys(availableMovies).length < 3) {
      setRoundEnded(true);
    }

    const randomKeys = getRandomKeys(3, availableMovies);
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

  useEffect(() => {
    getNextMovies();
  }, []);

  return !roundEnded ? (
    <div style={{ padding: "20px" }}>
      <div
        style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}
      >
        Девятый раунд {round}/{8}
        <br />
        Выберите 1 фильм, который вам нравится МЕНЕЕ всего
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "20px",
          justifyContent: "center",
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
  ) : (
    <DesidersPhase
      winnersFromNinthPhase={winners}
      losersFromFirstPhase={losersFromFirstPhase}
      losersFromSecondPhase={losersFromSecondPhase}
      losersFromThirdPhase={losersFromThirdPhase}
      losersFromFourthPhase={losersFromFourthPhase}
      losersFromFifthPhase={losersFromFifthPhase}
      losersFromSixthPhase={losersFromSixthPhase}
      losersFromSeventhPhase={losersFromSeventhPhase}
      losersFromEighthPhase={losersFromEighthPhase}
      losersFromNinthPhase={losers}
    />
  );
};
