"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/logo.png";
import PlanCount from "./countS&T/PlanCount";
import SavedCount from "./countS&T/SavedCount";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="p-3 sticky z-50 top-0 bg-black">
      <nav className="flex justify-between container mx-auto">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href={"/"}
                className={
                  pathname === "/"
                    ? "bg-[#c2f800] py-1 px-3 rounded-md text-black"
                    : ""
                }
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href={"/myplan"}
                className={
                  pathname === "/myplan"
                    ? "bg-[#c2f800] py-1 px-3  rounded-md text-black"
                    : ""
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Image src={Logo} alt="navlogo"></Image>
          <Link href={"/"}>
            <p className="text-white font-bold text-xl ">FITLOG</p>
          </Link>
        </div>
        <div className="hidden lg:flex gap-5 text-white">
          <Link
            href={"/"}
            className={
              pathname === "/"
                ? "bg-[#c2f800] py-1 px-3 rounded-md text-black"
                : ""
            }
          >
            Workouts
          </Link>
          <Link
            href={"/myplan"}
            className={
              pathname === "/myplan"
                ? "bg-[#c2f800] py-1 px-3  rounded-md text-black"
                : ""
            }
          >
            My Plan
          </Link>
        </div>
        <div className="flex gap-3 text-white">
          <div className="flex gap-1">
            <Link href={"/myplan"}>Plan</Link>
            <PlanCount></PlanCount>
          </div>
          <div className="flex gap-1">
            <Link href={"/myplan"}>Saved</Link>
            <SavedCount></SavedCount>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;