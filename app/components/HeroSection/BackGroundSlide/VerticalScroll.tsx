import { ScrollVelocity } from "~/components/HeroSection/BackGroundSlide/scroll-velocity"
import { backGroundSlideImages} from "~/data/text.en";

const velocity = [3, -3]

function ScrollVelocityBg() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-5 py-10">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {backGroundSlideImages.map(({ title, thumbnail }) => (
              <div
                key={title}
                className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
        <ScrollVelocity velocity={5}>You can also use a text!</ScrollVelocity>
      </div>
    </div>
  )
}

export { ScrollVelocityBg }
