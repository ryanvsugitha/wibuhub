import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimeList } from "@/app/model/anime_model";
import { StarIcon } from "@radix-ui/react-icons";

interface AnimeCardProps {
  item: AnimeList;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ item }) => {
  return (
    <Link href={"../../anime/" + item.mal_id}>
      <div className="transition ease-in-out duration-300 h-40 box-shadow-data">
        <div className="flex flex-row h-full">
          <Image
            className="rounded-s-[10px]"
            src={item.images.webp.image_url}
            height={160}
            width={120}
            style={{ objectFit: "cover", minWidth: "120px" }}
            alt=""
          />
          <div className="flex flex-col overflow-hidden h-full p-2">
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
                  <StarIcon />
                  <p className="text-center">
                    {item.score ? item.score : "N/A"}
                  </p>
                </div>
                <div className="flex flex-row">
                  {item.studios.map((data, index) => (
                    <p key={index} className="border rounded-sm px-1">
                      {data.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
