import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/employees' element={<Main />} />
      </Routes>

    </>
  );
}

export default App;
