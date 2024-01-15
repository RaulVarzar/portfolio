import React from "react";
import { motion, useAnimation } from "framer-motion";
import { wrap } from "popmotion";

const gallery = Object.values(
  import.meta.glob("@photos/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);
export const Carousel = () => {
  return (
    <div className="p-4 mx-auto space-x-4 bg-opacity-50 rounded-md 2xl:w-11/12 carousel carousel-center bg-neutral">
      {gallery.map((photo) => (
        <div key={photo} className="w-auto carousel-item h-96">
          <img src={photo} className="object-cover rounded-md" />
        </div>
      ))}
    </div>
  );
};
