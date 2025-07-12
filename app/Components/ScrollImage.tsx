// ~/Components/ScrollImage.tsx
import { useEffect, useState } from "react";

const ScrollImage = () => {
  const [rotation, setRotation] = useState(80); // Initial rotation angle (80 degrees)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollFraction = scrollTop / (documentHeight - windowHeight);

      // Map scroll progress to rotation angle (80deg to 0deg)
      const newRotation = 80 * (1 - scrollFraction);
      setRotation(Math.max(0, Math.min(80, newRotation))); // Clamp between 0 and 80
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        perspective: "1000px",
      }}
    >
      <img
        src="https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.jpg?s=2048x2048&w=is&k=20&c=MWC1kpj44knI78injFyQOW7wGnTixFQbzUuTy7NmDVo="
        alt="Square"
        className="w-full h-[75%] max-w-[90%] sm:max-w-[80%] md:max-w-[600px] rounded-lg object-cover shadow-md px-4 sm:px-8"
        style={{
          borderRadius: "0.5rem",
          objectFit: "cover",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          transform: `rotateY(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default ScrollImage;