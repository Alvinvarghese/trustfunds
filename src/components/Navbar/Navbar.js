"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import SearchBar from "./components/SearchBar";
import { BadgePlus, DashboardIcon, Menu, Moon, Sun, UserIcon } from "../Icons";
import { useRouter } from "next/navigation";
import Logout from "./components/Logout";

// navbar_button style in global.css
const Navbar = () => {
  const { signedIn } = useUserContext();
  const { theme, setTheme } = useTheme();
  const handleTheme = () => setTheme("dark");
  const handleLight = () => setTheme("light");

  const router = useRouter();
  const gotoProfile = () => router.push("/user/profile");
  const gotoUserCampaigns = () => router.push("/user/campaigns");

  const NavItem = (props) => {
    return (
      <DropdownMenuItem onClick={props.onClick}>
        <props.Icon />
        <span className="pl-2">{props.text}</span>
      </DropdownMenuItem>
    );
  };

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
                  <NavItem Icon={Sun} onClick={handleLight} text="Light Mode" />
                ) : (
                  <NavItem Icon={Moon} onClick={handleTheme} text="Dark Mode" />
                )}
                {signedIn.status && (
                  <>
                    <NavItem
                      Icon={DashboardIcon}
                      onClick={gotoUserCampaigns}
                      text="Dashboard"
                    />
                    <NavItem
                      Icon={UserIcon}
                      onClick={gotoProfile}
                      text="Profile"
                    />
                  </>
                )}
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
                  Hi {signedIn.data.name},
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
