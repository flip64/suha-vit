import { useEffect, useState } from "react";

const useTheme = () => {
	const [theme, setTheme] = useState("dark"); // Default to 'dark'
	const [viewMode, setViewMode] = useState("ltr");

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme") || "dark"; // Default to 'dark'
		const currentViewMode = localStorage.getItem("view") || "ltr";

		document.documentElement.setAttribute("theme-color", currentTheme);
		document.documentElement.setAttribute("view-mode", currentViewMode);

		setTheme(currentTheme);
		setViewMode(currentViewMode);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.setAttribute("theme-color", newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const toggleViewMode = () => {
		const newViewMode = viewMode === "ltr" ? "rtl" : "ltr";
		setViewMode(newViewMode);
		document.documentElement.setAttribute("view-mode", newViewMode);
		localStorage.setItem("view", newViewMode);
	};

	return { theme, toggleTheme, viewMode, toggleViewMode };
};

export default useTheme;
