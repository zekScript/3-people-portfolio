import FadeInContent from "./anims/fadeinContent";

const Video: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {" "}
      <div className="absolute z-30 flex h-full w-full items-center justify-center overflow-hidden">
        {/* <FadeInContent carouselItems={carouselItems.carouselItems} /> */}
        <FadeInContent />
      </div>
      {/* Background video with pointer-events: none to avoid blocking interactions */}
      <div className="absolute z-[1] h-full w-full object-cover opacity-30">
        <video
          className="absolute z-[-1] h-full w-full object-cover"
          playsInline
          autoPlay
          muted
          loop
          style={{ pointerEvents: "none" }}
        >
          <source src="backgroundVid.mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;
