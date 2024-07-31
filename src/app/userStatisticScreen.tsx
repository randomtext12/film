import React, { useState } from "react";
import { Movie } from "./movies";
import { StatisticScreenEnd } from "./statisticScreenEnd";

interface UserStatisticScreenProps {
  passedMoviesFromPrevPhase?: Record<number, Movie>;
  nickname: string;
  saveResults: boolean;
}

export const UserStatisticScreen: React.FC<UserStatisticScreenProps> = ({
  passedMoviesFromPrevPhase,
  nickname,
  saveResults,
}) => {
  const [availableMovies, setAvailableMovies] = useState<Record<number, Movie>>(
    { ...passedMoviesFromPrevPhase }
  );

  const sortedMovies = Object.entries(availableMovies).sort(
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

  return (
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
      <StatisticScreenEnd
        saveResults={saveResults}
        nickname={nickname}
        passedMoviesFromPrevPhase={availableMovies}
      />
    </div>
  );
};
