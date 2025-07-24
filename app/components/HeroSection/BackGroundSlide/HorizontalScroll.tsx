import { ScrollVelocity } from "~/components/HeroSection/BackGroundSlide/scroll-velocity";
import { backGroundSlideImages } from "~/data/text.en";

const velocity = [3, -3];

function ScrollVelocityBg() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="flex flex-col justify-center items-center gap-5">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {backGroundSlideImages.map((src, index) => (
              <div
                key={index}
                className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
              >
                <img
                  src={src}
                  alt={index.toString()}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
      </div>
    </div>
  );
}

export { ScrollVelocityBg };
