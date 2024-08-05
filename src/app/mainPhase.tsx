import React, { useEffect, useState } from "react";
import { getRandomKeys, Movie, MOVIES } from "./movies";
import { UserStatisticScreen } from "./userStatisticScreen";

interface MainPhaseProps {
  nickname: string;
}

export const MainPhase: React.FC<MainPhaseProps> = ({ nickname }) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...MOVIES }
  );
  const [passedMovies, setPassedMovied] = useState<Record<number, Movie>>({
    ...MOVIES,
  });
  const [currentMovies, setCurrentMovies] = useState<Record<number, Movie>>({});
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [round, setRound] = useState<number>(1);
  const [stage, setStage] = useState<number>(1);
  const [savedMovies, setSavedMovies] = useState<Record<number, Movie>>({});
  const [savedCount, setSavedCount] = useState<number>(0);
  const [numberOfKeysToRandom, setNumberOfKeysToRandom] = useState<number>(4);
  const [placeOfLosingFilm, setPlaceOfLosingFilm] = useState<string>("233-300");
  const [countOfRoundesInStage, setCountOfRoundesInStage] =
    useState<number>(75);
  const [stageEnded, setStageEnded] = useState<boolean>(false);
  const [countOfFilmsToSave, setCountOfFilmsToSave] = useState<number>(7);
  const [roundString, setRoundString] = useState<string>("Первый раунд");
  const [savingEnabled, setSavingEnabled] = useState<boolean>(true);
  const [savingStarted, setSavingStarted] = useState<boolean>(false);
  const [configUpdated, setConfigUpdated] = useState<boolean>(false);
  const [hoveredMovieId, setHoveredMovieId] = useState<number>(0);

  useEffect(() => {
    if (stage === 1) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("233-300");
      setCountOfRoundesInStage(75);
      setCountOfFilmsToSave(7);
      setRoundString("Первый раунд");
      setSavingEnabled(true);
    } else if (stage === 2) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("181-232");
      setCountOfRoundesInStage(58);
      setCountOfFilmsToSave(6);
      setRoundString("Второй раунд");
      setSavingEnabled(true);
    } else if (stage === 3) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("141-180");
      setCountOfRoundesInStage(45);
      setCountOfFilmsToSave(5);
      setRoundString("Третий раунд");
      setSavingEnabled(true);
    } else if (stage === 4) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("109-140");
      setCountOfRoundesInStage(35);
      setCountOfFilmsToSave(3);
      setRoundString("Четвертый раунд");
      setSavingEnabled(true);
    } else if (stage === 5) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("85-108");
      setCountOfRoundesInStage(27);
      setCountOfFilmsToSave(3);
      setRoundString("Пятый раунд");
      setSavingEnabled(true);
    } else if (stage === 6) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("65-84");
      setCountOfRoundesInStage(21);
      setCountOfFilmsToSave(1);
      setRoundString("Шестой раунд");
      setSavingEnabled(true);
    } else if (stage === 7) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("49-64");
      setCountOfRoundesInStage(16);
      setCountOfFilmsToSave(0);
      setRoundString("Седьмой раунд");
      setSavingEnabled(false);
    } else if (stage === 8) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("37-48");
      setCountOfRoundesInStage(12);
      setCountOfFilmsToSave(0);
      setRoundString("Восьмой раунд");
      setSavingEnabled(false);
    } else if (stage === 9) {
      setNumberOfKeysToRandom(3);
      setPlaceOfLosingFilm("25-36");
      setCountOfRoundesInStage(12);
      setCountOfFilmsToSave(0);
      setRoundString("Девятый раунд");
      setSavingEnabled(false);
    } else if (stage === 10) {
      setNumberOfKeysToRandom(3);
      setPlaceOfLosingFilm("17-24");
      setCountOfRoundesInStage(8);
      setCountOfFilmsToSave(0);
      setRoundString("Десятый раунд");
      setSavingEnabled(false);
    } else if (stage === 11) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("13-16");
      setCountOfRoundesInStage(4);
      setCountOfFilmsToSave(0);
      setRoundString("Одинадцатый раунд");
      setSavingEnabled(false);
    } else if (stage === 12) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("10-12");
      setCountOfRoundesInStage(3);
      setCountOfFilmsToSave(0);
      setRoundString("Двенадцатый раунд");
      setSavingEnabled(false);
    } else if (stage === 13) {
      setNumberOfKeysToRandom(3);
      setPlaceOfLosingFilm("7-9");
      setCountOfRoundesInStage(3);
      setCountOfFilmsToSave(0);
      setRoundString("Тринадцатый раунд");
      setSavingEnabled(false);
    } else if (stage === 14) {
      setNumberOfKeysToRandom(3);
      setPlaceOfLosingFilm("5-6");
      setCountOfRoundesInStage(2);
      setCountOfFilmsToSave(0);
      setRoundString("Четырнадцатый раунд");
      setSavingEnabled(false);
    } else if (stage === 15) {
      setNumberOfKeysToRandom(4);
      setPlaceOfLosingFilm("4");
      setCountOfRoundesInStage(1);
      setCountOfFilmsToSave(0);
      setRoundString("Пятнадцатый раунд");
      setSavingEnabled(false);
    } else if (stage === 16) {
      setNumberOfKeysToRandom(3);
      setPlaceOfLosingFilm("3");
      setCountOfRoundesInStage(1);
      setCountOfFilmsToSave(0);
      setRoundString("Шестнадцатый раунд");
      setSavingEnabled(false);
    } else if (stage === 17) {
      setNumberOfKeysToRandom(2);
      setPlaceOfLosingFilm("2");
      setCountOfRoundesInStage(1);
      setCountOfFilmsToSave(0);
      setRoundString("Финал");
      setSavingEnabled(false);
    }
    setConfigUpdated(true);
  }, [stage]);

  useEffect(() => {
    setConfigUpdated(true);
  }, [round]);

  useEffect(() => {
    if (configUpdated) {
      getNextMovies();
      setConfigUpdated(false);
    }
  }, [configUpdated]);

  const getNextMovies = (): void => {
    const filteredMovies: Record<number, Movie> = Object.fromEntries(
      Object.entries(availableMovies).filter(
        ([key, movie]) => movie.place === ""
      )
    );
    if (Object.keys(filteredMovies).length < numberOfKeysToRandom) {
      if (stage === 17) {
        setStageEnded(true);
      } else {
        setSavingStarted(true);
      }
    }

    const randomKeys = getRandomKeys(numberOfKeysToRandom, filteredMovies);
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
        selectedMovie.place = placeOfLosingFilm;
        if (selectedMovie) {
          const remainingKeys = Object.keys(currentMovies).filter(
            (key) => Number(key) !== selectedKey
          );
          const remainingMovies = remainingKeys.reduce((acc, key) => {
            acc[Number(key)] = currentMovies[Number(key)];
            if (stage === 17) {
              acc[Number(key)].place = "1";
            }

            return acc;
          }, {} as Record<number, Movie>);

          setPassedMovied((prev) => ({
            ...prev,
            ...remainingMovies,
            [selectedKey]: selectedMovie,
          }));
          setRound((prev) => prev + 1);
          setSelectedMovieId(null);
        }
      }, 500);
    }
  };

  const handleChooseSavedMovies = (key: number) => {
    if (savedCount < countOfFilmsToSave) {
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
    if (savedCount === countOfFilmsToSave) {
      const keys = Object.keys(savedMovies).map(Number);
      for (const key of keys) {
        if (passedMovies[key]) {
          passedMovies[key].place = "";
        }
      }
      setSavingStarted(false);
      setStage((prev) => prev + 1);
      setRound(1);
      setSavedCount(0);
      setSavedMovies({});
      setAvailableMovies(passedMovies);
    }
  };

  return stageEnded ? (
    <UserStatisticScreen
      nickname={nickname}
      passedMoviesFromPrevPhase={passedMovies}
    />
  ) : !savingStarted ? (
    <div style={{ padding: "20px", height: "100vh", boxSizing: "border-box" }}>
      <div style={{ fontSize: "18px", textAlign: "center" }}>
        {roundString} {round}/{countOfRoundesInStage}
        <br />
        Выберите 1 фильм, который вам нравится МЕНЕЕ всего
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numberOfKeysToRandom}, 1fr)`,
          gap: "10px",
          padding: "20px",
          height: "calc(100% - 88px)",
          justifyContent: "center",
        }}
      >
        {Object.entries(currentMovies).map(([key, movie]) => (
          <div
            key={key}
            onClick={() => handleMovieSelection(Number(key))}
            onMouseEnter={() => setHoveredMovieId(Number(key))}
            onMouseLeave={() => setHoveredMovieId(0)}
            style={{
              width: "100%",
              minHeight: "400px",
              cursor: selectedMovieId ? "auto" : "pointer",
              border: "2px solid",
              borderColor: "#000000",
              borderRadius: "5px",
              textAlign: "center",
              backgroundColor:
                hoveredMovieId === Number(key) ? "#cccccc" : "#ffffff",
              opacity: selectedMovieId === Number(key) ? 0 : 1,
              transition: "opacity 0.85s, background-color 0.1s",
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
  ) : savingEnabled ? (
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
        style={{ marginBottom: "10px", fontSize: "18px", textAlign: "center" }}
      >
        Раунд завершён! Вам нужно выбрать {countOfFilmsToSave}{" "}
        {countOfFilmsToSave > 4
          ? "фильмов"
          : countOfFilmsToSave > 1
          ? "фильма"
          : "фильм"}
        , которые вы спасете(они перейдут в следующий раунд):
      </div>
      <div
        style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}
      >
        Выбрано {savedCount}/{countOfFilmsToSave}
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
          cursor: savedCount < countOfFilmsToSave ? "default" : "pointer",
          backgroundColor:
            savedCount < countOfFilmsToSave ? "#f0f0f0" : "#47d37d",
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
          .filter(([key, movie]) => movie.place === placeOfLosingFilm)
          .map(([key, movie]) => (
            <div
              key={key}
              onMouseEnter={() => setHoveredMovieId(Number(key))}
              onMouseLeave={() => setHoveredMovieId(0)}
              onClick={() => handleChooseSavedMovies(Number(key))}
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                cursor:
                  savedCount < countOfFilmsToSave
                    ? "pointer"
                    : savedMovies[Number(key)]
                    ? "pointer"
                    : "default",
                backgroundColor: savedMovies[Number(key)]
                  ? "#47d37d"
                  : hoveredMovieId === Number(key)
                  ? "#cccccc"
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
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ marginBottom: "20px", fontSize: "50px", textAlign: "center" }}
      >
        Раунд завершён!
      </div>
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          justifyContent: "center",
          borderRadius: "5px",
          fontSize: "50px",
          border: "2px solid black",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
          cursor: "pointer",
        }}
        onClick={handleEndSavingMovies}
      >
        Перейти в следующий раунд
      </div>
    </div>
  );
};
