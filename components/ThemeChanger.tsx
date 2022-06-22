import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <label className="swap swap-rotate">
        <input type="checkbox" />
        {theme === "light" ? (
          <button
            className="btn btn-ghost"
            onClick={() => setTheme("business")}
          >
            <FaMoon />
          </button>
        ) : (
          <button className="btn btn-ghost" onClick={() => setTheme("light")}>
            <FaSun />
          </button>
        )}
      </label>
    </>
  );
};

export default ThemeChanger;
