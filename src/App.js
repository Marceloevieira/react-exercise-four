import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes, Switch } from 'react-router-dom';
import { Playlist } from './views/Playlist';
import { Home } from './views/Home';
import { Layout } from './views/Layout';
import { NotFound } from './views/NotFound';
import { MovieList } from './views/MoviesList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="movie" element={<MovieList />} />
        <Route path="home" element={<Home />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
