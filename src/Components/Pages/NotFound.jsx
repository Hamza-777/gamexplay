import React from "react";
import { useTheme } from "../Providers/ThemeProvider";
import "../Styles/NotFound.css";

const NotFound = () => {
	const { theme } = useTheme();

	return (
		<main className='container'>
			<section
				className={`container empty-page empty-page-back-${
					theme === "dark" ? "2" : "d"
				} not-found flex-center flex-col`}
			>
				<p className='h1'>404</p>
				<p className='h3'>Looks like you are lost!!</p>
			</section>
		</main>
	);
};

export default NotFound;
