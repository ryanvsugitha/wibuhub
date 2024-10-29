"use client";

import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  user_name: string;
  user_email: string;
};

type UserFavorite = {
  id: number;
  user_name: string;
  mal_id: string;
};

function TestPage() {
  const currentUser = "ryan_sugitha";

  const [userDetail, setUserDetail] = useState<User>();
  const [userFavorite, setUserFavorite] = useState<UserFavorite[]>([]);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await fetch("/api/users_detail/" + currentUser);
        const data: User = await response.json();
        setUserDetail(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchDetail();

    async function fetchFavorites() {
      try {
        const response = await fetch("/api/users_favorite/" + currentUser);
        const data: UserFavorite[] = await response.json();
        setUserFavorite(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchFavorites();
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p>Username:</p>
        {userDetail ? (
          <p>{userDetail.user_name}</p>
        ) : (
          <Skeleton className="h-4 w-10" />
        )}
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p>Favorite:</p>
        {userFavorite.length != 0 ? (
          <p>{userFavorite.length}</p>
        ) : (
          <Skeleton className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}

export default TestPage;
