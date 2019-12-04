import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {

	const [darkMode, setDarkMode] = useLocalStorage("isDarkModeEnabled");

	useEffect(() => {
		const body = document.querySelector("body");
		if(darkMode === true) {
			body.classList.add("dark-mode");
		} else {
			body.classList.remove("dark-mode");
		}
	}, [darkMode])

	// flag?
	return [darkMode, setDarkMode];
};

export default useDarkMode;