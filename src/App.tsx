import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.css'
import MusicPlayer from './components/MusicPlayer';
import Home from './components/Home';
import SearchSong from './components/SearchSong';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import CoverImg from './components/CoverImg';
import SongProvider from './Context/SongInfo';


function App() {
  return (

          <BrowserRouter>
          <SongProvider>
            {/* <h1 className="text-success">Hello</h1> */}
            {/* <Background> */}
            {/* <Slider /> */}
            {/* </Background> */}
            <SideBar />
            <CoverImg />
            <div className="" style={{ marginLeft: "200px", marginBottom: "200px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchSong />} />
              </Routes>
            </div>
            <MusicPlayer />
            </SongProvider>
          </BrowserRouter>
  );
}

export default App;
