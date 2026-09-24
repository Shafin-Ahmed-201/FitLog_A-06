import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <main className="min-h-screen bg-[#0d0f0b] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-[#c2f800]">
            404
          </h1>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Page Not Found
          </h2>

          <p className="mt-5 text-gray-400 text-sm md:text-base leading-7">
            The page you are looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track.
          </p>

          <Link
            href="/"
            className="
            inline-flex
            items-center
            gap-2
            mt-8
            rounded-full
            bg-[#c2f800]
            px-7
            py-3
            text-sm
            font-bold
            text-black
            transition
            duration-200
            hover:bg-[#d1ff33]
            hover:scale-105
          "
          >
            <span>←</span>
            Back to Home
          </Link>

          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gray-700" />
            <span className="h-2 w-2 rounded-full bg-[#c2f800]" />
            <span className="h-px w-16 bg-gray-700" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notfound;
