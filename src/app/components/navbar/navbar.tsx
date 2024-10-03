import Image from "next/image";
import Logo from "@/app/assets/wibuhub_logo.svg";
import Link from "next/link";

export default async function NavBar() {
  return (
    <div className="bg-cyan-600 flex flex-row items-center justify-between p-1">
      <div className="flex flex-row items-center gap-3">
        <Link href="../">
          <Image
            className="object-contain"
            src={Logo}
            width={120}
            height={100}
            alt=""
          />
        </Link>
        <div>Seasonal Anime</div>
        <div>Top Anime</div>
      </div>
      <div>
        profile
      </div>
    </div>
  );
}
