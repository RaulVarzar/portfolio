import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const gallery = Object.values(
  import.meta.glob("@photos/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);

let totalWidth = 0;
const gallerySize = gallery.forEach((el) => {
  const img = new Image();
  img.src = el;
  return (totalWidth += Math.floor((384 * img.width) / img.height));
});
console.log("TOTAL WIDTH...", totalWidth);

export const Carousel = () => {
  const [progress, setProgress] = useState(0);
  const [slider, setSlider] = useState(0);
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const MAX = ((totalWidth - width) / totalWidth) * 100;

  // console.log(width);
  console.log("PROGRESS...", progress);
  console.log("PROGRESS...", slider, "%");

  function handleProgress(e) {
    setProgress((e.target.value / 100) * totalWidth);
    setSlider(e.target.value);
  }

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden bg-emerald-950">
      <motion.div
        ref={ref}
        animate={{
          x: -progress,
          transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
        }}
        className="flex flex-row "
      >
        {gallery.map((photo, i) => (
          <>
            <img
              src={photo}
              alt="gallery-pic"
              className="object-cover w-auto h-96"
            />
          </>
        ))}
      </motion.div>
      <input
        type="range"
        min={0}
        max={Math.floor(MAX)}
        value={slider}
        className="bg-red-900 range"
        onChange={(e) => handleProgress(e)}
      />
      {/* <button
        className={"btn " + (progress >= totalWidth - width && " btn-disabled")}
        onClick={() => handleProgress()}
      >
        NEXT
      </button> */}
    </div>
  );
};
