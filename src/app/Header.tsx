"use client";

import { ChevronLeft, Moon, Sun, Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isThemeSetToDark() {
  if (typeof window === 'undefined') return;

  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark());

  useEffect(() => {
    if (isThemeSetToDark()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          className={`group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ${isHome ? "ring-0" : "ring-1"} ring-sky-500 ring-opacity-0 transition-all max-sm:text-center sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0`}
          href="/"
          aria-label="Back to home"
        >
          <div
            className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}
          >
            <ChevronLeft strokeWidth={1.4} />
          </div>
          <div className="flex flex-col max-sm:items-center">
            Gabriel Ferreira
            <span className="text-zinc-500 dark:text-zinc-400">
              Aspiring Developer
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleTheme()}
            className="group relative flex items-center"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Moon
                strokeWidth={1.4}
                className="size-5 fill-gray-700 transition-all"
              />
            ) : (
              <Sun
                strokeWidth={1.4}
                className="size-5 fill-yellow-300 transition-all sm:hover:rotate-45"
              />
            )}
          </button>
          <Link
            className="group relative rounded px-2 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
            href="/projects"
            aria-label="View projects"
            aria-current={path === "/projects" ? "page" : undefined}
          >
            /projects
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>
          <Link
            className="group relative rounded px-2 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
            href="/about"
            aria-label="View about page"
            aria-current={path === "/about" ? "page" : undefined}
          >
            /about
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-aria-[current=page]:block dark:fill-sky-600 dark:text-transparent"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
