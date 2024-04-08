"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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

// navbar_button style in global.css
const Navbar = () => {
  const { signedIn } = useUserContext();
  const { setTheme } = useTheme();

  const handleTheme = () => setTheme("dark");
  return (
    <nav className="fixed z-50 w-full">
      <ul className="flex items-center justify-between bg-lightblue p-2">
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
                <DropdownMenuItem onClick={handleTheme}>
                  Dark Mode
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </div>
        <li className="ml-4 hidden w-fit lg:flex">
          <Input
            className="navbar_button w-[300px] pl-6 pr-12 text-left"
            type="text"
            placeholder="Search for campaigns..."
          />
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
