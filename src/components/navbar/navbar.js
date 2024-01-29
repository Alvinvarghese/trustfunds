import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between p-4 bg-gray-500">
        <div className="flex items-center space-x-8">
          <li>
            <Link href="/">
              <Button>TF</Button>
            </Link>
          </li>
          <li>
            <Button>Theme</Button>
          </li>
          <li>
            <Button>Options</Button>
          </li>
        </div>
        <li>
          <Input
            className="rounded-xl w-72 bg-rgba-darkgray"
            type="text"
            placeholder="Search for campaigns..."
          />
        </li>
        <div className="flex items-center space-x-8">
          <li>
            <Button>Create campaigns</Button>
          </li>
          <li>
            <Link href="/">
              <Button>Login/Register</Button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
