import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Trending from './Components/Pages/Trending';
import Footer from './Components/Utilities/Footer';
import Navbar from './Components/Utilities/Navbar';
import Watchlater from './Components/Pages/Watchlater';
import History from './Components/Pages/History';
import Playlists from './Components/Pages/Playlists';
import VideoPage from './Components/Pages/VideoPage';
import LoginSignup from './Components/Pages/LoginSignup';
import PrivateRoute from './Components/Utilities/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:videoId' element={<VideoPage />} />
        <Route path='/trending' element={<Trending />} />
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
        <Route path='/login-signup' element={<LoginSignup />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
