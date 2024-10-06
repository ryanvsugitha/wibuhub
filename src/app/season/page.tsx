"use client";

import React from "react";
import { useEffect, useState } from "react";
import { SeasonModel } from "../model/anime_model";
import AnimeCard from "../components/anime_card/anime_card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


function Season() {
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
      const res = await fetch("https://api.jikan.moe/v4/seasons/now");
      const anime_data = await res.json();
      setData(anime_data);
    }

    fetch_data();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-3">
        {anime_data.data.map((item) => (
          <AnimeCard key={item.mal_id} item={item} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default Season;
