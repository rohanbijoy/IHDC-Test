
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Form from './components/Form';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/unlock' element={<Form/>}></Route>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
