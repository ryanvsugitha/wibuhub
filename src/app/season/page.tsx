"use client";

import React from "react";
import { useEffect, useState } from "react";
import { SeasonModel } from "../model/anime_model";
import AnimeCard from "../components/anime_card/anime_card";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import AnimeCardLoading from "../components/anime_card/anime_card_loading";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SeasonListModel } from "../model/season_list_model";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

function Season() {
  const [is_first_load, set_first_load] = useState(true);

  const [is_custom_season, set_custom_season] = useState(false);

  const [selected_season, set_selected_season] = useState("");
  const [selected_year, set_selected_year] = useState("");

  const [current_page, set_current_page] = useState(1);
  const [last_page, set_last_page] = useState(1);

  const [is_loaded, set_loaded] = useState(false);

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

  const [season_data, set_season_data] = useState<SeasonListModel>({
    pagination: {
      last_visible_page: 0,
      has_next_page: false,
    },
    data: [],
  });

  const season_now_url =
    "https://api.jikan.moe/v4/seasons/now?page=" + current_page;

  const season_url =
    "https://api.jikan.moe/v4/seasons/" +
    selected_year +
    "/" +
    selected_season +
    "?page=" +
    current_page;

  useEffect(() => {
    async function fetch_data() {
      const res = await fetch("https://api.jikan.moe/v4/seasons");

      const fetched_data = await res.json();
      set_season_data(fetched_data);
    }

    fetch_data();
  });

  useEffect(() => {
    async function fetch_data() {
      const res = await fetch(is_custom_season ? season_url : season_now_url);

      const fetched_data = await res.json();
      setData(fetched_data);
      if (is_first_load) {
        set_last_page(fetched_data.pagination.last_visible_page);
        set_first_load(false);
      }
      set_loaded(true);
    }

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

    set_loaded(false);
    fetch_data();
  }, [current_page, is_custom_season]);

  function change_page(page_chosen: number) {
    set_current_page(page_chosen);
  }

  function change_season(value: string) {
    set_selected_season(value);
  }

  function change_year(value: string) {
    set_selected_year(value);
  }

  function change_to_custom_season() {
    if (selected_season == "" || selected_year == "") {
      toast({
        variant: "destructive",
        title: "Season and/or Year needed!",
        description: "Please select season and/or year!",
      });
    } else {
      set_selected_season(selected_season);
      set_selected_year(selected_year);
      set_custom_season(true);
    }
  }

  const loading_skeleton = [1, 2, 3];

  return (
    <>
      <div className="flex flex-row items-center justify-between p-3 w-full">
        <p className="text-lg font-bold">
          {is_custom_season ? "custom season" : "Current Season"}
        </p>
        <div className="flex flex-row gap-3">
          <Select onValueChange={change_season}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select Season" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="winter">Winter</SelectItem>
              <SelectItem value="spring">Spring</SelectItem>
              <SelectItem value="summer">Summer</SelectItem>
              <SelectItem value="fall">Fall</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={change_year}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {season_data.data.map((item, index) => (
                <SelectItem key={index} value={item.year.toString()}>
                  {item.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant={"outline"} onClick={() => change_to_custom_season()}>
            Go
          </Button>
          <Button variant={"destructive"} onClick={() => {}}>
            Reset
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-3">
        {is_loaded
          ? anime_data.data.map((item, index) => (
              <AnimeCard key={index} item={item} />
            ))
          : loading_skeleton.map((index) => <AnimeCardLoading key={index} />)}
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
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default Season;
