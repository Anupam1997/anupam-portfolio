import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./themeButton.module.scss";
import { Switch } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className={styles.themeButton}>
      <Switch
        sx={{
          ".MuiSwitch-track": {
            height: "18px",
            borderRadius: "30px",
          },
        }}
        checkedIcon={<LightMode sx={{ color: "gold" }} />}
        icon={<DarkMode sx={{ color: "#F6F1D5" }} />}
        checked={resolvedTheme === "light"}
        color="default"
        onChange={(e, checked) =>
          setTheme(resolvedTheme === "dark" ? "light" : "dark")
        }
      />
    </div>
  );
};

export default ThemeButton;
