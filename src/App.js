import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Error from './components/Error';
import Header from './reuse/Header';
import Footer from './reuse/Footer';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <main className='App-header'>
        
        <Routes>
          <Route path="/" element={<Home showContact={false} />} />
          <Route path="/home" element={<Home showContact={false}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Home showContact={true} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      
      </main>
      <Footer/>

    </BrowserRouter>
      
  );
}

export default App;
