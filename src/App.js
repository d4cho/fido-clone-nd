import './App.css';
import PlansPage from './Components/Views/PlansPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
          <Routes>
              <Route path='/Plans' element={<PlansPage />} />
          </Routes>
          <Routes>
              <Route path='/' element={<h1>Fido</h1>} />
          </Routes>
      </>
  );
}

export default App;
