"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/movies/search?query=${searchText}`);
    }
  };

  return (
    <div className="text-white" id="header">
      <nav className="" id="navbar">
        <div>
          <Link className="" href="/" id="navsec1">
            <img src="/tvlogo.png" />
            <h3>MovieBox</h3>
          </Link>
        </div>
        <div className="hidden md:block" id="navsec2">
          <div
            className=" flex w-full flex-wrap items-stretch"
            onSubmit={(e) => handleSubmit(e)}
            role="search"
          >
            <input
              type="search"
              className="px-3 py-[0.25rem] w-[30rem] rounded border border-solid border-white bg-transparent text-white outline-none placeholder:text-white placeholder:text-xs"
              placeholder="What do you want to watch?"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <span
              className="absolute input-group-text  whitespace-nowrap rounded px-[28rem] py-2 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-4 w-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <div id="navsec3">
          <h4>Sign in</h4>
          <img src="/Menuhamburger.png" />
        </div>
      </nav>
      <div id="hero">
        <h2>
          John Wick 3 : <br /> Parabellum
        </h2>
        <div id="rating">
          <div id="imbd">
            <img src="/imdb.png"/>
            <p className="text-xs">86.0/100</p>
          </div>
          <div id="imbd">
            <img src="/tomatoe.png"/>
            <p  className="text-xs">97%</p>
          </div>
        </div>
        <p>
          John Wick is on the run after killing a member <br />
          of the international assassins guild, and with <br />
          a $14 million price tag on his head, he is the <br />
          target of hit men and women everywhere.
        </p>
        
        <Link className=""  href="/">
          <img src="/watchtrailer.png"  id="trailerbtn"/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
