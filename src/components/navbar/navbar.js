"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import Logout from "../Home/Logout";
import Menu from "./Menu";
import BadgePlus from "./BadgePlus";
import UserIcon from "./icons/UserIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import SearchBar from "./SearchBar";

// navbar_button style in global.css
const Navbar = () => {
  const { signedIn } = useUserContext();
  const { theme, setTheme } = useTheme();

  const handleTheme = () => setTheme("dark");
  const handleLight = () => setTheme("light");

  return (
    <nav className="fixed z-50 w-full">
      <ul className="flex items-center justify-between bg-secondary p-2">
        <div className="flex items-center space-x-4 lg:pl-4">
          <li className="hidden lg:flex">
            <Link href="/">
              <Button className="navbar_button">TF</Button>
            </Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="navbar_button px-6 lg:space-x-2">
                  <Menu />
                  <span className="hidden lg:flex">Options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {theme === "dark" ? (
                  <DropdownMenuItem onClick={handleLight}>
                    <Sun />
                    <span className="pl-2">Light Mode</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={handleTheme}>
                    <Moon />
                    <span className="pl-2">Dark Mode</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </div>
        <li className="ml-4 hidden w-fit lg:flex">
          <SearchBar />
        </li>
        <div className="flex w-full items-center justify-around lg:justify-between lg:space-x-4 lg:px-4">
          <li>
            <Link href="/user/campaigns/create">
              <Button className="navbar_button px-6 lg:space-x-2">
                <BadgePlus />
                <span className="hidden lg:flex">Create Campaign</span>
              </Button>
            </Link>
          </li>
          <li className="lg:pr-8">
            {signedIn.status ? (
              <Logout />
            ) : (
              <Link href="/auth/login">
                <Button className="navbar_button space-x-2 px-6">
                  <UserIcon />
                  <span>Login</span>
                </Button>
              </Link>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
