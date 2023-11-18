import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-2 mb-2">
      <p className="text-center"> &copy; {currentYear} All rights reserved.</p>
    </div>
  );
}
