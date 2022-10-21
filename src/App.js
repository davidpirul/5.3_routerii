import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/pokemon/:name' element={<Pokemon />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
