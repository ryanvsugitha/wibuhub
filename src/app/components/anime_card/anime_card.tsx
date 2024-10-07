import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingStar from "../rating_star/rating_star";
import { AnimeList } from "@/app/model/anime_model";

interface AnimeCardProps {
  item: AnimeList;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ item }) => {
  return (
    <Link href={"../../anime/" + item.mal_id}>
      <Card className="hover:bg-violet-100 transition ease-in-out duration-300 h-full">
        <div className="flex flex-row gap-3 h-full">
          <Image
            className="rounded-lg"
            src={item.images.webp.image_url}
            height={0}
            width={120}
            alt=""
          />
          <div className="flex flex-col overflow-hidden flex-grow h-full">
            <p className="font-bold text-ellipsis truncate text-lg">
              {item.title_english}
            </p>
            <p className="text-gray-500 text-ellipsis truncate">
              {item.title_japanese}
            </p>
            <Separator className="my-1" />
            <div className="flex flex-row gap-1">
              {item.genres.map((data, index) => (
                <div key={index} className="border rounded-sm px-1">
                  {data.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex-grow">
                <p className="text-ellipsis line-clamp-3">{item.synopsis}</p>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-1 items-center">
                  <RatingStar />
                  <p className="text-center">{item.score ? item.score: "N/A"}</p>
                </div>
                <p>
                  {item.studios.map((data, index) => (
                    <div key={index} className="">
                      {data.name}
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default AnimeCard;