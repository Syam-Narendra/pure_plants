export default function HomePageMainImages() {
  const images = ["/plants/1.webp", "/plants/2.jpeg", "/plants/3.jpg"];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 p-8">
          {images.map((url, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-100"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={url}
                  alt="Model in flowing black fabric with dramatic pose"
                  className="absolute inset-0 h-full w-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "0% 50%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center lg:mt-12">
          <h1 className="text-2xl font-light tracking-wider text-white md:text-3xl lg:text-4xl">
            NATURE’S COLLECTION
          </h1>
          <p className="mt-2 text-sm text-gray-400 md:text-base">
            A Curated Selection of Lush, Living Plants
          </p>
        </div>
      </div>
    </div>
  );
}
