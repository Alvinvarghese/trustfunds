"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import ThemeToggle from "./ThemeToggle";
import { useUserContext } from "@/context/UserContext";

// navbar_button style in global.css
const Navbar = () => {
  const { signedIn } = useUserContext();
  return (
    <nav className="fixed z-50 w-full">
      <ul className="flex items-center justify-between bg-lightblue p-2">
        <div className="flex items-center space-x-4 lg:pl-4">
          <li>
            <Link href="/">
              <Button className="navbar_button">TF</Button>
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Button className="navbar_button px-6">Options</Button>
          </li>
        </div>
        <li>
          <Input
            className="navbar_button pl-6 pr-12 text-left"
            type="text"
            placeholder="Search for campaigns..."
          />
        </li>
        <div className="flex items-center space-x-4 lg:pr-4">
          <li>
            <Link href="/user/campaigns/create">
              <Button className="navbar_button px-6">Create campaigns</Button>
            </Link>
          </li>
          <li>
            <Link href="/auth/login">
              {signedIn ? (
                <Button className="navbar_button px-6">Profile</Button>
              ) : (
                <Button className="navbar_button px-6">Login/Register</Button>
              )}
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
