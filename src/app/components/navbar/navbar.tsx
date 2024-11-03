import Image from "next/image";
import Logo from "@/app/assets/wibuhub_logo.svg";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-gray-300 flex justify-center items-center sticky top-0 w-full z-50">
      <div className="max-w-screen-2xl flex flex-grow flex-row items-center justify-between px-5">
        <div className="flex flex-row items-center gap-5">
          <Link href="/">
            <Image
              className="object-contain"
              src={Logo}
              width={120}
              height={100}
              alt=""
            />
          </Link>
          <Link href="/top_anime">
            <p className="transition-transform duration-300 hover:underline hover:underline-offset-4 hover:-translate-y-1 font-bold">
              Top Anime
            </p>
          </Link>
          <Link href="/season">
            <p className="transition-transform duration-300 hover:underline hover:underline-offset-4 hover:-translate-y-1 font-bold">
              Seasonal Anime
            </p>
          </Link>
          {/* <div>
              <Input />
            </div> */}
        </div>
        <div>
          <Link href={"../login"}>
            <p className="transition-transform duration-300 hover:underline hover:underline-offset-4 hover:-translate-y-1 font-bold">
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
