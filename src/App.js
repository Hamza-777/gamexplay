import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Trending from './Components/Pages/Trending';
import Footer from './Components/Utilities/Footer';
import Navbar from './Components/Utilities/Navbar';
import Watchlater from './Components/Pages/Watchlater';
import History from './Components/Pages/History';
import Playlists from './Components/Pages/Playlists';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/watchlater' element={<Watchlater />} />
        <Route path='/history' element={<History />} />
        <Route path='/playlists' element={<Playlists />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
