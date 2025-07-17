import type { MetaFunction } from "@remix-run/node";
import { NavBar } from "~/components/Navbar";

export const meta: MetaFunction = () => [{ title: "Not Found" }];

const NotFound = () => (
  <div className="relative w-screen h-screen overflow-x-hidden bg-black font-sans">
    <NavBar isHome={true} />
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/404-image.png')",
      }}
    />

    <div className="absolute inset-0 bg-black/20" />

    <main className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
      <div className="text-sm font-light tracking-[0.4em] mb-4 opacity-80">
        ERROR
      </div>

      <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none mb-6">
        404
      </h1>

      <div className="text-sm font-light tracking-[0.3em] opacity-80 mb-16">
        <div>PAGE NOT FOUND</div>
      </div>
    </main>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
      <a
        href="/"
        className="text-white text-sm font-light tracking-[0.3em] hover:opacity-70 transition-opacity border-b border-white/30 pb-1"
      >
        HOME
      </a>
    </div>
  </div>
);

export default NotFound;
