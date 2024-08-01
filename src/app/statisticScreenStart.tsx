import { collection, getDocs } from "firebase/firestore";
import { Movie } from "./movies";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { groupMoviesByTitle, sortGroupedMovies } from "./statisticScreenEnd";
import { MainScreen } from "./mainScreen";

interface StatisticScreenStartProps {
  statisticScreenOpened: boolean;
  setStatisticScreenOpened: (opened: boolean) => void;
}

export const StatisticScreenStart: React.FC<StatisticScreenStartProps> = ({
  statisticScreenOpened,
  setStatisticScreenOpened,
}) => {
  const [movies, setMovies] = useState<Record<number, Movie>[]>([]);
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);

  const fetchDataFromFirestore = async () => {
    const collectionRef = collection(db, "movies");
    try {
      const snapshot = await getDocs(collectionRef);
      const moviesData: Record<number, Movie>[] = [];
      snapshot.forEach((doc) => {
        moviesData.push(doc.data() as Record<number, Movie>);
      });

      setMovies(moviesData);
    } catch (e) {
      console.error("Ошибка при получении данных из базы данных: ", e);
    }
  };

  console.log("moviesData", movies);
  console.log("sorted", sortedMovies);

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const groupedMovies = groupMoviesByTitle(movies);
      const sorted = sortGroupedMovies(groupedMovies);
      setSortedMovies(sorted);
    }
  }, [movies]);

  return statisticScreenOpened ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          onClick={() => {
            setStatisticScreenOpened(false);
          }}
          style={{
            width: "11%",
            display: "flex",
            backgroundColor: "#f0f0f0",
            border: "1px solid black",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Вернуться назад
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            fontSize: "25px",
            border: "1px solid black",
          }}
        >
          Пользовательский рейтинг
        </div>
        <div
          style={{
            width: "9%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            fontSize: "25px",
            border: "1px solid black",
          }}
        />
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
      {sortedMovies.map((movie, index) => (
        <div
          key={index}
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
              height: "80px",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
              border: "1px solid black",
            }}
          >
            {index + 1}
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              height: "80px",
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
              height: "80px",
              justifyContent: "center",
              fontSize: "25px",
              border: "1px solid black",
            }}
          />
        </div>
      ))}
    </div>
  ) : (
    <MainScreen />
  );
};
