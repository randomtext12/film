// const [savedMovies, setSavedMovies] = useState<Record<number, Movie>>({});
// const [savingEnded, setSavingEnded] = useState<boolean>(false);
// const [savedCount, setSavedCount] = useState<number>(0);

// const handleChooseSavedMovies = (key: number) => {
//   if (savedCount < 6) {
//     if (savedMovies[key]?.name === passedMovies[key]?.name) {
//       setSavedMovies((prev) => {
//         const updatedLosers = { ...prev };
//         delete updatedLosers[key];
//         return updatedLosers;
//       });
//       setSavedCount((prev) => prev - 1);
//     } else {
//       const movie = passedMovies[key];
//       setSavedMovies((prev) => ({ ...prev, [key]: movie }));
//       setSavedCount((prev) => prev + 1);
//     }
//   } else {
//     if (savedMovies[key]?.name === passedMovies[key]?.name) {
//       setSavedMovies((prev) => {
//         const updatedLosers = { ...prev };
//         delete updatedLosers[key];
//         return updatedLosers;
//       });
//       setSavedCount((prev) => prev - 1);
//     }
//   }
// };

// const handleEndSavingMovies = () => {
//   if (savedCount === 6) {
//     const keys = Object.keys(savedMovies).map(Number);
//     for (const key of keys) {
//       if (passedMovies[key]) {
//         passedMovies[key].place = "";
//       }
//     }
//     setSavingEnded(true);
//   }
// };

// <div
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//     maxWidth: "100%",
//     padding: "20px",
//     alignItems: "center",
//     boxSizing: "border-box",
//   }}
// >
//   <div style={{ marginBottom: "20px", fontSize: "18px", textAlign: "center" }}>
//     Раунд завершён! Вам нужно выбрать 6 фильмов, которые вы спасете(они перейдут
//     в следующий раунд):
//   </div>
//   <div
//     style={{
//       display: "flex",
//       width: "200px",
//       marginBottom: "20px",
//       fontSize: "18px",
//       border: "1px solid black",
//       justifyContent: "center",
//       borderRadius: "5px",
//       cursor: savedCount < 6 ? "default" : "pointer",
//       backgroundColor: savedCount < 6 ? "#f0f0f0" : "#47d37d",
//     }}
//     onClick={handleEndSavingMovies}
//   >
//     Завершить спасение
//   </div>
//   <div
//     style={{
//       display: "grid",
//       width: "100%",
//       gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
//       gap: "5px",
//       padding: "10px",
//     }}
//   >
//     {Object.entries(passedMovies)
//       .filter(([key, movie]) => movie.place === "181-232")
//       .map(([key, movie]) => (
//         <div
//           key={key}
//           onClick={() => handleChooseSavedMovies(Number(key))}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             textAlign: "center",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor:
//               savedCount < 6
//                 ? "pointer"
//                 : savedMovies[Number(key)]
//                 ? "pointer"
//                 : "default",
//             backgroundColor: savedMovies[Number(key)] ? "#47d37d" : "#f0f0f0",
//             border: "2px solid black",
//             borderRadius: "5px",
//             fontSize: "16px",
//           }}
//         >
//           <img
//             src={movie?.img}
//             alt={movie?.name}
//             style={{ width: "90%", padding: "5px" }}
//           />
//           {movie?.name}
//         </div>
//       ))}
//   </div>
// </div>;
