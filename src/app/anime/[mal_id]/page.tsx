"use client";

import Footer from "@/app/components/footer/footer";
import NavBar from "@/app/components/navbar/navbar";
import { AnimeList } from "@/app/model/anime_model";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getCharacterByAnimeID(mal_id: string) {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${mal_id}/characters`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  return response.json();
}

type AnimeDetail = {
  data: AnimeList;
};

export default function AnimeDetail({
  params,
}: {
  params: {
    mal_id: string;
  };
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const [animeData, setAnimeData] = useState<AnimeDetail>();

  useEffect(() => {
    async function fetchAnimeDetail() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.mal_id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const fetchedData: AnimeDetail = await response.json();

      if (fetchedData) {
        setAnimeData(fetchedData);
        setIsLoaded(true);
      }
    }

    fetchAnimeDetail();
  }, []);

  // const animeData = await getAnimeByID(params.mal_id);
  // const characterData = await getCharacterByAnimeID(params.mal_id);

  function addFavorite() {}

  return (
    <div className="flex flex-col gap-3 items-center w-full h-screen">
      <NavBar />
      <div className="flex flex-row flex-grow gap-3 items-start w-full max-w-screen-xl px-5">
        {isLoaded && animeData ? (
          <>
            <Image
              className="object-contain"
              src={animeData.data.images.webp.image_url}
              width={200}
              height={500}
              alt=""
            />
            <div className="flex-grow">
              <div className="flex flex-col gap-3 p-3">
                {/* Title */}
                <div>
                  <p className="font-bold text-lg">
                    {animeData.data.title_japanese}
                  </p>
                  <p className="">
                    {animeData.data.title_english +
                      " / " +
                      animeData.data.title_synonyms}
                  </p>
                </div>

                <Separator />

                <div className="flex flex-row">
                  <Button size={"sm"} variant={"outline"} onClick={addFavorite}>
                    <Heart className="text-red-600 mr-2" fill="white" />
                    Add to favorite
                  </Button>
                </div>

                {/* Synopsis */}
                <div className="flex flex-col gap-1">
                  <p className="text-base font-bold">Synopsis</p>
                  <Separator />
                  <p>{animeData.data.synopsis}</p>
                </div>

                {/* Rating */}
                <div className="divide-y divide-solid divide-black">
                  <p className="text-base font-bold">Synopsis</p>
                  <p>{animeData.data.synopsis}</p>
                </div>

                {/* Character */}
                {/* <div className="divide-y divide-solid divide-black">
                <p className="text-lg font-bold">Characters</p>
                <div className="grid">
                  {characterData.data.map((char: any) => (
                    <div key={char}>{char.character.name}</div>
                  ))}
                </div>
              </div> */}
              </div>
            </div>
          </>
        ) : (
          <Skeleton className="w" />
        )}
      </div>
      <Footer />
    </div>
  );
}
