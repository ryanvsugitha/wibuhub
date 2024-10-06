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
} from "@/components/ui/pagination";

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

  const [current_page, set_current_page] = useState(1);
  useEffect(() => {

  }, [])


  function change_page(page_chosen: number){
    set_current_page(page_chosen)
  }

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
            <PaginationPrevious href="" onClick={() => {if(current_page != 1){
              change_page(current_page-1)
            }}}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {anime_data.pagination.current_page}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              {anime_data.pagination.last_visible_page}
            </PaginationLink>
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
