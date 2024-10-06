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
    <Link href={"../../anime/43608"}>
      <Card className="hover:bg-violet-100 transition ease-in-out duration-300 h-full">
        <div className="flex flex-row gap-3 p-3 h-full">
          <Image
            className="rounded-sm"
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
// export default function AnimeCard(synopsis: string) {
//   const asas =
//     "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]";

//   const anime_title_english = "This is Anime Title English";
//   const anime_title_japanese = "This is Anime Title Japanese";
//   const studio = "Anime Studio";
//   const rating = 3.71;

//   const genre = ["Horror", "Comedy", "Drama"];

//   return <></>;
// }
