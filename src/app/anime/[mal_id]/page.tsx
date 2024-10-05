import NavBar from "@/app/components/navbar/navbar";
import Image from "next/image";

async function getAnimeByID(mal_id: string) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`, {
    method: "GET",
    cache: "no-store",
  });

  return response.json();
}

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

export default async function AnimeDetail({
  params,
}: {
  params: {
    mal_id: string;
  };
}) {
  const animeData = await getAnimeByID(params.mal_id);
  const characterData = await getCharacterByAnimeID(params.mal_id);

  return (
    <>
      <div className="flex flex-row gap-3 items-start">
        <Image
          className="object-contain"
          src={animeData.data.images.webp.image_url}
          width={200}
          height={500}
          alt=""
        />
        <div className="flex-grow bg-slate-400">
          <div className="flex flex-col gap-3 p-3">
            {/* Title */}
            <div>
              <p className="text-3xl font-bold">{animeData.data.title}</p>
              <p className="text-2xl font-thin">
                {animeData.data.title_english}
              </p>
            </div>

            {/* Synopsis */}
            <div className="divide-y divide-solid divide-black">
              <p className="text-lg font-bold">Synopsis</p>
              <p>{animeData.data.synopsis}</p>
            </div>

            {/* Rating */}
            <div className="divide-y divide-solid divide-black">
              <p className="text-lg font-bold">Synopsis</p>
              <p>{animeData.data.synopsis}</p>
            </div>

            {/* Character */}
            <div className="divide-y divide-solid divide-black">
              <p className="text-lg font-bold">Characters</p>
              <div className="grid">
                {characterData.data.map((char: any) => (
                  <div>{char.character.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
