import { ReactLenis } from "lenis/react";
import {
  heroStickyCardHeading,
  heroStickyCardText,
  verticalScrollImages
} from "~/data/text.en";

const VerticalScroll = () => {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          <section className="text-white  h-fit  w-full bg-black  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl p-10 font-semibold text-center tracking-tight leading-snug sm:leading-[120%]">
              {heroStickyCardHeading}
              <br />
              {heroStickyCardText}
            </h1>
          </section>
        </div>

        <section className="text-white w-full bg-slate-950">
          <div className="grid grid-cols-12 gap-2">
            {verticalScrollImages.map((verticalGrids, index) => (
              <div key={index.toString()} className={verticalGrids.className}>
                {verticalGrids.images.map((each, index) => (
                  <figure key={index.toString()} className="w-full h-full">
                    <img
                      src={each.src}
                      alt={each.alt}
                      className={each.imgClassName}
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    </ReactLenis>
  );
};

VerticalScroll.displayName = "VerticalScroll";

export default VerticalScroll;
