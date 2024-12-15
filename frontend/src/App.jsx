import "./App.css"
import Home from './pages/Home' //main page for the app... all the things will be in it
import About from './pages/About'
import Calendar from './pages/calendar'
import Profile from './pages/profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
