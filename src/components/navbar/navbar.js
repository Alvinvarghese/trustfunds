"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useUserContext } from "@/context/UserContext";
import Logout from "../Home/Logout";
import Menu from "./Menu";
import BadgePlus from "./BadgePlus";

// navbar_button style in global.css
const Navbar = () => {
  const { signedIn } = useUserContext();
  return (
    <nav className="fixed z-50 w-full">
      <ul className="flex items-center justify-between bg-lightblue p-2">
        <div className="flex items-center space-x-4 lg:pl-4">
          <li className="lg:flex hidden">
            <Link href="/">
              <Button className="navbar_button">TF</Button>
            </Link>
          </li>
          <li>
            <Button className="navbar_button px-6 lg:space-x-2"><Menu /><span className="hidden lg:flex">Options</span></Button>
          </li>
        </div>
        <li className="lg:flex hidden ml-4 w-fit">
          <Input
            className="navbar_button pl-6 pr-12 w-[300px] text-left"
            type="text"
            placeholder="Search for campaigns..."
          />
        </li>
        <div className="flex items-center lg:space-x-4 lg:px-4 w-full justify-around ">
          <li>
            <Link href="/user/campaigns/create">
              <Button className="navbar_button px-6 lg:space-x-2"><BadgePlus /><span className="hidden lg:flex">Create Campaign</span></Button>
            </Link>
          </li>
          <li>
            {signedIn.status ? (
              <Logout />
            ) : (
              <Link href="/auth/login">
                <Button className="navbar_button px-6">Login/Register</Button>
              </Link>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
