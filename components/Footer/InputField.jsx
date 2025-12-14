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
      <label className="flex flex-col w-full px-0 py-1">
        <span className="mb-1 text-sm font-medium uppercase md:text-base text-neutral-content opacity-90">
          {label}
        </span>
        {isTextarea ? (
          <textarea
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            className={`w-full border rounded-sm border-base-content border-opacity-10 hover:border-opacity-25 transition-colors duration-200  bg-base-300 bg-opacity-65 text-base md:text-lg outline-none placeholder:opacity-40 py-2 px-3 resize-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full border rounded-sm border-base-content border-opacity-10 hover:border-opacity-25 transition-colors duration-200 bg-base-300 bg-opacity-65 text-base md:text-lg outline-none placeholder:opacity-40 py-2 px-3`}
            placeholder={placeholder}
          />
        )}
      </label>
    </motion.div>
  );
};

export default InputField;
