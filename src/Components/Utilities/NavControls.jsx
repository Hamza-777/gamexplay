import React from "react";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { VscHistory, VscHome } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../Providers/ThemeProvider";
import "../Styles/NavControls.css";

const NavControls = () => {
	const { theme } = useTheme();
	const location = useLocation().pathname;

	return (
		<section className='controls flex-center'>
			<Link to='/'>
				<VscHome
					className={`icon ${theme === "dark" ? "light" : "dark"}-color ${
						location === "/" ? "active-control" : ""
					}`}
				/>
			</Link>
			<Link to='/trending'>
				<IoIosTrendingUp
					className={`icon ${theme === "dark" ? "light" : "dark"}-color ${
						location === "/trending" ? "active-control" : ""
					}`}
				/>
			</Link>
			<Link to='/liked'>
				<AiOutlineLike
					className={`icon ${theme === "dark" ? "light" : "dark"}-color ${
						location === "/liked" ? "active-control" : ""
					}`}
				/>
			</Link>
			<Link to='/watchlater'>
				<MdOutlineWatchLater
					className={`icon ${theme === "dark" ? "light" : "dark"}-color ${
						location === "/watchlater" ? "active-control" : ""
					}`}
				/>
			</Link>
			<Link to='/history'>
				<VscHistory
					className={`icon ${theme === "dark" ? "light" : "dark"}-color ${
						location === "/history" ? "active-control" : ""
					}`}
				/>
			</Link>
			<Link to='/playlists'>
				<MdPlaylistAdd
					className={`icon ${theme === "dark" ? "light" : "dark"}-color ${
						location === "/playlists" ? "active-control" : ""
					}`}
				/>
			</Link>
		</section>
	);
};

export default NavControls;
