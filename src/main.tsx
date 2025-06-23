import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './css/index.css';
import './css/Header.css';
import Home from './pages/Home.tsx';
import Header from './components/Header.tsx';
import Music from './pages/Music.tsx';
import VideoProgress from './pages/VideoProgress.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
        <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/videoprogress' element={<VideoProgress />} />
        </Routes>
        </div>
    </BrowserRouter>
  </StrictMode>,
)
