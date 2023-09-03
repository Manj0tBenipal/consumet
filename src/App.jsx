import { useEffect, useState } from "react";
import "./App.css";
import { ANIME } from "@consumet/extensions";
import ReactPlayer from "react-player";
function App() {
  const gogoAnime = new ANIME.Gogoanime();
  const [results, setResults] = useState([]);
  useEffect(() => {
    gogoAnime
      .fetchAnimeInfo("kimetsu-no-yaiba")
      .then((data) => setResults(data));
  }, []);
console.log(results)
  return (
    <>
      <iframe  src="https://awish.pro/e/6ll6go605d7o" frameborder="0" allowFullScreen></iframe>
    </>
  );
}

export default App;
