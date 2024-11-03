import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimeList } from "@/app/model/anime_model";
import { StarIcon } from "@radix-ui/react-icons";

interface TopAnimeCardProps {
  item: AnimeList;
  index: number;
}

const TopAnimeCard: React.FC<TopAnimeCardProps> = ({ item, index }) => {
  return (
    <Link href={"../../anime/" + item.mal_id}>
      <div className="hover:bg-violet-100 transition ease-in-out duration-300 h-full box-shadow-data">
        <div className="flex flex-row items-center h-full">
          <p className="text-2xl font-bold px-6">{index + 1}</p>
          <Image
            className="rounded-lg"
            src={item.images.webp.image_url}
            height={0}
            width={80}
            alt=""
          />
          <div className="flex flex-col overflow-hidden flex-grow h-full gap-1 p-2">
            <p className="font-bold text-ellipsis truncate text-lg">
              {item.title_english}
            </p>
            <p className="text-gray-500 text-ellipsis truncate">
              {item.title_japanese}
            </p>
            <Separator className="my-1" />
            <div className="flex flex-row gap-1">
              Genre(s):
              {item.genres.map((data, index) => (
                <div key={index} className="border rounded-sm px-1">
                  {data.name}
                </div>
              ))}
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-1">
                Studio(s):
                {item.studios.map((data, index) => (
                  <p key={index} className="border rounded-sm px-1">
                    {data.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 p-2 text-base">
            <StarIcon />
            {item.score ? item.score : "N/A"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopAnimeCard;
