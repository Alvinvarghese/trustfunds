"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import Logout from "../Home/Logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import SearchBar from "./components/SearchBar";
import { BadgePlus, Menu, Moon, Sun, UserIcon } from "../Icons";
import { useRouter } from "next/navigation";

// navbar_button style in global.css
const Navbar = () => {
  const { signedIn } = useUserContext();
  const { theme, setTheme } = useTheme();
  const handleTheme = () => setTheme("dark");
  const handleLight = () => setTheme("light");

  const router = useRouter();
  const gotoProfile = () => router.push("/user/profile");

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
                {signedIn.status && (
                  <DropdownMenuItem onClick={gotoProfile}>
                    <UserIcon />
                    <span className="hidden lg:flex">Profile</span>
                  </DropdownMenuItem>
                )}
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
              <div className="flex flex-row items-center justify-center gap-3">
                <span className="hidden select-none lg:block">
                  Welcome {signedIn.data.name},
                </span>
                <Logout />
              </div>
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
