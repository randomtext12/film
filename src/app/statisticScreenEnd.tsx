import { useEffect, useState } from "react";
import { Movie } from "./movies";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface StatisticScreenEndProps {
  passedMoviesFromPrevPhase?: Record<number, Movie>;
  nickname: string;
  saveResults: boolean;
}

export const getAveragePlace = (place: string): number => {
  if (!place) return 0;
  const parts = place.split("-").map(Number);
  if (parts.length === 1) {
    return parts[0];
  } else if (parts.length === 2) {
    return (parts[0] + parts[1]) / 2;
  }
  return 0;
};

export const groupMoviesByTitle = (
  movies: Record<number, Movie>[]
): Record<string, Movie> => {
  const movieMap: Record<
    string,
    { totalPlace: number; count: number; movie: Movie }
  > = {};

  movies.forEach((movieObj) => {
    for (const [key, movie] of Object.entries(movieObj)) {
      const avgPlace = getAveragePlace(movie.place);

      if (!movieMap[movie.name] && avgPlace > 0) {
        movieMap[movie.name] = { totalPlace: avgPlace, count: 1, movie };
      } else if (avgPlace > 0) {
        movieMap[movie.name].totalPlace += avgPlace;
        movieMap[movie.name].count += 1;
      }
    }
  });

  const groupedMovies: Record<string, Movie> = {};
  for (const [name, data] of Object.entries(movieMap)) {
    const avgPlace = data.totalPlace / data.count;
    groupedMovies[name] = {
      ...data.movie,
      place: avgPlace.toFixed(2).toString(),
    };
  }

  return groupedMovies;
};

export const sortGroupedMovies = (
  groupedMovies: Record<string, Movie>
): Movie[] => {
  return Object.values(groupedMovies).sort(
    (a, b) => getAveragePlace(a.place) - getAveragePlace(b.place)
  );
};

export const StatisticScreenEnd: React.FC<StatisticScreenEndProps> = ({
  passedMoviesFromPrevPhase,
  nickname,
  saveResults,
}) => {
  const [movies, setMovies] = useState<Record<number, Movie>[]>([]);
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);

  const addDataToFirestore = async () => {
    if (saveResults) {
      if (
        !passedMoviesFromPrevPhase ||
        Object.keys(passedMoviesFromPrevPhase).length === 0
      ) {
        console.log("Нет данных для добавления");
        return;
      }

      const collectionRef = collection(db, "movies");

      try {
        // const snapshot = await getDocs(
        //   query(collectionRef, where("nickname", "==", nickname))
        // );
        // if (!snapshot.empty) {
        //   console.log("Объекты с этим никнеймом уже существуют в базе данных");
        //   return;
        // }

        await addDoc(collectionRef, { ...passedMoviesFromPrevPhase, nickname });
        console.log("Объект добавлен в базу данных");
      } catch (e) {
        console.error("Ошибка при добавлении объекта в базу данных: ", e);
      }
    }
  };

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

  useEffect(() => {
    fetchDataFromFirestore();
    addDataToFirestore();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const groupedMovies = groupMoviesByTitle(movies);
      const sorted = sortGroupedMovies(groupedMovies);
      setSortedMovies(sorted);
    }
  }, [movies]);

  return (
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
          paddingBottom: "5px",
          paddingTop: "5px",
        }}
      >
        Пользовательский рейтинг
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
              height: "60px",
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
              height: "60px",
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
              height: "60px",
              justifyContent: "center",
              fontSize: "25px",
              border: "1px solid black",
            }}
          />
        </div>
      ))}
    </div>
  );
};
