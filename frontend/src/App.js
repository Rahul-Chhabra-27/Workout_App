import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';

const App = () =>  {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
