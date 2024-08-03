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

interface MovieData {
  [key: number]: Movie;
  nickname: string;
}

export const StatisticScreenStart: React.FC<StatisticScreenStartProps> = ({
  statisticScreenOpened,
  setStatisticScreenOpened,
}) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);
  const [selectedNickname, setSelectedNickname] = useState("Общий рейтинг");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [hoveredNickname, setHoveredNickname] = useState<string>("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNicknameClick = (nick: string) => {
    setSelectedNickname(nick);
    setDropdownOpen(false);
  };

  const fetchDataFromFirestore = async () => {
    const collectionRef = collection(db, "movies");
    try {
      const snapshot = await getDocs(collectionRef);
      const moviesData: MovieData[] = [];
      snapshot.forEach((doc) => {
        moviesData.push(doc.data() as MovieData);
      });

      setMovies(moviesData);
    } catch (e) {
      console.error("Ошибка при получении данных из базы данных: ", e);
    }
  };

  const getFilteredMovies = (
    selectedNickname: string,
    moviesData: MovieData[]
  ) => {
    const filteredData = moviesData.find(
      (data) => data.nickname === selectedNickname
    );
    return filteredData || {};
  };

  const filteredMovies = getFilteredMovies(selectedNickname, movies);

  const convertMoviesObject = (
    movies: Record<number, Movie>
  ): Record<string, Movie> => {
    return Object.entries(movies).reduce<Record<string, Movie>>(
      (acc, [key, movie]) => {
        if (movie.name && movie.img && movie.place) {
          acc[movie.name] = movie;
        }
        return acc;
      },
      {}
    );
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const nicknames = movies.map((item) => item.nickname);
  nicknames.push("Общий рейтинг");

  const sortWithFixedFirst = (array: string[], fixedValue: string) => {
    const [fixed] = array.filter((item) => item === fixedValue);
    const rest = array.filter((item) => item !== fixedValue);
    rest.sort((a, b) => a.localeCompare(b));
    return fixed ? [fixed, ...rest] : rest;
  };

  const sortedNicknames = sortWithFixedFirst(nicknames, "Общий рейтинг");

  useEffect(() => {
    if (movies.length > 0) {
      if (selectedNickname !== "Общий рейтинг") {
        const groupedMovies = convertMoviesObject(filteredMovies);
        const sorted = sortGroupedMovies(groupedMovies);
        console.log("sorted1", sorted);
        setSortedMovies(sorted);
      } else {
        const groupedMovies = groupMoviesByTitle(movies);
        const sorted = sortGroupedMovies(groupedMovies);
        console.log("sorted2", sorted);
        setSortedMovies(sorted);
      }
    }
  }, [movies, filteredMovies]);

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
            width: "83%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            fontSize: "25px",
            border: "1px solid black",
            position: "relative",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "end",
            }}
          >
            Пользовательский рейтинг -
          </div>
          <div style={{ width: "50%" }}>
            <div
              onClick={toggleDropdown}
              style={{
                width: "250px",
                textAlign: "center",
                cursor: "pointer",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {selectedNickname || "Выберите ник"}
              </div>
              <span style={{ marginLeft: "10px" }}>
                {dropdownOpen ? "▲" : "▼"}
              </span>
            </div>
            {dropdownOpen && (
              <div
                style={{
                  width: "240px",
                  border: "1px solid black",
                  backgroundColor: "white",
                  maxHeight: "300px",
                  overflowY: "auto",
                  marginTop: "10px",
                  position: "absolute",
                  top: "100%",
                  zIndex: 1,
                }}
              >
                {sortedNicknames.map((nick, index) => (
                  <div
                    key={index}
                    onClick={() => handleNicknameClick(nick)}
                    onMouseEnter={() => setHoveredNickname(nick)}
                    onMouseLeave={() => setHoveredNickname("")}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ddd",
                      backgroundColor:
                        selectedNickname === nick
                          ? "#cccccc"
                          : hoveredNickname === nick
                          ? "#eeeeee"
                          : "#ffffff",
                      overflow: "hidden",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {nick}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            width: "6%",
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
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
            border: "1px solid black",
          }}
        >
          Место
        </div>
        <div
          style={{
            display: "flex",
            width: "83%",
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
            border: "1px solid black",
          }}
        >
          Фильм
        </div>
        <div
          style={{
            display: "flex",
            width: "6%",
            height: "60px",
            justifyContent: "center",
            alignItems: "center",
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
            {selectedNickname === "Общий рейтинг" ? index + 1 : movie.place}
          </div>
          <div
            style={{
              display: "flex",
              width: "83%",
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
              width: "6%",
              height: "60px",
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
