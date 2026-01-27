import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="font-geist-mono text-light-500 bg-sky-700 px-4 py-2 hover:bg-sky-800 sm:px-8 sm:py-3">
        Welcome to Next.js 👋 Geist Mono Font
      </h1>
      <h1 className="font-geist-sans text-light-500 font-inter bg-sky-700 px-4 py-2 hover:bg-sky-800 sm:px-8 sm:py-3">
        Welcome to Next.js 👋 Geist Sans Font
      </h1>

      <h1 className="font-corinthia bg-sky-700 px-4 py-2 text-3xl font-black text-black hover:bg-sky-800 sm:px-8 sm:py-3">
        Welcome to Next.js 👋 Corinthia Font
      </h1>
    </div>
  );
};

export default Home;
