import { videoUrl } from "~/data/text.en";

const VideoPage = () => (
  <main className="relative w-full h-screen">
    <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

    <video
      src={videoUrl}
      loop
      preload="auto"
      muted={true}
      playsInline
      autoPlay
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        cursor: "auto",
        borderRadius: "0px",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <track
        kind="captions"
        src="/sample.vtt"
        srcLang="en"
        label="English Captions"
        default
      />
    </video>
  </main>
);

export default VideoPage;
