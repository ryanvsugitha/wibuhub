import React from "react";
import AnimeCard from "../components/anime_card/anime_card";

function TopAnime() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 p-3">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </>
  );
}

export default TopAnime;
