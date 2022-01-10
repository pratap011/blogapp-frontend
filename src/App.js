import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Blogs from './Components/Pages/Blogs';
import ScrollToTop from './ScrollToTop';
import Polls from './Components/Pages/Polls';
import Favourites from './Components/Pages/Favourites';
import AddBlog from './Components/AddBlog';
import WriteBlog from './Components/Pages/WriteBlog';
import RegisterPage from './Components/Pages/RegisterPage';
import { React, useEffect } from 'react'
import Login from './Components/Pages/Login';

function App() {

  console.log(window.location.pathname);

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          {window.location.pathname != '/register' && window.location.pathname != '/login' && <Navbar />}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/polls" element={<Polls />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/writeblog" element={<WriteBlog />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
