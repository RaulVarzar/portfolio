"use client";

import React from "react";
import { motion } from "framer-motion";

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  rows = 4,
  isTextarea = false,
  variants,
  initial = "hidden",
  animate,
  custom = 0,
}) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      custom={custom}
      className="relative"
    >
      <div className="relative flex flex-col w-full px-0 py-1">
        <label className="absolute px-2 text-sm font-medium uppercase left-3 -top-2 bg-base-200 md:text-base text-neutral-content opacity-90">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            className={`w-full border rounded-sm border-neutral-content border-opacity-10 hover:border-opacity-20 transition-colors duration-200  bg-base-300 bg-opacity-65 text-base md:text-lg outline-none placeholder:opacity-40 py-4 lg:py-6 pl-7 pr-4 resize-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full border rounded-sm border-neutral-content border-opacity-10 hover:border-opacity-20 transition-colors duration-200 bg-base-300 bg-opacity-65 text-base md:text-lg outline-none placeholder:opacity-40 py-3.5 lg:py-5 pr-4 pl-7`}
            placeholder={placeholder}
          />
        )}
      </div>
    </motion.div>
  );
};

export default InputField;
