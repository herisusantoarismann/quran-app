import React from "react";

export const Footer = () => {
  return (
    <div className="text-center text-xs md:text-sm xl:text-base font-bold text-slate-400 fixed bottom-12 lg:bottom-4 xl:bottom-8 left-2/4 -translate-x-2/4">
      &copy; Copyright {new Date().getFullYear()}, All Right Reversed.
    </div>
  );
};
