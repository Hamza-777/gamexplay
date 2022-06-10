import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Trending from "./Components/Pages/Trending";
import Footer from "./Components/Utilities/Footer";
import Navbar from "./Components/Utilities/Navbar";
import Watchlater from "./Components/Pages/Watchlater";
import History from "./Components/Pages/History";
import Playlists from "./Components/Pages/Playlists";
import VideoPage from "./Components/Pages/VideoPage";
import LoginSignup from "./Components/Pages/LoginSignup";
import PrivateRoute from "./Components/Utilities/PrivateRoute";
import Liked from "./Components/Pages/Liked";
import Modal from "./Components/Utilities/Modal";
import Profile from "./Components/Pages/Profile";
import { useModal } from "./Components/Providers/ModalProvider";
import { useTheme } from "./Components/Providers/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Playlist from "./Components/Pages/Playlist";
import NotFound from "./Components/Pages/NotFound";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const { modalOpen } = useModal();
	const { theme } = useTheme();

	useEffect(() => {
		document.body.style.backgroundColor = `var(--${theme}-color)`;
		document.body.style.color = `var(--${
			theme === "dark" ? "light" : "dark"
		}-color)`;
	}, [theme]);

	const getSearchQuery = (recievedQuery) => {
		setSearchQuery(recievedQuery);
	};

	return (
		<Router>
			<Navbar getSearchQuery={getSearchQuery} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/video/:videoId' element={<VideoPage />} />
				<Route
					path='/trending'
					element={<Trending searchQuery={searchQuery} />}
				/>
				<Route
					path='/liked'
					element={
						<PrivateRoute>
							<Liked />
						</PrivateRoute>
					}
				/>
				<Route
					path='/watchlater'
					element={
						<PrivateRoute>
							<Watchlater />
						</PrivateRoute>
					}
				/>
				<Route
					path='/history'
					element={
						<PrivateRoute>
							<History />
						</PrivateRoute>
					}
				/>
				<Route
					path='/playlists'
					element={
						<PrivateRoute>
							<Playlists />
						</PrivateRoute>
					}
				/>
				<Route
					path='/playlists/:playlistId'
					element={
						<PrivateRoute>
							<Playlist />
						</PrivateRoute>
					}
				/>
				<Route
					path='/profile'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route path='/login-signup' element={<LoginSignup />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
			<ToastContainer />
			{modalOpen.status && <Modal />}
		</Router>
	);
}

export default App;
