import './App.css';
import Navigation from './components/nav/Navigation';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Employee from './components/employee/Employee';
import Contact from './components/contact/Contact';
import OneEmployee from './components/employee/OneEmployee';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/employee/:id' element={<OneEmployee />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
