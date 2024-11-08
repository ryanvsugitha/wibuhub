"use client";

import React, { useEffect, useState } from "react";
import { AnimeModel } from "../model/anime_model";
import TopAnimeCard from "../components/anime_card/top_anime_card";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import NavBar from "../components/navbar/navbar";
import TopAnimeCardLoading from "../components/anime_card/top_anime_card_loading";

function TopAnime() {
  const [is_first_load, set_first_load] = useState(true);
  const [current_page, set_current_page] = useState(1);
  const [last_page, set_last_page] = useState(1);
  const [is_loaded, set_loaded] = useState(false);

  const [anime_data, setData] = useState<AnimeModel>({
    pagination: {
      last_visible_page: 0,
      has_next_page: false,
      current_page: 0,
      items: {
        count: 0,
        total: 0,
        per_page: 0,
      },
    },
    data: [],
  });

  useEffect(() => {
    async function fetch_data() {
      const res = await fetch(
        "https://api.jikan.moe/v4/top/anime?page=" + current_page,
        { cache: "no-cache" }
      );
      const fetched_data: AnimeModel = await res.json();
      if (is_first_load && fetched_data) {
        set_last_page(fetched_data.pagination.last_visible_page);
        set_first_load(false);
      }
      setData(fetched_data);
      set_loaded(true);
    }

    if (is_first_load) {
      setData({
        pagination: {
          last_visible_page: 0,
          has_next_page: false,
          current_page: 0,
          items: {
            count: 0,
            total: 0,
            per_page: 0,
          },
        },
        data: [],
      });
    }

    set_loaded(false);
    fetch_data();
  }, [current_page]);

  function change_page(page_chosen: number) {
    set_current_page(page_chosen);
  }

  const loading_skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <NavBar />
      <div className="flex flex-col gap-3 w-full max-w-screen-xl px-5">
        <p className="text-2xl font-bold w-full">Top Rated Anime</p>
        <div className="flex flex-col justify-center gap-5">
          {is_loaded && anime_data
            ? anime_data.data.map((item, index) => (
                <TopAnimeCard
                  key={index}
                  item={item}
                  index={
                    (current_page - 1) * anime_data.pagination.items.per_page +
                    index
                  }
                />
              ))
            : loading_skeleton.map((data, index) => (
                <TopAnimeCardLoading key={data} index={index} />
              ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-5 w-full">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (current_page != 1) {
                change_page(current_page - 1);
              }
            }}
            disabled={current_page == 1}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <p className="text-base">
            {"Page " + current_page + " of " + last_page}
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (current_page != last_page) {
                change_page(current_page + 1);
              }
            }}
            disabled={current_page == last_page}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TopAnime;
