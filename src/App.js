import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Articles from './pages/Articles';
import Navigation from './components/layout/Navigation';

// Головний компонент додатку
function App() {
  return (
    <Router>
      <header className="header">
          <h1><Link to="/">Мій Блог про Подорожі</Link></h1>
      </header>
      <Navigation />
      <main className="content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/articles" element={<Articles />} />
          </Routes>
      </main>
      <footer className="footer">
          <p>© 2025 Мій Блог про Подорожі</p>
      </footer>
    </Router>
  );
}

export default App;
