const VideoPage = () => (
  <main className="relative w-full h-screen">
    <video
      src="https://video-previews.elements.envatousercontent.com/h264-video-previews/34b4f82d-339a-4c07-ba47-e8a87ded3de1/2733283.mp4"
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
