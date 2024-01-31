"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <Button className="navbar_button" onClick={toggleTheme}>
      {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </Button>
  );
};

export default ThemeToggle;
