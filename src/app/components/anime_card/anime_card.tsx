import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Divider } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AnimeCard() {
  const synopsis =
    "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]";

  const anime_title_english = "This is Anime Title English";
  const anime_title_japanese = "This is Anime Title Japanese";
  const studio = "Anime Studio";

  return (
    <>
      <Link href={"../../anime/43608"}>
        <Card className="hover:bg-slate-200 transition ease-in-out duration-300">
          <div className="flex flex-row gap-3 p-3">
            <Image
              className="rounded-sm"
              src={"https://cdn.myanimelist.net/images/anime/1160/122627.webp"}
              height={120}
              width={120}
              alt=""
            />
            <div className="flex flex-col flex-grow overflow-hidden">
              <p className="font-bold text-ellipsis truncate text-lg">
                {anime_title_english}
              </p>
              <p className="text-gray-500 text-ellipsis truncate">
                {anime_title_japanese}
              </p>
              <Separator className="my-1" />
              <p className="text-ellipsis line-clamp-3">{synopsis}</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4 text-yellow-200 align-middle"
                    stroke="gray"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p className="text-center">3.76</p>
                </div>
                  
                <div>123</div>
                <div>123</div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
}
