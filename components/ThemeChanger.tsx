import { useTheme } from "next-themes";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <button className="btn" onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button className="btn" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
      sa
    </div>
  );
};

export default ThemeChanger;
