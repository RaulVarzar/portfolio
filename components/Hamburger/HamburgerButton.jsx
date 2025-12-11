"use client";

import "./hamburger.css";

import React from "react";

export const HamburgerButton = () => {
  return (
    <div className="absolute right-0 top-8 border-error">
      <div class="hamburger">
        <input class="checkbox" type="checkbox" />
        <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
          <path
            class="lineTop line"
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 11L44 11"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 24H43"
            class="lineMid line"
          ></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 37H43"
            class="lineBottom line"
          ></path>
        </svg>
      </div>
    </div>
  );
};
