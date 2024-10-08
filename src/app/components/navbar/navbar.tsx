import Image from "next/image";
import Logo from "@/app/assets/wibuhub_logo.svg";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function NavBar() {
  return (
    <>
      <div className="bg-cyan-600 flex flex-row items-center justify-between p-1 px-5 gap-3 text-base">
        <div className="flex flex-row items-center gap-5 w-full">
          <Link href="../">
            <Image
              className="object-contain"
              src={Logo}
              width={120}
              height={100}
              alt=""
            />
          </Link>
          <Link href="../top_anime">
            <p className="transition-transform duration-300 hover:underline hover:underline-offset-4 hover:-translate-y-1">
              Top Anime
            </p>
          </Link>
          <Link href="../season">
            <p className="transition-transform duration-300 hover:underline hover:underline-offset-4 hover:-translate-y-1">
              Seasonal Anime
            </p>
          </Link>
          {/* <div>
            <Input />
          </div> */}
        </div>
        <div>
          <Link href={"../login"}>Login</Link>
        </div>
      </div>
    </>
  );
}
