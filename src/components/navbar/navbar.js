import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between bg-lightblue p-2">
        <div className="flex items-center space-x-8">
          <li>
            <Link href="/">
              <Button className="rounded-3xl bg-darkgray">TF</Button>
            </Link>
          </li>
          <li>
            <Button className="rounded-3xl bg-darkgray">Theme</Button>
          </li>
          <li>
            <Button className="rounded-3xl bg-darkgray">Options</Button>
          </li>
        </div>
        <li>
          <Input
            className="w-72 rounded-3xl bg-darkgray text-white placeholder-white"
            type="text"
            placeholder="Search for campaigns..."
          />
        </li>
        <div className="flex items-center space-x-8">
          <li>
            <Button className="rounded-3xl bg-darkgray">
              Create campaigns
            </Button>
          </li>
          <li>
            <Link href="/">
              <Button className="rounded-3xl bg-darkgray">
                Login/Register
              </Button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
