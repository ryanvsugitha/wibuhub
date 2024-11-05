import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { StarIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";

const TopAnimeCardLoading = ({ index }: { index: number }) => {
  return (
    <div className="transition ease-in-out duration-300 h-full box-shadow-data">
      <div className="flex flex-row items-center h-full">
        <p className="text-2xl font-bold px-6">{index + 1}</p>
        <Skeleton className="w-10 h-10" />
        <div className="flex flex-col overflow-hidden flex-grow h-full gap-1">
          <p className="font-bold text-ellipsis truncate text-lg">123</p>
          <p className="text-gray-500 text-ellipsis truncate">123</p>
          <Separator className="my-1" />
          <div className="flex flex-row gap-1">
            Genre(s):
            <div className="border rounded-sm px-1">123</div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-1">
              Studio(s):
              <p className="border rounded-sm px-1">123</p>
              <p className="border rounded-sm px-1">123</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1 p-2 text-base">
          <StarIcon />
          123
        </div>
      </div>
    </div>
  );
};

export default TopAnimeCardLoading;
