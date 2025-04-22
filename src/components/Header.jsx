import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="navbar shadow-lg bg-base-100 sticky top-0 z-10">
      <div className="flex-1 px-4">
        <span className="text-2xl font-extrabold">Guestbook PWA</span>
      </div>
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => setDark((d) => !d)}
        aria-label="toggle theme"
      >
        {dark ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-600" />
        )}
      </button>
    </div>
  );
}
