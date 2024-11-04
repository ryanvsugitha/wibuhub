import { Separator } from "@/components/ui/separator";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StarIcon } from "@radix-ui/react-icons";

const AnimeCardLoading = () => {
  return (
    <div className="h-full box-shadow-data">
      <div className="flex flex-row h-40">
        <Skeleton className="w-[120px] h-[156px]"></Skeleton>
        <div className="flex flex-col overflow-hidden flex-grow h-full p-2 gap-1">
          <Skeleton className="h-[28px] w-full"></Skeleton>
          <Skeleton className="h-[16px] w-3/4"></Skeleton>
          <Separator className="my-1" />
          <div className="flex flex-row gap-1">
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div className="flex-grow">
              <Skeleton className="h-[16px] w-full"></Skeleton>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-1 items-center">
                <StarIcon/>
              </div>
              <Skeleton></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCardLoading;
