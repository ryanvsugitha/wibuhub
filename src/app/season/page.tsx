"use client";

import React from "react";
import { useEffect, useState } from "react";
import { SeasonModel } from "../model/anime_model";
import AnimeCard from "../components/anime_card/anime_card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function Season() {
  const [current_page, set_current_page] = useState(1);

  const [anime_data, setData] = useState<SeasonModel>({
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

      const res = await fetch(
        "https://api.jikan.moe/v4/seasons/now?page=" + current_page
      );

      const fetched_data = await res.json();
      setData(fetched_data);
    }

    fetch_data();
  }, [current_page]);

  function change_page(page_chosen: number) {
    set_current_page(page_chosen);
  }

  return (
    <>
      <div className="flex justify-end p-3 w-full">
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-3">
        {anime_data.data.map((item) => (
          <AnimeCard key={item.mal_id} item={item} />
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
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <p className="text-base">{"Page " + current_page + " of " + anime_data.pagination.last_visible_page}</p>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            if (current_page != anime_data.pagination.last_visible_page) {
              change_page(current_page + 1);
            }
          }}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default Season;
