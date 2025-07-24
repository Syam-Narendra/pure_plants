interface verticalScrollImagesI {
  className: string;
  images: {
    src: string;
    alt: string;
    imgClassName: string;
  }[];
}


export const verticalScrollImages: verticalScrollImagesI[] = [
  {
    className: "grid gap-2 col-span-4",
    images: [
      {
        src: "./verticalImages/verticalOne/1.jpg",
        alt: "Sunlight through dense forest canopy",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalOne/2.jpg",
        alt: "Blooming lavender field at sunset",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalOne/3.jpg",
        alt: "Lush green tropical leaves close-up",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalOne/4.jpg",
        alt: "Misty mountain valley covered with pine trees",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalOne/5.jpg",
        alt: "Wildflowers blooming on a hillside",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
    ],
  },
  {
    className:
      "sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3",
    images: [
      {
        src: "./verticalImages/verticalTwo/1.jpg",
        alt: "Dew on green foliage in morning light",
        imgClassName:
          "transition-all duration-300 w-full h-full align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalTwo/2.jpg",
        alt: "Path through dense forest trees",
        imgClassName:
          "transition-all duration-300 w-full h-full align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalTwo/3.jpg",
        alt: "Close-up of succulent plant leaves",
        imgClassName:
          "transition-all duration-300 w-full h-full align-bottom object-cover rounded-md",
      },
    ],
  },
  {
    className: "grid gap-2 col-span-4",
    images: [
      {
        src: "./verticalImages/verticalThree/1.jpg",
        alt: "Vibrant tropical plant with red-tinted leaves",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalThree/2.jpg",
        alt: "Potted plants arranged in a greenhouse",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalThree/3.jpg",
        alt: "Fresh green leaves with sunlight peeking through",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalThree/4.jpg",
        alt: "Landscape view of a serene garden with trimmed shrubs",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
      {
        src: "./verticalImages/verticalThree/5.jpg",
        alt: "Young saplings growing in nursery rows",
        imgClassName:
          "transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md",
      },
    ],
  },
];
