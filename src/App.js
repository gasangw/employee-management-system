import './App.css';
import Navigation from './components/nav/Navigation';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Employee from './components/employee/Employee';
import Contact from './components/contact/Contact';
import Create from './components/create/Create';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
