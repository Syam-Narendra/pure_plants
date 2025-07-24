import { InfiniteSlider } from "~/components/TrustedSection/infinite-slider";
import { ProgressiveBlur } from "~/components/TrustedSection/progressive-blur";
import { verticalScrollSlider } from "~/data/text.en";

export function CompainesSlider() {
  return (
    <>
      <main className="text-white dark">
        <section className="bg-black pb-2">
          <div className="group relative m-auto max-w-7xl px-4 sm:px-6 overflow-hidden">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <span className=" text-indigo-200">We Stand For{"  "}</span>
              </div>

              <div className="relative py-6 md:w-[calc(100%-11rem)] w-full overflow-hidden">
                <InfiniteSlider durationOnHover={20} duration={35} gap={112}>
                  {verticalScrollSlider.map((info, index) => (
                    <div key={index.toString()} className="flex">
                      <h1 className="font-satoshi text-[25px] font-bold text-white">
                        {info.name}
                      </h1>
                    </div>
                  ))}
                </InfiniteSlider>

                <ProgressiveBlur className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 bg-gradient-to-r from-black to-transparent" />

                <ProgressiveBlur className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 bg-gradient-to-l from-black to-transparent" />

                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-20 z-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-20 z-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
