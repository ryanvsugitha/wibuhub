import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-1 p-2 bg-gray-300 text-sm mt-5">
      <p>
        Created using{" "}
        <a
          href="https://nextjs.org/"
          className="underline underline-offset-2"
          target="_blank"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://ui.shadcn.com/"
          className="underline underline-offset-2"
          target="_blank"
        >
          shadcn/ui
        </a>
        , and{" "}
        <a
          href="https://jikan.moe/"
          className="underline underline-offset-2"
          target="_blank"
        >
          Jikan API
        </a>
      </p>
      <p>
        Created by{" "}
        <a
          href="https://github.com/ryanvsugitha"
          className="underline underline-offset-2"
          target="_blank"
        >
          github/ryanvsugitha
        </a>
      </p>
    </div>
  );
}

export default Footer;
